import {ErrorMessage, Field} from "@/components/common/fieldset";
import {Select} from "@/components/common/select";
import React from "react";
import {generateDays, generateLast100Years, generateMonths} from "@/utils/helpers/DateHelper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

const MemberRegistrationDob = ({form, setForm, settings, errors}) => {
    const years = generateLast100Years();
    const months = generateMonths();
    const days = generateDays();

    const handleOnChnage = (column, value) => {
        setForm((prev) => ({
            ...prev,
            dob: {...prev.dob, [column]: value}
        }));
    }


    const requiredForId = (field) => { return settings?.some(
        setting =>
            setting.item === field &&
            setting.use.toLowerCase() === "yes"
    )};

  return (
      <div className="custom-common-row">
          <div className="custom-common-left-col">
              <span className="common-label-style">생년월일
                  {requiredForId( 'dob') &&
                      <span  className="text-dangerColor">*</span>
                  }
              </span>
          </div>
          <div className="custom-common-right-col">
              <div className="flex gap-x-3 items-center">
                  <LmsStandardSelectInputV2
                      classes={`w-[120px]`}
                      fieldClass={"w-[120px] h-[190px]"}
                      name={`year`}
                      initialText={"YYYY"}
                      value={form.dob.year}
                      options={years}
                      changeDataHandler={handleOnChnage}
                  />
                  <LmsStandardSelectInputV2
                      classes={`w-[120px]`}
                      fieldClass={"w-[120px] h-[190px]"}
                      name={`month`}
                      initialText={"MM"}
                      value={form.dob.month}
                      options={months}
                      changeDataHandler={handleOnChnage}
                  />
                  <LmsStandardSelectInputV2
                      classes={`w-[120px]`}
                      fieldClass={"w-[120px] h-[190px]"}
                      name={`date`}
                      initialText={"DD"}
                      value={form.dob.date}
                      options={days}
                      changeDataHandler={handleOnChnage}
                  />
              </div>
              {errors?.dob && <span className="!mt-0 text-dangerColor">{errors.dob}</span>}
          </div>

      </div>
  );
}

export default MemberRegistrationDob