"use client";
import ContentGroupPicker from "@/app/(root-layout)/(main)/design/components/ContentGroupPicker";
import { Button } from "@/components/common/button";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import { useContentContext } from "@/store/ContentContext";
import { useDataTable } from "@/store/DataTableContext";
import {
  contentGroupChange,
  deleteContent,
} from "@/utils/api/videoContentRequest";
import { Folder, Trash2, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

export default function ContentTableHeaderActions() {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedGroup, setSelectedGroup] = useState(null);
  const { selectedRow, setSelectedRows } = useDataTable();
  const { activeContent } = useContentContext();

  const callConfirmFunction = () => {
    let form = {
      ids: selectedRow,
      groupId:
        selectedGroup.parentId && selectedGroup.secondId
          ? selectedGroup.parentId
          : selectedGroup.parentId
          ? selectedGroup.parentId
          : selectedGroup.id,
      subGroupId:
        selectedGroup.parentId && selectedGroup.secondId
          ? selectedGroup.secondId
          : selectedGroup.parentId
          ? selectedGroup.id
          : "",
      subSubGroupId:
        selectedGroup.parentId && selectedGroup.secondId
          ? selectedGroup.id
          : "",
    };

    confirmAlert({
      title: "그룹 변경",
      message: "그룹을 변경하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: async () => {
            await contentGroupChange(
              form,
              `${
                activeContent === "video"
                  ? "/video/content/group/change"
                  : "/document/content/group/change"
              }`
            ).then(() => {
              CommonToastMessage('성공.', 'group has been changed.', 'success')
            });
            setSelectedRows([]);
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

  const deleteVideo = async () => {
    let form = {
      ids: selectedRow,
    };
    confirmAlert({
      title: "동영상 삭제",
      message: "선택한 동영상 파일을 삭제하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: async () => {
            try {
              const endpoint =
                activeContent === "video" ? "video-contents" : "doc-contents";

              const tag =
                activeContent === "video"
                  ? "/video/coqntent"
                  : "/document/content";

              await deleteContent(form.ids, endpoint, tag);
              CommonToastMessage('삭제.', 'Item deleted successfully', 'success')
              setSelectedRows([]);
            } catch (error) {
              console.error("Error in onClick:", error.message);
              CommonToastMessage('오류.', 'Failed to delete item', 'error')
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

  return (
    <>
      <Link
        href={
          activeContent === "video"
            ? "/content-management/video-management/new-video"
            : "/content-management/document-management/new-document"
        }
      >
        <Button className={`h-[32px]`} color="primaryMedium">
          <span>
            {/*<img src="/images/content-management/upload.png" alt=""/>*/}
            <Upload size={20} />
          </span>
          {activeContent && (
            <span>{activeContent === "video" ? "업로드" : "자료등록"}</span>
          )}
        </Button>
      </Link>

      <Button
        className={`h-[32px]`}
        disable={selectedRow.length ? false : true}
        onClick={() => setIsOpen(!isOpen)}
        color="transparentMedium"
      >
        <span>
          {/*<img src="/images/content-management/folder.png" alt=""/>*/}
          <Folder size={20} />
        </span>
        <span>그룹 선택</span>
      </Button>
      <Button
        className={`h-[32px]`}
        onClick={deleteVideo}
        disable={selectedRow.length ? false : true}
        color="transparentMedium"
      >
        <span>
          {/*<img src="/images/content-management/delete_outline.png" alt=""/>*/}
          <Trash2 size={20} />
        </span>
        <span>삭제</span>
      </Button>
      <ContentGroupPicker
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        callBackFunction={setSelectedGroup}
        callConfirmFunction={callConfirmFunction}
      />
    </>
  );
}
