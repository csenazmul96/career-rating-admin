"use client";
import { Button } from "@/components/common/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/common/dialog";
import { ErrorMessage, Field } from "@/components/common/fieldset";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsOrganizationSingleSelect from "@/components/common/form/organizations/LmsOrganizationSingleSelect";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import { membersBulkUpload } from "@/utils/api/memberManagementRequest";
import { formatErrors } from "@/utils/helpers/ErrorHeloper";
import { Download, ExternalLink, FilePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { toast } from "react-toastify";
import LmsStandardSelectInputV2Backup from "@/components/common/form/LmsStandardSelectInputV2Backup";

export default function BulkUploadForm({ roles, organizations }) {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showOrganization, setShowOrganization] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    file: "",
    organizationGroupId: "",
    memberRoleId: "",
    memberRoleName: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setForm((old) => ({ ...old, file: file }));
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const onDrop = useCallback((acceptedFiles) => {
    setForm((old) => ({ ...old, file: acceptedFiles[0] }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"], // Only allow CSV files
    },
    multiple: false, // Allow only one file at a time
  });

  const handleOnChnage = (column, value) => {
    let role = roles.find((item) => item.id === value);
    setForm((prev) => ({
      ...prev,
      memberRoleId: role ? role.id : "",
      memberRoleName: role ? role.name : "",
    }));
  };
  const [organization, setOrganization] = useState(null);

  function checkOrganization(data) {
    setOrganization(data);
    setForm((old) => ({ ...old, organizationGroupId: data.id }));
    setShowOrganization(false);
  }

  const changeDataHandler = () => {
    setShowOrganization(!showOrganization);
  };

  const submitForm = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", form.file ? form.file : "");
    formData.append("memberRoleId", form.memberRoleId);
    formData.append("memberRoleName", form.memberRoleName);
    formData.append("organizationGroupId", form.organizationGroupId);
    try {
      const response = await membersBulkUpload(formData);

      if (response.status !== "success") {
        const errors = formatErrors(response.errors);
        if (response.message) {
          setErrorMessage(response.message);
          setIsOpen(true);
        } else {
          setForm({
            file: "",
            organizationGroupId: "",
            memberRoleId: "",
            memberRoleName: "",
          })
          toast.error("문제가 발생했습니다.");
        }
        setErrors(errors);
      } else {
        setErrorMessage("");
        setErrors(null);
        toast.success("Upload has been complete successfully");

        setForm({
          file: "",
          organizationGroupId: "",
          memberRoleId: "",
          memberRoleName: "",
        });
      }
    } catch (e) {
      toast.success("문제가 발생했습니다.");
    }
    setLoading(false);
  };

  return (
      <>
        <div className="flex flex-col member-send-information">
          <div className="form">
            <FieldWrapper
                label="등록 파일 양식"
                className={`border-b border-commonBorderColor`}
                singleElement={true}
            >
              <div className="download-item flex items-center justify-between w-full">
                <div className="left flex items-center gap-2">
                <span>
                  <img src="/images/membership/Extensions.png" alt="" />
                </span>
                  <span>UsersUpload.csv</span>
                </div>
                <div className="right flex gap-4">
                  <span className="text-textSubColor">4.0KB</span>
                  <Link href={"/UsersUpload.csv"} download={true}>
                  <span>
                    {/*<img src="/images/membership/download.png" alt=""/>*/}
                    <Download size={24} className={`text-textSubColor`} />
                  </span>
                  </Link>
                  <span>
                  {/*<img src="/images/membership/open_in_new.png" alt=""/>*/}
                    <ExternalLink size={24} className={`text-textSubColor`} />
                </span>
                </div>
              </div>
            </FieldWrapper>

            <h3 className={`text-[19px] text-[#000] font-bold pt-7`}>
              2. 파일 작성
            </h3>
            <p className={`text-[#555555] py-5 `}>
              다운 받은 등록 파일을 아래 안내대로 작성한 후 파일을 첨부합니다.
            </p>

            <div className="img pt-2 pb-8">
              <img src="/images/membership/chart.png" alt="" />
            </div>

            <FieldWrapper label="필수 입력 항목" singleElement={true}>
              <div className="flex items-centerw-full">
                <p className={`text-baseNormal`}>
                  {
                    "사용자그룹은 해당 그룹 선택 후 '선택그룹경로'를 클릭하여 복사된 경로 데이터를 입력합니다."
                  }
                </p>
              </div>
            </FieldWrapper>
            <FieldWrapper label="입력 가이드" singleElement={true}>
              <div className="flex items-centerw-full">
                <ul className="flex flex-col gap-1">
                  <li>- 생년월일 : 예)19771227</li>
                  <li>
                    -{" "}
                    {
                      "사용자그룹은 해당 그룹 선택 후 '선택그룹경로'를 클릭하여 복사된 경로 데이터를 입력합니다."
                    }
                  </li>
                  <li>
                    - 회원 아이디는 영문, 숫자, .(점), @, -, _만 사용 가능합니다.
                  </li>
                </ul>
              </div>
            </FieldWrapper>

            <FieldWrapper label="등록 파일 양식" singleElement={true}>
              <div className="download-item flex items-center justify-between w-full">
                <div className="flex items-center justify-between border border-dotted border-[#D8D8D8] p-4 w-full">
                  <div
                      className="flex items-center text-textSubColor py-5 vvvvvvv"
                      {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <span className="pr-2">
                    {/*<img src="/images/membership/note-add-gray.png" alt=""/>*/}
                      <FilePlus size={32} className={`text-borderColor`} />
                  </span>
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>{`${
                            form.file
                                ? form.file.name
                                : "첨부할 파일을 여기에 끌어다 놓거나 파일 선택 버튼을 직접 선택해주세요."
                        }`}</p>
                    )}
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-start space-y-3">
                      <Button color="primary" type="button" onClick={handleClick}>
                      <span>
                        {/*<img src="/images/membership/note_add.png" alt=""/>*/}
                        <FilePlus size={20} />
                      </span>{" "}
                        파일선택
                      </Button>

                      <input
                          type="file"
                          ref={fileInputRef}
                          accept=".csv,text/csv"
                          onChange={handleFileChange}
                          className="hidden"
                      />
                      {fileName && (
                          <p className="text-sm text-gray-700">
                            <strong>Selected File:</strong> {fileName}
                          </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FieldWrapper>

            <div className="custom-common-row">
              <div className="custom-common-left-col">
                    <span className="common-label-style">
                        조직그룹

                    </span>
              </div>
              <div className="custom-common-right-col">
                <Field className={`!pb-0 w-[154px]`}>
                  <div onClick={changeDataHandler}
                       className={`flex justify-between bg-white h-[48px]  py-[3px] px-[15px] border cursor-pointer relative z-20 border-borderColor ${ showOrganization ? "border-placeholderColor border-b border-b-white" : "border-b border-borderColor" }`}>
                                    <span className={'pt-[10px] pl-0 '}>
                                        {organization ? organization.name : '그룹 선택'}
                                    </span>
                    {!showOrganization ?
                        <span className={'pt-[12px] pr-0 '}><SlArrowDown/></span>
                        :
                        <span className={'pt-[12px] pr-0 '}><SlArrowUp /></span>
                    }
                  </div>
                  {errors?.organizationGroupId && <ErrorMessage className="!mt-0">{errors.organizationGroupId}</ErrorMessage>}
                </Field>
                {showOrganization &&
                    <LmsOrganizationSingleSelect organizations={organizations} callBack={checkOrganization}/>
                }
              </div>
            </div>

            {/*<FieldWrapper*/}
            {/*    label="관리자 유형"*/}
            {/*    className={`border-b border-commonBorderColor`}*/}
            {/*    singleElement={true}*/}
            {/*>*/}
            {/*  <LmsStandardSelectInput*/}
            {/*      fieldClass={`w-[154px]`}*/}
            {/*      name={`memberRoleId`}*/}
            {/*      initialText={"관리자 선택"}*/}
            {/*      value={form.memberRoleId}*/}
            {/*      options={roles}*/}
            {/*      errors={errors?.memberRoleId}*/}
            {/*      changeDataHandler={handleOnChnage}*/}
            {/*  />*/}
            {/*</FieldWrapper>*/}

            <FieldWrapper
                label="관리자 유형"
                className={`border-b border-commonBorderColor`}
                singleElement={true}
            >
              <LmsStandardSelectInputV2
                  classes={`w-[154px]`}
                  buttonSize={'w-full'}
                  fieldClass={"h-[190px] w-max"}
                  name={`memberRoleId`}
                  initialText={"관리자 선택"}
                  value={form.memberRoleId}
                  options={roles}
                  error={errors?.memberRoleId}
                  changeDataHandler={handleOnChnage}
              />
            </FieldWrapper>

            <div className="flex items-center justify-between pt-10">
              <div className="left-col flex items-center">
                <div className="member-collapse-list ">
                  <Link
                      href={
                        "/members-and-message-management/membership-management/total-member-management"
                      }
                  >
                    <Button
                        color="transparent"
                        className="w-full mb-2 text-center"
                    >
                      {" "}
                      <span>
                      {" "}
                        <Image src={menuCollapse} alt="menu collapse" />{" "}
                    </span>{" "}
                      <span className="text-19px">목록</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="right-col flex gap-4 justify-end items-end flex-1 px-4 pl-[20px] pr-0">
                <Button
                    color="primary"
                    loading={loading}
                    disable={loading}
                    onClick={submitForm}
                >
                  등록
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={isOpen} onClose={setIsOpen}>
          <DialogTitle>
            <span>오류</span>
          </DialogTitle>
          <DialogBody>{errorMessage}</DialogBody>
          <DialogActions>
            <Button
                type="button"
                color="primaryMedium"
                onClick={() => setIsOpen(false)}
            >
              {" "}
              Ok{" "}
            </Button>
          </DialogActions>
        </Dialog>
      </>
  );
}
