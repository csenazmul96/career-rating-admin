"use client"

import React, {useState} from 'react';
import {Button} from "@/components/common/button";
import { updateVideo} from "@/utils/api/videoContentRequest";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Menu} from "lucide-react";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

const VideoDetailsActions = ({formData, setErrors, video}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitForm = async () => {
    setErrors(null)
    setLoading(true)

    try {
      if (formData.permission !== 'CUSTOM') {
        formData.customPermissions = []
      }

      const response = await updateVideo(formData, `/video/content/${video.id}`)

      if (response.status === "success") {
        CommonToastMessage('성공.', 'Video updated successfully', 'success')
        router.refresh();
      } else if (response.status === "error") {
        setErrors(formatErrors(response.errors))
      } else {
        CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
      }

    } catch (e){
      console.log(e.message)
    }
    setLoading(false)
  }

  return (
      <>
        <div className="flex items-center justify-between pt-10">

          <div className="btnw-wrap">
            <Link href={"/content-management/video-management"}>
              <Button color="transparent" className="w-full text-center">
                <span>
                  {/*<Image src={menuCollapse} alt='menu collapse'/>*/}
                  <Menu size={20} />
                </span>
                <span className="text-19px leading-[normal]">목록</span>
              </Button>
            </Link>
          </div>

          <div className="flex items-end justify-end">
            <Button color="primary"
                    loading={loading}
                    disable={loading}
                    onClick={submitForm}>
              저장하기
            </Button>
          </div>
        </div>
      </>
  );
};

export default VideoDetailsActions;