import React from 'react';
import {get11QueryCategory, getAllNotice} from "@/utils/api/curriculumManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";

import NoticeTable from "@/app/(root-layout)/(main)/customer-service-center/notice/components/NoticeTable";
import NoticeFilter from "@/app/(root-layout)/(main)/customer-service-center/notice/components/NoticeFilter";

export default async function Page ({searchParams}) {

    const queryParams = await searchParams;
    const {notice, pagination} = await getAllNotice(queryParams);
    const categories = await get11QueryCategory()
    return (
        <div>
            <LmsPageHeading title={'공지사항'} tooltipTitle={"공지사항"} tooltip={'수강자 홈페이지 공지사항의 글 작성 및 수정, 삭제할 수 있습니다.'} />
            <NoticeFilter queryParams={queryParams} categories={categories} />
            <NoticeTable queryParams={queryParams} inqueries={notice} pagination={pagination} />
        </div>
    );
};

