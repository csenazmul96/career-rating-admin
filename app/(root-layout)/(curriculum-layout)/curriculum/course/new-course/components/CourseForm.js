"use client";

import CourseFileUpload from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFileUpload";
import CourseFormCategory from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFormCategory";
import CourseFormClassifications from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFormClassifications";
import CourseFormConditionSettings from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFormConditionSettings";
import CourseFormDatePicker from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFormDatePicker";
import CourseFormTuitionFees from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFormTuitionFees";
import CourseFormUserLimit from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFormUserLimit";
import CourseIntroduction from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseIntroduction";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import {useEffect, useState} from "react";

import { Button } from "@/components/common/button";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import { LmsToastMessage } from "@/components/common/LmsToastMessage";
import { createCourse, updateCourse } from "@/utils/api/curriculumManagement";
import { formatErrors } from "@/utils/helpers/ErrorHeloper";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { confirmAlert } from "react-confirm-alert";
import CourseAccessPermissionMembers
  from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseAccessPermissionMembers";
import {useSession} from "next-auth/react";

const initialForm = {
  courseDivision: "constant",
  courseName: "",
  courseAdminMemberIds: "",
  courseCategoryId: "",
  courseSubCategoryId: "",
  courseSubSubCategoryId: "",
  representativeImagesId: "",
  visibilityStatus: "SHOW",
  courseType: "free",
  regularPrice: "",
  discountRate: "",
  courseStartDate: "",
  courseEndDate: "",
  restriction: "unused",
  restrictionCount: "",
  completionCondition: "unused",
  averageScore: "",
  overpass_score: "",
  attachmentId: "",
  courseIntroduction: "",
  learningObjectives: "",
  completionRequirement: "",
};

