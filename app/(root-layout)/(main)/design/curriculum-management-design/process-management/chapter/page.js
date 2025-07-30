"use client"

import React, {useState} from 'react';
import {Heading} from "@/components/common/heading";
import {Button} from "@/components/common/button";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from "@headlessui/react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import ProgressBar from "@/components/common/ProgressBar";
import {
    Pagination,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious
} from "@/components/common/pagination";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import FieldWrapper from "@/components/common/form/FieldWrapper";

import {Check, ChevronDownIcon, Clock, Menu, Play, Trash2} from "lucide-react";
import ToolTip from "@/components/common/ToolTip";
import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";

const data = [
    {
        id: 2,
        name: 'group b',
        description: null,
        sequence: 2,
        subGroups: []
    },
    {
        id: 1,
        name: 'group a',
        description: null,
        sequence: 1,
        subGroups: [ [Object] ]
    },
    {
        id: 3,
        name: 'group cf',
        description: null,
        sequence: 3,
        subGroups: []
    },
    {
        id: 4,
        name: 'Parent2',
        description: null,
        sequence: 4,
        subGroups: []
    },
    {
        id: 5,
        name: '피그마 자료관리',
        description: null,
        sequence: 5,
        subGroups: []
    }
]


const Page = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex flex-col">
            <Heading level={2} className={`items-center gap-2 flex`}>
                <Button color="transparentSmall">
                    검색
                </Button>
                <span>[2024 업데이트] UX/UI 시작하기 : Figma 입문 (Inflearn Original)</span>
            </Heading>

            <TabGroup defaultIndex={4} className="tab-wrapper-controller">
                <TabList className="tab-list-controller items-start justify-start self-start border-b border-commonBorderColor !pb-0 !mb-10 w-full">
                    <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>과정정보</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>공지사항</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>과정목차</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>수강자관리</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>강의자료</Tab>
                    <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>강의문의</Tab>
                </TabList>
                <TabPanels className="tab-content-controller">

                    <TabPanel>
                        <div className="flex gap-6">
                            <div className="flex flex-col w-[240px]">
                                <div className="flex items-center justify-between w-full">
                                    <span className={`font-bold text-textSubColor`}>챕터분류</span>
                                    <Button color="transparentSmall" className={`h-[28px]`}>
                                       <span><img src="/images/curriculum-management/li_trash.png" alt=""/></span> <span>검색</span>
                                    </Button>
                                </div>
                                <div className="list">
                                    <ul className={`pt-2 border-t border-commonBorderColor mt-6 mb-4`}>
                                        <li className={`py-3 px-4 text-base bg-[#F4F9FF] text-themeColor font-bold`}>Chapter 1</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 2</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 3</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 4</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 5</li>
                                    </ul>
                                    <Button color="transparentMedium" className={`w-full h-[42px]`}>
                                        <span><img className={`size-[16px]`} src="/images/content-management/li_plus.png" alt=""/></span> <span>  추가</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-6 ">
                                <div className="flex items-center justify-between w-full">
                                    <div className="left flex gap-3 items-center">
                                        <span className={`font-bold  text-[25px]`}>Chapter 1.</span>
                                        <LmsStandardInputField placeholder="챕터명을 입력해 주세요."  />
                                    </div>
                                    <Button color="primaryMedium" className={`!h-[40px]`}>
                                        <span><img src="/images/curriculum-management/li_monitor-up.png" alt=""/></span>
                                        <span>강의 영상 가져오기</span>
                                    </Button>
                                </div>
                                <Table>
                                    <TableBody className="w-full border-t border-commonBorderColor mt-6">
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <img src="/images/curriculum-management/drag_handle.png" alt=""/>
                                            </TableCell>
                                            <TableCell className={`w-[60px]`}>01</TableCell>
                                            <TableCell>
                                                <div className="flex gap-4 items-center">
                                                    <div className="img">
                                                        <img src="/images/curriculum-management/Frame%203465197.png"
                                                             alt=""/>
                                                    </div>
                                                    <div className="text">
                                                        Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>00:43:03</TableCell>
                                            <TableCell>
                                                <Button color="transparentMedium" className={`h-[32px]`}>
                                                    <span><img src="/images/curriculum-management/delete_outline.png" alt=""/></span> <span>검색</span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <img src="/images/curriculum-management/drag_handle.png" alt=""/>
                                            </TableCell>
                                            <TableCell className={`w-[60px]`}>01</TableCell>
                                            <TableCell>
                                                <div className="flex gap-4 items-center">
                                                    <div className="img">
                                                        <img src="/images/curriculum-management/Frame%203465197.png"
                                                             alt=""/>
                                                    </div>
                                                    <div className="text">
                                                        Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>00:43:03</TableCell>
                                            <TableCell>
                                                <Button color="transparentMedium" className={`h-[32px]`}>
                                                    <span><img src="/images/curriculum-management/delete_outline.png" alt=""/></span> <span>검색</span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <img src="/images/curriculum-management/drag_handle.png" alt=""/>
                                            </TableCell>
                                            <TableCell className={`w-[60px]`}>01</TableCell>
                                            <TableCell>
                                                <div className="flex gap-4 items-center">
                                                    <div className="img">
                                                        <img src="/images/curriculum-management/Frame%203465197.png"
                                                             alt=""/>
                                                    </div>
                                                    <div className="text">
                                                        Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>00:43:03</TableCell>
                                            <TableCell>
                                                <Button color="transparentMedium" className={`h-[32px]`}>
                                                    <span><img src="/images/curriculum-management/delete_outline.png" alt=""/></span> <span>검색</span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <img src="/images/curriculum-management/drag_handle.png" alt=""/>
                                            </TableCell>
                                            <TableCell className={`w-[60px]`}>01</TableCell>
                                            <TableCell>
                                                <div className="flex gap-4 items-center">
                                                    <div className="img">
                                                        <img src="/images/curriculum-management/Frame%203465197.png"
                                                             alt=""/>
                                                    </div>
                                                    <div className="text">
                                                        Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>00:43:03</TableCell>
                                            <TableCell>
                                                <Button color="transparentMedium" className={`h-[32px]`}>
                                                    <span><img src="/images/curriculum-management/delete_outline.png" alt=""/></span> <span>검색</span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <img src="/images/curriculum-management/drag_handle.png" alt=""/>
                                            </TableCell>
                                            <TableCell className={`w-[60px]`}>01</TableCell>
                                            <TableCell>
                                                <div className="flex gap-4 items-center">
                                                    <div className="img">
                                                        <img src="/images/curriculum-management/Frame%203465197.png"
                                                             alt=""/>
                                                    </div>
                                                    <div className="text">
                                                        Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>00:43:03</TableCell>
                                            <TableCell>
                                                <Button color="transparentMedium" className={`h-[32px]`}>
                                                    <span><img src="/images/curriculum-management/delete_outline.png" alt=""/></span> <span>검색</span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="flex gap-6">
                            <div className="flex flex-col w-[240px]">
                                <div className="flex items-center justify-between w-full">
                                    <span className={`font-bold text-textSubColor`}>Chapter</span>

                                </div>
                                <div className="list">
                                    {/*<ChapterSidebar heading={`hello`} customStyle={true} groups={data} hideToggleBtn={true}  />*/}
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 gap-10 ">

                                <div className="flex items-center justify-between w-full">
                                    <div className="left ">
                                        <LmsPageHeading title="영상 가져오기" headingClasses={`!pb-0`}  tooltip={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, tenetur?'}/>
                                    </div>
                                    <div className="right flex gap-3">
                                        <Button color="transparent" className={`!h-[40px] !text-[17px] min-w-[92px]`}>
                                            <span><img src="/images/curriculum-management/li_menu.png" alt=""/></span>
                                            <span>목록</span>
                                        </Button>
                                        <Button color="primary" className={`!h-[40px] !text-[17px] min-w-[185px]`}>
                                            <span><img src="/images/curriculum-management/import.png" alt=""/></span>
                                            <span><b>5개</b>  영상 가져오기</span>
                                        </Button>
                                    </div>
                                </div>

                                <FilterForm>
                                    <FilterFormWrapper label={`검색`} singleElement={true}>
                                        <LmsSearchInput  singleElement={true} placeholder={`파일이름 또는 태그를 입력해주세요.`} />
                                    </FilterFormWrapper>
                                </FilterForm>

                                <div className="flex flex-col gap-6">
                                    <div className={`table-filter flex items-center`}>
                                        <div className="flex items-center gap-2">
                                            <div className="">Total</div>
                                            <div
                                                className="text-themeColor font-bold">100건
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto w-full">
                                        <Table>
                                            <TableHead>
                                                <TableRow className={`sticky top-0  z-10`}>
                                                    <TableHeader className={`w-[64px]`}>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"
                                                                      defaultChecked/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableHeader>
                                                    <TableHeader>평가명</TableHeader>
                                                    <TableHeader className={`text-end`}></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <CheckboxField>
                                                            <Checkbox color="lmscheckbox" name="discoverability"
                                                                      value="default"/>
                                                            <Label className="font-normal"></Label>
                                                        </CheckboxField>
                                                    </TableCell>
                                                    <TableCell>피그마 완전 정복 제 1강.mp4</TableCell>
                                                    <TableCell className={`text-end`}>
                                                        02:00:00
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="flex flex-col gap-10 ">

                            <FilterForm>
                                <div className="flex border-b border-commonBorderColor">
                                    <FilterFormWrapper label="진도율" >
                                        <LmsStandardRadioFieldGroup
                                            options={[{id: '1', name: '전체'}, {id: "2", name: "완료"}, {
                                                id: "3",
                                                name: "미완료"
                                            }]}/>
                                    </FilterFormWrapper>
                                    <FilterFormWrapper label="통과여부">
                                        <LmsStandardRadioFieldGroup options={[{id: '1', name: '전체'}, {id: "2", name: "통과"}, {
                                            id: "3",
                                            name: "미통과"
                                        }]} />
                                    </FilterFormWrapper>
                                </div>
                                <FilterFormWrapper label={`검색`} singleElement={true}>
                                    <LmsSearchInput  singleElement={true}
                                                    placeholder={`파일이름 또는 태그를 입력해주세요.`}/>
                                </FilterFormWrapper>
                            </FilterForm>

                            <div className="flex flex-col gap-6">
                                <div className={`table-filter flex items-center justify-between`}>
                                    <div className="flex items-center gap-2">
                                        <div className="">Total</div>
                                        <div
                                            className="text-themeColor font-bold">100건
                                        </div>
                                    </div>
                                    <Button color="transparentMedium" className={`h-[32px]`}>
                                        <span><img src="/images/curriculum-management/excell.png" alt=""/></span>
                                        <span>EXCEL</span>
                                    </Button>
                                </div>

                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableHeader>
                                                NO
                                            </TableHeader>
                                            <TableHeader>이름</TableHeader>
                                            <TableHeader>아이디</TableHeader>
                                            <TableHeader>진도율(출석률)</TableHeader>
                                            <TableHeader>성적관리</TableHeader>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className={`!text-[17px]`}>
                                        <TableRow>
                                            <TableCell>
                                                10
                                            </TableCell>
                                            <TableCell>홍길동</TableCell>
                                            <TableCell>
                                                hgd123@kcinfra.co.kr
                                            </TableCell>
                                            <TableCell>
                                                <ProgressBar value={8} max={10}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="left">
                                                        점수 <span className={`text-themeColor font-bold`}>80</span>/100점
                                                    </div>
                                                    <Button color="primaryRoundedSmall"
                                                            className={`!bg-transparent !text-themeColor`}>
                                                        통과
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                10
                                            </TableCell>
                                            <TableCell>홍길동</TableCell>
                                            <TableCell>
                                                hgd123@kcinfra.co.kr
                                            </TableCell>
                                            <TableCell>
                                                <ProgressBar value={6} max={10}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="left">
                                                        점수 <span className={`text-themeColor font-bold`}>80</span>/100점
                                                    </div>
                                                    <Button color="transparentRoundedSmall">
                                                        미통과
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                10
                                            </TableCell>
                                            <TableCell>홍길동</TableCell>
                                            <TableCell>
                                                hgd123@kcinfra.co.kr
                                            </TableCell>
                                            <TableCell>
                                                <ProgressBar value={3} max={10}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="left">
                                                        점수 <span className={`text-themeColor font-bold`}>80</span>/100점
                                                    </div>
                                                    <Button color="primaryRoundedSmall"
                                                            className={`!bg-transparent !text-themeColor`}>
                                                    통과
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                10
                                            </TableCell>
                                            <TableCell>홍길동</TableCell>
                                            <TableCell>
                                                hgd123@kcinfra.co.kr
                                            </TableCell>
                                            <TableCell>
                                                <ProgressBar value={9} max={10}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="left">
                                                        점수 <span className={`text-themeColor font-bold`}>80</span>/100점
                                                    </div>
                                                    <Button color="primaryRoundedSmall"
                                                            className={`!bg-transparent !text-themeColor`}>
                                                    통과
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                10
                                            </TableCell>
                                            <TableCell>홍길동</TableCell>
                                            <TableCell>
                                                hgd123@kcinfra.co.kr
                                            </TableCell>
                                            <TableCell>
                                                <ProgressBar value={8} max={10}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="left">
                                                        점수 <span className={`text-themeColor font-bold`}>80</span>/100점
                                                    </div>
                                                    <Button color="primaryRoundedSmall"
                                                            className={`!bg-transparent !text-themeColor`}>
                                                    통과
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                10
                                            </TableCell>
                                            <TableCell>홍길동</TableCell>
                                            <TableCell>
                                                hgd123@kcinfra.co.kr
                                            </TableCell>
                                            <TableCell>
                                                <ProgressBar value={8} max={10}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="left">
                                                        점수 <span className={`text-themeColor font-bold`}>80</span>/100점
                                                    </div>
                                                    <Button color="primaryRoundedSmall"
                                                            className={`!bg-transparent !text-themeColor`}>
                                                    통과
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                <div className="pagination flex items-center justify-center ">
                                    <Pagination>
                                        <PaginationPrevious href="?page=2"> <span><MdChevronLeft/></span>
                                            <span>이전</span>
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
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <Heading level={2}>
                            수강자 정보
                        </Heading>
                        <div className="flex flex-col pb-16">
                            <div className="flex flex-col">
                                <FieldWrapper label="이름" singleElement={true}>
                                    <span className={`text-baseNormal`}>홍길동</span>
                                </FieldWrapper>
                                <FieldWrapper label="과정명" singleElement={true}>
                                    <span className={`text-baseNormal`}>hgd123@kcinfra.co.kr</span>
                                </FieldWrapper>
                                <FieldWrapper label="성적관리" singleElement={true}>
                                    <div className={`text-baseNormal`}>점수 <span
                                        className={`text-themeColor font-bold`}>80</span> <span
                                        className={`text-textSubColor`}>/100점</span></div>
                                </FieldWrapper>
                                <FieldWrapper label="진도율 (출석률)" singleElement={true}
                                              className={`border-b border-commonBorderColor`}>
                                    <div className={`text-baseNormal`}>80% <span
                                        className={`text-themeColor font-bold`}>8</span> <span
                                        className={`text-textSubColor`}>/10강</span></div>
                                </FieldWrapper>
                            </div>
                        </div>
                        <Heading level={2}>
                            진행 평가 확인
                        </Heading>
                        <div className="flex flex-col pb-16">
                            <ul className={`flex flex-col`}>
                                <li className={`flex items-center justify-between border-b border-t border-commonBorderColor px-5 py-4`}>
                                    <div className="inner">
                                        <div className="flex gap-3">
                                            <Button color="primaryLightSmall">
                                                응시완료
                                            </Button>
                                            <span className={`text-baseNormal`}>UX/UI 시작하기 : Figma 입문 (Inflearn Original) 기초 다지기 퀴즈</span>
                                        </div>
                                    </div>
                                    <div className="inner flex gap-6">
                                        <ul className={`flex gap-4 text-textSubColor text-baseNormal items-center`}>
                                            <li>응시일</li>
                                            <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                                <span>성적</span> <span>2025. 01. 26</span></li>
                                            <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                                <span>성적</span> <span>2025. 01. 26</span></li>
                                        </ul>
                                        <Button color="secondaryMedium" className={`h-[40px]`}>
                                            답안보기
                                        </Button>
                                    </div>
                                </li>
                                <li className={`flex items-center justify-between border-b border-commonBorderColor px-5 py-4`}>
                                    <div className="inner">
                                        <div className="flex gap-3">
                                            <Button color="primaryLightSmall">
                                                응시완료
                                            </Button>
                                            <span className={`text-baseNormal`}>UX/UI 시작하기 : Figma 입문 (Inflearn Original) 기초 다지기 퀴즈</span>
                                        </div>
                                    </div>
                                    <div className="inner flex gap-6">
                                        <ul className={`flex gap-4 text-textSubColor text-baseNormal items-center`}>
                                            <li>응시일</li>
                                            <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                                <span>성적</span> <span>2025. 01. 26</span></li>
                                            <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                                <span>성적</span> <span>2025. 01. 26</span></li>
                                        </ul>
                                        <Button color="secondaryMedium" className={`h-[40px]`}>
                                            답안보기
                                        </Button>
                                    </div>
                                </li>
                                <li className={`flex items-center justify-between border-b border-commonBorderColor px-5 py-4`}>
                                    <div className="inner">
                                        <div className="flex gap-3">
                                            <Button color="secondaryLightSmall">
                                                응시완료
                                            </Button>
                                            <span className={`text-baseNormal`}>UX/UI 시작하기 : Figma 입문 (Inflearn Original) 기초 다지기 퀴즈</span>
                                        </div>
                                    </div>
                                    <div className="inner flex gap-6">

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Heading level={2}>
                            수강자 정보
                        </Heading>

                        <div className="w-full">
                            <div className="">
                                <Disclosure as="div" className="border-t border-commonBorderColor" defaultOpen={true}>
                                    <DisclosureButton
                                        className="group px-5 py-4 flex w-full items-center justify-between bg-secondaryBgColor">
                                    <span className="text-baseNormal font-bold">
                                      Chapter 1. 피그마 기초 ( <span className={`text-themeColor font-bold`}>2</span> /3강)
                                    </span>
                                        <ChevronDownIcon
                                            className="size-8 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180"/>
                                    </DisclosureButton>

                                    <DisclosurePanel>
                                        <div className="flex flex-col">
                                            <ul className={`flex flex-col`}>
                                                <li className={`flex items-center justify-between border-b border-commonBorderColor px-5 py-4`}>
                                                    <div className="inner">
                                                        피그마 기본 정복 제 1강 (피그마 데스크탑 다운로드, 웹에서 실행방법)
                                                    </div>
                                                    <div className="inner flex">
                                                        <span>00:56:24 <span
                                                            className={`text-textSubColor`}>/ 01:15:30</span></span>
                                                    </div>
                                                </li>
                                                <li className={`flex items-center justify-between  px-5 py-4`}>
                                                    <div className="inner">
                                                    피그마 기본 정복 제 2강 (피그마 기본툴 사용하기)
                                                    </div>
                                                    <div className="inner flex gap-3">
                                                        <span>
                                                            <Button color="primaryLightSmall">
                                                                <Check className={`text-themeColor`} /> 수강완료
                                                            </Button>
                                                        </span>
                                                        <span>00:56:24 <span
                                                            className={`text-textSubColor`}>/ 01:15:30</span></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="border-t border-commonBorderColor" >
                                    <DisclosureButton className="group px-5 py-4 flex w-full items-center justify-between bg-secondaryBgColor">
                                    <span className="text-baseNormal font-bold">
                                      Chapter 2. 피그마 기초 ( <span className={`text-themeColor font-bold`}>2</span> /3강)
                                    </span>
                                        <ChevronDownIcon className="size-8 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    </DisclosureButton>

                                    <DisclosurePanel >
                                        <div className="flex flex-col">
                                            <ul className={`flex flex-col`}>
                                                <li className={`flex items-center justify-between border-b border-commonBorderColor px-5 py-4`}>
                                                    <div className="inner">
                                                        피그마 기본 정복 제 1강 (피그마 데스크탑 다운로드, 웹에서 실행방법)
                                                    </div>
                                                    <div className="inner flex">
                                                        <span>00:56:24 <span
                                                            className={`text-textSubColor`}>/ 01:15:30</span></span>
                                                    </div>
                                                </li>
                                                <li className={`flex items-center justify-between  px-5 py-4`}>
                                                    <div className="inner">
                                                        피그마 기본 정복 제 2강 (피그마 기본툴 사용하기)
                                                    </div>
                                                    <div className="inner flex gap-3">
                                                        <span>
                                                            <Button color="primaryLightSmall">
                                                                <Check /> 수강완료
                                                            </Button>
                                                        </span>
                                                        <span>00:56:24 <span
                                                            className={`text-textSubColor`}>/ 01:15:30</span></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="border-t border-commonBorderColor" >
                                    <DisclosureButton className="group px-5 py-4 flex w-full items-center justify-between bg-secondaryBgColor">
                                    <span className="text-baseNormal font-bold">
                                      Chapter 2. 피그마 기초 ( <span className={`text-themeColor font-bold`}>2</span> /3강)
                                    </span>
                                        <ChevronDownIcon className="size-8 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    </DisclosureButton>

                                    <DisclosurePanel >
                                        <div className="flex flex-col">
                                            <ul className={`flex flex-col`}>
                                                <li className={`flex items-center justify-between border-b border-commonBorderColor px-5 py-4`}>
                                                    <div className="inner">
                                                        피그마 기본 정복 제 1강 (피그마 데스크탑 다운로드, 웹에서 실행방법)
                                                    </div>
                                                    <div className="inner flex">
                                                        <span>00:56:24 <span
                                                            className={`text-textSubColor`}>/ 01:15:30</span></span>
                                                    </div>
                                                </li>
                                                <li className={`flex items-center justify-between  px-5 py-4`}>
                                                    <div className="inner">
                                                        피그마 기본 정복 제 2강 (피그마 기본툴 사용하기)
                                                    </div>
                                                    <div className="inner flex gap-3">
                                                        <span>
                                                            <Button color="primaryLightSmall">
                                                                <Check /> 수강완료
                                                            </Button>
                                                        </span>
                                                        <span>00:56:24 <span
                                                            className={`text-textSubColor`}>/ 01:15:30</span></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                        </div>
                        <div className="flex items-end justify-end pt-10">
                            <Button color="transparent">
                              <span><Menu /></span> <span>유형 생성</span>
                            </Button>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="flex gap-6">
                            <div className="flex flex-col w-[240px]">
                                <div className="flex items-center justify-between w-full pt-8">
                                    <span className={`font-bold text-baseNormal text-`}>챕터분류</span>

                                </div>
                                <div className="list">
                                    <ul className={`pt-2 border-t border-commonBorderColor mt-6 mb-4`}>
                                        <li className={`py-3 px-4 text-base bg-[#F4F9FF] text-themeColor font-bold`}>Chapter 1</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 2</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 3</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 4</li>
                                        <li className={`py-3 px-4 text-base text-textSubColor `}>Chapter 5</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-10 ">
                                <div className="flex items-center justify-between w-full">
                                    <div className="left flex gap-2 items-center">
                                        <span className={`font-bold  text-[25px]`}>Chapter 1.</span>
                                        <ToolTip title={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt nihil saepe? Eligendi eos est illo illum ipsa laudantium non.`}/>
                                    </div>
                                    <Button color="transparentMedium" className={`h-[32px]`}>
                                        <span><img src="/images/curriculum-management/li_file-input.png" alt=""/></span>
                                        <span>자료 가져오기</span>
                                    </Button>
                                </div>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableHeader>
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              />
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </TableHeader>
                                            <TableHeader>NO</TableHeader>
                                            <TableHeader>자료명</TableHeader>
                                            <TableHeader className={`text-end`}></TableHeader>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className="w-full border-t border-commonBorderColor mt-6">
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                              />
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </TableCell>
                                            <TableCell>
                                                01
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-baseNormal flex flex-col gap-2">
                                                    <div className="bredcrumbs">
                                                        <div className="flex items-center text-[13px] text-textSubColor  gap-1 ">
                                                            <div className="flex">
                                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>[중급] 피그마 완정 정복 제 1강 수업자료</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className={`text-end`}>
                                                <div className="flex gap-3 justify-end">
                                                    <Button color="secondaryMedium">
                                                       <span><Play className={`size-[20px]`} /></span> <span>검색</span>
                                                    </Button>
                                                    <Button color="transparentMedium" onClick={() => setIsOpen(true)}>
                                                      <span><Trash2 className={`size-[20px]`} /></span> <span>삭제</span>
                                                    </Button>
                                                </div>

                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                    />
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </TableCell>
                                            <TableCell>
                                                01
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-baseNormal flex flex-col gap-2">
                                                    <div className="bredcrumbs">
                                                        <div className="flex items-center text-[13px] text-textSubColor  gap-1 ">
                                                            <div className="flex">
                                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>[중급] 피그마 완정 정복 제 1강 수업자료</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className={`text-end`}>
                                                <div className="flex gap-3 justify-end">
                                                    <Button color="secondaryMedium">
                                                        <span><Play className={`size-[20px]`} /></span> <span>검색</span>
                                                    </Button>
                                                    <Button color="transparentMedium" onClick={() => setIsOpen(true)}>
                                                        <span><Trash2 className={`size-[20px]`} /></span> <span>삭제</span>
                                                    </Button>
                                                </div>

                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                    />
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </TableCell>
                                            <TableCell>
                                                01
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-baseNormal flex flex-col gap-2">
                                                    <div className="bredcrumbs">
                                                        <div className="flex items-center text-[13px] text-textSubColor  gap-1 ">
                                                            <div className="flex">
                                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>[중급] 피그마 완정 정복 제 1강 수업자료</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className={`text-end`}>
                                                <div className="flex gap-3 justify-end">
                                                    <Button color="secondaryMedium">
                                                        <span><Play className={`size-[20px]`} /></span> <span>검색</span>
                                                    </Button>
                                                    <Button color="transparentMedium" onClick={() => setIsOpen(true)}>
                                                        <span><Trash2 className={`size-[20px]`} /></span> <span>삭제</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={`w-[64px]`}>
                                                <CheckboxField>
                                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                    />
                                                    <Label className="font-normal"></Label>
                                                </CheckboxField>
                                            </TableCell>
                                            <TableCell>
                                                01
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-baseNormal flex flex-col gap-2">
                                                    <div className="bredcrumbs">
                                                        <div className="flex items-center text-[13px] text-textSubColor  gap-1 ">
                                                            <div className="flex">
                                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>[중급] 피그마 완정 정복 제 1강 수업자료</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className={`text-end`}>
                                                <div className="flex gap-3 justify-end">
                                                    <Button color="secondaryMedium">
                                                        <span><Play className={`size-[20px]`} /></span> <span>검색</span>
                                                    </Button>
                                                    <Button color="transparentMedium" onClick={() => setIsOpen(true)}>
                                                        <span><Trash2 className={`size-[20px]`} /></span> <span>삭제</span>
                                                    </Button>
                                                </div>

                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>


                        <Dialog size="w500" open={isOpen} onClose={setIsOpen}>
                            <DialogTitle>자료 등록 할 강의 선택</DialogTitle>

                            <DialogBody>
                                <div className="border border-borderColor px-1 py-2">
                                    <ul className={`max-h-[240px] custom-siderbar-scrollbar gap-2 flex flex-col `}>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                        <li className="flex flex-col ">
                                            <div
                                                className="flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4">
                                                <span
                                                    className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor group-hover:text-themeColor size-[18px] flex items-center justify-center`}><Play
                                                    className={`size-[10px]`}/></span>
                                                <span>Figma 기초1. 왜 피그마를 사용하는가? (피그마 설명, 설치 방법)</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </DialogBody>
                            <DialogActions>
                                <Button color="transparentMedium" className={`h-[40px]`}
                                        onClick={() => setIsOpen(false)}>
                                    취소
                                </Button>
                                <Button color="primaryMedium" className={`h-[40px]`}
                                        onClick={() => setIsOpen(false)}>확인</Button>
                            </DialogActions>
                        </Dialog>
                    </TabPanel>

                    <TabPanel>
                        <Disclosure as="div" className="border-t border-commonBorderColor" defaultOpen={true}>
                            <DisclosureButton
                                className="group px-5 py-4 flex w-full items-center justify-between bg-secondaryBgColor">
                                <div className="inner">
                                    <span className="text-medium font-bold">
                                    <span className={`text-themeColor font-bold`}>Q.</span>  피그마 심화 제12강 ~ 15강 퀴즈 2번 문항 오타 있는거 같습니다.</span>
                                </div>
                                <div className="inner">
                                    <ul className="flex gap-4 text-textSubColor">
                                        <li className={`text-base flex items-center gap-1`}><span><img
                                            src="/images/curriculum-management/person.png" alt=""/></span>
                                            <span>김철수</span></li>
                                        <li className={`text-base flex items-center gap-1`}><span><Clock
                                            className={`text-[#8E8E8E] size-[15px]`}/></span>
                                            <span>2024-08-27 11:30</span></li>
                                    </ul>
                                </div>

                            </DisclosureButton>

                            <DisclosurePanel>
                                <div className="flex flex-col p-8 gap-4 border-b border-commonBorderColor">
                                    <p>안녕하세요.</p>
                                    <p>피그마 심화 제 12강 ~ 15강 퀴즈를 풀었는데 2번 문항에 오타가 있는거 같아 남깁니다.</p>
                                    <p>문제 푸는데 지장은 없었습니다.</p>
                                    <p>오지선답 중 1번에서 <br/> Appearancee (e가 하나 더 붙었습니다.)</p>
                                    <p>오타가 수정 되어야 할거 같습니다.</p>
                                    <p> 감사합니다</p>
                                </div>
                            </DisclosurePanel>
                        </Disclosure>

                        <div className="flex flex-col p-8 gap-4 border-b border-commonBorderColor">
                            <div className="avatar-info flex gap-3">
                                <div className="img">
                                    <img src="/images/curriculum-management/avatar.png" alt=""/>
                                </div>
                                <div className="text">
                                    <p className={`text-base font-bold`}>운영자</p>
                                    <p className={`text-base text-textSubColor`}>2024-08-28 11:40</p>
                                    <p className={`pt-3`}>안녕하세요. 오탈자 확인하였습니다. 문제 푸시는데 어려움을 겪게 해드려 죄송합니다. 해당 내용은 오탈자 수정하여
                                        조치 하도록 하겠습니다. 감사합니다.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col p-6 gap-4 border-b border-commonBorderColor">
                            <div className="flex gap-3">
                                <div className="flex-1">
                                    <LmsStandardTextArea singleElement={true} className={`w-full`}/>
                                </div>
                                <div className="button">
                                    <Button color="secondary" className={`!w-[130px] !min-w-[130px] h-full`}>
                                        등록하기
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-end pt-10">
                            <Button color="transparent">
                                <span><Menu/></span> <span>목록</span>
                            </Button>
                        </div>
                    </TabPanel>

                </TabPanels>
            </TabGroup>

        </div>
    );
};

export default Page;