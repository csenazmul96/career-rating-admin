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
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import SearchResult
    from "@/app/(root-layout)/(main)/design/members-and-message-management-design/sending-management-design/mail-sms-reservation/sms-reservation-delivery-inquiry/SearchResult";


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


    const [isSeachVisible, setIsSeachVisible] = useState(false);

    const handleInputClick = () => {
        setIsSeachVisible(true); // Show the div on input click
    };

    return (
        <div className="flex flex-col">
            <Heading level={2}>
                SMS 발송
            </Heading>
            <div className="flex gap-7">
                <div className="flex w-3/4">
                    <div className="sms-reservation-delivery-inquiry-form w-full">

                        <FieldWrapper label="발신번호">
                            <LmsStandardInputField placeholder="01-6091-1180"/>
                        </FieldWrapper>

                        <FieldWrapper label="예약발송">
                            <Field className="!pb-0  relative">
                                <DatePicker ref={datePickerRef}
                                            className="form-input-common-style placeholder-textColor"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}/>
                                <span onClick={handleIconClick}
                                      className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                    src="/images/membership/date-picker.png" alt=""/></span>
                            </Field>

                            <LmsStandardSelectInputV2 fieldClass="w-[80px]"
                                                      options={[{id: '1', name: '1'}, {id: '2', name: '2'}]} name="1"/>

                            <span className="text-[19px] text-black">시</span>

                            <LmsStandardSelectInputV2 fieldClass="w-[80px]"
                                                      options={[{id: '1', name: '1'}, {id: '2', name: '2'}]}
                                                      name="1"/>
                            <span className="text-[19px] text-black">시</span>

                            <CheckboxField>
                                <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                          defaultChecked/>
                                <Label className="font-normal">예약발송으로 발송</Label>
                            </CheckboxField>

                        </FieldWrapper>

                        <FieldWrapper label="발송대상" singleElement={true}>
                            <div className="flex flex-col w-full">
                                <div className="flex w-full relative">
                                    <LmsSearchInput onClick={handleInputClick} />
                                    {isSeachVisible && (
                                        <SearchResult setIsSeachVisible={setIsSeachVisible}  />
                                    )}

                                </div>

                                <ul className={`w-full mt-4 border border-borderColor custom-scrollbar h-[300px]`}>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>

                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between w-full border-b border-borderColor cursor-pointer p-4">
                                        <div className="flex gap-x-3">
                                            <span className={`text-base text-textSubColor`}>홍길동</span>
                                            <span>010-1234-5678</span>
                                        </div>
                                        <div className="flex">
                                            <span
                                                className={`text-[30px] font-normal leading-4 text-textSubColor`}>-</span>
                                        </div>
                                    </li>
                                </ul>


                            </div>

                        </FieldWrapper>


                        <FieldWrapper label="발신번호" className="border-b border-commonBorderColor">
                            <CheckboxField>
                                <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                          defaultChecked/>
                                <Label className="font-normal">예약발송으로 발송</Label>
                            </CheckboxField>
                        </FieldWrapper>

                    </div>
                </div>

                <div className="flex w-1/4 border border-commonBorderColor h-[620px] p-4">
                    <span> 이곳에 문자 내용을 입력하세요. </span>
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
                    <Button color="primary" type="submit">
                        발송하기
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default Page;