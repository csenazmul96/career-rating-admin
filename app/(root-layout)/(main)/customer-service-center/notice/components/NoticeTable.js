"use client";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import LmsTable from "@/components/common/LmsTable";
import InqueriTableActions
    from "@/app/(root-layout)/(main)/customer-service-center/inquiry/components/InqueriTableActions";
import {Button} from "@/components/common/button";
import React from "react";
import Link from "next/link";
import NoticeTableActions
    from "@/app/(root-layout)/(main)/customer-service-center/notice/components/NoticeTableActions";

function NoticeTable({pagination, queryParams, inqueries}) {

    let columns = [
        { header: '카테고리', accessor: 'category'},
        { header: '제목', accessor: 'title', cell: (_, course) => (
                <Link href={`/customer-service-center/notice/${course.id}`} className={`flex gap-2`}>
                    {course.noticeType === 'IMPORTANT' &&
                        <Button color={'transparentRoundedSmall'} className={`border border-themeColor text-themeColor`}>중요 </Button>
                    }

                    <span>{course.title} </span>
                </Link>
            )
        },
        { header: '조회수', accessor: 'view'},
        { header: '등록자', accessor: 'registrant'},
        { header: '등록일', accessor: 'createdAt'},
    ];
    return (
        <>
            <LmsTableHeaderActions pagination={pagination} TableActions={<NoticeTableActions url={"/create"} />} classes={'mt-8'} />
            {inqueries && columns &&
                <LmsTable
                    columns={columns}
                    data={inqueries}
                    serialNo={true}
                    emptyMessage={"검색 결과가 없습니다."}
                    showEmptyMessage={true}
                    checkMark={true}
                    rowLink={(course) => `/customer-service-center/notice/${course.id}`}
                    pagination={pagination} />
            }
        </>
    );
}

export default NoticeTable;