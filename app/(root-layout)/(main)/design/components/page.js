'use client'
import React, {useState} from 'react';
import {Button} from "@/components/common/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/common/table'
import {Checkbox, CheckboxField, CheckboxGroup} from '@/components/common/checkbox'
import {Heading} from "@/components/common/heading";
import {Field} from "@/components/common/fieldset"
import * as Headless from '@headlessui/react'
import CustomDropdown from "/app/(root-layout)/(main)/design/components/CustomDropdown"
import {
    Pagination,
    PaginationGap,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
} from '@/components/common/pagination'
import Card from "@/components/common/card/Card";

import {FieldGroup, Label} from '@/components/common/fieldset'
import {Radio, RadioField, RadioGroup} from '@/components/common/radio'

import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Input} from "@/components/common/input";
import {GoPlus} from "react-icons/go";
import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import Example from "@/app/(root-layout)/(main)/design/components/tab/page";
import {Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle} from "@/components/common/dialog";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import {Select} from "@/components/common/select";
import {IoSearchOutline} from "react-icons/io5";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import ToolTip from "@/components/common/ToolTip";
import PreLoader from "@/components/common/PreLoader";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import {toast} from "react-toastify";
import Editor from "@/components/common/editor/Editor";
import LmsEditor from "@/components/common/editor/Editor";
import TiptapEditor from "@/components/common/editor/Editor";
import {showSuccessToast} from "@/app/(root-layout)/(main)/design/components/toasts";
import {Dropdown} from "@/components/common/dropdown";
const Page = () => {
    let [isOpen, setIsOpen] = useState(false)
    return (
        <div>

            <Heading level={2}>Button</Heading>
            <Card>

                <div className="flex gap-2">
                    <Button color="transparent">검색
                        유형 생성
                    </Button>
                    <Button color="primary">
                        검색
                    </Button>
                    <Button color="primaryLight">
                        검색
                    </Button>
                    <Button color="secondary">
                        검색
                    </Button>
                    <Button color="danger">
                        검색
                    </Button>
                </div>
                <div className="flex gap-2 pt-4">
                    <Button color="transparentLarge">검색
                        검색
                    </Button>
                    <Button color="primaryLarge">
                        검색
                    </Button>
                    <Button color="primaryLightLarge">
                        검색
                    </Button>
                    <Button color="secondaryLarge">
                        검색
                    </Button>
                    <Button color="dangerLarge">
                        검색
                    </Button>
                </div>
                <div className="flex gap-2 pt-4">
                    <Button color="transparentMedium">검색</Button>
                    <Button color="primaryMedium">
                        검색
                    </Button>
                    <Button color="primaryLightMedium">
                        검색
                    </Button>
                    <Button color="secondaryMedium">
                        검색
                    </Button>
                    <Button color="secondaryLightMedium">
                        검색
                    </Button>
                    <Button color="dangerMedium">
                        검색
                    </Button>
                    <Button color="dangerLightMedium">
                        검색
                    </Button>
                </div>

                <div className="flex pt-4 gap-2">
                    <Button color="transparentSmall">
                        검색
                    </Button>

                    <Button color="primarySmall">
                        검색
                    </Button>
                    <Button color="primaryLightSmall">
                        검색
                    </Button>
                    <Button color="secondarySmall">
                        검색
                    </Button>
                    <Button color="secondaryLightSmall">
                        검색
                    </Button>
                    <Button color="dangerSmall">
                        검색
                    </Button>
                    <Button color="dangerLightSmall">
                        검색
                    </Button>
                </div>

                <div className="flex pt-4 gap-2">
                    <Button color="transparentBorderRoundedSmall">
                        검색
                    </Button>

                    <Button color="primaryBorderRoundedSmall">
                        검색
                    </Button>
                    <Button color="primaryLightBorderRoundedSmall">
                        검색
                    </Button>
                    <Button color="secondaryBorderRoundedSmall">
                        검색
                    </Button>
                    <Button color="secondaryLightBorderRoundedSmall">
                        검색
                    </Button>
                    <Button color="dangerLightBorderRoundedSmall">
                        검색
                    </Button>
                    <Button color="dangerLightBorderRoundedSmall">
                        검색
                    </Button>
                </div>

                <div className="flex pt-4 gap-2">
                    <Button color="transparentRoundedSmall">
                        검색
                    </Button>
                    <Button color="primaryRoundedSmall">
                        검색
                    </Button>
                    <Button color="primaryRoundedSmall">
                        검색
                    </Button>
                    <Button color="primaryLightRoundedSmall">
                        검색
                    </Button>
                    <Button color="secondaryRoundedSmall">
                        검색
                    </Button>
                    <Button color="secondaryLightRoundedSmall">
                        검색
                    </Button>
                    <Button color="warningRoundedSmall">
                        검색
                    </Button>
                    <Button color="dangerRoundedSmall">
                        검색
                    </Button>
                    <Button color="dangerLightRoundedSmall">
                        검색
                    </Button>
                </div>

                {/*<div className="flex pt-4 gap-2">*/}
                {/*    <Button color="transparentSmall">*/}
                {/*        검색*/}
                {/*    </Button>*/}
                {/*    <Button color="primarySmall">*/}
                {/*        검색*/}
                {/*    </Button>*/}
                {/*    <Button color="secondarySmall">*/}
                {/*        검색*/}
                {/*    </Button>*/}
                {/*    <Button color="dangerSmall">*/}
                {/*        검색*/}
                {/*    </Button>*/}
                {/*    <Button color="dangerSmallLight">*/}
                {/*        검색*/}
                {/*    </Button>*/}
                {/*    <Button color="dangerSmallLight">*/}
                {/*        검색*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </Card>


            <Heading level={2}>Table</Heading>
            <Card>
                <Table>
                    <TableHead className="">
                        <TableRow>
                            <TableHeader>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"
                                              defaultChecked/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableHeader>
                            <TableHeader>회원번호</TableHeader>
                            <TableHeader>조직그룹</TableHeader>
                            <TableHeader>이름</TableHeader>
                            <TableHeader>회원ID</TableHeader>
                            <TableHeader>연락처</TableHeader>
                            <TableHeader>이메일</TableHeader>
                            <TableHeader>가입일</TableHeader>
                            <TableHeader>상태</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default"/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>KCI 개발기획본부</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>010-1234-5678</TableCell>
                            <TableCell>kcinfra01@kcinfra.co.kr</TableCell>
                            <TableCell>2024. 11. 19</TableCell>
                            <TableCell>Lorem</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>

            <Heading level={2}>Form</Heading>
            <Card>
                <Field>
                    <Label className="flex pb-2">중복 로그인</Label>
                    <Input name="full_name" placeholder="중복 로그인"/>
                </Field>

                <Field>
                    <Label className="flex pb-2">중복 로그인</Label>
                    <RadioGroup className="flex  space-x-6">
                        <RadioField>
                            <Radio color="lmsradio" value="permit"/>
                            <Label className="font-normal">수신동의자</Label>
                        </RadioField>
                        <RadioField>
                            <Radio color="lmsradio" value="forbid"/>
                            <Label className="font-normal">전체(수신거부자 포함)</Label>
                        </RadioField>
                    </RadioGroup>
                </Field>


                <Field>
                    <Label className="flex pb-2">중복 로그인</Label>
                    <div className="">
                        <CheckboxGroup className="flex space-x-6">
                            <CheckboxField>
                                <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                          defaultChecked/>
                                <Label className="font-normal">수신동의자</Label>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                          defaultChecked/>
                                <Label className="font-normal">수신동의자</Label>
                            </CheckboxField>
                        </CheckboxGroup>
                    </div>
                </Field>

            </Card>

            <Heading level={2}>Pagination</Heading>
            <Card>
                <div className="pagination flex items-center justify-center ">
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

            </Card>

            <Heading level={2}>
                    Tab
            </Heading>
            <Card>
                <TabGroup defaultIndex={1} className="tab-wrapper-controller">
                    <TabList className="tab-list-controller ">
                        <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>회원정보</Tab>
                        <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>수강내역</Tab>
                        <Tab className={({ selected }) => `tab-list-controller-btn  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>사이트 로그인 로그</Tab>
                    </TabList>
                    <TabPanels className="tab-content-controller">
                        <TabPanel>Content 1</TabPanel>

                        {/* Displays this panel by default */}
                        <TabPanel>Content 2</TabPanel>

                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </TabGroup>

            </Card>

            <Heading level={2}>
                Tab left side
            </Heading>
            <Card>
                <TabGroup defaultIndex={1} className="tab-wrapper-controller">
                    <TabList className="tab-list-controller items-start justify-start self-start border-b border-commonBorderColor !pb-0 !mb-3 w-full">
                        <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>회원정보</Tab>
                        <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>수강내역</Tab>
                        <Tab className={({ selected }) => `tab-list-controller-btn inline-flex w-auto  ${ selected ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>사이트 로그인 로그</Tab>
                    </TabList>
                    <TabPanels className="tab-content-controller">
                        <TabPanel>Content 1</TabPanel>

                        <TabPanel>Content 2</TabPanel>

                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </TabGroup>

            </Card>

            <Heading level={2}>
                Modal
            </Heading>
            <Card>
                <Button type="button" color="primary" onClick={() => setIsOpen(true)}>
                    Modal
                </Button>
                <Dialog size="w370" open={isOpen} onClose={setIsOpen}>
                    <DialogTitle>아이디 중복 확인</DialogTitle>

                    <DialogBody>
                        <p>이미 사용 중인 아이디 입니다.
                            다른 아이디를 입력해주세요.</p>
                    </DialogBody>
                    <DialogActions>
                        <Button color="transparentMedium" className={`h-[40px]`} onClick={() => setIsOpen(false)}>
                            취소
                        </Button>
                        <Button color="primaryMedium" className={`h-[40px]`} onClick={() => setIsOpen(false)}>확인</Button>
                    </DialogActions>
                </Dialog>
            </Card>

            <Heading level={2}>Common Form Row</Heading>

            <Card>

                <FieldWrapper  label="label">

                    <LmsStandardRadioFieldGroup options={[{id: '1', name: 'Option 1'}, {id: '2', name: 'Option 2'}]}
                                                name="example"/>
                    <div className="flex flex-none gap-4 items-center self-stretch ">
                        <Button color="transparentMedium" type="button">
                            정보통신망법 안내서
                        </Button>
                        <Button color="transparentMedium" type="button">
                            정보통신방법 Q&A1
                        </Button>
                    </div>
                </FieldWrapper>

                <FieldWrapper  label="label">
                    <LmsStandardInputField error="fdsfdfd"  />
                    <LmsStandardRadioFieldGroup options={[{ id: '1', name: 'Option 1' }, { id: '2', name: 'Option 2' }]} name="example" />
                    <div className="flex flex-none gap-4 items-center self-stretch ">
                        <Button color="transparentMedium" type="button">
                            정보통신망법 안내서
                        </Button>
                        <Button color="transparentMedium" type="button">
                            정보통신방법 Q&A
                        </Button>
                    </div>
                </FieldWrapper>

                <FieldWrapper label="label" singleElement={true}>
                    <LmsStandardInputField   singleElement={true} fieldClass="w-full" />
                </FieldWrapper>
                <FieldWrapper label="label">
                    <LmsSearchInput/>
                </FieldWrapper>
                <FieldWrapper className="border-b border-commonBorderColor" label="label">
                    <LmsStandardInputField  fieldClass="w-full" />
                    <div className="flex flex-none gap-4 items-center self-stretch ">
                        <Button color="transparentMedium" type="button">
                            정보통신망법 안내서
                        </Button>
                        <Button color="transparentMedium" type="button">
                            정보통신방법 Q&A
                        </Button>
                    </div>
                </FieldWrapper>
            </Card>

            <Heading level={2}>Common Filter</Heading>

            <Card>

                <FilterForm>
                    <FilterFormWrapper label="label" singleElement={true} className="border-b border-commonBorderColor">
                        <Field className="!pb-0 min-w-[270px]">
                            <Select name="status">
                                <option value="active">관리자 유형 선택</option>
                            </Select>
                        </Field>
                        <LmsStandardInputField singleElement={true} fieldClass="w-full"/>
                        <Button type="button" color="primary">asdas</Button>
                    </FilterFormWrapper>
                    <div className="flex gap-5">
                        <FilterFormWrapper isHalfWidth={true} label="label">
                            <LmsStandardInputField/>
                        </FilterFormWrapper>
                        <FilterFormWrapper isHalfWidth={true} label="label">
                            <LmsStandardInputField/>
                        </FilterFormWrapper>
                    </div>
                    <div className="flex gap-5">
                        <FilterFormWrapper isHalfWidth={true} label="label">
                            <LmsStandardInputField/>
                        </FilterFormWrapper>
                        <FilterFormWrapper isHalfWidth={true} label="label">
                            <LmsSearchInput/>
                        </FilterFormWrapper>
                    </div>
                </FilterForm>

            </Card>

            <Heading level={2}>Loader</Heading>
            <Card>
                <div className="placeholder relative h-[300px] bg-gray-50">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at dolorum nam. Distinctio, harum
                        id illo laudantium nihil provident? A natus ratione similique tempora unde. Asperiores
                        aspernatur cupiditate earum ipsam nemo nihil nisi porro similique, totam ut. Consectetur cum distinctio eaque expedita provident suscipit tempore veniam. Beatae consectetur minima repudiandae.</p>

                    {/*<PreLoader />*/}
                </div>

            </Card>

            <Heading level={2}>Custom Dropdown</Heading>
            <CustomDropdown />

            <Heading level={2}>Tooltip</Heading>
            <Card className={`mb-10`}>

                <ToolTip title={`광고성 메세지`} content={`영리 또는 광고성 메시지의 경우 선택해주세요. 문자 앞에 ‘(광고)’라는 메시지가 기입되어 전송됩니다.`} />

            </Card>
            <Button color="transparent"  onClick={() => showSuccessToast('완료되었습니다.', '변경하신 사항이 ')} >검색
                toaster
            </Button>


            <Heading level={2}>Editor</Heading>
            <Card>
                <Editor />
            </Card>


        </div>
    );
};

export default Page;