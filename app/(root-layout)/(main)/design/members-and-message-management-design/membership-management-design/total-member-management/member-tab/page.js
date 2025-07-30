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
            <Heading level={2} className=" top-[10px]  absolute">
                <div className="flex items-center">
                    <span>수강내역</span>
                </div>
            </Heading>
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">
                <TabList className="tab-list-controller">
                    <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>회원정보</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>수강내역</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>사이트 로그인 로그</Tab>
                </TabList>
                <TabPanels className="tab-content-controller">

                    <TabPanel>
                        <div className="flex flex-col member-registration">

                            <div className="registration-form">
                                <div className="form">
                                    <div className="custom-common-row">
                                        <div className="custom-common-left-col">
                                            <span className="common-label-style ">아이디 <span
                                                className="text-dangerColor">*</span></span>
                                        </div>
                                        <div className="custom-common-right-col">
                                            <div className="flex items-center space-x-5">
                                                <RadioGroup className="flex  space-x-6">
                                                    <RadioField>
                                                        <Radio color="lmsradio" value="permit"/>
                                                        <Label className="font-normal">사용 안함</Label>
                                                    </RadioField>
                                                    <RadioField>
                                                        <Radio color="lmsradio" value="forbid"/>
                                                        <Label className="font-normal">사용</Label>
                                                    </RadioField>
                                                </RadioGroup>
                                                <Field className="!pb-0 w-[170px]">
                                                    <Input name="name" placeholder="동시접속허용인원 입력"/>
                                                </Field>
                                                <span>명</span>
                                            </div>
                                        </div>
                                    </div>
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
                                            <span className="common-label-style ">이름 <span
                                                className="text-dangerColor">*</span></span>
                                        </div>
                                        <div className="custom-common-right-col">
                                            <Field className="!pb-0 w-[270px]">
                                                <Input name="name" placeholder="배지은"/>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="custom-common-row">
                                        <div className="custom-common-left-col">
                                        <span className="common-label-style">비밀번호 <span
                                            className="text-dangerColor">*</span></span>
                                        </div>
                                        <div className="custom-common-right-col">
                                            <div className="flex gap-x-3">
                                                <Field className="!pb-0 w-[270px] relative">
                                                    <Input name="name" placeholder="관리자 유형명을 입력해주세요."/>
                                                    <span
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2"><img
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

                                    <div
                                        className="flex items-center justify-between border-t border-commonBorderColor pt-10">
                                        <div className="left-col flex items-center">
                                            <div className="member-collapse-list pt-3">
                                                <Button color="transparent" className="w-full mb-2 text-center"> <span> <Image
                                                    src={menuCollapse} alt='menu collapse'/> </span> <span
                                                    className="text-19px">목록</span>
                                                </Button>
                                            </div>
                                        </div>
                                        <div
                                            className="right-col flex justify-end items-end flex-1 py-[20px] px-4 pl-[20px] pr-0">
                                            <Button color="primary" type="submit">
                                                등록
                                            </Button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </TabPanel>

                    {/* Displays this panel by default */}
                    <TabPanel>
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
                                            No
                                        </TableHeader>
                                        <TableHeader>회원번호</TableHeader>
                                        <TableHeader>결제수단</TableHeader>
                                        <TableHeader>과정그룹</TableHeader>
                                        <TableHeader>과정명</TableHeader>
                                        <TableHeader>학습시작</TableHeader>
                                        <TableHeader>학습종료</TableHeader>
                                        <TableHeader>학습률</TableHeader>
                                        <TableHeader>상태</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="primaryRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="primaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="primaryRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="primaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="primaryRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="primaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="primaryRoundedSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>12345</TableCell>
                                        <TableCell>
                                            <Button color="primaryLightSmall">
                                                검색
                                            </Button>
                                        </TableCell>
                                        <TableCell>디자인</TableCell>
                                        <TableCell>포토샵 준비하기</TableCell>
                                        <TableCell>2024. 07. 06</TableCell>
                                        <TableCell>2024. 11. 19</TableCell>
                                        <TableCell>80%</TableCell>
                                        <TableCell>
                                            <Button color="secondaryLightRoundedSmall">
                                                검색
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
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableHeader>
                                        <TableHeader>회원명(회원ID)</TableHeader>
                                        <TableHeader>로그인</TableHeader>
                                        <TableHeader>로그아웃</TableHeader>
                                        <TableHeader>접속기기</TableHeader>
                                        <TableHeader>IP</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <CheckboxGroup className="flex space-x-6">
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              defaultChecked/>
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </CheckboxGroup>
                                        </TableCell>
                                        <TableCell>김철수 (kjca02)</TableCell>
                                        <TableCell>
                                            2024-03-25 16:37:50
                                        </TableCell>
                                        <TableCell>2024-03-25 16:37:50</TableCell>
                                        <TableCell>Window</TableCell>
                                        <TableCell>27.102.121.46</TableCell>
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