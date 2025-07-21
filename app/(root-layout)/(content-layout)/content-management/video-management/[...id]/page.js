import React from "react";
import ContentPageBreadcrumb
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageBreadcrumb";
import ContentPageFilter
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageFilter";
import VideoContentTableWrapper
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/VideoContentTableWrapper";
import {getCategoryInfo, getContentList} from "@/utils/api/videoContentRequest";

export default async function page({params, searchParams}) {
    const searchParamsAll = await searchParams
    const {id} = await params
    const parentId = id && id.length ? id[0] : ''
    const secondId = id && id.length > 1 ? id[1] : ''
    const thirdId = id && id.length > 2 ? id[2] : ''

    const [{videos, pagination}, category] = await Promise.all([
        getContentList({...searchParamsAll, contentGroupId: parentId, contentSubGroupId: secondId, contentSubSubGroupId:thirdId}, '/video/content'),
        getCategoryInfo({
            groupId: parentId,
            subGroupId: secondId,
            subSubGroupId: thirdId
        })
    ])

    return (
        <div>
            <ContentPageBreadcrumb category={category} />
            <ContentPageFilter queryParams={params} />
            <div className="member-list-table pt-16">
                {videos &&
                    <VideoContentTableWrapper videos={videos} pagination={pagination} />
                }
            </div>
        </div>
    );
}