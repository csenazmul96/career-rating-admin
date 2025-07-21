import {ErrorMessage, Field} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {Select} from "@/components/common/select";
import {getMailServers} from "@/utils/helpers/DateHelper";
import React, {useEffect} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

const MemberRegistrationEmail = ({form, setForm, errors, settings}) => {
    const handleOnChnage = (column, value) => {
        setForm((prev) => ({
            ...prev,
            emailDetails: {
                ...prev.emailDetails,
                [column]: value
            },
            email: `${prev.emailDetails.email}@${prev.emailDetails.domain}`
        }));
    }

    useEffect(() => {
        let email = '';
        if (form.emailDetails.topDomain === 'direct-input') {
            email = form.emailDetails.email;
        } else {
            email = `${form.emailDetails.email}@${form.emailDetails.topDomain}`;
        }

        setForm((prev) => ({
            ...prev,
            email: email
        }));

    }, [form.emailDetails]);

    const mailServers = getMailServers();
    const requiredForId = (field) => { return settings?.some(
        setting =>
            setting.item === field &&
            setting.use.toLowerCase() === "yes"
    )};
    return (
        <FieldWrapper  label="이메일" required={requiredForId('email')}>
            <LmsStandardInputField
                error={errors?.email}
                name="email"
                type="email"
                value={form.emailDetails.email}
                placeholder="name@domain.com"
                changeDataHandler={handleOnChnage}
            />
            {form.emailDetails.topDomain !== 'direct-input' &&
                <>
                    <span className="text-[19px] text-black">@</span>
                    <Field className="!pb-0 w-[270px] relative">
                        <Input name="emailDetails.domain"
                               disabled={form.emailDetails.topDomain !== 'direct-input'}
                               value={form.emailDetails.topDomain === 'direct-input' ? '' : form.emailDetails.topDomain }
                               onChange={(e) => handleOnChnage('domain', e.target.value)}
                               placeholder={form.emailDetails.topDomain === 'direct-input' ? '관리자 유형명을 입력해주세요.' : form.emailDetails.topDomain } />
                    </Field>
                </>
            }
            {!form.id &&
                <LmsStandardSelectInputV2
                    classes={`w-[180px]`}
                    fieldClass={"w-[180px] h-[190px]"}
                    name={`topDomain`}
                    initialValue={"direct-input"}
                    initialText={"Direct Input"}
                    value={form.emailDetails.topDomain}
                    options={mailServers}
                    changeDataHandler={handleOnChnage}
                />
            }
        </FieldWrapper>
    );
}
export default MemberRegistrationEmail