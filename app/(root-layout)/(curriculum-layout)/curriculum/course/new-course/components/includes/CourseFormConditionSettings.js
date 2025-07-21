import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";

const CourseFormConditionSettings = ({ form, setForm, errors }) => {
  const handleOnChnage = (column, value) => {
    if (value === "unused") {
      setForm((prev) => ({
        ...prev,
        [column]: value,
        averageScore: 0,
        overpass_score: 0,
      }));
    } else {
      setForm((prev) => ({ ...prev, [column]: value }));
    }
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <FieldWrapper label="수료 조건 설정" className={"h-full"}>
          <LmsStandardRadioFieldGroup
            options={[
              { id: "unused", name: "사용안함" },
              { id: "use", name: "사용" },
            ]}
            changeDataHandler={handleOnChnage}
            error={errors?.completionCondition}
            value={form.completionCondition}
            name="completionCondition"
          />
        </FieldWrapper>
      </div>
      <div className="flex-1">
        <FieldWrapper
          label="점수"
          className={`h-full`}
          required={form.completionCondition === "use"}
        >
          <span className={`font-bold`}>평균 점수</span>
          <LmsStandardInputField
            type="number"
            placeholder={`0`}
            value={form.averageScore}
            error={errors?.averageScore}
            disabled={form.completionCondition === "unused"}
            changeDataHandler={handleOnChnage}
            name="averageScore"
            fieldClass="w-[160px]"
          />
          <span>점</span>
          <span className={`font-bold`}>과락 점수</span>
          <LmsStandardInputField
            type="number"
            placeholder={`0`}
            error={errors?.overpass_score}
            value={form.overpass_score}
            disabled={form.completionCondition === "unused"}
            changeDataHandler={handleOnChnage}
            name="overpass_score"
            fieldClass="w-[160px]"
          />
          <span>점</span>
        </FieldWrapper>
      </div>
    </div>
  );
};

export default CourseFormConditionSettings;
