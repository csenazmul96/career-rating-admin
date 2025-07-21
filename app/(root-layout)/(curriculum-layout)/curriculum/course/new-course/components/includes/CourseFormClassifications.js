import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardToggleSwitch from "@/components/common/form/LmsStandardToggleSwitch";

const CourseFormClassifications = ({ form, setForm }) => {
  const inputChangeHandler = (column, value) => {
    if (value === "constant") {
      setForm((prev) => ({
        ...prev,
        [column]: value,
        courseEndDate: "",
        courseStartDate: "",
      }));
    } else {
      setForm((prev) => ({ ...prev, [column]: value }));
    }
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <FieldWrapper label="과정 구분" className={"h-full"}>
          <LmsStandardRadioFieldGroup
            options={[
              { id: "constant", name: "상시" },
              { id: "regular", name: "정규" },
            ]}
            changeDataHandler={inputChangeHandler}
            value={form.courseDivision}
            name="courseDivision"
          />
        </FieldWrapper>
      </div>
      <div className="flex-1">
        <FieldWrapper label="노출 여부" className={`h-full`}>
          <LmsStandardToggleSwitch
            name={"visibilityStatus"}
            defaultValue={form.visibilityStatus}
            options={[
              { value: "SHOW", label: "보임" },
              { value: "HIDE", label: "숨김" },
            ]}
            changeDataHandler={inputChangeHandler}
          />
        </FieldWrapper>
      </div>
    </div>
  );
};

export default CourseFormClassifications;
