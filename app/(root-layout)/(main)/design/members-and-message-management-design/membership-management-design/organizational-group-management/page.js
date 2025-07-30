import React from 'react';
import {Heading} from "@/components/common/heading";
import Image from "next/image";

import {Button} from "@/components/common/button";
import plusImg from "@/public/images/membership/plus.png";
import editImg from "@/public/images/membership/edit.png";
import trashImg from "@/public/images/membership/trash-s.png";
import infoImg from "@/public/images/login-img.png";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import {Field, Label} from "@/components/common/fieldset";
import {Input, InputGroup} from "@/components/common/input";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {IoSearchOutline} from "react-icons/io5";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import ShortGroupList
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/organizational-group-management/__components/ShortGroupList";
import {GoChevronDown, GoChevronUp} from "react-icons/go";
const Page = () => {
    return (
        <div className="flex flex-col membership-management">
            <Heading level={2} className="pb-3">
                <div className="flex items-center">
                    <span>조직 그룹 관리</span>
                    <span><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>

            <div className="flex gap-4 pb-8">
                <div className="w-[370px] flex flex-col justify-between bg-white border border-commonBorderColor">
                    <div className="flex flex-col">
                        <div className="flex w-full border-b border-commonBorderColor p-4">
                            <Field className="!pb-0 flex relative w-full ">
                                <Input name="full_name" className="w-full "
                                       placeholder="Search for organizational groups."/>
                                <IoSearchOutline className="absolute right-5 top-1/2 transform -translate-y-1/2"/>
                            </Field>
                        </div>
                        <ul className="flex flex-col">
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                            <li>
                                <div
                                    className={`p-3 group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor `}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                            <span className={`transition-transform duration-200`}>
                                                <GoChevronUp/>
                                            </span>
                                        <span
                                            className={`hover:text-themeColor, cursor-pointer `}
                                        >KCI 한국컨텐츠인프라 (134)</span>
                                    </div>
                                    <span className={`group-hover:fill-themeColor`}> <img
                                        src="/images/membership/drag_handle.png" alt=""/></span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="member-collapse-list p-3  border-t border-commonBorderColor">
                        <div className="flex">
                            <ul className="flex gap-1 pl-3">
                                <li>
                                    <Button color="transparentMedium" className="border-none !px-2"
                                    > <span> <Image
                                        src={plusImg} alt='menu collapse'/> </span>
                                    </Button>
                                </li>
                                <li>
                                    <Button color="transparentMedium" className="border-none !px-2"
                                    > <span> <Image
                                        src={editImg} alt='menu collapse'/> </span>
                                    </Button>
                                </li>
                                <li>
                                    <Button color="transparentMedium" className="border-none !px-2"
                                    > <span> <Image
                                        src={trashImg} alt='menu collapse'/> </span>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white border border-commonBorderColor">
                    <div className="flex items-stretch justify-between border-b border-commonBorderColor">
                        <div className="left-col pl-6 flex items-center ">
                            <p className="text-[19px] font-bold text-[#000000]"> 백엔드 담당</p>
                            <span className="text-[15px] text-textSubColor font-normal pl-4">총 8명 </span>
                        </div>
                        <div className="right-col p-4">
                            <Field className="!pb-0 flex relative w-[270px] ">
                                <Input name="full_name" className="w-full " placeholder="조직원을 검색해보세요."/>
                                <IoSearchOutline className="absolute right-5 top-1/2 transform -translate-y-1/2"/>
                            </Field>
                        </div>
                    </div>
                    <div className="table-organization custom-scrollbar h-[550px]">
                        <Table className="text-textColor">
                            <TableBody>
                                <TableRow className='text-[17px] bg-[#F4F9FF]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                                      defaultChecked/>
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-textColor">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='text-[17px]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                            />
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-[#1D1D1D]">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='text-[17px]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                            />
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-[#1D1D1D]">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='text-[17px]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                            />
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-[#1D1D1D]">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='text-[17px]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                            />
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-[#1D1D1D]">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='text-[17px]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                            />
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-[#1D1D1D]">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='text-[17px]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                            />
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-[#1D1D1D]">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='text-[17px]'>
                                    <TableCell className="w-1/2 py-[31px]">
                                        <CheckboxField className="pl-5">
                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                      value="show_on_events_page"
                                            />
                                            <Label className="font-normal text-[17px]">구자성</Label>
                                        </CheckboxField>
                                    </TableCell>
                                    <TableCell className="w-1/2 py-[31px]"> <span
                                        className="text-[17px] text-[#1D1D1D]">bjieun0717@kcinfra.co.kr</span>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex w-full pl-5 p-3 border-t border-commonBorderColor">
                        <Button color="transparentMedium" > 조직 변경 </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Page;