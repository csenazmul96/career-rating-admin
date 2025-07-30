import React from 'react';
import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Heading} from "@/components/common/heading";
import {ErrorMessage, Field, Label} from '@/components/common/fieldset'
import {Input} from '@/components/common/input'
import * as Headless from '@headlessui/react'
import {Button} from "@/components/common/button";
import {IoSearchOutline} from "react-icons/io5";
import {Select} from "@/components/common/select";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Textarea} from "@/components/common/textarea";
import menuCollapse from "@/public/images/membership/member-collapse.png";

const Page = () => {
    return (
        <div className="flex flex-col member-registration">
            <Heading level={2} >
                <div className="flex items-center">
                    <span>회원 등록</span>
                </div>
            </Heading>
            <div className="registration-form">
                <div className="form">

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style ">아이디 <span
                                className="text-dangerColor">*</span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <Field className="!pb-0 w-[270px]">
                                <Input name="name" placeholder="관리자 유형명을 입력해주세요."/>
                            </Field>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">이름 <span
                                className="text-dangerColor">*</span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex gap-x-3">
                                <Field className="!pb-0 w-[270px]">
                                    <Input name="full_name" placeholder="관리자 유형명을 입력해주세요." invalid/>
                                    <ErrorMessage className="!mt-0">영문, 숫자, 특수문자 조합 8자 이상 입력하세요.</ErrorMessage>
                                </Field>
                                <Button color="secondary" className="h-[48px]">
                                    중복확인
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">비밀번호 확인 <span
                                className="text-dangerColor">*</span></span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex gap-x-3">
                                <Field className="!pb-0 w-[270px] relative">
                                    <Input name="name" placeholder="관리자 유형명을 입력해주세요."/>
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2"><img
                                        src="/images/membership/visibility_off.png" alt=""/></span>
                                </Field>
                            </div>
                        </div>
                    </div>


                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">이메일 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex gap-x-3 items-center">
                                <Field className="!pb-0 w-[270px] relative">
                                    <Input name="name" placeholder="관리자 유형명을 입력해주세요."/>
                                </Field>
                                <span className="text-[19px] text-black">@</span>
                                <Field className="!pb-0 w-[270px] relative">
                                    <Input name="name" placeholder="관리자 유형명을 입력해주세요."/>
                                </Field>
                                <span>@</span>
                                <Field className="!pb-0 w-[180px] relative">
                                    <Select name="status">
                                        <option value="active">직접 입력</option>
                                        <option value="paused">직접 입력</option>
                                        <option value="delayed">직접 입력</option>
                                        <option value="canceled">직접 입력</option>
                                    </Select>
                                </Field>
                            </div>
                        </div>
                    </div>


                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">연락처 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex gap-x-3 items-center">
                                <Field className="!pb-0 w-[64px] relative">
                                    <Input name="name" placeholder="010"/>
                                </Field>
                                <span className="text-[19px] text-black">-</span>
                                <Field className="!pb-0 w-[80px] relative">
                                    <Input name="name" placeholder="1234"/>
                                </Field>
                                <span>-</span>
                                <Field className="!pb-0 w-[80px] relative">
                                    <Input name="name" placeholder="5678"/>
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">생년월일 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex gap-x-3 items-center">
                                <Field className="!pb-0 w-[120px] relative">
                                    <Select name="status">
                                        <option value="active">YYYY</option>
                                        <option value="paused">직접 입력</option>
                                        <option value="delayed">직접 입력</option>
                                        <option value="canceled">직접 입력</option>
                                    </Select>
                                </Field>
                                <Field className="!pb-0 w-[120px] relative">
                                    <Select name="status">
                                        <option value="active">MM</option>
                                        <option value="paused">직접 입력</option>
                                        <option value="delayed">직접 입력</option>
                                        <option value="canceled">직접 입력</option>
                                    </Select>
                                </Field>
                                <Field className="!pb-0 w-[120px] relative">
                                    <Select name="status">
                                        <option value="active">DD</option>
                                        <option value="paused">직접 입력</option>
                                        <option value="delayed">직접 입력</option>
                                        <option value="canceled">직접 입력</option>
                                    </Select>
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">아이디 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <Field className="!pb-0 w-[270px]">
                                <Select name="status">
                                    <option value="active">그룹 선택</option>
                                    <option value="paused">직접 입력</option>
                                    <option value="delayed">직접 입력</option>
                                    <option value="canceled">직접 입력</option>
                                </Select>
                            </Field>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">아이디 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="permit"/>
                                    <Label className="font-normal">정상</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">중지</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">탈퇴</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style">상담이력 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <Field className="!pb-0">
                                <Textarea name="description" placeholder="내용을 입력하세요."/>
                            </Field>

                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
                        <div className="left-col flex items-center">
                            <div className="member-collapse-list">
                                <Button color="transparent" className="w-full mb-2 text-center"> <span> <Image
                                    src={menuCollapse} alt='menu collapse'/> </span> <span
                                    className="text-19px">목록</span>
                                </Button>
                            </div>
                        </div>
                        <div className="right-col flex justify-end items-end flex-1  px-4 pl-[20px] pr-0">
                            <Button color="primary" type="submit" >
                                등록
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Page;

