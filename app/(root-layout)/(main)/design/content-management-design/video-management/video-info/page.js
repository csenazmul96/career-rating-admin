"use client"

import React from 'react';
import {Heading} from "@/components/common/heading";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import {Button} from "@/components/common/button";
import Dropzone from "react-dropzone";
import {Radio, RadioField} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import Image from "next/image";
import menuCollapse from "@/public/images/membership/member-collapse.png";

const Page = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <Heading level={2}>
                    <span>동영상 등록</span>
                </Heading>
                <div className="bredcrumbs">
                    <div className="flex items-center text-[19px] text-textSubColor  gap-1 pb-10">
                        <div className="flex gap-1">
                            <div className="img">
                                <img src="/images/content-management/home.png" alt=""/>
                            </div>
                            <span>홈</span>
                        </div>
                        <span><img src="/images/content-management/keyboard_arrow_right.png" alt=""/></span>
                        <div className="flex gap-1">
                            <div className="img">
                                <img src="/images/content-management/home.png" alt=""/>
                            </div>
                            <span>홈</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="flex-1 flex flex-col gap-16">
                    <div className="inner">
                        <Heading level={2} className={`!pb-8`}>
                            <span>URL</span>
                        </Heading>
                        <FieldWrapper label="HLS URL" singleElement={true}>
                            <div className="flex justify-between">
                                <span>http://untitle.vedio.DKLAJFLGLANE</span>
                                <span><img src="/images/content-management/copy.png" className={`cursor-pointer`}
                                           alt=""/></span>
                            </div>
                        </FieldWrapper>
                        <FieldWrapper label="HLS URL" singleElement={true}
                                      className={`border-b border-commonBorderColor`}>
                            <div className="flex justify-between">
                                <span>http://untitle.vedio.DKLAJFLGLANE</span>
                                <span><img src="/images/content-management/copy.png" className={`cursor-pointer`}
                                           alt=""/></span>
                            </div>
                        </FieldWrapper>
                    </div>

                    <div className="inner">
                        <Heading level={2} className={`!pb-8`}>
                            <span>파일 메타데이터</span>
                        </Heading>
                        <FieldWrapper label="해상도" singleElement={true}>
                            <span>1920X1080</span>
                        </FieldWrapper>
                        <FieldWrapper label="재생시간" singleElement={true}>
                            <span>01:30:23</span>
                        </FieldWrapper>
                        <FieldWrapper label="크기" singleElement={true} className={`border-b border-commonBorderColor`}>
                            <span>58.4MB</span>
                        </FieldWrapper>
                    </div>

                    <div className="inner">
                        <Heading level={2} className={`!pb-8`}>
                            <span>영상 정보</span>
                        </Heading>
                        <FieldWrapper label="해상도" singleElement={true}>
                            <LmsStandardInputField singleElement={true} placeholder={`피그마의 정석 [제1강]`}
                                                   fieldClass="w-full"/>
                        </FieldWrapper>
                        <FieldWrapper label="재생시간" singleElement={true}>
                            <LmsStandardSelectInputV2 fieldClass={`w-[230px]`}
                                                      options={[{id: '1', name: '피그마의 정석'}, {id: '2', name: 'Option 2'}]}/>
                        </FieldWrapper>
                        <FieldWrapper label="재생시간" singleElement={true}>
                            <LmsStandardInputField singleElement={true} placeholder={`피그마의 정석 [제1강]`}
                                                   fieldClass="w-full"/>
                        </FieldWrapper>
                        <FieldWrapper label="크기" singleElement={true} className={`border-b border-commonBorderColor`}>
                            <LmsStandardRadioFieldGroup
                                options={[{id: '1', name: '전체공개'}, {id: '2', name: '나만보기'}, {id: '3', name: '개별설정'}]}
                                name="example"/>
                        </FieldWrapper>
                    </div>

                </div>
                <div className="flex-1 flex flex-col gap-8">

                    <div className="inner">
                        <img src="/images/content-management/img-thumbnail-1.png" alt=""/>
                    </div>

                    <div className="flex items-center justify-between pb-6 border-b border-commonBorderColor">
                        <Heading level={2} className={`!pb-0`}>
                            <span>동영상 등록</span>
                        </Heading>
                        <div className="flex gap-4">
                            <Button className={`h-[32px]`} color="transparentMedium">
                                <span><img src="/images/content-management/li_image-plus.png" alt=""/></span>
                                <span>업로드</span>
                            </Button>
                            <Button onClick={() => setIsOpen(true)} className={`h-[32px] bg-[#F0F0F0]`} color="transparentMedium">
                                <span>적용</span>
                            </Button>
                        </div>
                    </div>

                    <div className="inner">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative">
                                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                    {({getRootProps, getInputProps}) => (
                                        <section
                                            className="flex flex-col border border-dotted rounded-[8px] border-commonBorderColor w-full ">
                                            <div {...getRootProps()}
                                                 className={`h-[207px] flex items-center justify-center flex-col gap-3`}>
                                                <input {...getInputProps()} />
                                                <img src="/images/content-management/drag.png" className={`mb-2`}
                                                     alt=""/>
                                                <p>파일을 이곳에 드롭하세요.</p>
                                                <p className={`flex items-center mb-2`}><img
                                                    className={`size-[13px] mr-2`}
                                                    src="/images/login-img.png" alt=""/> 최대 <span
                                                    className={`font-bold text-themeColor mr-2`}>1개 </span> 가능합니다.</p>

                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                            <div className="relative">
                                <span className={`absolute top-[10px] left-[10px]`}>
                                    <CheckboxField>
                                        <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                  defaultChecked/>
                                        <Label className="font-normal"></Label>
                                    </CheckboxField>
                                </span>
                                <img src="/images/content-management/Frame%203465263.png" alt=""/>
                            </div>
                            <div className="relative">
                                <span className={`absolute top-[10px] left-[10px]`}>
                                    <CheckboxField>
                                        <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                  defaultChecked/>
                                        <Label className="font-normal"></Label>
                                    </CheckboxField>
                                </span>
                                <img src="/images/content-management/Frame%203465264.png" alt=""/>
                            </div>
                            <div className="relative">
                                <span className={`absolute top-[10px] left-[10px]`}>
                                    <CheckboxField>
                                        <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                                  defaultChecked/>
                                        <Label className="font-normal"></Label>
                                    </CheckboxField>
                                </span>
                                <img src="/images/content-management/Frame%203465265.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10">

                <div className="btnw-wrap">
                    <Button color="transparent" className="w-full text-center"
                    > <span>
                            <Image src={menuCollapse} alt='menu collapse'/> </span> <span
                        className="text-19px">목록</span>
                    </Button>
                </div>

                <div className="flex items-end justify-end">
                    <Button color="primary">
                        저장하기
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Page;