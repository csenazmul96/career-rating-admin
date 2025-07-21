import React from 'react';
import LmsPageHeading from "@/components/common/LmsPageHeading";
import NoticeForm from "@/app/(root-layout)/(main)/customer-service-center/notice/create/components/NoticeForm";
import {get11QueryCategory, getNoticeDetails} from "@/utils/api/curriculumManagement";

export default async function Page({params}) {
    const {id} = await params;
    const [categories, notice] = await  Promise.all([
        get11QueryCategory(),
        getNoticeDetails(id)
    ])

    return (
        <div>
            <LmsPageHeading title={`공지사항 등록`}/>
            <NoticeForm categories={categories} notice={notice} />
        </div>
    );
};

