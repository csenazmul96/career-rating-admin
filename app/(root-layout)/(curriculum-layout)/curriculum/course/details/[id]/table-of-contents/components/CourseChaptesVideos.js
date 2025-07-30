"use client";
import { Button } from "@/components/common/button";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import { LmsToastMessage } from "@/components/common/LmsToastMessage";
import { Table, TableCell, TableRow } from "@/components/common/table";
import { deleteVideoFromChapter } from "@/utils/api/curriculumManagement";
import { useSearchParams } from "next/navigation";
import { confirmAlert } from "react-confirm-alert";
import { ReactSortable } from "react-sortablejs";

function CourseChaptesVideos({ videos }) {
  const params = useSearchParams();
  const allParams = new URLSearchParams(params);
  const deleteVideo = async (id) => {
    confirmAlert({
      title: "영상 삭제",
      message: `선택한 강의 영상을 삭제하시겠습니까?`,
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          buttonLabel: "삭제",
          onClick: async () => {
            const response = await deleteVideoFromChapter(
              allParams.get("chapter"),
              id
            );
            if (response.status === "success") {
              LmsToastMessage("삭제.", "Chapter has been deleted", "success");
            }
            if (response.status === "error") {
              LmsToastMessage(
                "오류.",
                "이미 수강 중인 학생이 있어 이 강의의 영상, 챕터를 수정하거나 삭제할 수 없습니다.",
                "error"
              );
            }
          },
        },
      ],
      customUI: ({ title, message, onClose, buttons }) => {
        return (
          <ConfirmPopup
            title={title}
            message={message}
            onClose={onClose}
            onConfirm={buttons}
          />
        );
      },
    });
  };

  const sortNewList = (d) => {
    // console.log(d)
  };
  return (
    <div className="max-h-96 overflow-y-auto w-full   border-t border-commonBorderColor">
      <Table>
        <ReactSortable list={videos} setList={sortNewList} tag="tbody">
          {videos.map((video, i) => (
            <TableRow key={`key-${i}`} className={" w-full content-center"}>
              <TableCell className={"w-[100px] hover:cursor-move"}>
                <img src="/images/membership/drag_handle.png" alt="" />
              </TableCell>
              <TableCell className={"w-[100px]"}>{++i}</TableCell>
              <TableCell>
                <div className={"flex items-center"}>
                  {video.Video?.thumbnail.length ? (
                    <img
                      className={"rounded"}
                      width={80}
                      src={video.Video.thumbnail[0].url}
                      alt=""
                    />
                  ) : (
                    <img
                      className={"rounded"}
                      width={80}
                      src="/images/content-management/Frame 3465185.png"
                      alt=""
                    />
                  )}
                  <span className={"ml-3 white-space-pre-line"}>
                    {video.Video?.file?.fileName}
                  </span>
                </div>
              </TableCell>
              <TableCell>{video.Video?.file?.playbackTime}</TableCell>
              <TableCell className={"text-end"}>
                <Button
                  color={"transparentMedium"}
                  onClick={() => deleteVideo(video.Video.id)}
                >
                  <img
                    src="/images/content-management/delete_outline.png"
                    alt=""
                  />{" "}
                  삭제
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </ReactSortable>
      </Table>
    </div>
  );
}

export default CourseChaptesVideos;
