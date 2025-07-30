"use client"

import React, {useRef, useState} from 'react';
import {Heading} from "@/components/common/heading";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import {Button} from "@/components/common/button";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import { Switch } from '@headlessui/react'
import ToggleSwitch from "@/components/common/form/ToggleSwitch";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";

const Page = () => {

    const handleToggleChange = (value, toggleName) => {

        // You can add additional logic here based on the selected value
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
            <Heading level={2}>과정 등록</Heading>

            <div className="flex flex-col">

                <div className="flex">
                    <div className="flex-1">
                        <FieldWrapper  label="과정 구분" className={`h-full`}>

                            <LmsStandardRadioFieldGroup options={[{id: '1', name: '상시'}, {id: '2', name: '정규'}]}
                                                        name="example"/>
                        </FieldWrapper>
                    </div>
                    <div className="flex-1">
                        <FieldWrapper label="노출 여부" className={`h-full`}>
                            <ToggleSwitch
                                options={[
                                    { value: "visible", label: "보임" },
                                    { value: "hidden", label: "숨김" },
                                ]}
                                onChange={(value) => handleToggleChange(value, "Korean toggle")}
                            />
                        </FieldWrapper>
                    </div>
                </div>

                <FieldWrapper label="과정명" singleElement={true}>
                    <LmsStandardInputField   singleElement={true} placeholder={`과정명을 입력하세요.`} fieldClass="w-full" />
                </FieldWrapper>

                <FieldWrapper label="카테고리" singleElement={true}>
                    <div className="inline-flex items-center gap-4 border text-textSubColor border-commonBorderColor px-4 h-[40px]">
                        <span><img src="/images/curriculum-management/li_bookmark.png" alt=""/></span>
                        <span>카테고리 선택</span>
                    </div>
                </FieldWrapper>

                <FieldWrapper label="대표 이미지" singleElement={true}>
                    <div
                        className="flex items-center justify-between border border-dotted border-[#D8D8D8] p-4">
                        <div className="flex items-center text-textSubColor text-[17px]">
                                    <span className="pr-2"><img src="/images/membership/note-add-gray.png"
                                                                alt=""/></span>
                            첨부할 파일을 여기에 끌어다 놓으세요. 대표 이미지는 최대 1장 가능하며, jpg, png 확장자만 업로드 가능합니다.
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
                </FieldWrapper>

                <FieldWrapper label="수강료" singleElement={true}>
                    <div className="flex items-center justify-between">
                        <div className="inner flex">
                            <div className="flex items-center pr-10 gap-4">
                                <span className={`pr-4 font-bold`}>정가</span>
                                <LmsStandardInputField placeholder={`0`} fieldClass="w-[160px]"/>
                                <span  className={`text-baseNormal`}>원</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`pr-2 font-bold`}>정가</span>
                                <LmsStandardInputField placeholder={`0`} fieldClass="w-[56px]"/>
                                <span className={`text-baseNormal`}>%</span>
                            </div>
                        </div>
                        <div className="inner">
                            <div className="flex gap-4 items-center">
                                <span className={`text-themeColor font-bold pr-2`}>최종금액</span>
                                <LmsStandardInputField placeholder={`0`} fieldClass="w-[160px]"/>
                                <span>원</span>
                            </div>
                        </div>
                    </div>
                </FieldWrapper>

            </div>

        </div>
    );
};

export default Page;