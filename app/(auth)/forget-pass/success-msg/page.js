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
import {Check} from "lucide-react";

const Page = () => {
    return (
        <>
            <div className={`px-6 py-8 lg:p-12  min-h-[calc(100dvh-53px)]`}>
                <div className={`max-w-[1200px] w-full m-auto`}>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className={`icon w-[100px] flex items-center justify-center h-[100px] bg-themeColor rounded-full`}>
                            <span><Check className={`text-white `} size={70} /></span>
                        </div>
                        <div className="text flex flex-col gap-4 items-center justify-center">
                            <h2 className={`font-bold text-25`}>비밀번호 변경이 완료되었습니다.</h2>
                            <p>고객님의 정보와 일치하는 아이디 입니다.</p>
                        </div>
                        <div class="flex items-center justify-center">
                            <Button color="primary">
                                로그인
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <AuthPageFooter/>
        </>

    );
};

export default Page;