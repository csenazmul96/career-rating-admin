"use client"

import React, {useRef, useState} from 'react';
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import {Heading} from "@/components/common/heading";
import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import * as Headless from "@headlessui/react";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {ErrorMessage, Field, Label} from "@/components/common/fieldset";
import {Select} from "@/components/common/select";
import DatePicker from "react-datepicker";
import {Input} from "@/components/common/input";
import {IoSearchOutline} from "react-icons/io5";
import {Button} from "@/components/common/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField, CheckboxGroup} from "@/components/common/checkbox";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import {
    Pagination,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious
} from "@/components/common/pagination";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Textarea} from "@/components/common/textarea";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

const Page = () => {

    const [startDate, setStartDate] = useState(new Date());
    const datePickerRef = useRef(null); // Create a ref for the DatePicker

    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true); // Programmatically open the DatePicker
        }
    }

    return (
        <div className="flex flex-col relative">
            <Heading level={2} className=" top-[10px] absolute">
                <div className="flex items-center">
                    <span>메일/SMS/예약 발송 조회</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">
                <TabList className="tab-list-controller">
                    <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>메일</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>SMS</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>예약발송</Tab>
                </TabList>
                <TabPanels className="tab-content-controller">

                    <TabPanel>

                        <FilterForm>

                            <FilterFormWrapper isHalfWidth={true} label="발송일">
                                <Field className="!pb-0  relative">
                                    <DatePicker ref={datePickerRef}
                                                className="form-input-common-style placeholder-textColor"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                    <span onClick={handleIconClick}
                                          className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                        src="/images/membership/date-picker.png" alt=""/></span>
                                </Field>
                                <span className="text-[19px] text-black">-</span>
                                <Field className="!pb-0  relative">
                                    <DatePicker ref={datePickerRef}
                                                className="form-input-common-style placeholder-textColor"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                    <span onClick={handleIconClick}
                                          className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                        src="/images/membership/date-picker.png" alt=""/></span>
                                </Field>
                                <div
                                    className="space-x-4 time-filter flex items-center justify-center w-[170px] h-[48px] border border-borderColor py-[3px] px-[15px] placeholder-textColor text-[15px] bg-white">
                                    <button className="">1일</button>
                                    <button className=" text-themeColor bg-[#F4F9FF]">7일</button>
                                    <button className="">30일</button>
                                </div>
                            </FilterFormWrapper>

                            <FilterFormWrapper label="검색" singleElement={true}  className="border-t border-commonBorderColor">
                                <LmsStandardSelectInputV2/>
                                <LmsSearchInput/>
                                <Button type="button" color="primary">asdas</Button>
                            </FilterFormWrapper>

                        </FilterForm>


                        <div className="mail-common-table py-10">
                            <div className="table-filter flex items-center pb-6">
                                <div className="flex items-center gap-2">
                                    <div className="">Total</div>
                                    <div className="text-themeColor font-bold">100건</div>
                                    <div className="">
                                        <Select size="small" name="status" className="">
                                            <option value="active">YYYY</option>
                                            <option value="paused">직접 입력</option>
                                            <option value="delayed">직접 입력</option>
                                            <option value="canceled">직접 입력</option>
                                        </Select>
                                    </div>
                                    <div>건 씩보기</div>
                                </div>
                                <div className="flex flex-1 items-center justify-end gap-3">
                                    <Link className="common-link-transparent-medium" href="/design/members-and-message-management-design/sending-management-design/mail-sms-reservation/payment-receipt">
                                        <span>payment receipt</span>
                                    </Link>
                                    <Link className="common-link-transparent-medium"
                                        href="/design/members-and-message-management-design/sending-management-design/mail-sms-reservation/mail-reservation-delivery-inquiry">
                                        <span><img src="/images/membership/marketing-info/message.png" alt=""/></span>
                                        <span>메일 발송</span>
                                    </Link>

                                </div>
                            </div>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>회원명</TableHeader>
                                        <TableHeader>이메일</TableHeader>
                                        <TableHeader>제목</TableHeader>
                                        <TableHeader>발송일시</TableHeader>
                                        <TableHeader>발송상태</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="dangerLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="dangerLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="dangerLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                            <div className="pagination flex items-center justify-center pt-10">
                                <Pagination>
                                    <PaginationPrevious href="?page=2"> <span><MdChevronLeft/></span> <span>이전</span>
                                    </PaginationPrevious>
                                    <PaginationList>
                                        <PaginationPage href="?page=1">1</PaginationPage>
                                        <PaginationPage href="?page=2">2</PaginationPage>
                                        <PaginationPage className="!text-white" href="?page=3" current>
                                            3
                                        </PaginationPage>
                                        <PaginationPage href="?page=4">4</PaginationPage>
                                        <PaginationPage href="?page=5">5</PaginationPage>
                                        <PaginationPage href="?page=6">6</PaginationPage>
                                        <PaginationPage href="?page=7">7</PaginationPage>
                                        <PaginationPage href="?page=8">8</PaginationPage>
                                    </PaginationList>
                                    <PaginationNext href="?page=4"> <span>다음</span> <span><MdChevronRight/></span>
                                    </PaginationNext>
                                </Pagination>
                            </div>
                        </div>

                    </TabPanel>


                    <TabPanel>

                        <FilterForm>

                            <FilterFormWrapper isHalfWidth={true} label="발송일">
                                <Field className="!pb-0  relative">
                                    <DatePicker ref={datePickerRef}
                                                className="form-input-common-style placeholder-textColor"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                    <span onClick={handleIconClick}
                                          className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                        src="/images/membership/date-picker.png" alt=""/></span>
                                </Field>
                                <span className="text-[19px] text-black">-</span>
                                <Field className="!pb-0  relative">
                                    <DatePicker ref={datePickerRef}
                                                className="form-input-common-style placeholder-textColor"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                    <span onClick={handleIconClick}
                                          className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                        src="/images/membership/date-picker.png" alt=""/></span>
                                </Field>
                                <div
                                    className="space-x-4 time-filter flex items-center justify-center w-[170px] h-[48px] border border-borderColor py-[3px] px-[15px] placeholder-textColor text-[15px] bg-white">
                                    <button className="">1일</button>
                                    <button className=" text-themeColor bg-[#F4F9FF]">7일</button>
                                    <button className="">30일</button>
                                </div>
                            </FilterFormWrapper>

                            <FilterFormWrapper label="검색" singleElement={true}  className="border-t border-commonBorderColor">
                                <LmsStandardSelectInputV2/>
                                <LmsSearchInput/>
                                <Button type="button" color="primary">asdas</Button>
                            </FilterFormWrapper>

                        </FilterForm>

                        <div className="sms-common-table py-10">
                            <div className="table-filter flex items-center pb-6">
                                <div className="flex items-center gap-2">
                                    <div className="">Total</div>
                                    <div className="text-themeColor font-bold">100건</div>
                                    <div className="">
                                        <Select size="small" name="status" className="">
                                            <option value="active">YYYY</option>
                                            <option value="paused">직접 입력</option>
                                            <option value="delayed">직접 입력</option>
                                            <option value="canceled">직접 입력</option>
                                        </Select>
                                    </div>
                                    <div>건 씩보기</div>
                                </div>
                                <div className="flex flex-1 items-center justify-end gap-3">
                                    <Link className="common-link-transparent-medium"
                                          href="/design/members-and-message-management-design/sending-management-design/mail-sms-reservation/payment-receipt">
                                        <span>payment receipt</span>
                                    </Link>
                                    <Link className="common-link-transparent-medium"
                                          href="/design/members-and-message-management-design/sending-management-design/mail-sms-reservation/sms-reservation-delivery-inquiry">
                                        <span><img src="/images/membership/marketing-info/message.png" alt=""/></span>
                                        <span>SMS 발송</span>
                                    </Link>

                                </div>
                            </div>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>회원명</TableHeader>
                                        <TableHeader>이메일</TableHeader>
                                        <TableHeader>제목</TableHeader>
                                        <TableHeader>발송일시</TableHeader>
                                        <TableHeader>발송상태</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="dangerLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="dangerLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="dangerLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>kcs_kci@kcinfra.co.kr</TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>
                                            2024. 07. 02 11:22:30
                                        </TableCell>
                                        <TableCell>
                                            <Button color="primaryLightRoundedSmall">
                                                성공
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                            <div className="pagination flex items-center justify-center pt-10">
                                <Pagination>
                                    <PaginationPrevious href="?page=2"> <span><MdChevronLeft/></span> <span>이전</span>
                                    </PaginationPrevious>
                                    <PaginationList>
                                        <PaginationPage href="?page=1">1</PaginationPage>
                                        <PaginationPage href="?page=2">2</PaginationPage>
                                        <PaginationPage className="!text-white" href="?page=3" current>
                                            3
                                        </PaginationPage>
                                        <PaginationPage href="?page=4">4</PaginationPage>
                                        <PaginationPage href="?page=5">5</PaginationPage>
                                        <PaginationPage href="?page=6">6</PaginationPage>
                                        <PaginationPage href="?page=7">7</PaginationPage>
                                        <PaginationPage href="?page=8">8</PaginationPage>
                                    </PaginationList>
                                    <PaginationNext href="?page=4"> <span>다음</span> <span><MdChevronRight/></span>
                                    </PaginationNext>
                                </Pagination>
                            </div>
                        </div>

                    </TabPanel>

                    <TabPanel>

                        <FilterForm>

                            <FilterFormWrapper isHalfWidth={true} label="발송일">
                                <Field className="!pb-0  relative">
                                    <DatePicker ref={datePickerRef}
                                                className="form-input-common-style placeholder-textColor"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                    <span onClick={handleIconClick}
                                          className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                        src="/images/membership/date-picker.png" alt=""/></span>
                                </Field>
                                <span className="text-[19px] text-black">-</span>
                                <Field className="!pb-0  relative">
                                    <DatePicker ref={datePickerRef}
                                                className="form-input-common-style placeholder-textColor"
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}/>
                                    <span onClick={handleIconClick}
                                          className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                        src="/images/membership/date-picker.png" alt=""/></span>
                                </Field>
                                <div
                                    className="space-x-4 time-filter flex items-center justify-center w-[170px] h-[48px] border border-borderColor py-[3px] px-[15px] placeholder-textColor text-[15px] bg-white">
                                    <button className="">1일</button>
                                    <button className=" text-themeColor bg-[#F4F9FF]">7일</button>
                                    <button className="">30일</button>
                                </div>
                            </FilterFormWrapper>

                            <FilterFormWrapper label="검색" singleElement={true}  className="border-t border-commonBorderColor">
                                <LmsStandardSelectInputV2/>
                                <LmsSearchInput/>
                                <Button type="button" color="primary">asdas</Button>
                            </FilterFormWrapper>

                        </FilterForm>


                        <div className="member-list-table pt-16">
                            <div className="table-filter flex items-center pb-6">
                                <div className="flex items-center gap-2">
                                    <div className="">Total</div>
                                    <div className="text-themeColor font-bold">100 cases</div>
                                    <div className="">
                                        <Select size="small" name="status" className="">
                                            <option value="active">YYYY</option>
                                            <option value="paused">직접 입력</option>
                                            <option value="delayed">직접 입력</option>
                                            <option value="canceled">직접 입력</option>
                                        </Select>
                                    </div>
                                    <div>건 씩보기</div>
                                </div>
                                <div className="flex flex-1 items-center justify-end gap-3">
                                    <Button color="transparentMedium">
                                        <span><img src="/images/membership/menu-collapse-small.png" alt=""/></span>
                                        <span>목록</span>
                                    </Button>
                                </div>
                            </div>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>
                                            구분
                                        </TableHeader>
                                        <TableHeader>회원명</TableHeader>
                                        <TableHeader>연락처</TableHeader>
                                        <TableHeader>제목</TableHeader>
                                        <TableHeader>발송일시</TableHeader>
                                        <TableHeader>발송상태</TableHeader>
                                        <TableHeader></TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            이메일
                                        </TableCell>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>
                                            kci@kicnfra.co.kr
                                        </TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>2024. 07. 02 11:22:30</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                예약
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button color="transparentSmall">
                                                <span><img src="/images/membership/filter.png" alt=""/></span>
                                               <span>예약</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            이메일
                                        </TableCell>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>
                                            kci@kicnfra.co.kr
                                        </TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>2024. 07. 02 11:22:30</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                예약
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button color="transparentSmall">
                                                <span><img src="/images/membership/filter.png" alt=""/></span>
                                                <span>예약</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            이메일
                                        </TableCell>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>
                                            kci@kicnfra.co.kr
                                        </TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>2024. 07. 02 11:22:30</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                예약
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button color="transparentSmall">
                                                <span><img src="/images/membership/filter.png" alt=""/></span>
                                                <span>예약</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            이메일
                                        </TableCell>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>
                                            kci@kicnfra.co.kr
                                        </TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>2024. 07. 02 11:22:30</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                예약
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button color="transparentSmall">
                                                <span><img src="/images/membership/filter.png" alt=""/></span>
                                                <span>예약</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            이메일
                                        </TableCell>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>
                                            kci@kicnfra.co.kr
                                        </TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>2024. 07. 02 11:22:30</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                예약
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button color="transparentSmall">
                                                <span><img src="/images/membership/filter.png" alt=""/></span>
                                                <span>예약</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            이메일
                                        </TableCell>
                                        <TableCell>김철수</TableCell>
                                        <TableCell>
                                            kci@kicnfra.co.kr
                                        </TableCell>
                                        <TableCell>업데이트 사항 공지드립니다.</TableCell>
                                        <TableCell>2024. 07. 02 11:22:30</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                예약
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button color="transparentSmall">
                                                <span><img src="/images/membership/filter.png" alt=""/></span>
                                                <span>예약</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>

                            <div className="pagination flex items-center justify-center pt-10">
                                <Pagination>
                                    <PaginationPrevious href="?page=2"> <span><MdChevronLeft/></span> <span>이전</span>
                                    </PaginationPrevious>
                                    <PaginationList>
                                        <PaginationPage href="?page=1">1</PaginationPage>
                                        <PaginationPage href="?page=2">2</PaginationPage>
                                        <PaginationPage className="!text-white" href="?page=3" current>
                                            3
                                        </PaginationPage>
                                        <PaginationPage href="?page=4">4</PaginationPage>
                                        <PaginationPage href="?page=5">5</PaginationPage>
                                        <PaginationPage href="?page=6">6</PaginationPage>
                                        <PaginationPage href="?page=7">7</PaginationPage>
                                        <PaginationPage href="?page=8">8</PaginationPage>
                                    </PaginationList>
                                    <PaginationNext href="?page=4"> <span>다음</span> <span><MdChevronRight/></span>
                                    </PaginationNext>
                                </Pagination>
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
};

export default Page;