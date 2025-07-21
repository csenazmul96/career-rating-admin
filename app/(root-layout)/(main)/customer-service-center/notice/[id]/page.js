import React from 'react';
import NoticeDetailsComponent
    from "@/app/(root-layout)/(main)/customer-service-center/notice/[id]/components/NoticeDetailsComponent";
import {getNoticeDetails} from "@/utils/api/curriculumManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";

const Page = async ({params}) => {

    const {id} = await params;
    const noticeDetails = await getNoticeDetails(id);
    console.log('notice details', noticeDetails);

    return (
        <div>
            <LmsPageHeading title={`공지사항`}/>
            <NoticeDetailsComponent id={id}  document={noticeDetails} />
        </div>
    );
};

export default Page;