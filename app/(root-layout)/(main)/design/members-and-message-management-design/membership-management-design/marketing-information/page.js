import React from 'react';
import {Heading} from "@/components/common/heading";
import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Field, Label} from "@/components/common/fieldset";
import {Select} from "@/components/common/select";
import {Input} from "@/components/common/input";
import {IoSearchOutline} from "react-icons/io5";
import {Button} from "@/components/common/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {
    Pagination,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious
} from "@/components/common/pagination";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";

const MarketingInfo = () => {
    return (
        <div className="flex flex-col marketing-information">
            <Heading level={2}>
                <div className="flex items-center">
                    <span>마케팅정보수신동의관리</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>

            <div className="marketing-information-form bg-secondaryBgColor border-t border-commonBorderColor py-6 px-12 ">

                <div className="flex flex-col w-full pt-3">
                    <div className="flex items-stretch">
                        <div className="left-col flex items-center w-[100px] ">
                            <span className="common-label-style">검색 </span>
                        </div>
                        <div className="right-col flex-1 py-4 pl-[20px]">
                            <div className="flex gap-x-3 items-center">
                                <div className="flex flex-1 gap-x-3">
                                    <Field className="!pb-0 flex relative w-full ">
                                        <Input name="full_name" className="w-full " placeholder="회원번호, 이름, 아이디 중 검색해주세요."/>
                                        <IoSearchOutline
                                            className="absolute right-5 top-1/2 transform -translate-y-1/2"/>
                                    </Field>
                                    <Button color="primary">
                                        검색
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="marketing-information-table py-14">
                <div className="table-filter flex items-center pb-6">
                    <div className="flex items-center gap-2">
                        <div className="">Total</div>
                        <div className="text-themeColor font-bold">100건</div>
                        <div className="">
                            <Select size="small" name="status" className="">
                                <option value="active">YYYY</option>
                                <option value="paused">직접 입력</option>
                                <option value="delayed">직접 입력</option>
                                <option value="canceled">직접 입력</option>
                            </Select>
                        </div>
                        <div>건 씩보기</div>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-3">
                        <Button color="transparentMedium">
                            <span><img src="/images/membership/marketing-info/message.png" alt=""/></span>
                            <span>수신동의안내발송</span>
                        </Button>
                        <Button color="transparentMedium">
                            <span><img src="/images/membership/marketing-info/download.png" alt=""/></span>
                            <span>엑셀 다운로드</span>
                        </Button>

                    </div>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default" />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableHeader>
                            <TableHeader>이름</TableHeader>
                            <TableHeader>이메일 수신 동의 여부</TableHeader>
                            <TableHeader>SMS 수신 동의 여부</TableHeader>
                            <TableHeader>수신 동의 안내일</TableHeader>
                            <TableHeader>다음 예상 안내일</TableHeader>
                            <TableHeader>다음 예상 안내일</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default" />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="secondarySmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                <Button color="secondarySmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default" />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentSmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default" />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentSmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default" />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="secondarySmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                <Button color="secondarySmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default" />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="secondarySmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                <Button color="secondarySmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="default" />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>12345</TableCell>
                            <TableCell>김철수</TableCell>
                            <TableCell>
                                <Button color="transparentSmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall">
                                    수신동의
                                </Button>
                                <span className="pl-2">2024. 07. 02</span>
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <div className="pagination flex items-center justify-center pt-10">
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
            </div>
        </div>
    );
};

export default MarketingInfo;