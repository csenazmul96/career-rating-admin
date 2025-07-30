import React from 'react';
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Field, Label} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {Select} from "@/components/common/select";
import {Textarea} from "@/components/common/textarea";
import {Button} from "@/components/common/button";
import Image from "next/image";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import infoImg from "@/public/images/login-img.png";
import {Heading} from "@/components/common/heading";
import {IoSearchOutline} from "react-icons/io5";

const Page = () => {
    return (
        <div className="flex flex-col">
            <Heading level={2}>
                <div className="flex items-center">
                    <span>수신동의 안내 발송</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>
            <div className="flex flex-col member-send-information">
                <div className="form">
                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                                            <span className="common-label-style ">메일유형  <span
                                                className="text-dangerColor">*</span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex items-center space-x-5">
                                <RadioGroup className="flex  space-x-6">
                                    <RadioField>
                                        <Radio color="lmsradio" value="permit"/>
                                        <Label className="font-normal">수신동의자</Label>
                                    </RadioField>
                                    <RadioField>
                                        <Radio color="lmsradio" value="forbid"/>
                                        <Label className="font-normal">전체(수신거부자 포함)</Label>
                                    </RadioField>
                                </RadioGroup>
                                <Button color="transparentMedium" type="button">
                                    정보통신망법 안내서
                                </Button>
                                <Button color="transparentMedium" type="button">
                                    정보통신방법 Q&A
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                                            <span className="common-label-style ">수신자  <span
                                                className="text-dangerColor">*</span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <Field className="!pb-0 flex relative w-full ">
                                <Input name="full_name" className="w-full " placeholder="수신자를 검색해주세요."/>
                                <IoSearchOutline className="absolute right-5 top-1/2 transform -translate-y-1/2"/>
                            </Field>
                        </div>
                    </div>
                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                                            <span className="common-label-style ">발송자 <span
                                                className="text-dangerColor">*</span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <Field className="!pb-0 w-[270px]">
                                <Input name="name" placeholder="admin@kcinfra.co.kr"/>
                            </Field>
                        </div>
                    </div>
                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                                        <span className="common-label-style">제목 * <span
                                            className="text-dangerColor">*</span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <Field className="!pb-0 ">
                                <Input name="name" placeholder="(광고)"/>
                            </Field>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">메일 템플릿 선택</span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex items-center space-x-5">
                                <Field className="!pb-0 w-[270px]">
                                    <Select name="status">
                                        <option value="active">메일 템플릿 선택</option>
                                        <option value="paused">메일 템플릿 선택</option>
                                        <option value="delayed">메일 템플릿 선택</option>
                                        <option value="canceled">메일 템플릿 선택</option>
                                    </Select>
                                </Field>
                                <Button color="transparent" className="!min-w-[auto]" type="button">
                                    적용
                                </Button>
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
                                    src={menuCollapse} alt='menu collapse'/> </span> <span
                                    className="text-19px">목록</span>
                                </Button>
                            </div>
                        </div>
                        <div className="right-col flex gap-4 justify-end items-end flex-1 py-[20px] px-4 pl-[20px] pr-0">
                            <Button color="transparent"  type="button">
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