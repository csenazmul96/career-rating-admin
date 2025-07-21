import React from 'react';
import LmsPageHeading from "@/components/common/LmsPageHeading";
import NoticeForm from "@/app/(root-layout)/(main)/customer-service-center/notice/create/components/NoticeForm";
import {get11QueryCategory} from "@/utils/api/curriculumManagement";

export default async function Page() {
    const categories = await get11QueryCategory()
    return (
        <div>
            <LmsPageHeading title={`공지사항 등록`}/>
            <NoticeForm categories={categories} />
        </div>
    );
};

