"use client"

import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Heading} from "@/components/common/heading";
import * as Headless from "@headlessui/react";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Field, Label} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {Select} from "@/components/common/select";
import DatePicker from "react-datepicker";
import React, { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField, CheckboxGroup} from "@/components/common/checkbox";
import {Button} from "@/components/common/button";
import {
    Pagination,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious
} from "@/components/common/pagination";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {IoSearchOutline} from "react-icons/io5";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import {Textarea} from "@/components/common/textarea";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";

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
                    <span>사이트 로그인 로그</span>
            </Heading>
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">
                <TabList className="tab-list-controller">
                    <Tab
                        className={({selected}) => `tab-list-controller-btn  ${selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}`}>사이트 로그인 로그</Tab>
                    <Tab
                        className={({selected}) => `tab-list-controller-btn  ${selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}`}>관리자 작업 로그</Tab>

                </TabList>
                <TabPanels className="tab-content-controller">

                    <TabPanel>

                        <div className="activity-log-form bg-secondaryBgColor border-t border-commonBorderColor py-6 px-12 ">

                            <div className="flex items-center border-b border-commonBorderColor pb-3">
                                <div className="flex flex-col w-1/2">
                                    <div className="flex items-stretch">

                                        <div className="left-col  flex items-center w-[100px] bg-secondaryBgColor">
                                            <span className="common-label-style">회원유형 </span>
                                        </div>
                                        <div className="right-col flex-1 py-4 pl-[20px]">
                                            <RadioGroup className="flex  space-x-6">
                                                <RadioField>
                                                    <Radio color="lmsradio" value="permitv"/>
                                                    <Label className="font-normal">가입일</Label>
                                                </RadioField>
                                                <RadioField>
                                                    <Radio color="lmsradio" value="forbida"/>
                                                    <Label className="font-normal">삭제일</Label>
                                                </RadioField>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2">

                                    <div className="flex items-stretch">
                                        <div className="left-col  flex items-center w-[100px] bg-secondaryBgColor">
                                            <span className="common-label-style">회원유형 </span>
                                        </div>
                                        <div className="right-col flex-1 py-4 pl-[20px]">
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
                                                <span className="w-[0px]"></span>
                                                <div
                                                    className="space-x-4 time-filter flex items-center justify-center w-[170px] h-[48px] border border-borderColor py-[3px] px-[15px] placeholder-textColor text-[15px] bg-white">
                                                    <button className="">1일</button>
                                                    <button className=" text-themeColor bg-[#F4F9FF]">7일</button>
                                                    <button className="">30일</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full pt-3">
                                <div className="flex items-stretch">
                                    <div className="left-col flex items-center w-[100px] bg-secondaryBgColor">
                                        <span className="common-label-style">검색 </span>
                                    </div>
                                    <div className="right-col flex-1 py-4 pl-[20px]">
                                        <div className="flex gap-x-3 items-center">
                                            <Field className="!pb-0 w-[270px]">
                                                <Select name="status">
                                                    <option value="active">그룹 선택</option>
                                                </Select>
                                            </Field>
                                            <div className="flex flex-1 gap-x-3">
                                                <Field className="!pb-0 flex relative w-full ">
                                                    <Input name="full_name" className="w-full "
                                                           placeholder="Search for organizational groups."/>
                                                    <IoSearchOutline
                                                        className="absolute right-5 top-1/2 transform -translate-y-1/2"/>
                                                </Field>
                                                <Button color="primary">
                                                    검색
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="activity-log-table py-12">
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
                            </div>

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>
                                            회원명(회원ID)
                                        </TableHeader>
                                        <TableHeader>로그인</TableHeader>
                                        <TableHeader>로그아웃</TableHeader>
                                        <TableHeader>접속기기</TableHeader>
                                        <TableHeader>IP</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
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

                        <div className="activity-log-form bg-secondaryBgColor border-t border-commonBorderColor py-6 px-12 ">

                            <div className="flex items-center border-b border-commonBorderColor pb-3">

                                <div className="flex flex-col w-full">

                                    <div className="flex items-stretch">
                                        <div className="left-col  flex items-center w-[100px] bg-secondaryBgColor">
                                            <span className="common-label-style">회원유형 </span>
                                        </div>
                                        <div className="right-col flex-1 py-4 pl-[20px]">
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
                                                <span className="w-[0px]"></span>
                                                <div
                                                    className="space-x-4 time-filter flex items-center justify-center w-[170px] h-[48px] border border-borderColor py-[3px] px-[15px] placeholder-textColor text-[15px] bg-white">
                                                    <button className="">1일</button>
                                                    <button className=" text-themeColor bg-[#F4F9FF]">7일</button>
                                                    <button className="">30일</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full pt-3">
                                <div className="flex items-stretch">
                                    <div className="left-col flex items-center w-[100px] bg-secondaryBgColor">
                                        <span className="common-label-style">검색 </span>
                                    </div>
                                    <div className="right-col flex-1 py-4 pl-[20px]">
                                        <div className="flex gap-x-3 items-center">
                                            <Field className="!pb-0 w-[270px]">
                                                <Select name="status">
                                                    <option value="active">그룹 선택</option>
                                                </Select>
                                            </Field>
                                            <div className="flex flex-1 gap-x-3">
                                                <Field className="!pb-0 flex relative w-full ">
                                                    <Input name="full_name" className="w-full "
                                                           placeholder="Search for organizational groups."/>
                                                    <IoSearchOutline
                                                        className="absolute right-5 top-1/2 transform -translate-y-1/2"/>
                                                </Field>
                                                <Button color="primary">
                                                    검색
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="activity-log-table py-12">
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
                            </div>

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>
                                            회원명(회원ID)
                                        </TableHeader>
                                        <TableHeader>로그인</TableHeader>
                                        <TableHeader>로그아웃</TableHeader>
                                        <TableHeader>접속기기</TableHeader>
                                        <TableHeader>IP</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            김철수 (kjca02)
                                        </TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>2024. 07. 02 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>
                                            27.102.121.46
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