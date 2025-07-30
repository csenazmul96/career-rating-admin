"use client"

import React, {useState} from 'react';
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import {Button} from "@/components/common/button";
import {Select} from "@/components/common/select";
import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import {
    Pagination,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious
} from "@/components/common/pagination";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {Heading} from "@/components/common/heading";

const Page = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Heading level={2}>
                <span>자료관리</span>
            </Heading>
            <FilterForm>
                <FilterFormWrapper label="검색" singleElement={true} className="">
                    <LmsSearchInput singleElement={true} fieldClass="w-full"/>
                    <Button type="button" color="primary">검색</Button>
                </FilterFormWrapper>

            </FilterForm>
            <div className="member-list-table pt-16">
                <div className="table-filter flex items-center pb-6">
                    <div className="flex items-center gap-2">
                        <div className="">Total</div>
                        <div className="text-themeColor font-bold">100 cases</div>
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
                        <Button className={`h-[32px]`} color="primaryMedium">
                            <span><img src="/images/content-management/upload.png" alt=""/></span>
                            <span>목록</span>
                        </Button>
                        <Button className={`h-[32px]`} color="transparentMedium">
                            <span><img src="/images/content-management/folder.png" alt=""/></span>
                            <span>목록</span>
                        </Button>
                        <Button onClick={() => setIsOpen(true)} className={`h-[32px]`} color="transparentMedium">
                            <span><img src="/images/content-management/delete_outline.png" alt=""/></span>
                            <span>목록</span>
                        </Button>
                    </div>
                </div>
                <Dialog size="w800" open={isOpen} onClose={setIsOpen}>
                    <DialogTitle>
                        <div className="flex justify-between items-center">
                            <div className="inner">
                                <h2 className={`text-medium text-[19px]`}>콘텐츠 사용내역</h2>
                                <p className={`text-textSubColor text-base font-normal`}>콘텐츠가 포함된 강의 내역입니다.</p>
                            </div>
                            <div className="inner self-end flex gap-2 text-textSubColor text-base font-normal">
                                <span><img src="/images/content-management/li_eye.png" alt=""/></span>
                                <span>권한: 등록자, 운영자1, 운영자2</span>
                            </div>
                        </div>
                    </DialogTitle>

                    <DialogBody className={`!mt-4`}>
                        <div className=" px-1 py-2">
                            <p className={`text-base pb-4`}>Total <span className={`font-bold text-themeColor`}>3건</span></p>
                            <Table>
                                <TableHead className="">
                                    <TableRow>
                                        <TableHeader>
                                            NO
                                        </TableHeader>
                                        <TableHeader>과정명</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>피그마 완전 정복</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>피그마 완전 정복</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>피그마 완전 정복</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            01
                                        </TableCell>
                                        <TableCell>피그마 완전 정복</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                    </DialogBody>
                    <DialogActions>
                        <Button color="transparentMedium" className={`h-[40px]`} onClick={() => setIsOpen(false)}>
                            취소
                        </Button>
                        <Button color="primaryMedium" className={`h-[40px]`}
                                onClick={() => setIsOpen(false)}>확인</Button>
                    </DialogActions>
                </Dialog>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                              defaultChecked/>
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableHeader>
                            <TableHeader>NO</TableHeader>
                            <TableHeader>파일명</TableHeader>
                            <TableHeader>사용 내역/권한</TableHeader>
                            <TableHeader>등록자</TableHeader>
                            <TableHeader>재생시간</TableHeader>
                            <TableHeader></TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                    />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell >
                                <div className="flex flex-col gap-2">
                                    <div className="bredcrumbs">
                                        <div
                                            className="flex items-center text-[13px] text-textSubColor  gap-1 ">
                                            <div className="flex">
                                                <div className="img">
                                                    <img src="/images/content-management/folder-2.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="img">
                                                    <img src="/images/content-management/li_chevron-right.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span>피그마 완전 정복 제 5강 학습자료</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`text-[17px]`}>(Inflearn Original) 1강.mp4</p>
                                </div>
                            </TableCell>
                            <TableCell>
                            <Button color="transparentSmall"
                                        className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
                            </TableCell>
                            <TableCell>
                                (운영자) 주설아
                            </TableCell>
                            <TableCell>
                                02:00:00
                            </TableCell>
                            <TableCell>
                                <span><img src="/images/content-management/chevron-right.png" alt=""/></span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                    />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell >
                                <div className="flex flex-col gap-2">
                                    <p className={`text-[17px]`}>(Inflearn Original) 1강.mp4</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall"
                                        className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
                            </TableCell>
                            <TableCell>
                                (운영자) 주설아
                            </TableCell>
                            <TableCell>
                                02:00:00
                            </TableCell>
                            <TableCell>
                                <span><img src="/images/content-management/chevron-right.png" alt=""/></span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                    />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell >
                                <div className="flex flex-col gap-2">
                                    <div className="bredcrumbs">
                                        <div
                                            className="flex items-center text-[13px] text-textSubColor  gap-1 ">
                                            <div className="flex">
                                                <div className="img">
                                                    <img src="/images/content-management/folder-2.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="img">
                                                    <img src="/images/content-management/li_chevron-right.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span>피그마 완전 정복 제 5강 학습자료</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`text-[17px]`}>(Inflearn Original) 1강.mp4</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall"
                                        className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
                            </TableCell>
                            <TableCell>
                                (운영자) 주설아
                            </TableCell>
                            <TableCell>
                                02:00:00
                            </TableCell>
                            <TableCell>
                                <span><img src="/images/content-management/chevron-right.png" alt=""/></span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                    />
                                    <Label className="font-normal"></Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell >
                                <div className="flex flex-col gap-2">
                                    <p className={`text-[17px]`}>(Inflearn Original) 1강.mp4</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall"
                                        className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
                            </TableCell>
                            <TableCell>
                                (운영자) 주설아
                            </TableCell>
                            <TableCell>
                                02:00:00
                            </TableCell>
                            <TableCell>
                                <span><img src="/images/content-management/chevron-right.png" alt=""/></span>
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
                        <PaginationNext href="?page=4"> <span>다음</span> <span><MdChevronRight/></span>
                        </PaginationNext>
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default Page;