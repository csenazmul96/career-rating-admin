import React from 'react';
import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Heading} from "@/components/common/heading";
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
import Link from "next/link";

const Page = () => {
    return (
        <div className={`flex flex-col relative`}>
            <Heading level={2}>
                <div className="flex items-center">
                    <span>메일 템플릿 관리</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>
            <div className="member-list-table pt-16">
                <div className="table-filter flex items-center pb-6">
                    <div className="flex items-center gap-2">

                    </div>
                    <div className="flex flex-1 items-center justify-end gap-3">
                        <Link className="common-link-transparent-medium" href="/design/members-and-message-management-design/sending-management-design/mail-template-management/add-mail-template">
                            <span><img src="/images/membership/plus.png" alt=""/></span>
                            <span>템플릿 등록</span>
                        </Link>
                    </div>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>NO</TableHeader>
                            <TableHeader>템플릿명</TableHeader>
                            <TableHeader>이름</TableHeader>
                            <TableHeader>이름</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>01</TableCell>
                            <TableCell>광고성 이벤트 메일 알림</TableCell>
                            <TableCell>2024. 07. 02</TableCell>
                            <TableCell>
                                <Button color="transparentMedium">
                                   <span><img src="/images/membership/trash-s.png" alt=""/></span> <span>예약</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                01
                            </TableCell>
                            <TableCell>광고성 이벤트 메일 알림</TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                <Button color="transparentMedium">
                                    <span><img src="/images/membership/trash-s.png" alt=""/></span> <span>예약</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                01
                            </TableCell>
                            <TableCell>광고성 이벤트 메일 알림</TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                <Button color="transparentMedium">
                                    <span><img src="/images/membership/trash-s.png" alt=""/></span> <span>예약</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                01
                            </TableCell>
                            <TableCell>광고성 이벤트 메일 알림</TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                <Button color="transparentMedium">
                                    <span><img src="/images/membership/trash-s.png" alt=""/></span> <span>예약</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                01
                            </TableCell>
                            <TableCell>광고성 이벤트 메일 알림</TableCell>
                            <TableCell>
                                2024. 07. 02
                            </TableCell>
                            <TableCell>
                                <Button color="transparentMedium">
                                    <span><img src="/images/membership/trash-s.png" alt=""/></span> <span>예약</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default Page;