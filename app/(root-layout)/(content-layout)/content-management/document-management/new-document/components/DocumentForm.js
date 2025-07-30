"use client";
import { Button } from "@/components/common/button";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import { useEffect, useState } from "react";

import ContentGroupPicker from "@/app/(root-layout)/(main)/design/components/ContentGroupPicker";
import LmsOrganizationMultipleSelect from "@/components/common/form/organizations/LmsOrganizationMultipleSelect";
import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";

import DocumentUploadComponent from "@/app/(root-layout)/(content-layout)/content-management/document-management/new-document/components/DocumentUploadComponent";
import { ErrorMessage, Field } from "@/components/common/fieldset";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardTextEditor from "@/components/common/form/LmsStandardTextEditor";
import { useContentContext } from "@/store/ContentContext";
import {
  createNewContent,
  updateContent,
} from "@/utils/api/videoContentRequest";
import {
  formatContentEditPermissionsData,
  roleDataFormatForReuseOrganizationComponent,
} from "@/utils/helpers/CommonHelper";
import { formatErrors } from "@/utils/helpers/ErrorHeloper";
import { Menu } from "lucide-react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

const DocumentForm = ({ roles, document = null }) => {
  const allRoles = roleDataFormatForReuseOrganizationComponent(roles);
  const { chapterGroup } = useContentContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    files: [],
    groupId: "",
    subGroupId: "",
    subSubGroupId: "",
    permission: "PUBLIC",
    customPermissions: [],
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formClean, setFormClear] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [selectedGroup, setSelectedGroup] = useState(null);

  const handleOnChnage = (column, value) => {
    setFormClear(false);
    setForm((prev) => ({ ...prev, [column]: value }));
  };

  const receiveOrganizationFilter = (data) => {
    let permissions = [];
    data.permissions.forEach((item) => {
      permissions.push({
        memberId: item.memberId,
        memberRoleId: item.parentId,
      });
    });
    setFormClear(false);
    setForm((prev) => ({ ...prev, customPermissions: permissions }));
  };

  const [selectedOrganizations, setSelectedOrganizations] = useState(false);

  const buttonLabels = {
    selectAllChild: "모두 선택 취소",
    deselectAllChild: "전체 선택",
    firstStep: "관리자 유형",
    secondStep: "관리자",
    reset: "초기화",
  };

  const submitForm = async () => {
    setErrors(null);
    setLoading(true);
    try {
      let formData = { ...form };
      if (selectedGroup) {
        if (selectedGroup.parentId && selectedGroup.secondId) {
          formData.groupId = selectedGroup.parentId;
          formData.subGroupId = selectedGroup.secondId;
          formData.subSubGroupId = selectedGroup.id;
        } else if (selectedGroup.parentId) {
          formData.groupId = selectedGroup.parentId;
          formData.subGroupId = selectedGroup.id;
          formData.subSubGroupId = "";
        } else {
          formData.groupId = selectedGroup.id;
          formData.subGroupId = "";
          formData.subSubGroupId = "";
        }
      }

      if (form.permission !== "CUSTOM") {
        formData.customPermissions = [];
      }
      let response = null;

      if (document) {
        formData.files = form.files || [];

        response = await updateContent(
          formData,
          `/document/content/${document.id}`
        );
      } else {
        response = await createNewContent(formData, "/document/content");
      }

      if (response.status === "success") {
        if (!document) {
          LmsToastMessage('성공.', 'Data created successfully', 'success')
          setForm({
            title: "",
            description: "",
            files: [],
            groupId: "",
            subGroupId: "",
            subSubGroupId: "",
            permission: "PUBLIC",
            customPermissions: [],
          });
          setFormClear(true);
          setSelectedGroup(null);
        } else {
          LmsToastMessage('업데이트.', 'Data updated successfully', 'success')
        }
      } else if (response.status === "error") {
        setErrors(formatErrors(response.errors));
      } else {
        LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
      }
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (chapterGroup && document) {
      if (document.customPermissions) {
        setSelectedOrganizations(
          formatContentEditPermissionsData(document.customPermissions)
        );
      }

      let role = chapterGroup.find((item) => item.id === document.groupId);
      if (role && document.subGroupId && role.subGroups) {
        let subList = role.subGroups.find(
          (item) => item.id === document.subGroupId
        );
        if (subList && document.subSubGroupId && subList.subGroups) {
          let third = subList.subGroups.find(
            (item) => item.id === document.subSubGroupId
          );
          setSelectedGroup({
            ...third,
            parentId: role.id,
            secondId: subList.id,
          });
        } else {
          setSelectedGroup({ ...subList, parentId: role.id });
        }
      } else {
        setSelectedGroup(role);
      }
      setForm((prev) => ({
        ...prev,
        title: document.title,
        description: document.description,
        files: prev.files.length ? prev.files : document.file || [],
        groupId: document.groupId,
        subGroupId: document.subGroupId,
        subSubGroupId: document.subSubGroupId,
        permission: document.permission,
        customPermissions: document.customPermissions,
      }));
    }
  }, [document]);

  const setFileUploadResponse = (data) => {
    setForm((prev) => ({ ...prev, files: data }));
    setFormClear(false);
  };

  return (
    <>
      <div className="flex flex-col member-send-information">
        <div className="form">
          <FieldWrapper label="제목" singleElement={true}>
            <LmsStandardInputField
              placeholder="제목을 입력해주세요."
              error={errors?.title}
              name="title"
              fieldClass={"w-full"}
              value={form.title}
              changeDataHandler={handleOnChnage}
              singleElement={true}
            />
          </FieldWrapper>
          <FieldWrapper label="그룹 선택">
            <div className={`  flex-[0_1_auto]`}>
              <Field className={`!pb-0 w-[230px]`}>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className={
                    "flex justify-between bg-white h-[48px] relative py-[3px] px-[15px] border cursor-pointer border-borderColor "
                  }
                >
                  <span className={"pt-[10px] pl-0 "}>
                    {selectedGroup ? selectedGroup.name : "그룹 선택"}
                  </span>
                  {!isOpen ? (
                    <span className={"pt-[12px] pr-0 "}>
                      <SlArrowDown />
                    </span>
                  ) : (
                    <span className={"pt-[12px] pr-0 "}>
                      <SlArrowUp />
                    </span>
                  )}
                </div>
                {errors?.groupId && (
                  <ErrorMessage className="!mt-0">
                    {errors.groupId}
                  </ErrorMessage>
                )}
              </Field>
            </div>
          </FieldWrapper>
          <FieldWrapper singleElement={true} label={"내용"}>
            <LmsStandardTextEditor
              placeholder="내용을 입력하세요."
              error={errors?.description}
              name="description"
              fieldClass={"w-full"}
              value={form.description}
              changeDataHandler={handleOnChnage}
              singleElement={true}
            />
          </FieldWrapper>

          <DocumentUploadComponent
            formClean={formClean}
            errors={errors}
            documentFiles={document ? document.file : null}
            setFileUploadResponse={setFileUploadResponse}
            form={form}
          />

          <FieldWrapper
            label="보기 권한"
            className={` ${
              form.permission !== "CUSTOM"
                ? "border-b border-commonBorderColor"
                : ""
            }`}
          >
            <LmsStandardRadioFieldGroup
              value={form.permission}
              changeDataHandler={handleOnChnage}
              options={[
                { id: "PUBLIC", name: "전체공개" },
                { id: "PRIVATE", name: "나만보기" },
                {
                  id: "CUSTOM",
                  name: "개별설정",
                },
              ]}
              name="permission"
            />
          </FieldWrapper>

          {form.permission === "CUSTOM" && allRoles && (
            <FieldWrapper
              label="개별설정"
              singleElement={true}
              className={"border-b border-commonBorderColor"}
            >
              <LmsOrganizationMultipleSelect
                groups={allRoles}
                noBorderPadding={true}
                secondStep={"관리자"}
                searchWidth={"w-[530px]"}
                useSearch={true}
                buttonLabels={buttonLabels}
                selectedGroups={selectedOrganizations}
                callBack={receiveOrganizationFilter}
              />
            </FieldWrapper>
          )}

          <div className="flex items-center justify-between mt-10 mb-6">
            <div className="member-collapse-list">
              <Link href={"/content-management/document-management"}>
                <Button color="transparent" className="w-full text-center">
                  <Menu /> <span className="text-19px">목록</span>
                </Button>
              </Link>
            </div>

            <div className="flex items-end justify-end">
              <Button
                color="primary"
                loading={loading}
                disable={loading}
                onClick={submitForm}
              >
                {document ? "수정하기" : "등록하기"}
              </Button>
            </div>
          </div>
          <ContentGroupPicker
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedGroup={selectedGroup}
            callConfirmFunction={setSelectedGroup}
          />
        </div>
      </div>
    </>
  );
};

export default DocumentForm;
