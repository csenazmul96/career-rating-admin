"use client";
import ContentTableHeaderActions from "@/app/(root-layout)/(content-layout)/components/ContentTableHeaderActions";
import { Button } from "@/components/common/button";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/common/dialog";

import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import { useContentContext } from "@/store/ContentContext";
import { ChevronRight, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/table";

import ContentTableBreadCrumbs from "@/app/(root-layout)/(content-layout)/components/ContentTableBreadCrumbs";
import {useParams, usePathname} from "next/navigation";
import ContentRegistantNameWithHover
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentRegistantNameWithHover";
import VideoInvolvedHistoryShowModal
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/VideoInvolvedHistoryShowModal";

const VideoContentTableWrapper = ({ videos, pagination }) => {
  const { activeContent } = useContentContext();
  const pathName = usePathname()

  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleHistoryClick = (e, video) => {
    e.stopPropagation();
    setIsOpen(true);
    setCurrentVideo(video);
  };

  let columns = [
    {
      header: "파일명",
      accessor: "thumbnail",
      cell: (_, video) => (
          <div className="flex gap-4">
            <div className="img relative rounded overflow-hidden w-[120px] min-w-[160px] bg-[#000] aspect-[16/9]">
              {video.thumbnail && video.thumbnail.length ? (
                  <img
                      className="absolute top-0 left-0 w-full h-full object-contain"
                      src={video.thumbnail[0].url}
                      alt=""
                  />
              ) : (
                  <img
                      src="/images/content-management/c-dashboard.png"
                      alt=""
                      className={`absolute top-0 left-0 w-full h-full object-contain`}
                  />
              )}
                {video.subtitles.length &&
                    <div className="absolute top-2 left-2 ">
                        <Button color="secondaryLightRoundedSmall" className={`rounded-full h-6 text-13`}>
                            CC
                        </Button>
                    </div>
                }
                <div className="absolute bg-[#555555] flex justify-center items-center bg-opacity-[.77] text-white py-[2px] px-2 rounded-[2px] h-6 bottom-[10px] right-2">
                   <span className={"text-13"}> {video.file && video.file.playbackTime}</span>
                </div>
            </div>
            <div className="text-baseNormal flex justify-center flex-col gap-2">
              {pathName === '/content-management/video-management' &&
                  <ContentTableBreadCrumbs breadcrumbData={video} />
              }
              <p className="whitespace-pre-line">{video.title}</p>
            </div>
          </div>
      ),
    },
    {
      header: "사용 내역/권한",
      accessor: "usageHistory",
      cell: (_, video) => (
          <>
            <button
                className="rounded-[2px] relative isolate inline-flex items-center justify-center gap-x-1  data-[disabled]:opacity-50 bg-transparent border border-borderColor text-textSubColor py-[0px] text-[13px] px-2 font-normal min-w-[auto] h-[24px] leading-19 cursor-pointer"
                type="button"
                onClick={(e) => handleHistoryClick(e, video)}
            >
            <span
                className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                aria-hidden="true"
            ></span>
              <span>{video.usageHistory}/{video.permission === 'PRIVATE' ? "등록자" : (video.permission === 'PUBLIC' ? "전체" : "개별설정")}</span>
            </button>
          </>
      ),
    },

    {
      header: "등록자",
      accessor: "registrantName",
        cell: (_, video) => <> <ContentRegistantNameWithHover contentType={'video'} video={video} /> </>
    },
    {
      header: "해상도",
      accessor: "resolution",
      cell: (_, video) => <>{video.file && video.file.resolution}</>,
    },
    {
      header: "",
      accessor: "action",
      cell: (_, video) => (
          <Button>
            <Link
                className={"flex cursor-pointer"}
                href={`/content-management/video-management/details/${video.id}`}
            >
              <ChevronRight size={24} />
            </Link>
          </Button>
      ),
    },
  ];



    return (
      <>
        <LmsTableHeaderActions
            pagination={pagination}
            TableActions={<ContentTableHeaderActions />}
        />
        {videos && columns && (
            <LmsTable
                columns={columns}
                data={videos}
                serialNo={true}
                rowLink={(row) =>
                    `${
                        activeContent === "video"
                            ? "/content-management/video-management/details/" + row.id
                            : "/content-management/document-management/details/" + row.id
                    }`
                }
                checkMark={true}
                pagination={pagination}
            />
        )}
          <VideoInvolvedHistoryShowModal currentVideo={currentVideo} isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
  );
};

export default VideoContentTableWrapper;
