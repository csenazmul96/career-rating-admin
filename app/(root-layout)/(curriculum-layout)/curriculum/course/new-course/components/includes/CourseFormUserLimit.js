import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";

const CourseFormUserLimit = ({ form, setForm, errors }) => {
  const handleOnChnage = (column, value) => {
    if (value === "unused") {
      setForm((prev) => ({
        ...prev,
        [column]: value,
        restrictionCount: 0,
      }));
    } else {
      setForm((prev) => ({ ...prev, [column]: value }));
    }
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <FieldWrapper label="인원 제한 설정" className={"h-full"}>
          <LmsStandardRadioFieldGroup
            options={[
              { id: "unused", name: "사용안함" },
              { id: "use", name: "사용" },
            ]}
            changeDataHandler={handleOnChnage}
            value={form.restriction}
            error={errors?.restriction}
            name="restriction"
          />
        </FieldWrapper>
      </div>
      <div className="flex-1">
        <FieldWrapper
          label="제한인원"
          className={`h-full`}
          required={form.restriction === "use"}
        >
          <LmsStandardInputField
            type="number"
            disabled={form.restriction === "unused"}
            changeDataHandler={handleOnChnage}
            value={form.restrictionCount}
            error={errors?.restrictionCount}
            name="restrictionCount"
            placeholder={`0`}
            fieldClass="w-full"
          />
          <span>명</span>
        </FieldWrapper>
      </div>
    </div>
  );
};

export default CourseFormUserLimit;
