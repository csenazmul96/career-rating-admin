"use client"

import React from 'react';
import {Heading} from "@/components/common/heading";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import {Field} from "@/components/common/fieldset";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import {Button} from "@/components/common/button";

import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";

const Page = () => {
    return (
        <div className="flex flex-col relative">
            <Heading level={2} className=" top-[10px] absolute">
                <div className="flex items-center">
                    <span>프로필 설정</span>
                </div>
            </Heading>
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">

                <TabList className="tab-list-controller">
                    <Tab className={({selected}) => `tab-list-controller-btn  ${selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}`}>프로필 정보</Tab>
                    <Tab className={({selected}) => `tab-list-controller-btn  ${selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}`}>비밀번호 변경</Tab>
                </TabList>

                <TabPanels className="tab-content-controller">

                    <TabPanel>

                        <FilterForm>

                            <FilterFormWrapper label="ID" singleElement={true} className={`!py-3`}>
                                <LmsStandardInputField placeholder={`김철수 (kjca02)`} singleElement={true} fieldClass={`w-full`}/>
                            </FilterFormWrapper>

                            <FilterFormWrapper label="이름" singleElement={true} className={`!py-3`}>
                                <LmsStandardInputField placeholder={`이름을 입력하세요.`} singleElement={true} fieldClass={`w-full`}/>
                            </FilterFormWrapper>

                            <FilterFormWrapper label="이메일" singleElement={true} className={`!py-3`}>
                                <LmsStandardInputField placeholder={`이메일 주소를 입력하세요.`} singleElement={true} fieldClass={`w-full`}/>
                            </FilterFormWrapper>

                        </FilterForm>

                        <div className="flex items-end justify-end w-full py-8">
                            <Button type="button" color="primary">업데이트</Button>
                        </div>

                    </TabPanel>

                    <TabPanel>

                        <FilterForm>

                            <FilterFormWrapper label="현재 비밀번호" singleElement={true} className={`!py-3`}>
                                <LmsStandardInputField placeholder={`********`} singleElement={true} fieldClass={`w-full`}/>
                            </FilterFormWrapper>

                            <FilterFormWrapper label="새 비밀번호" singleElement={true} className={`!py-3`}>
                                <LmsStandardInputField placeholder={`********`} singleElement={true} fieldClass={`w-full`}/>
                            </FilterFormWrapper>

                            <FilterFormWrapper label="비밀번호 확인" singleElement={true} className={`!py-3`}>
                                <LmsStandardInputField placeholder={`********`} singleElement={true} fieldClass={`w-full`}/>
                            </FilterFormWrapper>

                        </FilterForm>

                        <div className="flex items-end justify-end w-full py-8">
                            <Button type="button" color="primary">업데이트</Button>
                        </div>

                    </TabPanel>

                </TabPanels>
            </TabGroup>
        </div>
    );
};

export default Page;