export default function CourseForm({ oldData = null }) {
  const router = useRouter();
  let representativeImages = null;
  let attachment = null;
  const {data} = useSession();

  if (oldData) {
    representativeImages = oldData.representativeImages;
    attachment = oldData.attachment;

    delete oldData.representativeImages;
    delete oldData.attachment;

    if (oldData?.courseAdmins && data?.username) {
      const ids = oldData.courseAdmins
          .filter((member) => member.memberId !== data.username)
          .map((member) => member.memberId);

      oldData.courseAdminMemberIds = ids
    }
  }

const [errors, setErrors] = useState(null);
const [loading, setLoading] = useState(false);

const [form, setForm] = useState(oldData ? { ...oldData } : initialForm);

const inputChangeHandler = (column, value) => {
  setForm((prev) => ({ ...prev, [column]: value }));
};

const submitHandler = async () => {
  setLoading(true);
  let response = null;

  if (!oldData) {
    response = await createCourse(form);
  } else {
    delete form.id;
    response = await updateCourse(oldData.id, form);
  }
  if (response.status === 500) {
    LmsToastMessage("오류.", response.error, "error");
    setLoading(false);
    return false;
  }

  if (response.status === "error") {
    const errors = formatErrors(response.errors);
    setErrors(errors);


    if (errors?.courseId) {
      LmsToastMessage("오류.", errors.courseId, "warning");
    }
    if (errors?.id) {
      LmsToastMessage("오류.", errors.id, "warning");
    }
  } else {
    if (oldData) {
      LmsToastMessage(
          "수정 완료",
          "강좌 정보가 업데이트되었습니다.",
          "success"
      );
      router.push(
          `/curriculum/course/details/${oldData.id}/course-information`
      );
    } else {
      LmsToastMessage("등록 완료", "강좌가 등록되었습니다.", "success");
      router.push("/curriculum/course");
    }
  }

  setLoading(false);
};

const backToListConformation = () => {
  confirmAlert({
    title: "과정관리 목록 이동",
    message:
        "과정관리 목록으로 이동하시겠습니까? 작성 중인 글은 삭제 됩니다.",
    buttons: [
      {
        label: "취소",
        onClick: () => {
          return false;
        },
      },
      {
        label: "확인",
        buttonLabel: "확인",
        onClick: () => {
          router.push("/curriculum/course");
        },
      },
    ],
    customUI: ({ title, message, onClose, buttons }) => {
      return (
          <ConfirmPopup
              title={title}
              message={message}
              onClose={onClose}
              onConfirm={buttons}
          />
      );
    },
  });
};

return (
    <>
      <CourseFormClassifications
          errors={errors}
          form={form}
          setForm={setForm}
      />
      <CourseAccessPermissionMembers form={form} setForm={setForm} />
      <FieldWrapper label="과정명" singleElement={true} required>
        <LmsStandardInputField
            singleElement={true}
            changeDataHandler={inputChangeHandler}
            name="courseName"
            error={errors?.courseName}
            value={form.courseName}
            placeholder={`과정명을 입력하세요.`}
            fieldClass="w-full"
        />
      </FieldWrapper>

      <CourseFormCategory
          form={form}
          setForm={setForm}
          olddata={oldData}
          errors={errors}
      />

      <FieldWrapper label="대표 이미지" singleElement={true}>
        <CourseFileUpload
            form={form}
            fieldName={"representativeFile"}
            errors={errors}
            name="representativeImagesId"
            file={representativeImages}
            placeholder="첨부할 파일을 여기에 끌어다 놓으세요. 대표 이미지는 최대 1장 가능하며, jpg, png 확장자만 업로드 가능합니다."
            setForm={setForm}
        />
      </FieldWrapper>

      <FieldWrapper label="과정 유형">
        <LmsStandardRadioFieldGroup
            options={[
              { id: "free", name: "무료과정" },
              { id: "paid", name: "유료과정", disabled: true },
            ]}
            value={form.courseType}
            error={errors?.courseType}
            changeDataHandler={inputChangeHandler}
            name="courseType"
        />
      </FieldWrapper>

      <CourseFormTuitionFees form={form} setForm={setForm} errors={errors} />

      <CourseFormDatePicker form={form} setForm={setForm} errors={errors} />

      <CourseFormUserLimit form={form} setForm={setForm} errors={errors} />

      <CourseFormConditionSettings
          form={form}
          setForm={setForm}
          errors={errors}
      />

      <CourseIntroduction
          form={form}
          errors={errors}
          attachment={attachment}
          setForm={setForm}
      />

      <FieldWrapper label="학습 목표" singleElement={true}>
        <LmsStandardTextArea
            singleElement={true}
            error={errors?.learningObjectives}
            name="learningObjectives"
            value={form.learningObjectives}
            changeDataHandler={inputChangeHandler}
            placeholder={"내용을 입력해주세요."}
        />
      </FieldWrapper>

      <FieldWrapper label="수료조건" singleElement={true}>
        <LmsStandardInputField
            singleElement={true}
            placeholder={`내용을 입력해주세요.`}
            name="completionRequirement"
            error={errors?.completionRequirement}
            value={form.completionRequirement}
            changeDataHandler={inputChangeHandler}
            fieldClass="w-full"
        />
      </FieldWrapper>
      <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
        <div className="left-col flex items-center">
          <div className="member-collapse-list ">
            <Button
                onClick={backToListConformation}
                color="transparent"
                className="w-full mb-2 text-center cursor-pointer"
            >
              <span>
                {" "}
                {/*<Image src={menuCollapse} alt="menu collapse" />*/}
                <Menu size={24} />{" "}
              </span>
              <span className="leading-[normal]">목록</span>
            </Button>
          </div>
        </div>
        <div className="right-col flex justify-end items-end flex-1  px-4 pl-[20px] pr-0">
          <Button
              color="primary"
              loading={loading}
              onClick={submitHandler}
              disable={loading}
          >
            {oldData ? "수정 완료" : "등록"}
          </Button>
        </div>
      </div>
    </>
);
}
