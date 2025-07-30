"use client";

import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import React, {useState} from "react";
import {useSession} from "next-auth/react";

import {Button} from "@/components/common/button";
import {updateLogedinUserPassword} from "@/utils/api/memberManagementRequest";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";

function LoggedInUserPasswordUpdate(props) {
    const {data} = useSession()
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] =  useState({
        "currentPassword": "",
        "newPassword": "",
        "confirmNewPassword": ""
    })
    const handleOnChnage = (column, value) => {
        if (column === "idNo") {
            setForm((prev) => ({ ...prev, [column]: value, memberExists: false }));
        } else {
            setForm((prev) => ({ ...prev, [column]: value }));
        }
    };

    const submitForm = async () => {
        setLoading(true);
        setErrors(null);
        const response = await updateLogedinUserPassword(form, data?.username)

        if (response?.status === 500){
            LmsToastMessage("실패", response.error, "error")
        }
        if (response?.errors) {
            setErrors(formatErrors(response?.errors));
        }
        if (response?.status === "success") {
            setForm({
                "currentPassword": "",
                "newPassword": "",
                "confirmNewPassword": ""
            })
            LmsToastMessage('성공.', '회원이 성공적으로 업데이트되었습니다.', 'success')
        }

        setLoading(false);
    }
    return (
        <>
            <div className="flex flex-col gap-8 lg:gap-10">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <FieldWrapper label="아이디" >
                            <span className={'py-3'}>{data?.username}</span>
                        </FieldWrapper>
                        <FieldWrapper label="기존 비밀번호" singleElement={true}>
                            <LmsStandardInputField
                                error={errors?.currentPassword}
                                name="currentPassword"
                                type="password"
                                fieldClass="w-[270px]"
                                value={form.currentPassword}
                                placeholder="기존 비밀번호를 입력"
                                changeDataHandler={handleOnChnage}
                            />
                        </FieldWrapper>
                        <FieldWrapper label="새 비밀번호" singleElement={true}>
                            <LmsStandardInputField
                                error={errors?.newPassword}
                                name="newPassword"
                                type="password"
                                fieldClass="w-[270px]"
                                value={form.newPassword}
                                placeholder="새로 변경할 비밀번호 입력"
                                changeDataHandler={handleOnChnage}
                            />
                        </FieldWrapper>
                        <FieldWrapper className={'border-b border-borderColor'} label="새 비밀번호 확인" singleElement={true}>
                            <LmsStandardInputField
                                error={errors?.confirmNewPassword}
                                name="confirmNewPassword"
                                type="password"
                                fieldClass="w-[270px]"
                                value={form.confirmNewPassword}
                                placeholder="새로 변경할 비밀번호 다시 입력"
                                changeDataHandler={handleOnChnage}
                            />
                        </FieldWrapper>
                    </div>
                    <div className="actions">
                        <div className="flex items-end justify-end gap-4">
                            <Button color="primary" disable={loading} loading={loading} onClick={submitForm} className={"cursor-pointer"}>
                                비밀번호 변경
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default LoggedInUserPasswordUpdate;