"use client";

import VideoDetailsInfo from "./VideoDetailsInfo";
import VideoDetailsForm from "./VideoDetailsForm";
import VideoDetailsActions from "./VideoDetailsActions";
import React, {useState} from "react";
import VideoDetailsThumbnails from "./VideoDetailsThumbnails";
import { findDefaultThumbnailIdOfContent} from "@/utils/helpers/CommonHelper";
import {useSidebar} from "@/custom-hooks/useSidebar";
import VideoSubtitle
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/details/[id]/components/VideoSubtitle";

export default function VideoDetails({video, roles, id}) {
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    title: video.title,
    groupId: video.groupId,
    subGroupId: video.subGroupId,
    subSubGroupId: video.subSubGroupId,
    permission: video.permission,
    customPermissions: video.customPermissions,
    tag: video.tag??'',
    defaultThumbnailId:  findDefaultThumbnailIdOfContent(video.thumbnail)
  });
  const {isSidebarOpen} = useSidebar()
  return (
    <>
      <div className="flex gap-6">
        <div className={`flex flex-col gap-16 ${isSidebarOpen ? "w-[65%]" : "w-[50%]"}`}>
            <VideoDetailsInfo video={video}/>
            <VideoSubtitle video={video} />
            <VideoDetailsForm video={video}
                              errors={errors}
                              formData={formData}
                              roles={roles}
                              setFormData={setFormData}/>
          </div>
          <VideoDetailsThumbnails thumbnail={video.thumbnail}
                                  setFormData={setFormData}
                                  video={video}
                                  id={id}/>
        </div>

        <VideoDetailsActions formData={formData}
                             video={video}
                             setErrors={setErrors}/>
      </>
      );
      }