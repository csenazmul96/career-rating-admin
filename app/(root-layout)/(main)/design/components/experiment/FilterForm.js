import React from 'react';
import {Field} from "@/components/common/fieldset";
import {Select} from "@/components/common/select";
import {Input} from "@/components/common/input";
import {IoSearchOutline} from "react-icons/io5";
import {Button} from "@/components/common/button";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";

const FilterForm = ({children}) => {
    return (
        <>
            <div className="member-list-form bg-secondaryBgColor border-t border-commonBorderColor py-4 px-8 ">
                {children}

                {/*<div className="flex items-center border-b border-commonBorderColor pb-3">*/}

                {/*    <div className="flex flex-col w-1/2">*/}
                {/*        <div className="flex items-stretch">*/}
                {/*            <div className="left-col  flex items-center w-[100px]">*/}
                {/*                <span className="common-label-style">관리자 유형 </span>*/}
                {/*            </div>*/}
                {/*            <div className="right-col flex-1 py-4 pl-[20px]">*/}
                {/*                <Field className="!pb-0 w-[270px]">*/}
                {/*                    <Select name="status">*/}
                {/*                        <option value="active">관리자 유형 선택</option>*/}
                {/*                    </Select>*/}
                {/*                </Field>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="flex flex-col w-1/2">*/}
                {/*        <div className="flex items-stretch">*/}
                {/*            <div className="left-col  flex items-center w-[100px]">*/}
                {/*                <span className="common-label-style">조직그룹 </span>*/}
                {/*            </div>*/}
                {/*            <div className="right-col flex-1 py-4 pl-[20px]">*/}
                {/*                <Field className="!pb-0 w-[270px]">*/}
                {/*                    <Select name="status">*/}
                {/*                        <option value="active">조직그룹 선택</option>*/}
                {/*                    </Select>*/}
                {/*                </Field>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}

                {/*<div className="flex flex-col w-full pt-3">*/}
                {/*    <div className="flex items-stretch">*/}
                {/*        <div className="left-col flex items-center w-[100px] ">*/}
                {/*            <span className="common-label-style">검색 </span>*/}
                {/*        </div>*/}
                {/*        <div className="right-col flex-1 py-4 pl-[20px]">*/}
                {/*            <div className="flex gap-x-3 items-center">*/}
                {/*                <Field className="!pb-0 w-[270px]">*/}
                {/*                    <Select name="status">*/}
                {/*                        <option value="active">검색 유형 선택</option>*/}
                {/*                    </Select>*/}
                {/*                </Field>*/}
                {/*                <div className="flex flex-1 gap-x-3">*/}
                {/*                    <Field className="!pb-0 flex relative w-full ">*/}
                {/*                        <Input name="full_name" className="w-full " placeholder="검색어를 입력해주세요."/>*/}
                {/*                        <IoSearchOutline*/}
                {/*                            className="absolute right-5 top-1/2 transform -translate-y-1/2"/>*/}
                {/*                    </Field>*/}
                {/*                    <Button color="primary">*/}
                {/*                        검색*/}
                {/*                    </Button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>


        </>

    )
        ;
};

export default FilterForm;