"use client"

import React from 'react';
import {Button} from "@/components/common/button";
import Image from "next/image";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import infoImg from "@/public/images/login-img.png";
import {Heading} from "@/components/common/heading";
import {Textarea} from "@/components/common/textarea";
import {Field} from "@/components/common/fieldset";

const Page = () => {
    return (

        <div className="flex flex-col add-mail-template">
            <Heading level={2}>
                <div className="flex items-center">
                    <span>메일 템플릿 추가</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>
            <div className="form">

                <FieldWrapper label="템플릿명" singleElement={true}>
                    <LmsStandardInputField  placeholder={`템플릿명을 입력해주세요.`} singleElement={true} fieldClass="w-full" />
                </FieldWrapper>

                <FieldWrapper label="템플릿명" >
                    <LmsStandardInputField  placeholder={`제목을 입력해주세요.`} singleElement={true}  />
                </FieldWrapper>

                <FieldWrapper singleElement={true} className={`!pr-0 pt-4`}>
                    <Field className="!pb-0 w-full">
                        <Textarea name="description" placeholder="내용을 입력하세요."/>
                    </Field>
                </FieldWrapper>
                <div className="flex items-center justify-between mb-4">
                    <div className="left-col flex items-center">
                        <div className="member-collapse-list pt-3">
                            <Button color="transparent" className="w-full mb-2 text-center"> <span> <Image
                                src={menuCollapse} alt='menu collapse'/> </span> <span
                                className="text-19px">목록</span>
                            </Button>
                        </div>
                    </div>
                    <div className="right-col flex gap-4 justify-end items-end flex-1 py-[20px] px-4 pl-[20px] pr-0">

                        <Button color="primary" type="submit">
                            발송하기
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;