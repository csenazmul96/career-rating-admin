"use client";
import { Button } from "@/components/common/button";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import { useEffect, useState } from "react";

import VideoFormDropzonWrapper from "@/app/(root-layout)/(content-layout)/content-management/video-management/new-video/components/VideoFormDropzonWrapper";
import ContentGroupPicker from "@/app/(root-layout)/(main)/design/components/ContentGroupPicker";
import LmsOrganizationMultipleSelect from "@/components/common/form/organizations/LmsOrganizationMultipleSelect";
import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";

import { ErrorMessage, Field } from "@/components/common/fieldset";
import { roleDataFormatForReuseOrganizationComponent } from "@/utils/helpers/CommonHelper";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import { LmsToastMessage } from "@/components/common/LmsToastMessage";
import { createNewContent } from "@/utils/api/videoContentRequest";
import { formatErrors } from "@/utils/helpers/ErrorHeloper";

const VideoForm = ({ roles }) => {
  const [allRoles, setAllRoles] = useState([]);
  const [form, setForm] = useState({
    file: [],
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

  const [selectedOrganizations, setSelectedOrganizations] = useState(null);
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
        formData.groupId =
          selectedGroup.parentId && selectedGroup.id
            ? selectedGroup.parentId
            : selectedGroup.id;
        formData.subGroupId =
          selectedGroup.parentId && selectedGroup.secondId
            ? selectedGroup.secondId
            : "";
        formData.subSubGroupId =
          selectedGroup.parentId && selectedGroup.secondId
            ? selectedGroup.id
            : "";
      }

      if (form.permission !== "CUSTOM") {
        formData.customPermissions = [];
      }

      const response = await createNewContent(formData, "/video/content");

      if (response.status === "Success") {
        LmsToastMessage("성공.", "Video created successfully", "success");
        setForm({
          file: [],
          groupId: "",
          subGroupId: "",
          subSubGroupId: "",
          permission: "PUBLIC",
          customPermissions: [],
        });
        setFormClear(true);
        setSelectedGroup(null);
      } else if (response.status === "error") {
        setErrors(formatErrors(response.errors));
      } else {
        LmsToastMessage("오류.", "문제가 발생했습니다.", "error");
      }
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    let allroles = roleDataFormatForReuseOrganizationComponent(roles);
    setAllRoles(allroles);
  }, [roles]);

  const setFileUploadResponse = (data) => {
    setForm((prev) => ({ ...prev, file: data }));
    setFormClear(false);
  };

  return (
    <>
      <VideoFormDropzonWrapper
        formClean={formClean}
        errors={errors}
        setFileUploadResponse={setFileUploadResponse}
        form={form}
      />

      <FieldWrapper label="그룹">
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
              <ErrorMessage className="!mt-0">{errors.groupId}</ErrorMessage>
            )}
          </Field>
        </div>
      </FieldWrapper>

      <FieldWrapper
        label="템플릿명"
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
            { id: "CUSTOM", name: "개별설정" },
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
            useSearch={true}
            buttonLabels={buttonLabels}
            callBack={receiveOrganizationFilter}
            selectedGroups={selectedOrganizations}
          />
        </FieldWrapper>
      )}

      <div className="flex items-center justify-between mt-10 mb-6">
        <div className="member-collapse-list">
          <Link href={"/content-management/video-management"}>
            <Button color="transparent" className="w-full text-center">
              <span className="text-19px">이전</span>
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
            등록하기
          </Button>
        </div>
      </div>
      <ContentGroupPicker
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedGroup={selectedGroup}
        callConfirmFunction={setSelectedGroup}
      />
    </>
  );
};

export default VideoForm;
