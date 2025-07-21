import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";

export default function CourseFormTuitionFees({ form, setForm, errors }) {
  const onChangeHandler = (column, value) => {
    setForm((prev) => ({ ...prev, [column]: value }));
  };

  const finalPrice = () => {
    if (form.regularPrice) {
      if (form.discountRate) {
        return (
          form.regularPrice - form.regularPrice * (form.discountRate / 100)
        );
      }
      return form.regularPrice;
    }
    return 0;
  };

  return (
    <FieldWrapper
      label="수강료"
      singleElement={true}
      required={form.courseType === "paid"}
    >
      <div className="flex items-center justify-between">
        <div className="inner flex">
          <div className="flex items-center pr-10 gap-4">
            <span className={`pr-4 font-bold`}>정가</span>
            <LmsStandardInputField
              placeholder={`0`}
              disabled={form.courseType === "free"}
              value={form.regularPrice}
              name="regularPrice"
              error={errors?.regularPrice}
              changeDataHandler={onChangeHandler}
              fieldClass="w-[160px]"
            />
            <span className={`text-baseNormal`}>원</span>
          </div>
          <div className="flex items-center gap-4">
            <span className={`pr-2 font-bold`}>정가</span>
            <LmsStandardInputField
              placeholder={`0`}
              disabled={form.courseType === "free"}
              value={form.discountRate}
              error={errors?.discountRate}
              name="discountRate"
              changeDataHandler={onChangeHandler}
              fieldClass="w-[56px]"
            />
            <span className={`text-baseNormal`}>%</span>
          </div>
        </div>
        <div className="inner">
          <div className="flex gap-4 items-center">
            <span className={`text-themeColor font-bold pr-2`}>최종금액</span>
            <LmsStandardInputField
              placeholder={`0`}
              disabled
              value={finalPrice()}
              fieldClass="w-[160px]"
            />
            <span>원</span>
          </div>
        </div>
      </div>
    </FieldWrapper>
  );
}
