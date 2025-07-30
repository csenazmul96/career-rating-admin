"use client"


import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import LmsTable from "@/components/common/LmsTable";
import React from "react";
import Link from "next/link";
import {Button} from "@/components/common/button";
import InqueriTableActions
    from "@/app/(root-layout)/(main)/customer-service-center/inquiry/components/InqueriTableActions";

function CourseInquiryTableWrapper({pagination, id, queries}) {
    const transformedQueries = queries.map((query) => ({
        ...query,
        id: query.inquiryId,
    }));

    let columns = [
        { header: 'NO', accessor: 'inquiryId', thClass: 'w-28', tdClass: 'w-28', cell: (_, course) => (
                <Link href={`/curriculum/course/details/${id}/lecture-inquiry/${course.id}`}>
                    {course.title}
                </Link>
            )
        },
        { header: '제목', accessor: 'title', cell: (_, course) => (
                <Link href={`/curriculum/course/details/${id}/lecture-inquiry/${course.id}`}>
                    {course.title}
                </Link>
            )
        },
        { header: '댓글수', accessor: 'commentCount' },
        { header: '상태', accessor: 'situation', cell: (_, course) => (
                <Button
                    className={'!gap-1'}
                    color={`${course.situation === 'ANSWERED' ? 'primaryRoundedSmall' : "secondaryLightRoundedSmall"}`}
                >
                    {course.situation === 'ANSWERED' ? '답변완료' : '대기중'}
                </Button>
            )
        },
        { header: '작성자', accessor: 'createdBy'},
        { header: '작성일', accessor: 'createdAt'},
    ];

    return (
        <>
            <LmsTableHeaderActions  pagination={pagination}  TableActions={<InqueriTableActions url={`/enrolled-course/${id}/inquiries`} />}  />
            {queries && columns &&
                <LmsTable
                    columns={columns}
                    pagination={pagination}
                    data={transformedQueries}
                    emptyMessage={'문의 내역이 없습니다.'}
                    showEmptyMessage={true}
                    rowLink={(course)=>`/curriculum/course/details/${id}/lecture-inquiry/${course.id}`}
                    checkMark={true}  />
            }
        </>
    );
}

export default CourseInquiryTableWrapper;