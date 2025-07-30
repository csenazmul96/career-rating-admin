'use client'

import React, {useState} from "react";
import {Select} from "@/components/common/select";
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
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import {Field, Label} from "@/components/common/fieldset";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {ChevronRight, Folder} from "lucide-react";
// import {Folder} from "@/app/(root-layout)/(content-layout)/components/icons";


const data = [
    {
        id: "1",
        label: "전체보기",
        // icon: <Folder/>,
    },
    {
        id: "2",
        label: "PHP 강의",
        // icon: <Folder/>,
    },

    {
        id: "11",
        label: "회원 및 메시지 관리",
        // icon: <Folder/>,
        dropdown: [
            { id: "12", label: "초급"},
            { id: "13", label: "중급"},
            { id: "14", label: "실습"},
        ],
    },
    {
        id: "20",
        label: "PHP 강의",
        // icon: <Folder/>,
    },
];

export default  function Page() {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className="flex items-center text-[25px] text-black font-bold gap-6 pb-10">
                <span className="font-semibold">피그마 강의</span>
                <span><img src="/images/content-management/bredcrumbs-right.png" alt=""/></span>
                <span className="font-semibold">기초 강의</span>
                <span><img src="/images/content-management/bredcrumbs-right.png" alt=""/></span>
                <span className="font-semibold">11~20강</span>
            </div>
            <FilterForm>
                <FilterFormWrapper label="검색" singleElement={true} className="">
                    <LmsSearchInput singleElement={true} fieldClass="w-full"/>
                    <Button type="button" color="primary">asdas</Button>
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
                <Dialog size="w500" open={isOpen} onClose={setIsOpen}>
                    <DialogTitle>그룹 선택</DialogTitle>

                    <DialogBody>
                        <div className="border border-borderColor">
                            <ul className={`max-h-[240px] custom-siderbar-scrollbar gap-2 flex flex-col `}>
                                {data.map((item, index) => (
                                    <li key={index} className="flex flex-col ">
                                        <div className="flex items-center gap-3 text-textSubColor  text-[13px] hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4 rounded">
                                            <Folder size={16}  />
                                            <span>{item.label}</span>
                                        </div>
                                        {item.dropdown && (
                                            <ul className="ml-[24px] my-2 ">
                                                {item.dropdown.map((subItem) => (
                                                    <li key={subItem.id} className=" py-[8px] px-[21px] border-l border-borderColor hover:border-themeColor hover:text-themeColor hover:bg-[#F4F9FF]  text-textSubColor font-normal text-[13px]">
                                                        {subItem.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
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
                                    <Label className="font-normal">수신동의자</Label>
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
                                    <Label className="font-normal">수신동의자</Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <div className="img">
                                        <img src="/images/content-management/c-dashboard.png" alt=""/>
                                    </div>
                                    <div className="text-baseNormal flex flex-col gap-2">
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
                                                        <img src="/images/content-management/li_chevron-right.png"
                                                             alt=""/>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <span>피그마 완전 정복 제 5강 학습자료</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>(Inflearn Original) 1강.mp4</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall" className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
                            </TableCell>
                            <TableCell>
                                (운영자) 주설아
                            </TableCell>
                            <TableCell>
                                02:00:00
                            </TableCell>
                            <TableCell>
                                <span>
                                    <ChevronRight size={24} />
                                </span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckboxField>
                                    <Checkbox color="lmscheckbox" name="discoverability" value="show_on_events_page"
                                    />
                                    <Label className="font-normal">수신동의자</Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <div className="img">
                                        <img src="/images/content-management/c-dashboard.png" alt=""/>
                                    </div>
                                    <div className="text-baseNormal">
                                        <p>[2024 업데이트] UX/UI 시작하기 : Figma 입문</p>
                                        <p>(Inflearn Original) 1강.mp4</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall" className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
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
                                    <Label className="font-normal">수신동의자</Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <div className="img">
                                        <img src="/images/content-management/c-dashboard.png" alt=""/>
                                    </div>
                                    <div className="text-baseNormal">
                                        <p>[2024 업데이트] UX/UI 시작하기 : Figma 입문</p>
                                        <p>(Inflearn Original) 1강.mp4</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall" className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
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
                                    <Label className="font-normal">수신동의자</Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <div className="img">
                                        <img src="/images/content-management/c-dashboard.png" alt=""/>
                                    </div>
                                    <div className="text-baseNormal">
                                        <p>[2024 업데이트] UX/UI 시작하기 : Figma 입문</p>
                                        <p>(Inflearn Original) 1강.mp4</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall" className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
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
                                    <Label className="font-normal">수신동의자</Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <div className="img">
                                        <img src="/images/content-management/c-dashboard.png" alt=""/>
                                    </div>
                                    <div className="text-baseNormal">
                                        <p>[2024 업데이트] UX/UI 시작하기 : Figma 입문</p>
                                        <p>(Inflearn Original) 1강.mp4</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall" className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
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
                                    <Label className="font-normal">수신동의자</Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <div className="img">
                                        <img src="/images/content-management/c-dashboard.png" alt=""/>
                                    </div>
                                    <div className="text-baseNormal">
                                        <p>[2024 업데이트] UX/UI 시작하기 : Figma 입문</p>
                                        <p>(Inflearn Original) 1강.mp4</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall" className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
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
                                    <Label className="font-normal">수신동의자</Label>
                                </CheckboxField>
                            </TableCell>
                            <TableCell>05</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <div className="img">
                                        <img src="/images/content-management/c-dashboard.png" alt=""/>
                                    </div>
                                    <div className="text-baseNormal">
                                        <p>[2024 업데이트] UX/UI 시작하기 : Figma 입문</p>
                                        <p>(Inflearn Original) 1강.mp4</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button color="transparentSmall" className={`rounded-[2px]`}><span>1건 / 등록자</span></Button>
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
}