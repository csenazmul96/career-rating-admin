import React  from "react";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";

const MemberRegistrationPhoneNumber = ({form, setForm, errors, settings}) => {
    const handleOnChnage = (column, value) => {
        if (!/^\d*$/.test(value)) return;
        setForm((prev) => ({
            ...prev,
            contact: {
                ...prev.contact,
                [column]: value
            }
        }));
    }

    const checkHasError = ()=>{
        let status = false
        if (errors && errors?.['contact.first']){
            status = true
        } else if (errors && errors?.['contact.middle']){
            status = true
        }  else if (errors && errors?.['contact.last']){
            status = true
        }
        return status
    }

    const requiredForId = (field) => { return settings?.some(
        setting =>
            setting.item === field &&
            setting.use.toLowerCase() === "yes"
    )};

    return (
        <div className="custom-common-row">
            <div className="custom-common-left-col">
                <span className="common-label-style">
                    연락처
                    {requiredForId( 'contact') &&
                    <span  className="text-dangerColor">*</span>
                    }
                </span>
            </div>
            <div className="custom-common-right-col">
                <div className="flex gap-x-3 items-center">
                    <LmsStandardInputField
                        name="first"
                        maxLength={3}
                        value={form.contact.first}
                        fieldClass={'w-[66px]'}
                        placeholder="010"
                        changeDataHandler={handleOnChnage}
                    />
                    <span className="text-[19px] text-black">-</span>
                    <LmsStandardInputField
                        name="middle"
                        maxLength={4}
                        value={form.contact.middle}
                        fieldClass={'w-[66px]'}
                        placeholder="1234"
                        changeDataHandler={handleOnChnage}
                    />
                    <span>-</span>
                    <LmsStandardInputField
                        name="last"
                        maxLength={4}
                        value={form.contact.last}
                        fieldClass={'w-[66px]'}
                        placeholder="1234"
                        changeDataHandler={handleOnChnage}
                    />
                </div>
                {checkHasError()  &&
                <span className={'text-dangerColor text-sm'}>잘못된 전화번호</span>
                }
            </div>
        </div>
    );
}

export default MemberRegistrationPhoneNumber