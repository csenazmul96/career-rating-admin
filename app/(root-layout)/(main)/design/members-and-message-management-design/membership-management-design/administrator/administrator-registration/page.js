import React from 'react';
import {Heading} from "@/components/common/heading";
import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Field} from "@/components/common/fieldset";
import {Select} from "@/components/common/select";
import {Input} from "@/components/common/input";
import {IoSearchOutline} from "react-icons/io5";
import {Button} from "@/components/common/button";

const Page = () => {
    return (
        <div className="flex flex-col membership-management">
            <Heading level={2}>
                <div className="flex items-center">
                    <span>관리자 등록</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>
            <div className="registration-form">
                <div className="form">

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style ">관리자 유형 </span>
                            <span
                                className="pl-1"><Image
                                src={infoImg} className="ml-1" alt="info image"/></span>
                        </div>
                        <div className="custom-common-right-col">
                            <Field className="!pb-0 w-[270px]">
                                <Select name="status">
                                    <option value="active">홈페이지 관리자</option>
                                    <option value="paused">직접 입력</option>
                                    <option value="delayed">직접 입력</option>
                                    <option value="canceled">직접 입력</option>
                                </Select>
                            </Field>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style ">회원 선택</span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex flex-col">

                                <div className="search-member">
                                    <Field className="!pb-0 flex relative w-full ">
                                        <Input name="full_name" className="w-full "
                                               placeholder="Search for organizational groups."/>
                                        <span className={`bg-white cursor-pointer z-10 absolute right-4 top-1/2 transform -translate-y-1/2`}><img
                                            src="/images/search.png" alt="search"/></span>
                                    </Field>
                                </div>

                                <ul className="border border-commonBorderColor mt-3 custom-scrollbar-w-6 h-[230px]">

                                    <li className="flex border-b border-commonBorderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                                        <span>Hong Gil-dong (hgd1)</span>
                                        <span className="text-textSubColor">hgd@kcinfra.co.kr</span>
                                    </li>
                                    <li className="flex border-b border-commonBorderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                                        <span>Hong Gil-dong (hgd1)</span>
                                        <span className="text-textSubColor">hgd@kcinfra.co.kr</span>
                                    </li>
                                    <li className="flex border-b border-commonBorderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                                        <span>Hong Gil-dong (hgd1)</span>
                                        <span className="text-textSubColor">hgd@kcinfra.co.kr</span>
                                    </li>
                                    <li className="flex border-b border-commonBorderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                                        <span>Hong Gil-dong (hgd1)</span>
                                        <span className="text-textSubColor">hgd@kcinfra.co.kr</span>
                                    </li>
                                    <li className="flex border-b border-commonBorderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                                        <span>Hong Gil-dong (hgd1)</span>
                                        <span className="text-textSubColor">hgd@kcinfra.co.kr</span>
                                    </li>
                                    <li className="flex border-b border-commonBorderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                                        <span>Hong Gil-dong (hgd1)</span>
                                        <span className="text-textSubColor">hgd@kcinfra.co.kr</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-commonBorderColor py-6">
                        <Button color="transparent" type="submit">
                            취소
                        </Button>
                        <Button color="primary" type="submit">
                            등록
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;