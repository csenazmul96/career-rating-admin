"use client";

import React, {useState} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import MemberRegistrationPhoneNumber
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationPhoneNumber";
import MemberRegistrationDob
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationDob";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {Input} from "@/components/common/input";
import {Field} from "@/components/common/fieldset";
import {Button} from "@/components/common/button";
import {updateLogedinUserInfo} from "@/utils/api/memberManagementRequest";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

function ProfileUpdateForm({profile, settings}) {
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: profile?.name,
        email: profile?.email,
        emailDetails: {
            email: profile?.email?.split("@")[0] || "",
            topDomain: profile?.email?.split("@")[1] || "direct-input",
        },
        contact: {
            first: profile?.contact?.first || "",
            middle: profile?.contact?.middle || "",
            last: profile?.contact?.last || "",
        },
        dob: {
            year:  profile?.dob?.year || "",
            month: profile?.dob?.month || "",
            date: profile?.dob?.date || "",
        }
    });

    const handleOnChnage = (column, value) => {
        if (column === "topDomain" || column === "email") {
            setForm((prev) => ({
                ...prev,
                emailDetails: {
                    ...prev.emailDetails,
                    [column]: value
                }
            }));
        } else {
            setForm((prev) => ({...prev, [column]: value}));
        }
    };

    const requiredForId = (field) => {
        return settings?.some(
            (setting) => setting.item === field && setting.use.toLowerCase() === "yes"
        );
    };

    const submitForm = async () => {
        setLoading(true);
        setErrors(null);
        let formData = {...form}
        formData.email = `${formData.emailDetails.email}@${formData.emailDetails.topDomain}`
        const response = await updateLogedinUserInfo(formData)

        if (response?.status === 500){
            LmsToastMessage("실패", response.error, "error")
        }
        if (response?.errors) {
            setErrors(formatErrors(response?.errors));
        }
        if (response?.status === "success") {
            LmsToastMessage('성공.', '회원이 성공적으로 업데이트되었습니다.', 'success')
        }

        setLoading(false);
    }

    return (
        <>
            <div className="registration-form">
                <div className="form">
                    <FieldWrapper label="아이디" >
                        <span className={'py-3'}>{profile?.id} </span>
                    </FieldWrapper>
                    <FieldWrapper label="이름" >
                        <span className={'py-3'}> {profile?.name}</span>
                    </FieldWrapper>
                    <MemberRegistrationPhoneNumber
                        form={form}
                        setForm={setForm}
                        errors={errors}
                        settings={settings}
                    />
                    <FieldWrapper  label="이메일" required={requiredForId('email')}>
                        <LmsStandardInputField
                            error={errors?.email}
                            name="email"
                            type="email"
                            value={form.emailDetails.email}
                            placeholder="name@domain.com"
                            changeDataHandler={handleOnChnage}
                        />
                        <span className="text-[19px] text-black">@</span>
                        <Field className="!pb-0 w-[270px] relative">
                            <Input name="topDomain"
                                   value={form.emailDetails.topDomain }
                                   onChange={(e) => handleOnChnage('topDomain', e.target.value)}
                                   placeholder={ '관리자 유형명을 입력해주세요.'  } />
                        </Field>
                    </FieldWrapper>


                    <MemberRegistrationDob
                        form={form}
                        setForm={setForm}
                        settings={settings}
                        errors={errors}
                    />

                    <FieldWrapper label="조직그룹">
                        <span className={'py-3'}>  {profile?.organizationName} </span>
                    </FieldWrapper>

                    <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
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
            </div>
        </>
    );
}

export default ProfileUpdateForm;