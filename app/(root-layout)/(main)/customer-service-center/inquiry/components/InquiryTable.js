"use client";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import LmsTable from "@/components/common/LmsTable";
import InqueriTableActions
    from "@/app/(root-layout)/(main)/customer-service-center/inquiry/components/InqueriTableActions";
import {Button} from "@/components/common/button";
import React from "react";
import Link from "next/link";

function InquiryTable({pagination, queryParams, inqueries}) {

    let columns = [
        { header: 'NO', accessor: 'id', thClass: 'w-28', tdClass: 'w-28' },
        { header: '카테고리', accessor: 'category'},
        { header: '제목', accessor: 'title', cell: (_, course) => (
                <Link href={`/customer-service-center/inquiry/${course.id}`}>
                    {course.title}
                </Link>
            )
        },
        { header: '작성자', accessor: 'author'},
        { header: '상태', accessor: 'usageHistory'},
        { header: '노출', accessor: 'restrictionCount', cell: (_, course) => (
                <Button
                    className={'!gap-1'}
                    color={`${course.situation === 'ANSWERED' ? 'primaryLightRoundedSmall' : "secondaryLightRoundedSmall"}`}
                >
                    {course.situation === 'ANSWERED' ? '답변완료' : '대기중'}
                </Button>
            )
        },

        { header: '마지막 응답자', accessor: 'lastResponse'},
        { header: '마지막 응답일', accessor: 'lastResponseDate'},
    ];
    return (
        <>
            <LmsTableHeaderActions pagination={pagination} TableActions={<InqueriTableActions url={"/student-inquiry"} />} classes={'mt-8'} />
            {inqueries && columns &&
                <LmsTable
                    columns={columns}
                    data={inqueries}
                    checkMark={true}
                    rowLink={(course) => `/customer-service-center/inquiry/${course.id}`}
                    pagination={pagination} />
            }
        </>
    );
}

export default InquiryTable;