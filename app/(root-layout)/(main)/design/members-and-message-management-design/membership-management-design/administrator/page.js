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
import {Checkbox} from "@/components/common/checkbox";
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
            <Heading level={2} >
                <div className="flex items-center">
                    <span>관리자 관리</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>

            <div className="member-list-form bg-secondaryBgColor border-t border-commonBorderColor py-6 px-12 ">

                <div className="flex items-center border-b border-commonBorderColor pb-3">

                    <div className="flex flex-col w-1/2">
                        <div className="flex items-stretch">
                            <div className="left-col  flex items-center w-[100px]">
                                <span className="common-label-style">관리자 유형 </span>
                            </div>
                            <div className="right-col flex-1 py-4 pl-[20px]">
                                <Field className="!pb-0 w-[270px]">
                                    <Select name="status">
                                        <option value="active">관리자 유형 선택</option>
                                    </Select>
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/2">
                        <div className="flex items-stretch">
                            <div className="left-col  flex items-center w-[100px]">
                                <span className="common-label-style">조직그룹 </span>
                            </div>
                            <div className="right-col flex-1 py-4 pl-[20px]">
                                <Field className="!pb-0 w-[270px]">
                                    <Select name="status">
                                        <option value="active">조직그룹 선택</option>
                                    </Select>
                                </Field>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col w-full pt-3">
                    <div className="flex items-stretch">
                        <div className="left-col flex items-center w-[100px] ">
                            <span className="common-label-style">검색 </span>
                        </div>
                        <div className="right-col flex-1 py-4 pl-[20px]">
                            <div className="flex gap-x-3 items-center">
                                <Field className="!pb-0 w-[270px]">
                                    <Select name="status">
                                        <option value="active">검색 유형 선택</option>
                                    </Select>
                                </Field>
                                <div className="flex flex-1 gap-x-3">
                                    <Field className="!pb-0 flex relative w-full ">
                                        <Input name="full_name" className="w-full " placeholder="검색어를 입력해주세요."/>
                                        <IoSearchOutline className="absolute right-5 top-1/2 transform -translate-y-1/2"/>
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

                        <Button color="transparentMedium" ><span><img
                            src="/images/membership/playlist_add.png" alt=""/></span> <span>관리자 유형 관리</span></Button>

                    </div>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>
                                유형
                            </TableHeader>
                            <TableHeader>조직그룹</TableHeader>
                            <TableHeader>이름</TableHeader>
                            <TableHeader>접근권한</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>최고관리자</TableCell>
                            <TableCell>해외영업본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentMedium" ><span><img
                                    src="/images/membership/setting.png" alt=""/></span> <span>설정</span></Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>최고관리자</TableCell>
                            <TableCell>해외영업본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentMedium" ><span><img
                                    src="/images/membership/setting.png" alt=""/></span> <span>설정</span></Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>최고관리자</TableCell>
                            <TableCell>해외영업본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentMedium" ><span><img
                                    src="/images/membership/setting.png" alt=""/></span> <span>설정</span></Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>최고관리자</TableCell>
                            <TableCell>해외영업본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentMedium" ><span><img
                                    src="/images/membership/setting.png" alt=""/></span> <span>설정</span></Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>최고관리자</TableCell>
                            <TableCell>해외영업본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentMedium" ><span><img
                                    src="/images/membership/setting.png" alt=""/></span> <span>설정</span></Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>최고관리자</TableCell>
                            <TableCell>해외영업본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentMedium" ><span><img
                                    src="/images/membership/setting.png" alt=""/></span> <span>설정</span></Button>
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