"use client"

import React, {useState} from 'react';
import {Heading} from "@/components/common/heading";
import { GoChevronRight} from "react-icons/go";
import {Button} from "@/components/common/button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {
    ChevronRight,
    GraduationCap,
    Laugh,
    Monitor,
    User,
    UserPlus,
    Calendar as CalendarIcon,
    ChevronLeft, BookMarked, EyeClosed, CalendarX2
} from "lucide-react";
const Page = () => {

    const [value, setValue] = useState(new Date());

    return (

        <div className={`dashboard flex flex-col gap-12 lg:gap-16`}>

            <div className="dashboaed-stat flex flex-col">
                <LmsPageHeading headingClasses={`pb-6`} title={'회원 현황'} tooltip={"아래의 현황은 당일 (12:00 - 24:00) 기준입니다."} />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <div className={` shadow-dashboardShadow flex-1 min-w-0 bg-white py-[1.625rem] px-8`}>
                        <div className="flex gap-x-4">
                            <div
                                className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                                <Laugh className={`text-themeColor`} size={32}/>
                            </div>
                            <div className="text flex flex-col gap-2">
                                <p className={`text-baseNormal text-textSubColor`}>전체회원</p>
                                <h2 className={`text-[1.5625rem] font-bold text-textColor`}>230 명</h2>
                            </div>
                        </div>
                    </div>
                    <div className={` shadow-dashboardShadow flex-1 min-w-0 bg-white py-[1.625rem] px-8`}>
                        <div className="flex gap-x-4">
                            <div
                                className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                                <UserPlus className={`text-themeColor`} size={32}/>
                            </div>
                            <div className="text flex flex-col gap-2">
                                <p className={`text-baseNormal text-textSubColor`}>신규가입</p>
                                <h2 className={`text-[1.5625rem] font-bold text-textColor`}>30 명</h2>
                            </div>
                        </div>
                    </div>
                    <div className={` shadow-dashboardShadow flex-1 min-w-0 bg-white py-[1.625rem] px-8`}>
                        <div className="flex gap-x-4">
                            <div
                                className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                                <GraduationCap className={`text-themeColor`} size={32}/>
                            </div>
                            <div className="text flex flex-col gap-2">
                                <p className={`text-baseNormal text-textSubColor`}>강의 신규 신청</p>
                                <h2 className={`text-[1.5625rem] font-bold text-textColor`}>25 명</h2>
                            </div>
                        </div>
                    </div>
                    <div className={` shadow-dashboardShadow flex-1 min-w-0 bg-white py-[1.625rem] px-8`}>
                        <div className="flex gap-x-4">
                            <div
                                className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                                <Monitor className={`text-themeColor`} size={32}/>
                            </div>
                            <div className="text flex flex-col gap-2">
                                <p className={`text-baseNormal text-textSubColor`}>사이트 접속자</p>
                                <h2 className={`text-[1.5625rem] font-bold text-textColor`}>131 명</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 w-full ">
                <div className="dashboard-chart flex-col flex-1 min-w-0 flex">
                    <Heading level={2} className={`!pb-6`}>
                        <div className="flex items-center justify-between w-full">
                            <span>과정개설현황</span>
                        </div>
                    </Heading>

                    <div className="flex-1 flex flex-col gap-6">
                        <div className="grid grid-cols-2 w-full gap-6">
                            <div className={`shadow-dashboardShadow bg-white py-6 px-8`}>
                                <div className="flex gap-x-4">
                                    <div
                                        className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                                        <BookMarked className={`text-themeColor`} size={32}/>
                                    </div>
                                    <div className="text flex items-center justify-between w-full">
                                        <p className={`text-baseNormal text-textSubColor`}>개설 과정</p>
                                        <h2 className={`text-[25px] font-bold text-black`}>132개</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`grid grid-cols-2 w-full gap-6`}>
                                <div className="flex py-[1.1875rem] px-8  bg-white shadow-dashboardShadow w-full">
                                    <div className="text flex flex-col items-center justify-center gap-2 w-full">
                                        <Button color="warningRoundedSmall">
                                            전체회원
                                        </Button>
                                        <h2 className={`text-[25px] font-bold text-black`}>230 명</h2>
                                    </div>
                                </div>
                                <div className="flex py-[1.1875rem] px-8  bg-white shadow-dashboardShadow w-full">
                                    <div className="text flex flex-col items-center justify-center gap-2 w-full">
                                        <Button color="primaryLightRoundedSmall">
                                            전체회원
                                        </Button>
                                        <h2 className={`text-[25px] font-bold text-black`}>230 명</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 w-full gap-6">
                            <div className={`flex-1 shadow-dashboardShadow bg-white py-6 px-8`}>
                                <div className="flex gap-x-4">
                                    <div
                                        className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                                        <EyeClosed className={`text-themeColor`} size={32}/>
                                    </div>
                                    <div className="text flex items-center justify-between w-full">
                                        <p className={`text-baseNormal text-textSubColor`}>숨긴 과정</p>
                                        <h2 className={`text-[25px] font-bold text-black`}>10개</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex-1 shadow-dashboardShadow bg-white py-6 px-8`}>
                                <div className="flex gap-x-4">
                                    <div
                                        className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                                        <CalendarX2 className={`text-themeColor`} size={32}/>
                                    </div>
                                    <div className="text flex items-center justify-between w-full">
                                        <p className={`text-baseNormal text-textSubColor`}>종료 과정</p>
                                        <h2 className={`text-[25px] font-bold text-black`}>10개</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="dashboard-chart flex-col min-w-0 flex-1 flex">
                    <Heading level={2} className={`!pb-6`}>
                        <div className="flex items-center justify-between w-full">
                            <span>1:1 문의</span>
                            <span className="text-[13px] font-normal text-textSubColor flex items-center"> <span
                                className={`pr-1`}>자세히</span> <ChevronRight size={16}/> </span>
                        </div>
                    </Heading>

                    <div className="flex-1 shadow-dashboardShadow bg-white p-8">
                        <div className="dashboard-inquiry">
                            <ul className={`flex flex-col`}>
                                <li className={`flex gap-2 border-b items-center border-commonBorderColor pb-6`}>
                                    <div className="flex-1 flex gap-2 min-w-0">
                                        <Button color="primaryRoundedSmall"
                                                className={`!bg-transparent !text-themeColor whitespace-nowrap flex-shrink-0 !min-w-[69px]`}>
                                            고객회신
                                        </Button>
                                        <h2 className={`text-baseNormal font-bold text-textColor whitespace-nowrap overflow-hidden text-ellipsis`}>고객회신
                                            플레이어 재생시 문의 드립니다.</h2>
                                    </div>
                                    <div className="list">
                                        <ul className={`flex gap-3 leading-[13px] whitespace-nowrap`}>
                                            <li className={`text-[#949494] text-[13px]`}>배지은 2024. 08. 31</li>
                                            <li className={`text-[#949494] text-[13px] before:content-[''] relative before:absolute before:z-10 before:w-[1px] before:h-full before:bg-[#949494] before:left-[-7px] leading-[13px] before:top-0`}>배지은
                                                2024. 08. 31
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`flex gap-2 border-b items-center border-commonBorderColor pt-6 pb-6`}>
                                    <div className="flex-1 flex gap-2 min-w-0">
                                        <Button color="primaryRoundedSmall" className={`whitespace-nowrap flex-shrink-0 !min-w-[69px]`}>
                                            답변완료
                                        </Button>
                                        <h2 className={`text-baseNormal font-bold text-textColor whitespace-nowrap overflow-hidden text-ellipsis`}>답변완료
                                            LMS 강좌를 신청했는데 결제가 갑자기 취소가 되었는데 환불 해주세요.</h2>
                                    </div>
                                    <div className="list">
                                        <ul className={`flex gap-3 leading-[13px] whitespace-nowrap`}>
                                            <li className={`text-[#949494] text-[13px]`}>배지은 2024. 08. 31</li>
                                            <li className={`text-[#949494] text-[13px] before:content-[''] relative before:absolute before:z-10 before:w-[1px] before:h-full before:bg-[#949494] before:left-[-7px] leading-[13px] before:top-0`}>배지은
                                                2024. 08. 31
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`flex gap-2  items-center pt-6`}>
                                    <div className="flex-1 flex gap-2 min-w-0">
                                        <Button color="secondaryLightRoundedSmall" className={`whitespace-nowrap flex-shrink-0 !min-w-[69px]`} >
                                            닫힘
                                        </Button>
                                        <h2 className={`text-baseNormal font-bold text-textColor whitespace-nowrap overflow-hidden text-ellipsis`}>닫힘
                                            피그마 배리어블을 활용한 디자인 시스템 구축하기 2번 퀴즈 답 문의 드립니다.</h2>
                                    </div>
                                    <div className="list">
                                        <ul className={`flex gap-3 leading-[13px] whitespace-nowrap`}>
                                            <li className={`text-[#949494] text-[13px]`}>배지은 2024. 08. 31</li>
                                            <li className={`text-[#949494] text-[13px] before:content-[''] relative before:absolute before:z-10 before:w-[1px] before:h-full before:bg-[#949494] before:left-[-7px] leading-[13px] before:top-0`}>배지은
                                                2024. 08. 31
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>


            <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-6">

                <div className="dashboard-chart flex-col flex w-full lg:w-[41%] min-w-0">
                    <Heading level={2} className={`!pb-6`}>
                        <div className="flex items-center justify-between w-full">
                            <span>인기 있는 강의 TOP3</span>
                        </div>
                    </Heading>

                    <div className="flex-1 shadow-dashboardShadow bg-white py-0 px-6">
                        <div className="dashboard-inquiry">
                            <ul className={`flex flex-col py-1`}>

                                <li className={`flex items-center gap-5 border-b border-commonBorderColor py-5`}>
                                    <div className="img rounded overflow-hidden">
                                        <img src="/images/dashboard/popular1.png" alt=""/>
                                    </div>
                                    <div className="content justify-center flex-1 flex flex-col gap-2">
                                        <div className="flex-1">
                                            <Button color="transparentRoundedSmall">
                                                닫힘
                                            </Button>
                                        </div>
                                        <h2 className={`text-baseNormal font-bold text-textColor`}>피그마 배리어블을 활용한 디자인 시스템
                                            구축하기</h2>
                                        <ul className={`flex gap-2 text-textSubColor text-[13px]`}>
                                            <li className={`flex items-center gap-1`}>
                                                <span>
                                                    <CalendarIcon size={16} />
                                                </span>
                                                <span>2024. 08. 31 ~ 2024. 10.23</span>
                                            </li>
                                            <li className={`flex items-center gap-1`}>
                                                <span>
                                                    <User size={16} />
                                                </span>
                                                <span>배지은</span>
                                            </li>
                                        </ul>
                                    </div>

                                </li>

                                <li className={`flex items-center gap-5 border-b border-commonBorderColor py-5`}>
                                    <div className="img rounded overflow-hidden">
                                        <img src="/images/dashboard/popular2.png" alt=""/>
                                    </div>
                                    <div className="content justify-center flex-1 flex flex-col gap-2">
                                        <div className="flex-1">
                                            <Button color="transparentRoundedSmall">
                                                닫힘
                                            </Button>
                                        </div>
                                        <h2 className={`text-baseNormal font-bold text-textColor`}>피그마 배리어블을 활용한 디자인 시스템
                                            구축하기</h2>
                                        <ul className={`flex gap-2 text-textSubColor text-[13px]`}>
                                            <li className={`flex items-center gap-1`}>
                                                <span>
                                                    <CalendarIcon size={16}/>
                                                </span>
                                                <span>2024. 08. 31 ~ 2024. 10.23</span>
                                            </li>
                                            <li className={`flex items-center gap-1`}>
                                                <span>
                                                    <User size={16}/>
                                                </span>
                                                <span>배지은</span>
                                            </li>
                                        </ul>
                                    </div>

                                </li>

                                <li className={`flex items-center gap-5 py-5`}>
                                    <div className="img rounded overflow-hidden">
                                        <img src="/images/dashboard/popular3.png" alt=""/>
                                    </div>
                                    <div className="content justify-center flex-1 flex flex-col gap-2">
                                        <div className="flex-1">
                                            <Button color="transparentRoundedSmall">
                                                닫힘
                                            </Button>
                                        </div>
                                        <h2 className={`text-baseNormal font-bold text-textColor`}>피그마 배리어블을 활용한 디자인 시스템
                                            구축하기</h2>
                                        <ul className={`flex gap-2 text-textSubColor text-[13px]`}>
                                            <li className={`flex items-center gap-1`}>
                                                <span>
                                                    <CalendarIcon size={16}/>
                                                </span>
                                                <span>2024. 08. 31 ~ 2024. 10.23</span>
                                            </li>
                                            <li className={`flex items-center gap-1`}>
                                                <span>
                                                    <User size={16}/>
                                                </span>
                                                <span>배지은</span>
                                            </li>
                                        </ul>
                                    </div>

                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="dashboard-chart flex-col flex w-full lg:w-[59%] min-w-0">
                    <Heading level={2} className={`!pb-6`}>
                        <div className="flex items-center justify-between w-full">
                            <span>개설 강의 일정</span>

                        </div>
                    </Heading>

                    <div className="gap-6 flex flex-col lg:flex-row">

                        <div className="flex-1 lecture-schedule shadow-dashboardShadow bg-white pt-2 py-4 px-[18px] w-full lg:w-[42%]  lg:flex-none">
                            <div className="lecture-calender">
                                <Calendar
                                    onChange={setValue} value={value}
                                    prevLabel={<ChevronLeft size={20} className=" text-textSubColor" />}
                                    nextLabel={<ChevronRight size={20} className="text-textSubColor" />}
                                />
                            </div>
                        </div>

                        <div className="flex-1 flex-col shadow-dashboardShadow bg-white w-full lg:w-[58%] lg:flex-none">
                            <div
                                className="dashboard-filter flex items-center border-b border-commonBorderColor justify-between   py-6 px-8">
                                <div className="flex">
                                    <h3 className={`text-medium text-black font-bold`}>12 (화)</h3>
                                </div>
                                <div className="flex">
                                    <ul className={`flex gap-5`}>
                                        <li className={`flex items-center gap-2`}><span
                                            className={`size-[12px] flex bg-[#D8D8D8] rounded-full`}></span><span
                                            className={`text-sm text-[#64748B]`}>전체</span>
                                        </li>
                                        <li className={`flex items-center gap-2`}><span
                                            className={`size-[12px] flex bg-[#3058FF] rounded-full`}></span><span
                                            className={`text-sm text-[#64748B]`}>정규</span>
                                        </li>
                                        <li className={`flex items-center gap-2`}><span
                                            className={`size-[12px] flex bg-[#FFB724] rounded-full`}></span><span
                                            className={`text-sm text-[#64748B]`}>비정규</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="chart py-6 px-8">
                                <div className="schedule-list">
                                    <ul className={`flex pl-2 flex-col relative before:content-[''] before:absolute before:top-[15px] before:left-[6px] before:h-[calc(100%-15px)] before:border before:border-[#D8D8D8]`}>

                                        <li className={`relative flex  gap-5 leading-4 pb-5`}>

                                            <div className="relative">
                                                  <span className="relative before:content-[''] before:absolute before:top-0 before:left-[-20px] before:h-full before:border-[#D8D8D8]
                                                              after:content-[''] after:absolute after:left-[-7px] after:w-[12px] after:h-[12px] after:bg-[#D8D8D8] after:rounded-full
                                                              after:top-[6px] after:transform ">
                                                  </span>
                                            </div>

                                            <div className="content justify-center flex-1 flex flex-col gap-2">

                                                <ul className={`flex gap-3 text-textSubColor text-base leading-[24px]`}>
                                                    <li className={`flex items-center gap-2`}>
                                                        <span>2024. 08. 31 ~ 2024. 10.23</span>
                                                    </li>
                                                </ul>

                                                <h2 className={`text-baseNormal font-bold text-textColor leading-[26px]`}>피그마 배리어블을 활용한 디자인 시스템
                                                    구축</h2>

                                                <ul className={`flex gap-3 text-textSubColor text-base leading-[24px]`}>
                                                    <li className={`flex items-center gap-1`}>
                                                        <span>
                                                            <User size={20}/>
                                                        </span>
                                                        <span>배지은</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className={`relative flex  gap-5 leading-4 pb-5`}>

                                            <div className="relative">
                                                  <span className="relative before:content-[''] before:absolute before:top-0 before:left-[-20px] before:h-full before:border-[#FFB724]
                                                              after:content-[''] after:absolute after:left-[-7px] after:w-[12px] after:h-[12px] after:bg-[#FFB724] after:rounded-full
                                                              after:top-[6px] after:transform ">
                                                  </span>
                                            </div>

                                            <div className="content justify-center flex-1 flex flex-col gap-2">

                                                <ul className={`flex gap-3 text-textSubColor text-base leading-[24px]`}>
                                                    <li className={`flex items-center gap-2`}>
                                                        <span>2024. 08. 31 ~ 2024. 10.23</span>
                                                    </li>
                                                </ul>

                                                <h2 className={`text-baseNormal font-bold text-textColor leading-[26px]`}>피그마 배리어블을 활용한 디자인 시스템
                                                    구축</h2>

                                                <ul className={`flex gap-3 text-textSubColor text-base leading-[24px]`}>
                                                    <li className={`flex items-center gap-1`}>
                                                        <span>
                                                            <User size={20}/>
                                                        </span>
                                                        <span>배지은</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className={`relative flex  gap-5 leading-4 pb-0`}>

                                            <div className="relative">
                                                  <span className="relative before:content-[''] before:absolute before:top-0 before:left-[-20px] before:h-full before:border-themeColor
                                                              after:content-[''] after:absolute after:left-[-7px] after:w-[12px] after:h-[12px] after:bg-themeColor after:rounded-full
                                                              after:top-[6px] after:transform ">
                                                  </span>
                                            </div>

                                            <div className="content justify-center flex-1 flex flex-col gap-2">

                                                <ul className={`flex gap-3 text-textSubColor text-base leading-[24px]`}>
                                                    <li className={`flex items-center gap-2`}>
                                                        <span>2024. 08. 31 ~ 2024. 10.23</span>
                                                    </li>
                                                </ul>

                                                <h2 className={`text-baseNormal font-bold text-textColor leading-[26px]`}>피그마 배리어블을 활용한 디자인 시스템
                                                    구축</h2>

                                                <ul className={`flex gap-3 text-textSubColor text-base leading-[24px]`}>
                                                    <li className={`flex items-center gap-1`}>
                                                        <span>
                                                            <User size={20}/>
                                                        </span>
                                                        <span>배지은</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            {/*<div className="flex w-full gap-6">*/}

            {/*    <div className="dashboard-chart flex-col flex-1 flex w-1/2">*/}
            {/*        <Heading level={2} className={`!pb-6`}>*/}
            {/*            <div className="flex items-center justify-between w-full">*/}
            {/*                <span>환불요청</span>*/}
            {/*                <span className="text-[13px] font-normal text-textSubColor flex items-center"> <span*/}
            {/*                    className={`pr-1`}>자세히</span>  <GoChevronRight size={16} /></span>*/}
            {/*            </div>*/}
            {/*        </Heading>*/}

            {/*        <div className="flex-1   p-0">*/}
            {/*            <Table>*/}
            {/*                <TableHead className="">*/}
            {/*                    <TableRow>*/}
            {/*                        <TableHeader>*/}
            {/*                            과정명*/}
            {/*                        </TableHeader>*/}
            {/*                        <TableHeader>요청일</TableHeader>*/}
            {/*                        <TableHeader>구매자</TableHeader>*/}
            {/*                        <TableHeader>결제금액</TableHeader>*/}
            {/*                        <TableHeader>상태</TableHeader>*/}
            {/*                    </TableRow>*/}
            {/*                </TableHead>*/}
            {/*                <TableBody className="bg-white">*/}
            {/*                    <TableRow>*/}
            {/*                        <TableCell>피그마 배리어블을  시스템 구...</TableCell>*/}
            {/*                        <TableCell>2024. 08. 24</TableCell>*/}
            {/*                        <TableCell>배지은</TableCell>*/}
            {/*                        <TableCell>200,000원</TableCell>*/}
            {/*                        <TableCell>*/}
            {/*                            <Button color="primaryRoundedSmall">*/}
            {/*                                답변완료*/}
            {/*                            </Button>*/}
            {/*                        </TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                    <TableRow>*/}
            {/*                        <TableCell>피그마 배리어블을  시스템 구...</TableCell>*/}
            {/*                        <TableCell>2024. 08. 24</TableCell>*/}
            {/*                        <TableCell>배지은</TableCell>*/}
            {/*                        <TableCell>200,000원</TableCell>*/}
            {/*                        <TableCell>*/}
            {/*                            <Button color="secondaryLightRoundedSmall">*/}
            {/*                                답변완료*/}
            {/*                            </Button>*/}
            {/*                        </TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                </TableBody>*/}
            {/*            </Table>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*    <div className="dashboard-chart flex-col flex-1 flex w-1/2">*/}
            {/*        <Heading level={2} className={`!pb-6`}>*/}
            {/*            <div className="flex items-center justify-between w-full">*/}
            {/*                <span>세금계산서 신청</span>*/}
            {/*                <span className="text-[13px] font-normal text-textSubColor flex items-center"> <span*/}
            {/*                    className={`pr-1`}>자세히</span>  <GoChevronRight size={16} /></span>*/}
            {/*            </div>*/}
            {/*        </Heading>*/}

            {/*        <div className="flex-1   p-0">*/}
            {/*            <Table>*/}
            {/*                <TableHead className="">*/}
            {/*                    <TableRow>*/}
            {/*                        <TableHeader>*/}
            {/*                            과정명*/}
            {/*                        </TableHeader>*/}
            {/*                        <TableHeader>요청일</TableHeader>*/}
            {/*                        <TableHeader>구매자</TableHeader>*/}
            {/*                        <TableHeader>결제금액</TableHeader>*/}
            {/*                        <TableHeader>상태</TableHeader>*/}
            {/*                    </TableRow>*/}
            {/*                </TableHead>*/}
            {/*                <TableBody className="bg-white">*/}
            {/*                    <TableRow>*/}
            {/*                        <TableCell>피그마 배리어블을  시스템 구...</TableCell>*/}
            {/*                        <TableCell>2024. 08. 24</TableCell>*/}
            {/*                        <TableCell>배지은</TableCell>*/}
            {/*                        <TableCell>200,000원</TableCell>*/}
            {/*                        <TableCell>*/}
            {/*                            <Button color="primaryRoundedSmall">*/}
            {/*                                답변완료*/}
            {/*                            </Button>*/}
            {/*                        </TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                    <TableRow>*/}
            {/*                        <TableCell>피그마 배리어블을  시스템 구...</TableCell>*/}
            {/*                        <TableCell>2024. 08. 24</TableCell>*/}
            {/*                        <TableCell>배지은</TableCell>*/}
            {/*                        <TableCell>200,000원</TableCell>*/}
            {/*                        <TableCell>*/}
            {/*                            <Button color="secondaryLightRoundedSmall">*/}
            {/*                                답변완료*/}
            {/*                            </Button>*/}
            {/*                        </TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                </TableBody>*/}
            {/*            </Table>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}


        </div>

    );
};

export default Page;