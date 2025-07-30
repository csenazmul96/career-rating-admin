import React from 'react';
import {Heading} from "@/components/common/heading";
import Image from "next/image";
import infoImg from "@/public/images/login-img.png";

import {Button} from "@/components/common/button";
import {GoPlus} from "react-icons/go";
import trash from "@/public/images/membership/delete.png";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import {Field, Label} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {ChevronRight, Menu, Plus, RotateCw, Trash, Trash2, X} from "lucide-react";

const Page = () => {
    return (
        <div className="flex flex-col membership-management">
            <Heading level={2} >
                <div className="flex items-center">
                    <span>관리자 유형 관리</span>
                    <span><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>
            <div className="grid">
                <div className="flex gap-8">

                    <div className="w-[241px] flex flex-col justify-between bg-white  ">
                        <div className="flex flex-col">
                            <Button color="transparent" className="w-full !gap-x-1 mb-2 cursor-pointer text-center !text-[15px]">
                                <span><Plus size={24} /></span> 관리자 유형 생성</Button>

                            <ul className="flex flex-col  gap-2 custom-scrollbar h-[500px]">
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>
                                <li className=" text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor">
                                    <span>콘텐츠 관리자</span>
                                    <button>
                                        <Trash2 size={24} className={`text-textSubColor`}/>
                                    </button>
                                </li>



                            </ul>

                        </div>
                    </div>

                    <div className="flex-1  pr-0 bg-white">
                        <div className="flex items-stretch border-t border-b border-borderColor">
                            <div className="left-col pl-6 flex items-center w-[153px] bg-[#F8F8F8]">
                                <span> 관리자 유형명</span>
                            </div>
                            <div className="right-col flex-1 p-4">
                                <Field className="!pb-0 w-[270px]">
                                    <Input name="name"
                                           placeholder="관리자 유형명을 입력해주세요."/>
                                </Field>

                            </div>
                        </div>

                        <div className="flex items-stretch border-b border-b-borderColor">
                            <div className="left-col pl-6 flex items-center w-[153px] bg-[#F8F8F8]">
                                <span> 권한 설정</span>
                            </div>
                            <div className="right-col flex-1 p-4 pr-0">
                                <div className="flex border border-borderColor flex-col">
                                    <div className="flex border-b border-b-borderColor">
                                        <div className="flex flex-col w-[270px] border-r border-r-borderColor">
                                            <div
                                                className="flex justify-between items-center border-b border-b-borderColor px-4 py-2">
                                                <span className={`text-[13px] text-[#000]`}> 1차 메뉴</span>
                                                <Button type="button"
                                                        color="transparentSmall"
                                                        className="min-w-[auto] h-[28px] text-center cursor-pointer">
                                                    초기화
                                                </Button>
                                            </div>
                                            <div
                                                className="flex justify-between  custom-scrollbar h-[350px]">
                                                <ul className={`w-full`}>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col">

                                            <div
                                                className="flex justify-between items-center border-b border-b-borderColor px-4 py-2">
                                                <span className={`text-[13px] text-[#000]`}> 2차 메뉴</span>
                                                <Button type="button"
                                                        color="transparentSmall"
                                                        className="min-w-[auto] h-[28px] text-center cursor-pointer">
                                                    초기화
                                                </Button>
                                            </div>
                                            <div className="flex">
                                                <ul className={`w-full`}>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>
                                                    <li className={`px-4 py-3`}>
                                                        <CheckboxField className={`!gap-x-2`}>
                                                            <Checkbox color="lmscheckbox" name="allow_embedding"/>
                                                            <Label
                                                                className="font-normal cursor-pointer text-black">콘텐츠
                                                                관리</Label>
                                                        </CheckboxField>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex space-x-3">
                                                <Button color="transparentRoundedSmall" >
                                                    <span>콘텐츠 관리 </span>
                                                    <span><ChevronRight size={14} /></span>
                                                    <span>동영상 관리</span>
                                                    <span>
                                                        <X size={12} />
                                                    </span>
                                                </Button>
                                                <Button color="transparentRoundedSmall" >
                                                   <span>주문결제 </span>
                                                    <span>
                                                        <X size={12} />
                                                    </span>
                                                </Button>
                                                <Button color="transparentRoundedSmall" >
                                                    <span>주문결제 </span>
                                                    <span>
                                                        <X size={12} />
                                                    </span>
                                                </Button>
                                            </div>
                                            <div className="flex">
                                                <Button color="transparentSmall"
                                                        className="min-w-[auto] px-4 h-[28px] cursor-pointer">
                                                        <span>
                                                            {/*<img src="/images/membership/refresh.png"*/}
                                                            {/*       alt=""/>*/}
                                                            <RotateCw className={``} size={16} />
                                                        </span> <span className={`leading-[normal]`}>초기화</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

                <div className="flex items-center justify-between mb-6 mt-10">

                    <div className="member-collapse-list">
                        <Button color="transparent" className="w-full text-center"
                        > <span>
                            {/*<Image src={menuCollapse} alt='menu collapse'/>*/}
                            <Menu size={24}/>
                        </span> <span
                            className="text-19px leading-[normal]">목록</span>
                        </Button>
                    </div>

                    <div className="flex items-end justify-end">
                        <Button color="primary">
                            등록
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Page;