import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import { CommonToastMessage } from "@/components/common/CommonToastMessage";
import { useEffect } from "react";

export default function CourseFormDatePicker({ form, setForm, errors }) {
  const handleOnChnage = (column, value) => {
    setForm((prev) => ({ ...prev, [column]: value }));
  };
  useEffect(() => {
    if (form && form.courseStartDate && form.courseEndDate) {
      let startDate = new Date(form.courseStartDate);
      let endDate = new Date(form.courseEndDate);
      if (endDate < startDate) {
        CommonToastMessage(
          "오류.",
          "설정하신 날짜를 다시 확인해주세요",
          "warning"
        );
      }
    }
  }, [form]);

  return (
    <FieldWrapper label="수강기간 설정" required={form.courseType === "paid"}>
      <span className={"font-bold"}>시작일</span>

      <LmsStandardDatePicker
        fieldClass={"w-[270px]"}
        name={"courseStartDate"}
        placeholder={"YYYY-MM-DD"}
        disabled={form.courseDivision === "constant" ? true : false}
        error={errors?.courseStartDate}
        value={form.courseStartDate}
        changeDataHandler={handleOnChnage}
      />
      <span className={"font-bold"}>종료일</span>
      <LmsStandardDatePicker
        name={"courseEndDate"}
        disabled={form.courseDivision === "constant" ? true : false}
        fieldClass={"w-[270px]"}
        placeholder={"YYYY-MM-DD"}
        value={form.courseEndDate}
        error={errors?.courseEndDate}
        changeDataHandler={handleOnChnage}
      />
    </FieldWrapper>
  );
}
