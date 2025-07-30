"use client"

import React, {useRef, useState} from 'react';
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
import DatePicker from "react-datepicker";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import "react-datepicker/dist/react-datepicker.css";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import FieldWrapper from "@/components/common/form/FieldWrapper";

import * as Headless from '@headlessui/react'
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import {Tooltip} from "flowbite-react";
import ToolTip from "@/components/common/ToolTip";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";


const Page = () => {


    const [startDate, setStartDate] = useState(new Date());
    const datePickerRef = useRef(null); // Create a ref for the DatePicker

    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true); // Programmatically open the DatePicker
        }
    }

    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
    };


    return (
        <div className="flex flex-col">
            <Heading level={2}>
                <div className="flex items-center">
                    <span>회원 일괄 등록</span>
                    <span>
                        <ToolTip title={`광고성 메세지`}
                                 content={`영리 또는 광고성 메시지의 경우 선택해주세요. 문자 앞에 ‘(광고)’라는 메시지가 기입되어 전송됩니다.`}/>
                    </span>
                </div>
            </Heading>
            <p className={`text-[#555555] pb-5 border-b border-commonBorderColor mb-5 pt-3`}>파일로 회원을 일괄 등록합니다.</p>
            <Heading level={2}>
                <div className="flex items-center pt-4">
                    <span>회원 일괄 등록 방법</span>
                </div>
            </Heading>
            <h3 className={`text-[19px] text-[#000] font-bold pt-7`}>1. 등록 파일 다운로드</h3>
            <p className={`text-[#555555] py-5 `}>먼저 사용자 등록 파일 UsersUpload.csv를 다운로드합니다. </p>
            <div className="flex flex-col member-send-information">
                <div className="form">

                    <FieldWrapper label="등록 파일 양식" className={`border-b border-commonBorderColor`} singleElement={true}>
                        <div className="download-item flex items-center justify-between w-full">
                            <div className="left flex items-center gap-2">
                                <span><img src="/images/membership/Extensions.png" alt=""/></span>
                                <span>UsersUpload.csv</span>
                            </div>
                            <div className="right flex gap-3">
                                <span className="text-textSubColor">14.12MB</span>
                                <span><img src="/images/membership/download.png" alt=""/></span>
                                <span><img src="/images/membership/open_in_new.png" alt=""/></span>
                            </div>
                        </div>
                    </FieldWrapper>

                    <h3 className={`text-[19px] text-[#000] font-bold pt-7`}>2. 파일 작성</h3>
                    <p className={`text-[#555555] py-5 `}>다운 받은 등록 파일을 아래 안내대로 작성한 후 파일을 첨부합니다.</p>

                    <div className="img pt-2 pb-8">
                        <img src="/images/membership/chart.png" alt=""/>
                    </div>

                    <FieldWrapper label="필수 입력 항목"  singleElement={true}>
                        <div className="flex items-centerw-full">
                            <p className={`text-baseNormal`}>사용자그룹은 해당 그룹 선택 후 '선택그룹경로'를 클릭하여 복사된 경로 데이터를 입력합니다.</p>
                        </div>
                    </FieldWrapper>
                    <FieldWrapper label="입력 가이드"  singleElement={true}>
                        <div className="flex items-centerw-full">
                            <ul className="flex flex-col gap-1">
                                <li>- 생년월일 : 예)19771227</li>
                                <li>- 사용자그룹은 해당 그룹 선택 후 '선택그룹경로'를 클릭하여 복사된 경로 데이터를 입력합니다.</li>
                                <li>- 회원 아이디는 영문, 숫자, .(점), @, -, _만 사용 가능합니다.</li>
                            </ul>
                        </div>
                    </FieldWrapper>

                    <FieldWrapper label="등록 파일 양식"  singleElement={true}>
                        <div className="download-item flex items-center justify-between w-full">
                            <div
                                className="flex items-center justify-between border border-dotted border-[#D8D8D8] p-4 w-full">
                                <div className="flex items-center text-textSubColor">
                                    <span className="pr-2"><img src="/images/membership/note-add-gray.png"
                                                                alt=""/></span>
                                    첨부할 파일을 여기에 끌어다 놓거나 파일 선택 버튼을 직접 선택해주세요.
                                </div>
                                <div className="flex">
                                    <div className="flex flex-col items-start space-y-3">
                                        <Button color="primary" type="button" onClick={handleClick}>
                                            <span><img src="/images/membership/note_add.png" alt=""/></span> 파일선택
                                        </Button>

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                        {fileName && (
                                            <p className="text-sm text-gray-700">
                                                <strong>Selected File:</strong> {fileName}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FieldWrapper>

                    <FieldWrapper label="입력 가이드"  singleElement={true}>
                        <LmsStandardSelectInputV2 fieldClass={`w-[140px]`}/>
                    </FieldWrapper>
                    <FieldWrapper label="입력 가이드" className={`border-b border-commonBorderColor`} singleElement={true}>
                        <LmsStandardSelectInputV2 fieldClass={`w-[155px]`}/>
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