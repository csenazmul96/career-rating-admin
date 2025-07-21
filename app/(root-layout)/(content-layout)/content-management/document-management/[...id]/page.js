import ContentPageBreadcrumb
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageBreadcrumb";
import React from "react";
import ContentPageFilter
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageFilter";
import VideoContentTableWrapper
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/VideoContentTableWrapper";
import {getCategoryInfo, getContentList} from "@/utils/api/videoContentRequest";

export default async function page({searchParams, params}) {
    const searchParamsAll = await searchParams
    const {id} = await params
    const parentId = id && id.length ? id[0] : ''
    const secondId = id && id.length > 1 ? id[1] : ''
    const thirdId = id && id.length > 2 ? id[2] : ''

    const {videos, pagination} = await getContentList({...searchParamsAll, contentGroupId: parentId, contentSubGroupId: secondId, contentSubSubGroupId:thirdId}, '/document/content');
    const category = await getCategoryInfo({
        groupId: parentId,
        subGroupId: secondId,
        subSubGroupId: thirdId
    })
    return (
        <>
            <div>
                <ContentPageBreadcrumb category={category} />
                <ContentPageFilter queryParams={searchParamsAll} />
                <div className="member-list-table pt-16">
                    <VideoContentTableWrapper videos={videos} pagination={pagination} />
                </div>
            </div>
        </>
    );
}