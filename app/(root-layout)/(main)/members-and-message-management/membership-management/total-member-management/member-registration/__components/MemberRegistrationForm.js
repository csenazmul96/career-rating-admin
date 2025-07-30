"use client";
import MemberExistsCheck from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberExistsCheck";
import MemberRegistrationDob from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationDob";
import MemberRegistrationEmail from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationEmail";
import MemberRegistrationOrganization from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationOrganization";
import MemberRegistrationPhoneNumber from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationPhoneNumber";
import MemberRegistrationRole from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationRole";
import { Button } from "@/components/common/button";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import { LmsToastMessage } from "@/components/common/LmsToastMessage";
import { useOrganization } from "@/custom-hooks/useOrganization";
import {
  memberRegistration,
  memberUpdate,
} from "@/utils/api/memberManagementRequest";
import { formatErrors } from "@/utils/helpers/ErrorHeloper";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const MemberRegistrationForm = ({
  organization,
  roles,
  member = null,
  settings,
  allParams,
}) => {
  const { setAllOrganizations } = useOrganization();
  const [situations, setSituations] = useState([
    { id: "Active", name: "정상" },
    { id: "Stop", name: "중지" },
    { id: "InActive", name: "탈퇴" },
  ]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setCommonSelectedOrganization } = useOrganization();

  const [form, setForm] = useState(member);

  //For edit member
  useEffect(() => {
    if (member && member.id) {
      if (member.organizationGroupId && form.id !== "") {
        let orgnz = organization.find(
          (org) => org.id === member.organizationGroupId
        );
        if (orgnz) {
          setCommonSelectedOrganization(orgnz);
        }
      }
    }
  }, [member]);

  useEffect(() => {
    setAllOrganizations(organization);
  }, [organization]);

  const handleOnChnage = (column, value) => {
    if (column === "idNo") {
      setForm((prev) => ({ ...prev, [column]: value, memberExists: false }));
    } else {
      setForm((prev) => ({ ...prev, [column]: value }));
    }
  };

  const submitForm = async () => {
    setErrors(null);
    if (form.memberExists) {
      return;
    }

    // const errors = await memberCreateValidation(form)
    // setErrors(errors);
    // if (errors && errors.length){
    //     return
    // }

    setLoading(true);
    try {
      let data = null;
      if (!form.id) {
        data = await memberRegistration(form);
      } else if (form.id) {
        data = await memberUpdate(form, form.id);
      }
      if (data.status === "error") {
        const errors = formatErrors(data.errors);
        setErrors(errors);
        if (!errors) {
          LmsToastMessage("오류.", "문제가 발생했습니다.", "error");
        }
      } else {
        if (!form.id) {
          resetForm();
        }
        LmsToastMessage(
          "성공.",
          form?.id
            ? "회원이 성공적으로 업데이트되었습니다."
            : "회원이 성공적으로 생성되었습니다.",
          "success"
        );
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error("문제가 발생했습니다.");
    }
  };

  const resetForm = () => {
    setForm(member);
  };

  const requiredForId = (field) => {
    return settings?.some(
      (setting) => setting.item === field && setting.use.toLowerCase() === "yes"
    );
  };

  return (
    <div className="registration-form">
      {member && (
        <div className="form">
          {form.id && (
            <FieldWrapper label="중복 로그인" required={true}>
              <LmsStandardRadioFieldGroup
                options={[
                  { id: false, name: "사용 안함" },
                  { id: true, name: "사용" },
                ]}
                name="isDuplicateAllowed"
                value={form.isDuplicateAllowed}
                changeDataHandler={handleOnChnage}
              />
              {form.isDuplicateAllowed && (
                <>
                  <LmsStandardInputField
                    error={errors?.duplicateUserCount}
                    name="duplicateUserCount"
                    type={"number"}
                    value={form.duplicateUserCount}
                    placeholder="동시접속허용인원 입력"
                    changeDataHandler={handleOnChnage}
                  />
                  <span>명</span>
                </>
              )}
            </FieldWrapper>
          )}

          <FieldWrapper label="아이디" required={requiredForId("memberId")}>
            <LmsStandardInputField
              error={errors?.idNo}
              name="idNo"
              disabled={form.id ? true : false}
              value={form.idNo}
              placeholder="아이디를 입력하세요."
              changeDataHandler={handleOnChnage}
            />
            {!form.id && (
              <MemberExistsCheck
                form={form}
                setError={setErrors}
                setForm={setForm}
                errors={errors}
              />
            )}
          </FieldWrapper>

          <FieldWrapper label="이름" required={requiredForId("name")}>
            <LmsStandardInputField
              error={errors?.name}
              name="name"
              value={form.name}
              placeholder="이름을 입력해주세요."
              changeDataHandler={handleOnChnage}
            />
          </FieldWrapper>

          <FieldWrapper label="비밀번호" required={requiredForId("password")}>
            <LmsStandardInputField
              error={errors?.password}
              name="password"
              type="password"
              value={form.password}
              placeholder="영문, 숫자, 특수문자 조합 8자 이상 입력하세요"
              changeDataHandler={handleOnChnage}
            />
          </FieldWrapper>

          {!form.id && (
            <FieldWrapper
              label="비밀번호 확인"
              required={requiredForId("confirmPassword")}
            >
              <LmsStandardInputField
                error={errors?.confirmPassword}
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                placeholder="비밀번호를 다시 입력해주세요."
                changeDataHandler={handleOnChnage}
              />
            </FieldWrapper>
          )}

          <MemberRegistrationEmail
            form={form}
            setForm={setForm}
            errors={errors}
            settings={settings}
          />

          <MemberRegistrationPhoneNumber
            form={form}
            setForm={setForm}
            errors={errors}
            settings={settings}
          />

          <MemberRegistrationDob
            form={form}
            setForm={setForm}
            settings={settings}
          />

          {roles.length && form.id && (
            <MemberRegistrationRole
              form={form}
              setForm={setForm}
              roles={roles}
              errors={errors}
            />
          )}

          {organization.length && (
            <MemberRegistrationOrganization
              form={form}
              setForm={setForm}
              roles={roles}
              errors={errors}
              settings={settings}
            />
          )}
          <FieldWrapper label="상태">
            <LmsStandardRadioFieldGroup
              options={situations}
              name="situation"
              value={form.situation}
              changeDataHandler={handleOnChnage}
            />
          </FieldWrapper>

          <FieldWrapper label="상담이력" singleElement={true}>
            <LmsStandardTextArea
              error={errors?.consultationHistory}
              name="consultationHistory"
              singleElement={true}
              value={form.consultationHistory}
              placeholder="- 24년 12월 상담 후 결제
- 제안서 pdf 보내기로함"
              changeDataHandler={handleOnChnage}
            />
          </FieldWrapper>

          <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
            <div className="left-col flex items-center">
              <div className="member-collapse-list ">
                <Link
                  href={`/members-and-message-management/membership-management/total-member-management?page=${
                    allParams?.page || 1
                  }&&size=${allParams?.size || 5}`}
                >
                  <Button
                    color="transparent"
                    className="w-full mb-2 text-center cursor-pointer gap"
                  >
                    <span className={`flex`}>
                      {" "}
                      <Menu />{" "}
                    </span>
                    <span className="text-19px flex leading-[normal]">
                      목록
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="right-col flex justify-end items-end flex-1  px-4 pl-[20px] pr-0">
              <Button
                color="primary"
                onClick={() => submitForm()}
                loading={loading}
                disable={loading}
                className={"cursor-pointer"}
              >
                {form.id ? "저장" : "저장"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberRegistrationForm;
