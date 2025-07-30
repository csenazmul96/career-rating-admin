"use client"

import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Heading} from "@/components/common/heading";
import * as Headless from "@headlessui/react";
import {Radio, RadioField} from "@/components/common/radio";
import {Field, Label} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {Select} from "@/components/common/select";
import DatePicker from "react-datepicker";
import React, { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
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
import Link from "next/link";
import RoleFormPermissionGroupSingleElement
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/RoleFormPermissionGroupSingleElement";
import RoleFormPermissionSingleElement
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/RoleFormPermissionSingleElement";
import AllSelectedPermissionTags
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/AllSelectedPermissionTags";
import RoleFormTagsSingleElement
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/RoleFormTagsSingleElement";

const Page = () => {

    const [startDate, setStartDate] = useState(new Date());
    const datePickerRef = useRef(null); // Create a ref for the DatePicker

    const handleIconClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true); // Programmatically open the DatePicker
        }
    }
    return (
        <div className="flex flex-col member-list">
            <Heading level={2}>
                <div className="flex items-center">
                    <span>회원 리스트</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>

            <div className="member-list-form bg-secondaryBgColor border-t border-commonBorderColor py-6 px-12 ">

                <div className="flex border-b border-commonBorderColor pb-3">
                    <div className="flex flex-col w-1/2">
                        <div className="flex items-stretch">
                            <div className="left-col  flex items-center w-[100px] bg-secondaryBgColor">
                                <span className="text-[15px] whitespace-nowrap font-bold">회원유형 </span>
                            </div>
                            <div className="right-col flex-1 py-4 pl-[20px]">
                                <Headless.RadioGroup className="flex pl-[5px] space-y-0 space-x-6 mt-0">
                                    <RadioField>
                                        <Radio color="lmsradio" value="permit"/>
                                        <Label className="font-normal">전체</Label>
                                    </RadioField>
                                    <RadioField>
                                        <Radio color="lmsradio" value="forbid"/>
                                        <Label className="font-normal">회원</Label>
                                    </RadioField>
                                    <RadioField>
                                        <Radio color="lmsradio" value="forbid1"/>
                                        <Label className="font-normal">관리자</Label>
                                    </RadioField>
                                </Headless.RadioGroup>
                            </div>
                        </div>
                        <div className="flex items-stretch">
                            <div className="left-col  flex items-center w-[100px] bg-secondaryBgColor">
                                <span className="text-[15px] whitespace-nowrap font-bold">회원유형 </span>
                            </div>
                            <div className="right-col flex-1 py-4 pl-[20px]">
                                <Field className="!pb-0 w-[270px]">
                                    <Select name="status">
                                        <option value="active">그룹 선택</option>
                                    </Select>
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="flex items-stretch">
                            <div className="left-col  flex items-center w-[100px] bg-secondaryBgColor">
                                <span className="text-[15px] whitespace-nowrap font-bold">상태 </span>
                            </div>
                            <div className="right-col flex-1 py-4 pl-[20px]">
                                <Headless.RadioGroup className="flex pl-[5px] space-y-0 space-x-6 mt-0">
                                    <RadioField>
                                        <Radio color="lmsradio" value="permit"/>
                                        <Label className="font-normal">전체</Label>
                                    </RadioField>
                                    <RadioField>
                                        <Radio color="lmsradio" value="forbid"/>
                                        <Label className="font-normal">회원</Label>
                                    </RadioField>
                                    <RadioField>
                                        <Radio color="lmsradio" value="forbid"/>
                                        <Label className="font-normal">관리자</Label>
                                    </RadioField>
                                </Headless.RadioGroup>
                            </div>
                        </div>
                        <div className="flex items-stretch">
                            <div className="left-col  flex items-center w-[100px] bg-secondaryBgColor">
                                <span className="text-[15px] whitespace-nowrap font-bold">회원유형 </span>
                            </div>
                            <div className="right-col flex-1 py-4 pl-[20px]">
                                <div className="flex gap-x-3 items-center">
                                    <Field className="!pb-0  relative">
                                        <DatePicker ref={datePickerRef}
                                                    className="form-input-common-style placeholder-textColor"
                                                    selected={startDate} onChange={(date) => setStartDate(date)}/>
                                        <span onClick={handleIconClick}
                                              className="absolute right-3 transform top-1/2 -translate-y-1/2"><img
                                            src="/images/membership/date-picker.png" alt=""/></span>
                                    </Field>
                                    <span className="text-[19px] text-black">-</span>
                                    <Field className="!pb-0  relative">
                                        <DatePicker ref={datePickerRef}
                                                    className="form-input-common-style placeholder-textColor"
                                                    selected={startDate} onChange={(date) => setStartDate(date)}/>
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

                <div className="flex flex-col w-full pt-6">
                    <div className="flex items-stretch">
                        <div className="left-col flex items-center w-[120px] bg-secondaryBgColor">
                            <span className="text-[15px] whitespace-nowrap font-bold"></span>
                        </div>
                        <div className="right-col flex-1 p-4 bg-white border border-commonBorderColor">
                            <div className="flex border border-commonBorderColor flex-col bg-white">

                                <div className="flex border-b border-b-commonBorderColor">
                                    <div className="flex flex-col w-[270px] border-r border-r-commonBorderColor">
                                        <div className="flex justify-between items-center border-b border-b-commonBorderColor py-2 px-4">
                                            <span> 1차 메뉴</span>
                                            <Button color="transparentMedium">
                                                전체
                                            </Button>
                                        </div>
                                        <div className="flex py-3 custom-scrollbar h-[270px]">
                                            <ul className="w-full">
                                                <li className=" py-2 px-4">
                                                    <CheckboxField>
                                                        <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                        <Label className="font-normal"> 영업팀</Label>
                                                    </CheckboxField>
                                                </li>
                                                <li className=" py-2 px-4">
                                                    <CheckboxField>
                                                        <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                        <Label className="font-normal"> 영업팀</Label>
                                                    </CheckboxField>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex flex-col">
                                            <div
                                                className="flex justify-between items-center border-b border-b-commonBorderColor py-2 px-4">
                                                <span> 2차 메뉴</span>
                                                <Button color="transparentMedium">
                                                    전체
                                                </Button>
                                            </div>
                                            <div
                                                className="flex py-3  custom-scrollbar h-[270px]">
                                                <ul className="">
                                                    <li className=" py-2 px-4">
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label className="font-normal"> 동영상 관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className=" py-2 px-4">
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label className="font-normal"> 영업팀</Label>
                                                        </CheckboxField>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex p-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="space-x-2">
                                        <Button color="transparentRoundedSmall">
                                                <span>콘텐츠 관리  </span>
                                                <span><img src="/images/membership/close.png" alt=""/></span>
                                            </Button>
                                            <Button color="transparentRoundedSmall">
                                                <span>콘텐츠 관리  </span>
                                                <span><img src="/images/membership/close.png" alt=""/></span>
                                        </Button>
                                        <Button color="transparentRoundedSmall">
                                            <span>콘텐츠 관리  </span>
                                            <span><img src="/images/membership/close.png" alt=""/></span>
                                        </Button>
                                        <Button color="transparentRoundedSmall">
                                            <span>콘텐츠 관리  </span>
                                            <span><img src="/images/membership/close.png" alt=""/></span>
                                        </Button>
                                        <Button color="transparentRoundedSmall">
                                            <span>콘텐츠 관리  </span>
                                            <span><img src="/images/membership/close.png" alt=""/></span>
                                        </Button>
                                        </div>
                                        <div className="flex">
                                            <Button color="transparentSmall">
                                                <span><img src="/images/membership/refresh.png" alt=""/></span>
                                                <span>초기화</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full pt-3">
                    <div className="flex items-stretch">
                        <div className="left-col flex items-center w-[100px] bg-secondaryBgColor">
                            <span className="text-[15px] whitespace-nowrap font-bold">검색 </span>
                        </div>
                        <div className="right-col flex-1 py-3 pl-[20px]">
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
                            <span><img src="/images/membership/users.png" alt=""/></span>
                            <span>조직그룹변경</span>
                        </Button>
                        <Button color="transparentMedium">
                            <span><img src="/images/membership/email.png" alt=""/></span>
                            <span>메일</span>
                        </Button>
                        <Button color="transparentMedium">
                            <span><img src="/images/membership/forum.png" alt=""/></span>
                            <span>SMS</span>
                        </Button>
                        <Button color="transparentMedium">
                            <span><img src="/images/membership/playlist_add.png" alt=""/></span>
                            <span>일괄등록</span>
                        </Button>
                        <Button color="transparentMedium">
                            <span><img src="/images/membership/add.png" alt=""/></span>
                            <span>등록</span>
                        </Button>
                    </div>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"
                                              defaultChecked/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableHeader>
                            <TableHeader>회원번호</TableHeader>
                            <TableHeader>조직그룹</TableHeader>
                            <TableHeader>이름</TableHeader>
                            <TableHeader>회원ID</TableHeader>
                            <TableHeader>연락처</TableHeader>
                            <TableHeader>이메일</TableHeader>
                            <TableHeader>가입일</TableHeader>
                            <TableHeader>가입일</TableHeader>
                            <TableHeader className="w-[50px]"></TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>
                                <Button color="primaryRoundedSmall">
                                    검색
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    <img src="/images/membership/chevron-right.png" alt=""/>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>
                                <Button color="primaryRoundedSmall">
                                    검색
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    <img src="/images/membership/chevron-right.png" alt=""/>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>
                                <Button color="primaryRoundedSmall">
                                    검색
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    <img src="/images/membership/chevron-right.png" alt=""/>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>
                                <Button color="primaryRoundedSmall">
                                    검색
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    <img src="/images/membership/chevron-right.png" alt=""/>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>
                                <Button color="secondaryLightRoundedSmall">
                                    검색
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    <img src="/images/membership/chevron-right.png" alt=""/>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>
                                <Button color="dangerLightRoundedSmall">
                                    검색
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    <img src="/images/membership/chevron-right.png" alt=""/>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>
                                <Button color="primaryRoundedSmall">
                                    검색
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href="#">
                                    <img src="/images/membership/chevron-right.png" alt=""/>
                                </Link>
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
                        <PaginationNext href="?page=4"> <span>다음</span> <span><MdChevronRight/></span> </PaginationNext>
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default Page;