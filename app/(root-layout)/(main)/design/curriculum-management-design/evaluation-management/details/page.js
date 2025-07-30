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
import {AlignJustify, CircleMinus, Edit, Equal, Pencil, Plus, Trash2, X} from "lucide-react";
import Dropzone from "react-dropzone";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";

const Page = () => {
    return (
        <>
            <div className="flex flex-col">
                {/*<p>evaluation page</p>*/}
                <Heading level={2} className={`items-center gap-2 flex`}>
                    <Button color="transparentSmall">
                        피그마과정
                    </Button>
                    <span>[2024 업데이트] UX/UI 시작하기 : 피그마 기초평가</span>
                </Heading>

                <div className="flex gap-10">

                    <div className="flex flex-col gap-10 flex-1">
                        <div className="p-8 border border-borderColor">
                            <div class="flex flex-col gap-4">
                                <span className={`text-textSubColor text-base`}>기술평가</span>
                                <div
                                    className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                                    <div className={`text-[17px]`}><span
                                        className={`text-[25px] font-bold`}>1.</span> 다음 중 A, B, C 패널의 기능 중 역할이 알맞게 짝지어진
                                        것을 고르시오.
                                    </div>
                                    <div className="inner">
                                        <span className={`cursor-pointer`}>5점</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inner">
                                <div class="inner-wrap py-4">
                                    <img src="/images/curriculum-management/image-2.png" className={`w-[500px]`} alt=""/>
                                </div>
                                <div class="list">
                                    <ul className="flex flex-col gap-6">
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>1</span>
                                                <span>A - 레이어 관리, B - 파일관리, C - 오토레이아웃</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>2</span>
                                                <span>A - 레이어 관리, B - 파일관리, C - 오토레이아웃</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>3</span>
                                                <span>A - 레이어 관리, B - 파일관리, C - 오토레이아웃</span>
                                                <span>
                                                    <Button color={`primaryRoundedSmall`}>정답</Button>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>4</span>
                                                <span>A - 레이어 관리, B - 파일관리, C - 오토레이아웃</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>5</span>
                                                <span>A - 레이어 관리, B - 파일관리, C - 오토레이아웃</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>5</span>
                                                <span>A - 레이어 관리, B - 파일관리, C - 오토레이아웃</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                              

                            </div>
                        </div>

                        <div className="p-8 border border-borderColor">
                            <div class="flex flex-col gap-4">
                                <span className={`text-textSubColor text-base`}>기술평가</span>
                                <div
                                    className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                                    <div className={`text-[17px]`}><span
                                        className={`text-[25px] font-bold`}>2.</span>
Figma에서 'Component' 기능에 대한 설명 중 올바른 것을 고르세요.
                                    </div>
                                    <div className="inner">
                                        <span className={`cursor-pointer`}>5점</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inner">
                                <div class="list pt-6">
                                    <ul className="flex flex-col gap-6">
                                   
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>1</span>
                                                <span>Component는 Figma 파일 내에서만 사용 가능하며, 다른 파일에서 재사용할 수 없다.</span>
                                                <span>
                                                    <Button color={`primaryRoundedSmall`}>정답</Button>
                                                </span>
                                            </div>
                                        </li>
                                  
                                    </ul>
                                </div>
                                <div class="inner-wrap py-4">
                                    <img src="/images/curriculum-management/image-3.png" className={`w-[184px]`} alt=""/>
                                </div>
                                <div class="list">
                                    <ul className="flex flex-col gap-6">
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>2</span>
                                                <span>
                                                Component는 디자인 요소를 재사용할 수 있도록 하며, 여러 인스턴스를 생성하여 수정할 때 원본 Component를 수정하면 모든 인스턴스에 자동으로 변경이 적용된다.</span>
                                            </div>
                                        </li>
                                    
                           
                         
                                    </ul>
                                </div>
                                <div class="inner-wrap py-4">
                                    <img src="/images/curriculum-management/image-3.png" className={`w-[184px]`} alt=""/>
                                </div>

                            </div>
                        </div>


                        <div className="p-8 border border-borderColor">
                            <div class="flex flex-col gap-4">
                                <span className={`text-textSubColor text-base`}>기술평가</span>
                                <div
                                    className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                                    <div className={`text-[17px]`}><span
                                        className={`text-[25px] font-bold`}>3.</span> Figma에서 Auto Layout은 레이아웃의 크기나 위치를 자동으로 조정하는 기능입니다. 주로 버튼, 카드, 리스트 등의 요소에서 사용되며, 내용의 크기나형태에 따라 레이아웃이 자동으로 반응합니다. 이 기능이 적용된 요소를 찾으세요.
                                    </div>
                                    <div className="inner">
                                        <span className={`cursor-pointer`}>5점</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inner">
                               
                                <div class="list pt-6">
                                    <ul className="flex flex-col gap-6">
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>1</span>
                                                <span>레이아웃을 수동으로 조정해야 하는 요소입니다. Auto Layout이 적용됩니다.</span>
                                            </div>
                                        </li>
                                       
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                                <span>텍스트와 아이콘이 자동으로 정렬되어 있으며, 텍스트 크기 변경 시 아이콘의 위치가 자동으로 조정되는 버튼입니다. Auto Layout이 적용된 버튼입니다.</span>
                                                <span>
                                                    <Button color={`primaryRoundedSmall`}>정답</Button>
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>3</span>
                                                <span>버튼 텍스트와 아이콘이 겹쳐져 있으며, 레이아웃을 수동으로 조정해야 하는 요소입니다. Auto Layout이 적용되지 않았습니다.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="inner items-center flex gap-2">
                                                <span
                                                    className={`size-[30px] border border-commonBorderColor flex items-center justify-center rounded-full`}>4</span>
                                                <span>텍스트와 아이콘이 수동으로 배치된 버튼으로, 텍스트 크기 변경 시 아이콘의 위치가 자동으로 조정되지 않는 요소입니다.</span>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                              

                            </div>
                        </div>

                        <div className="flex items-center justify-between  py-10">
                            <Button color="transparent" type="submit">
                                <span><AlignJustify/></span> <span className={`leading-[normal]`}>목록</span>
                            </Button>
                            <Button color="transparent" type="submit">
                            <span><Pencil /></span> <span className={`leading-[normal]`}>등록하기</span>
                            
                            </Button>
                        </div>
                    </div>

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
                                <Heading level={2} className={`items-center text-base !pb-0 gap-2 flex`}>
                                    <span>전체 문항 수</span>
                                </Heading>
                                <div className="inner">
                                    <p className={`font-bold text-base`}> <span
                                        className={`text-themeColor font-bold`}>10</span> 개</p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="inner pl-8 mr-1 custom-curriculum-scrollbar  max-h-[335px]">
                            <ul className={`flex flex-col pr-6 gap-3 `}>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                                <li className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                                    <div className="inner font-bold">
                                    1번 문항                                    </div>
                                    <div className="inner flex items-center gap-3 font-bold ">
                                        <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                            <span className='whitespace-nowrap'>정답</span>
                                            <span
                                                    className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>2</span>
                                        </div>
                                        
                                        <span>10 점</span>
                                        
                                    </div>
                                </li>
                   
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Page;