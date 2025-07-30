"use client"

import React from 'react';
import Dropzone from 'react-dropzone'
import {Heading} from "@/components/common/heading";
import {Button} from "@/components/common/button";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import Image from "next/image";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import {IoMdClose} from "react-icons/io";
const Page = () => {
    return (
        <div>
            <Heading level={2}>
                <span>동영상 등록</span>
            </Heading>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section className="flex flex-col border border-dotted border-commonBorderColor w-full ">
                        <div {...getRootProps()}
                             className={`h-[275px] flex items-center justify-center flex-col gap-3`}>
                            <input {...getInputProps()} />
                            <img src="/images/content-management/drag.png" className={`mb-2`} alt=""/>
                            <p>파일을 이곳에 드롭하세요.</p>
                            <p className={`flex items-center mb-2`}><img className={`size-[13px] mr-2`}
                                                                         src="/images/login-img.png" alt=""/> 최대 <span
                                className={`font-bold text-themeColor mr-2`}>10개 </span> MP4, MOV 파일 첨부 가능합니다.</p>
                            <Button color={`primary`} className={`w-[121px] max-w-[121px] !min-w-[121px] h-[40px] !p-0`}> <img
                                src="/images/content-management/plus.png" alt=""/> 파일추가</Button>
                        </div>
                    </section>
                )}
            </Dropzone>


            <div className="download-list  w-full my-10">
                <ul className="w-full flex flex-col border gap-y-7 border-commonBorderColor p-7">

                    <li className="download-item flex items-center justify-between w-full">
                        <div className="left flex items-center gap-3">
                            <span><img src="/images/content-management/Extensions.png" alt=""/></span>
                            <span className={`text-textSubColor`}>피그마의 정석 [제1강] 임태훈 강사.mp4</span>
                        </div>
                        <div className="right flex gap-3">
                            <span className="text-textSubColor">14.12MB</span>
                            <span><img src="/images/membership/download.png" alt=""/></span>
                        </div>
                    </li>

                    <li className="download-item flex items-center justify-between w-full">
                        <div className="left flex items-center gap-3">
                            <span><img src="/images/content-management/Extensions.png" alt=""/></span>
                            <span className={`text-textSubColor`}>피그마의 정석 [제1강] 임태훈 강사.mp4</span>
                        </div>
                        <div className="right flex gap-3">
                            <span className="text-textSubColor">14.12MB</span>
                            <span><img src="/images/membership/download.png" alt=""/></span>
                        </div>
                    </li>

                    <li className="download-item flex items-center justify-between w-full">
                        <div className="left flex items-center gap-3">
                            <span><img src="/images/content-management/Extensions.png" alt=""/></span>
                            <span className={`text-textSubColor`}>피그마의 정석 [제1강] 임태훈 강사.mp4</span>
                        </div>
                        <div className="right flex items-center gap-3">
                            <span className="text-textSubColor">14.12MB</span>
                            <span><IoMdClose className={`size-[20px] text-[#C6C6C6]`} /></span>
                        </div>
                    </li>

                </ul>
            </div>


            <FieldWrapper label="템플릿명">
                <LmsStandardSelectInputV2 fieldClass={`w-[230px]`}
                                          options={[{id: '1', name: 'Option 1'}, {id: '2', name: 'Option 2'}]}
                                          name="example"/>
            </FieldWrapper>

            <FieldWrapper label="템플릿명">
                <LmsStandardRadioFieldGroup
                    options={[{id: '1', name: '전체공개'}, {id: '2', name: '나만보기'}, {id: '3', name: '개별설정'}]}
                    name="example"/>
            </FieldWrapper>

            <FieldWrapper label="템플릿명">
                <LmsSearchInput fieldClass={`w-[270px]`}/>
            </FieldWrapper>


            <FieldWrapper label="템플릿명" singleElement={true} className={`border-b border-commonBorderColor`}>
                <div className="flex border border-borderColor flex-col">
                    <div className="flex border-b border-b-borderColor">
                        <div className="flex flex-col w-[270px] border-r border-r-borderColor">
                            <div
                                className="flex justify-between items-center border-b border-b-borderColor py-2 px-4">
                                <span className={`text-black text-[13px]`}> 관리자 유형</span>
                                <Button type="button"
                                        color="transparentSmall"
                                        className=" w-[73px] min-w-[auto] h-[28px] !pl-1 !pr-1 text-center cursor-pointer !text-[13px]">
                                    전체 선택
                                </Button>
                            </div>
                            <div
                                className="flex justify-between   custom-scrollbar h-[350px]">
                                <ul className="w-full">
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원 관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원 관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원 관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원 관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원 관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원 관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원 관리자</Label>
                                        </CheckboxField>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">

                            <div
                                className="flex justify-between items-center border-b border-b-borderColor py-2 px-4">
                                <span className={`text-black text-[13px]`}> 관리자</span>
                                <Button type="button"
                                        color="transparentSmall"
                                        className=" w-[73px] min-w-[auto] h-[28px] !pl-1 !pr-1 text-center cursor-pointer !text-[13px]">
                                    관리자
                                </Button>
                            </div>

                            <div
                                className="flex justify-between   custom-scrollbar h-[350px]">
                                <ul className="w-full">
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원
                                                관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원
                                                관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원
                                                관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원
                                                관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원
                                                관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원
                                                관리자</Label>
                                        </CheckboxField>
                                    </li>
                                    <li className={`px-4 py-3`}>
                                        <CheckboxField>
                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                            <Label
                                                className="font-normal cursor-pointer text-black">회원
                                                관리자</Label>
                                        </CheckboxField>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-2">
                        <div className="flex items-center justify-between w-full">
                            <div className="space-x-2">
                                <Button color="transparentRoundedSmall">
                                    sdasd
                                    <span><img src="/images/membership/close.png" alt=""/></span>
                                </Button>
                                <Button color="transparentRoundedSmall">
                                    sdasd
                                    <span><img src="/images/membership/close.png" alt=""/></span>
                                </Button>
                            </div>
                            <div className="flex">
                                <Button color="transparent"
                                        className="min-w-[auto]  h-[28px] !pl-3 !pr-3 cursor-pointer !text-[13px]">
                                                        <span><img src="/images/membership/refresh.png"
                                                                   alt=""/></span> 초기화
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </FieldWrapper>

            <div className="flex items-center justify-between mt-6 mb-6">

                <div className="member-collapse-list">
                    <Button color="transparent" className="w-full text-center"
                    > <span>
                            <Image src={menuCollapse} alt='menu collapse'/> </span> <span
                        className="text-19px">목록</span>
                    </Button>
                </div>

                <div className="flex items-end justify-end">
                    <Button color="primary">
                        등록
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Page;