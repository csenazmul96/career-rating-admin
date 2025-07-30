"use client";
import React, {useState} from 'react';
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import Link from "next/link";
import {Button} from "@/components/common/button";

function ResetPasswordForm({searchParms}) {
    const [errors, setErrors] = useState(null);
    const [form, setForm] =  useState({
        password: "",
        confirmPassword: "",
        username: "",
    })
    const handleOnChnage = (column, value) => {
        if (column === "idNo") {
            setForm((prev) => ({ ...prev, [column]: value, memberExists: false }));
        } else {
            setForm((prev) => ({ ...prev, [column]: value }));
        }
    };
    return (
        <div className={`px-6 py-8 lg:p-12  min-h-[calc(100dvh-53px)]`}>
            <div className={`max-w-[1200px] w-full m-auto`}>
                <div className="flex flex-col gap-8 lg:gap-10">

                    <div className="flex flex-col gap-4">
                        <h2 className={`text-25 font-bold`}>아이디/비밀번호 찾기</h2>
                        <p className={`text-textSubColor text-baseNormal`}>고객님의 정보와 일치하는 아이디 입니다.</p>
                    </div>

                    <div className="flex flex-col gap-8 lg:gap-10">
                        {searchParms?.username &&
                            <div className="flex flex-col gap-6">
                                <h2 className={`font-bold text-baseNormal`}>아이디 확인</h2>
                                <div className="flex flex-col">
                                    <FieldWrapper label="아이디" className="border-b border-commonBorderColor">
                                        <span>{searchParms?.username}</span>
                                    </FieldWrapper>
                                </div>
                            </div>
                        }
                        <div className="flex flex-col gap-6">
                            <h2 className={`font-bold text-baseNormal`}>아이디 확인</h2>
                            <div className="flex flex-col">
                                <FieldWrapper label="새 비밀번호" >
                                    <LmsStandardInputField
                                        error={errors?.password}
                                        name="password"
                                        type="password"
                                        fieldClass="w-full"
                                        value={form.password}
                                        placeholder="새로 변경할 비밀번호 입력"
                                        changeDataHandler={handleOnChnage}
                                    />
                                </FieldWrapper>
                                <FieldWrapper className={'border-b border-borderColor'} label="새 비밀번호 확인" >
                                    <LmsStandardInputField
                                        error={errors?.confirmPassword}
                                        name="confirmPassword"
                                        type="password"
                                        fieldClass="w-full"
                                        value={form.confirmPassword}
                                        placeholder="새로 변경할 비밀번호 다시 입력"
                                        changeDataHandler={handleOnChnage}
                                    />
                                </FieldWrapper>
                            </div>
                        </div>

                    </div>

                    <div className="actions">
                        <div className="flex items-center justify-between gap-4">
                            <Link href={"/find-id-password"} >
                                <Button color="transparent"> 돌아가기 </Button>
                            </Link>
                            <Button color="primary">
                                비밀번호 변경
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordForm;