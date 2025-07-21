"use client";
import ContentTableHeaderActions from "@/app/(root-layout)/(content-layout)/components/ContentTableHeaderActions";
import { Button } from "@/components/common/button";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/common/dialog";

import DataTable from "@/components/common/DataTable";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
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

const VideoContentTableWrapper = ({ videos, pagination }) => {
  const { activeContent } = useContentContext();

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
          <div className="img relative rounded overflow-hidden w-[120px] min-w-[120px] bg-[#000] aspect-[16/9]">
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
          </div>
          <div className="text-baseNormal flex flex-col gap-2">
            <ContentTableBreadCrumbs breadcrumbData={video} />
            <p className="whitespace-pre-line">{video.title}</p>
          </div>
        </div>
      ),
    },
    {
      header: "사용내역",
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
            <span>{video.usageHistory}</span>
          </button>
        </>
      ),
    },
    {
      header: "권한",
      accessor: "customPermissions",
      cell: (_, video) => {
        if (video.customPermissions && video.customPermissions.length > 0) {
          const names = video.customPermissions.map((p) => p.memberName);

          return (
            <div>
              {names.map((name, index) => (
                <div key={index}>
                  {name}
                  {index < names.length - 1 && ","}
                </div>
              ))}
            </div>
          );
        } else {
          return <p>권한 없음</p>;
        }
      },
    },
    {
      header: "등록자",
      accessor: "registrantName",
      cell: (_, video) => (
        <>
          {video.role
            ? "(" + video.role + ") " + video.registrantName
            : video.registrantName}
        </>
      ),
    },
    {
      header: "재생시간",
      accessor: "playbackTime",
      cell: (_, video) => <>{video.file && video.file.playbackTime}</>,
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

  if (activeContent === "document") {
    columns = [
      { header: "파일명", accessor: "title" },
      { header: "사용 내역/권한", accessor: "usageHistory" },
      { header: "등록자", accessor: "registrant" },
      { header: "등록일", accessor: "registrationDate" },
      {
        header: "",
        accessor: "action",
        cell: (_, video) => (
          <Button>
            <Link
              className={"flex cursor-pointer"}
              href={`${
                activeContent === "video"
                  ? "/content-management/video-management/details/" + video.id
                  : "/content-management/document-management/details/" +
                    video.id
              }`}
            >
              {/*<Image src={arrow} className="ml-1" alt="info image" />*/}
              <ChevronRight size={24} />
            </Link>
          </Button>
        ),
      },
    ];
  }

  return (
    <>
      <TableHeaderCommonActions
        pagination={pagination}
        TableActions={<ContentTableHeaderActions />}
      />
      {videos && columns && (
        <DataTable
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

      <Dialog size="w800" open={isOpen} onClose={() => setIsOpen(false)}>
        {currentVideo && currentVideo.involvedCourses && (
          <>
            <DialogTitle>
              <div className="flex justify-between items-center">
                <div className="inner flex flex-col gap-1">
                  <h2 className={`text-[19px]`}>콘텐츠 사용내역</h2>
                  <p className={`text-textSubColor text-base font-normal`}>
                    콘텐츠가 포함된 강의 내역입니다.
                  </p>
                </div>
                <div className="inner self-end flex gap-2 text-textSubColor text-base font-normal">
                  <span>
                    <Eye size={24} />
                  </span>
                  <span>
                    권한:{" "}
                    {currentVideo.permission ? currentVideo.permission : "없음"}
                  </span>
                </div>
              </div>
            </DialogTitle>
            <DialogBody className={`!mt-4`}>
              <div className=" px-1 py-2">
                <p className={`text-base pb-4`}>
                  Total
                  <span className={`font-bold text-themeColor`}>
                    {currentVideo.involvedCourses
                      ? currentVideo.involvedCourses.length
                      : 0}
                    건
                  </span>
                </p>
                <Table>
                  <TableHead className="">
                    <TableRow>
                      <TableHeader>NO</TableHeader>
                      <TableHeader>과정명</TableHeader>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentVideo.involvedCourses &&
                    currentVideo.involvedCourses.length > 0 ? (
                      currentVideo.involvedCourses.map((course, idx) => (
                        <TableRow key={course.courseId || idx}>
                          <TableCell>
                            {(idx + 1).toString().padStart(2, "0")}
                          </TableCell>
                          <TableCell>{course.courseName}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={2} className="text-center">
                          강의 내역이 없습니다.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </DialogBody>
            <DialogActions>
              <Button
                color="primaryMedium"
                className={`h-[40px]`}
                onClick={() => setIsOpen(false)}
              >
                확인
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default VideoContentTableWrapper;
