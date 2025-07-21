"use client";

import ContentPageFilter from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageFilter";
import CurriculumCategorySidebar from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/category/CurriculumCategorySidebar";
import { Button } from "@/components/common/button";
import DataTable from "@/components/common/DataTable";
import { CommonToastMessage } from "@/components/common/CommonToastMessage";
import ToolTip from "@/components/common/ToolTip";
import { useDataTable } from "@/store/DataTableContext";
import { assignVideoToChapter } from "@/utils/api/curriculumManagement";
import { getContentList } from "@/utils/api/videoContentRequest";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ChapterVideoImport({ groups, queryParams, allParams }) {
  const [videos, setVideos] = useState([]);
  const [pagination, setPagination] = useState(null);

  const sendVideoContentRequest = async (params) => {
    const { videos, pagination } = await getContentList(
      params,
      "/video/content"
    );
    setPagination(pagination);
    setVideos(videos);
  };

  useEffect(() => {
    const oldParams = new URLSearchParams(queryParams);
    let contentGroupId = oldParams.get("contentGroupId") || "";
    let contentSubGroupId = oldParams.get("contentSubGroupId") || "";
    let contentSubSubGroupId = oldParams.get("contentSubSubGroupId") || "";

    const params = {
      contentGroupId: contentGroupId,
      contentSubGroupId: contentSubGroupId,
      contentSubSubGroupId: contentSubSubGroupId,
      search: oldParams.get("search") || "",
      size: 100,
    };
    sendVideoContentRequest(params);
  }, [queryParams]);

  let columns = [
    {
      header: "재생시간",
      accessor: "fileName",
      cell: (_, video) => <>{video.file && video.file.fileName}</>,
    },
    {
      header: "재생시간",
      accessor: "playbackTime",
      cell: (_, video) => <>{video.file && video.file.playbackTime}</>,
    },
  ];

  const route = useRouter();
  const { selectedRow, setSelectedRows } = useDataTable();
  const [loader, setLoader] = useState(false);
  const importVideo = async () => {
    if (selectedRow.length) {
      setLoader(true);
      try {
        const response = await assignVideoToChapter(
          { ids: selectedRow },
          allParams.id,
          allParams.chapter
        );
        if (response.status === "success") {
          CommonToastMessage("성공.", "Video has been imported", "success");
          setSelectedRows([]);
          route.push(
            `/curriculum/course/details/${allParams.id}/table-of-contents?chapter=${allParams.chapter}`
          );
        }

        if (response.status === "error") {
          CommonToastMessage(
            "오류.",
            "이미 수강 중인 학생이 있어 이 강의의 영상, 챕터를 수정하거나 삭제할 수 없습니다.",
            "error"
          );
        }
      } catch (e) {
        console.log(e.message);
      }
      setLoader(false);
    }
  };

  return (
    <div>
      <div className="flex gap-6">
        <div className="flex flex-col w-[240px]">
          <CurriculumCategorySidebar groups={groups} />
        </div>
        <div className="flex flex-col flex-1 gap-10 ">
          <div className="flex items-center justify-between w-full">
            <div className="left flex gap-2 items-center">
              <span className={`font-bold  text-[25px]`}> 영상 가져오기 </span>
              <ToolTip
                title={`영상 가져오기`}
                content={
                  "동영상 원본은 ‘콘텐츠 관리’ >  ‘동영상 관리'에서 업로드 후, 목차에 추가 가능합니다."
                }
              />
            </div>
            <div className={"flex gap-4"}>
              <Link
                href={`/curriculum/course/details/${allParams.id}/table-of-contents?chapter=${allParams.chapter}`}
              >
                <Button color="transparentMedium" className={`h-[40px]`}>
                  <span>
                    <img
                      src="/images/membership/menu-collapse-small.png"
                      alt=""
                    />
                  </span>
                  <span>목록</span>
                </Button>
              </Link>

              <Button
                disable={loader}
                loading={loader}
                onClick={importVideo}
                color={`${
                  selectedRow.length ? "primaryMedium" : "secondaryLightMedium"
                }`}
                className={`h-[40px]`}
              >
                <span>
                  {selectedRow.length ? (
                    <img src="/images/li_file-input_white.png" alt="" />
                  ) : (
                    <img
                      src="/images/curriculum-management/li_file-input.png"
                      alt=""
                    />
                  )}
                </span>
                <span>
                  {selectedRow.length ? `${selectedRow.length}개` : ""} 자료
                  가져오기{" "}
                </span>
              </Button>
            </div>
          </div>
          <ContentPageFilter queryParams={queryParams} />

          <div>
            {pagination && (
              <div className={`table-filter flex items-center pb-6`}>
                <div className="flex items-center gap-2">
                  <div className="">Total</div>
                  <div className="text-themeColor font-bold">
                    {pagination && pagination.total ? pagination.total : 0}건{" "}
                  </div>
                </div>
              </div>
            )}
            <DataTable
              columns={columns}
              data={videos}
              checkMark={true}
              emptyMessage={
                "해당 폴더에 영상이 없습니다. 영상을 업로드 해주세요."
              }
              showEmptyMessage={true}
              pagination={pagination}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChapterVideoImport;
