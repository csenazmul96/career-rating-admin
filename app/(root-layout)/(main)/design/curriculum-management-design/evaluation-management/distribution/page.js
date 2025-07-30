"use client"

import React from 'react';
import {Heading} from "@/components/common/heading";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import ToggleSwitch from "@/components/common/form/ToggleSwitch";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {Button} from "@/components/common/button";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";
import ToolTip from "@/components/common/ToolTip";
import {AlignJustify, Plus, Trash2, X} from "lucide-react";
import Dropzone from "react-dropzone";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";

const Page = () => {
    return (
        <div className="flex flex-col">
            <Heading level={2}>평가 등록</Heading>

            <div className="flex flex-col pb-16">
                <div className="flex border-b border-commonBorderColor">
                    <div className="flex-1">
                        <FieldWrapper label="평가명" singleElement={true} className={`w-full`}>
                            <LmsStandardInputField placeholder={`평가명을 입력하세요.`} singleElement={true} fieldClass={`w-full`}/>
                        </FieldWrapper>
                    </div>
                    <div className="flex-1">
                        <FieldWrapper label="노출 여부" className={``}>
                            <LmsStandardSelectInputV2 options={[{id: 1, name: "그룹 선택"}, {id: 2, name: "option2"}]}/>
                        </FieldWrapper>
                    </div>
                </div>
            </div>

            <div className="flex gap-6">

                <div className="flex flex-col w-[373px] border border-borderColor py-8 gap-6 self-start">
                    <div className="flex flex-col px-8 gap-6">
                        <div className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                            <Heading level={2} className={`items-center !pb-0 gap-2 flex`}>
                                <span>배점</span>
                                <ToolTip title={`lorem ipsum`}/>
                            </Heading>

                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="permit"/>
                                    <Label className="font-normal">자동</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">수동</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                        <div className="inner flex items-center justify-between">
                            <Heading level={2} className={`items-center !pb-0 gap-2 flex`}>
                                <span>문항</span>
                            </Heading>
                            <div className="inner">
                                <p className={`font-bold text-base`}>전체 문항 수 <span
                                    className={`text-themeColor font-bold`}>10</span> 개</p>
                            </div>
                        </div>
                        <div className="inner">
                            <Button color="secondary" className={`w-full`}>
                                <span><Plus/></span> <span>문항 추가</span>
                            </Button>
                        </div>
                    </div>

                    <div className="inner pl-8 mr-1 custom-curriculum-scrollbar  max-h-[335px]">
                        <ul className={`flex flex-col pr-6 gap-3 `}>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                            <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                <div className="inner font-bold">
                                    2번 문항
                                </div>
                                <div className="inner flex gap-4 font-bold ">
                                    <span>10 점</span>
                                    <span><img src="/images/curriculum-management/li_equal.png" alt=""/></span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col flex-1">
                    <div className="p-8 border border-borderColor">
                        <div className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                            <Heading level={2} className={`items-center !pb-0 gap-2 flex`}>
                                <span>1번 문항</span>
                            </Heading>
                            <div className="inner">
                                <span className={`cursor-pointer`}><Trash2/></span>
                            </div>
                        </div>
                        <div className="inner">
                            <FieldWrapper label="문제 제목" vertical={true} singleElement={true} className={`w-full`}>
                                <LmsStandardInputField placeholder={`평가명을 입력하세요.`} singleElement={true}
                                                       fieldClass={`w-full`}/>
                            </FieldWrapper>
                            <FieldWrapper label="문제 제목" vertical={true} singleElement={true} className={`w-full`}>
                                <LmsStandardInputField placeholder={`평가명을 입력하세요.`} singleElement={true}
                                                       fieldClass={`w-full`}/>
                            </FieldWrapper>
                            {/*<FieldWrapper label="문제 제목" vertical={true} singleElement={true} className={`w-full`}>*/}

                            {/*</FieldWrapper>*/}
                            <div className="flex flex-col gap-2 py-4">
                                <div className="flex gap-2">
                                    <div className={`flex items-center`}>
                                            <span className={`common-label-style`}>
                                                 문제 제목

                                            </span>
                                    </div>
                                    <ToolTip
                                        content={`lorem ipsum sit doller emmet lorem ipsum sit doller emmet lorem ipsum sit doller emmet lorem ipsum sit doller emmet`}/>
                                </div>

                                <div className="flex gap-3">
                                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                        {({getRootProps, getInputProps}) => (
                                            <section
                                                className="flex flex-col">
                                                <div {...getRootProps()}
                                                     className={`h-[100px] w-[140px] rounded-[4px] border border-dotted border-commonBorderColor flex items-center justify-center flex-col gap-3`}>
                                                    <input {...getInputProps()} />
                                                    <img src="/images/curriculum-management/li_image-plus.png"
                                                         alt=""/>
                                                    <p>이미지 첨부</p>

                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                    <div className="items">
                                        <div className="img">
                                            <div className={"relative h-[100px] rounded-[4px] overflow-hidden w-[140px] before:content-[''] before:w-full before:h-full before:z-[4] before:bg-black before:bg-opacity-50 before:absolute "}>
                                                <img src="/images/curriculum-management/Frame%203465197.png"
                                                     className={'absolute w-full z-[3] h-full object-cover  mr-4'}
                                                     alt=""/>

                                                <div className={"z-[5] absolute top-3 right-3"}>
                                                    <Trash2 className={`text-white`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <FieldWrapper label="문제 지문" vertical={true} singleElement={true} className={`w-full`}>
                                <LmsStandardTextArea placeholder={`평가명을 입력하세요.`} singleElement={true}
                                                     fieldClass={`w-full`}/>
                            </FieldWrapper>
                            <div className="flex flex-col gap-5">
                                <Table>
                                    <TableHead className="">
                                        <TableRow>
                                            <TableHeader>
                                                정답지정
                                            </TableHeader>
                                            <TableHeader>답안 지문 작성</TableHeader>
                                            <TableHeader>이미지 등록</TableHeader>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <div className="flex gap-4">
                                                    <RadioGroup className="flex  space-x-6">
                                                        <RadioField>
                                                            <Radio color="lmsradio" value="permit"/>
                                                            <Label className="font-normal"></Label>
                                                        </RadioField>
                                                    </RadioGroup>
                                                    <span
                                                        className={`flex items-center justify-center border text-[#000] border-commonBorderColor rounded-full size-[26px]`}>1</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <LmsStandardInputField
                                                    placeholder={`Component는 Figma 파일 내에서만 사용 가능하며, 다른 파일에서 재사용할 수 없다.`}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="relative">
                                                        <LmsStandardInputField placeholder={`figma images_01.png`}/>
                                                        <span
                                                            className={`absolute right-2 bg-white top-1/2 -translate-y-1/2`}><X/></span>
                                                    </div>

                                                    <Button color="secondary" className={`!w-[100px] !min-w-[100px]`}>
                                                        파일선택
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className="flex gap-4">
                                                    <RadioGroup className="flex  space-x-6">
                                                        <RadioField>
                                                            <Radio color="lmsradio" value="permit"/>
                                                            <Label className="font-normal"></Label>
                                                        </RadioField>
                                                    </RadioGroup>
                                                    <span
                                                        className={`flex items-center justify-center border text-[#000] border-commonBorderColor rounded-full size-[26px]`}>1</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <LmsStandardInputField
                                                    placeholder={`Component는 Figma 파일 내에서만 사용 가능하며, 다른 파일에서 재사용할 수 없다.`}/>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-3">
                                                    <div className="relative">
                                                        <LmsStandardInputField placeholder={`figma images_01.png`}/>
                                                        <span
                                                            className={`absolute right-2 bg-white top-1/2 -translate-y-1/2`}><X/></span>
                                                    </div>

                                                    <Button color="secondary" className={`!w-[100px] !min-w-[100px]`}>
                                                        파일선택
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Button color="transparent" className={`w-full`}>
                                    <span><Plus/></span> <span>유형 생성</span>
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-between  py-10">
                        <Button color="transparent" type="submit">
                            <span><AlignJustify /></span> <span className={`leading-[normal]`}>목록</span>
                        </Button>
                        <Button color="primary" type="submit">
                            등록하기
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;