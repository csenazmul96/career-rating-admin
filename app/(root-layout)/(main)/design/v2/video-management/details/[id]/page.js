
import {Heading} from "@/components/common/heading";
import React from "react";
import {getVideoDetails} from "@/utils/api/videoContentRequest";
import VideoDetails from "./components/VideoDetails";
import {getRolesWiseMembers} from "@/utils/api/memberManagementRequest";
import Breadcrumbs
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/details/[id]/components/Breadcrumbs";

export default async function page ({params}) {
    const {id} = await params;

    const video = await getVideoDetails(id);
    const roles = await getRolesWiseMembers();
    const breadcrumbs = [
        {label: '동영상 관리', slug: "/content-management/video-management", link: true},
        {label: video?.title, slug: `/content-management/video-management/${video?.id}`, link: false},
    ]


    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <Heading level={2}>
                    <span>{video?.title}</span>
                </Heading>
                <Breadcrumbs breadcrumbs = {breadcrumbs}  />

            </div>
            {video &&
            <VideoDetails video={video}
                          id={id}
                          roles={roles} />
            }
            {!video &&
             <span>Not Found</span>
            }
        </div>
    )
}