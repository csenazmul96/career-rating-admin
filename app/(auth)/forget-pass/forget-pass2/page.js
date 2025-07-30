"use client"

import React from 'react';
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Field, Label} from "@/components/common/fieldset";
import {Button} from "@/components/common/button";
import Footer from "@/components/footer/Footer";
import AuthPageFooter from "@/app/(auth)/components/AuthPageFooter";
import {Input} from "@/components/common/input";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {Tooltip} from "flowbite-react";
import ToolTip from "@/components/common/ToolTip";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import FieldWrapper from "@/components/common/form/FieldWrapper";

const Page = () => {
    return (
        <>
            <div className={`px-6 py-8 lg:p-12  min-h-[calc(100dvh-53px)]`}>
                <div className={`max-w-[1200px] w-full m-auto`}>
                    <div className="flex flex-col gap-8 lg:gap-10">

                        <div className="flex flex-col gap-4">
                            <h2 className={`text-25 font-bold`}>아이디/비밀번호 찾기</h2>
                            <p className={`text-textSubColor text-baseNormal`}>고객님의 정보와 일치하는 아이디 입니다.</p>
                        </div>

                        <div className="flex flex-col gap-8 lg:gap-10">
                            <div className="flex flex-col gap-6">
                                <h2 className={`font-bold text-baseNormal`}>아이디 확인</h2>
                                <div className="flex flex-col">
                                    <FieldWrapper label="아이디" className="border-b border-commonBorderColor">
                                        <span>hongildong1234</span>
                                    </FieldWrapper>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <h2 className={`font-bold text-baseNormal`}>아이디 확인</h2>
                                <div className="flex flex-col">
                                    <FieldWrapper label="아이디" >
                                        <LmsStandardInputField type={`password`}  error={`error message`} fieldClass="w-full" />
                                    </FieldWrapper>
                                    <FieldWrapper label="아이디" className="border-b border-commonBorderColor">
                                        <LmsStandardInputField type={`password`}  fieldClass="w-full" />
                                    </FieldWrapper>
                                </div>
                            </div>

                        </div>

                        <div className="actions">
                            <div className="flex items-center justify-between gap-4">
                                <Button color="transparent">검색
                                    돌아가기
                                </Button>
                                <Button color="primary">
                                다음
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthPageFooter />
        </>

    );
};

export default Page;