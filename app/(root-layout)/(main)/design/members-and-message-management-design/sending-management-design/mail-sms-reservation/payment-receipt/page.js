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
                    [결제완료] 피그마의 정석 (28강) - 김영훈 강사 수업이 결제 완료 되었습니다.
            </Heading>
            <div className="flex flex-col member-send-information">
                <div className="form">

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style ">발송일시  </span>
                        </div>
                        <div className="custom-common-right-col">
                            <span>2024. 12. 11 09:30:14</span>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style ">메일유형 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <span>수신 동의자</span>
                        </div>
                    </div>

                    <div className="custom-common-row">
                        <div className="custom-common-left-col">
                            <span className="common-label-style ">수신자 </span>
                        </div>
                        <div className="custom-common-right-col">
                            <span>홍길동 hgd1234@kcinfra.co.kr</span>
                        </div>
                    </div>

                    <div className="payment-receipt-area p-10">
                        <p className="pb-7">피그마의 정석 (28강) - 김영훈 강사 수업이 결제 완료 되었습니다.</p>
                        <ul className="pb-7">
                            <li>수업기간: 2024. 12. 23 ~ 2025. 03. 28</li>
                            <li>강사: 김연훈</li>
                            <li>강의 수: 28강</li>
                            <li> 강의 배포 요일: 매주 수요일</li>
                            <li>결제금액: 200,000원</li>
                        </ul>
                        <p className="pb-7">수업시간은 별도로 정해져 있지 않습니다. 편하신 시간 때에 수업 들어주시면 감사하겠습니다. </p>
                        <p className="pb-7">첨부파일로 수업 가이드 및 교안 확인</p>
                    </div>

                    <div className="download-list">
                        <ul className="w-full flex flex-col border gap-y-7 border-commonBorderColor p-7">

                            <li className="download-item flex items-center justify-between w-full">
                                <div className="left">
                                    <span><img src="/images/membership/pdf1.png" alt=""/></span>
                                </div>
                                <div className="right flex gap-3">
                                    <span className="text-textSubColor">14.12MB</span>
                                    <span><img src="/images/membership/download.png" alt=""/></span>
                                    <span><img src="/images/membership/open_in_new.png" alt=""/></span>
                                </div>
                            </li>

                            <li className="download-item flex items-center justify-between w-full">
                                <div className="left">
                                    <span><img src="/images/membership/pdf2.png" alt=""/></span>
                                </div>
                                <div className="right flex gap-3">
                                    <span className="text-textSubColor">14.12MB</span>
                                    <span><img src="/images/membership/download.png" alt=""/></span>
                                    <span><img src="/images/membership/open_in_new.png" alt=""/></span>
                                </div>
                            </li>

                            <li className="download-item flex items-center justify-between w-full">
                                <div className="left">
                                    <span><img src="/images/membership/pdf3.png" alt=""/></span>
                                </div>
                                <div className="right flex gap-3">
                                    <span className="text-textSubColor">14.12MB</span>
                                    <span><img src="/images/membership/download.png" alt=""/></span>
                                    <span><img src="/images/membership/open_in_new.png" alt=""/></span>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="flex items-center justify-end mb-4">
                        <div
                            className="right-col flex gap-4 justify-end items-end flex-1 py-7 ">
                            <Button color="transparent" > <span> <Image
                                src={menuCollapse} alt='menu collapse'/> </span> <span
                                className="text-19px">목록</span>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Page;