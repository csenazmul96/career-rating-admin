'use client'
import React from 'react';
import {Heading} from "@/components/common/heading";
import {Field, Label} from "@/components/common/fieldset";

import {Button} from "@/components/common/button";

import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Textarea} from "@/components/common/textarea";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

const Page = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <Heading level={2}>
                    <span>자료등록</span>
                </Heading>
                <div className="bredcrumbs">
                    <div className="flex items-center text-[19px] text-textSubColor  gap-1 pb-10">
                        <div className="flex gap-1">
                            <div className="img">
                                <img src="/images/content-management/home.png" alt=""/>
                            </div>
                            <span>홈</span>
                        </div>
                        <span><img src="/images/content-management/keyboard_arrow_right.png" alt=""/></span>
                        <div className="flex gap-1">
                            <div className="img">
                                <img src="/images/content-management/home.png" alt=""/>
                            </div>
                            <span>홈</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col member-send-information">
                <div className="form">

                    <FieldWrapper label="제목" singleElement={true}>
                        <LmsStandardInputField placeholder="제목을 입력해주세요." singleElement={true} fieldClass="w-full"/>
                    </FieldWrapper>

                    <FieldWrapper label="그룹 선택" singleElement={true}>
                        <LmsStandardSelectInputV2 placeholder="그룹 선택" singleElement={true} fieldClass="w-full"/>
                    </FieldWrapper>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style flex items-center">첨부파일 <span className="pl-1"><Image
                                src={infoImg} className="ml-1" alt="info image"/></span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <div
                                className="flex items-center justify-between border border-dotted border-[#D8D8D8] p-4">
                                <div className="flex items-center text-textSubColor">
                                    <span className="pr-2"><img src="/images/membership/note-add-gray.png"
                                                                alt=""/></span>
                                    첨부할 파일을 여기에 끌어다 놓거나 파일 선택 버튼을 직접 선택해주세요.
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-start space-y-3">
                                        <Button color="primary" type="button"  >
                                            <span><img src="/images/membership/note_add.png" alt=""/></span> 파일선택
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-right-col !px-[0]">
                            <Field className="!pb-0">
                                <Textarea name="description" placeholder="내용을 입력하세요."/>
                            </Field>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="left-col flex items-center">
                            <div className="member-collapse-list pt-3">
                                <Button color="transparent" className="w-full mb-2 text-center"> <span> <Image
                                      alt='menu collapse'/> </span> <span
                                    className="text-19px">목록</span>
                                </Button>
                            </div>
                        </div>
                        <div
                            className="right-col flex gap-4 justify-end items-end flex-1 py-[20px] px-4 pl-[20px] pr-0">
                            <Button color="transparent" type="button">
                                미리보기
                            </Button>
                            <Button color="primary" type="submit">
                                발송하기
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;