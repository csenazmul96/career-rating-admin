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
                <div className="flex items-center justify-between">
                    <span>메일 발송</span>
                    <span className="pl-1 text-base text-textSubColor font-normal "><span
                        className="text-dangerColor">*</span> 필수항목</span>
                </div>
            </Heading>
            <div className="flex flex-col member-send-information">
                <div className="form">


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
                        <div className="custom-common-left-col">
                            <span className="common-label-style">메일 템플릿 선택</span>
                        </div>
                        <div className="custom-common-right-col">
                            <div className="flex gap-x-3 items-center">
                                <Field className="!pb-0  relative">
                                    <DatePicker ref={datePickerRef}
                                                className="form-input-common-style placeholder-textColor"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                    <span onClick={handleIconClick}
                                          className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                        src="/images/membership/date-picker.png" alt=""/></span>
                                </Field>
                                <Field className="!pb-0 w-[80px]">
                                    <Select name="status">
                                        <option value="active">11</option>
                                        <option value="active">11</option>
                                        <option value="active">11</option>
                                    </Select>
                                </Field>
                                <span className="text-[19px] text-black">시</span>
                                <Field className="!pb-0 w-[80px]">
                                    <Select name="status">
                                        <option value="active">11</option>
                                        <option value="active">11</option>
                                        <option value="active">11</option>
                                    </Select>
                                </Field>
                                <span>분</span>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                              defaultChecked/>
                                    <Label className="font-normal">예약발송으로 발송</Label>
                                </CheckboxField>
                            </div>

                        </div>
                    </div>

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