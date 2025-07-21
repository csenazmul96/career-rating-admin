"use client";
import VideoAssignToDocument from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/lecture-materials/components/VideoAssignToDocument";
import { Button } from "@/components/common/button";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import DataTable from "@/components/common/DataTable";
import { useCurriculumContext } from "@/store/CurriculumContext";
import {
  deleteDocumentFromChapter,
  getChapterVideos,
} from "@/utils/api/curriculumManagement";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Play, Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

function CourseChaptesDocuments({ documents, courseId }) {
  const params = useSearchParams();
  const allParams = new URLSearchParams(params);
  const { currentChapter } = useCurriculumContext();

  const deleteDocument = async (e, id) => {
    e.stopPropagation();
    confirmAlert({
      title: "자료 삭제",
      message: `선택한 자료를 삭제하시겠습니까? 등록된 과저에서도 자료가 삭제됩니다.`,
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
            const response = await deleteDocumentFromChapter(
              courseId,
              allParams.get("chapter"),
              id
            );
            if (response.status === "success") {
              CommonToastMessage('성공.', 'Chapter has been deleted', 'success')
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
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    courseId: "",
    chapterId: "",
    documentId: "",
    videos: [],
    videoId: "",
  });
  const tableData = documents.map((doc, idx) => ({
    ...doc,
    index: idx + 1,
  }));
  let columns = [
    { header: "NO", accessor: "index" },
    {
      header: "강의명",
      accessor: "content.title",
      cell: (_, document) => (
        <div className="text-baseNormal flex flex-col gap-2">
          <div className="bredcrumbs">
            <div className="flex items-center text-[13px] text-textSubColor  gap-1 ">
              <div className="flex">
                <span>
                  {document.contentVideos.length
                    ? document.contentVideos[0].Video?.file?.fileName
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <p>{document.content?.title}</p>
        </div>
      ),
    },
    {
      header: "",
      accessor: "content.title",
      cell: (_, document) => (
        <div className="flex gap-3 justify-end">
          {currentChapter && (
            <Button
              disable={
                loading && document.id === form.documentId ? true : false
              }
              color="secondaryMedium"
              onClick={(e) => assignVideo(e, document.content.id)}
            >
              <span>
                <Play className={`size-[20px]`} />
              </span>{" "}
              <span>강의 선택</span>
              {loading && document.id === form.documentId && (
                <span className={"text-[12px] opacity-70"}>
                  <FontAwesomeIcon icon={faCircleNotch} spin />
                </span>
              )}
            </Button>
          )}
          <Button
            color="transparentMedium"
            onClick={(e) => deleteDocument(e, document.content.id)}
          >
            <span>
              <Trash2 className={`size-[20px]`} />
            </span>{" "}
            <span>삭제</span>
          </Button>
        </div>
      ),
    },
  ];

  const assignVideo = async (e, id) => {
    e.stopPropagation();
    setForm((prev) => ({ ...prev, documentId: id }));
    setLoading(true);
    try {
      const videos = await getChapterVideos(courseId, currentChapter.id);

      setForm({
        courseId,
        chapterId: currentChapter ? currentChapter.id : "",
        documentId: id,
        videos,
        videoId: "",
      });
      setIsOpen(true);
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="max-h-96 overflow-y-auto w-full   border-t border-commonBorderColor">
        <DataTable
          columns={columns}
          data={tableData}
          emptyMessage={"등록된 자료가 없습니다. 자료를 등록해 주세요."}
          showEmptyMessage={true}
          checkMark={true}
        />
      </div>
      <VideoAssignToDocument
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setForm={setForm}
        form={form}
      />
    </>
  );
}

export default CourseChaptesDocuments;
