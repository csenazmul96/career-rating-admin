'use client'

import React from "react";
import {Button} from "@/components/common/button";
import Link from "next/link";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {useDataTable} from "@/store/DataTableContext";
import {deleteCourse} from "@/utils/api/curriculumManagement";
import {NotepadText, Trash2} from "lucide-react";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

export default function CourseTableActions() {
  const{selectedRow, setSelectedRows} = useDataTable()



  const deleteItems = async () => {
    let form = {
      ids: selectedRow
    }
    confirmAlert({
      title: '과정 삭제',
      message: '선택한 과정을 삭제하시겠습니까? \n 과정에 포함된 모든 내용이 삭제 됩니다.',
      buttons: [
        {
          label: '취소',
          buttonLabel: "취소",
          onClick: () => {
            return false;
          }
        },
        {
          label: '확인',
          buttonLabel: "삭제",
          onClick: async () => {
            try {
              const response = await deleteCourse(form)
              if (response.status === 'success'){
                setSelectedRows([]) // Clear selected rows after deletion
                CommonToastMessage('성공.', 'Course has been deleted!', 'success')
              }
            } catch (error) {
              console.error("Error in onClick:", error.message);
              CommonToastMessage('오류.', 'Failed to delete item', 'error')
            }
          }
        }
      ],
      customUI: ({ title, message, onClose , buttons}) => {
        return (
          <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
        );
      }
    });
  }

  return (
    <>
      <Link href={"/curriculum/course/new-course"} className={`h-[32px]`}>
        <Button  color="primaryMedium">
          <span>
            {/*<img src="/images/curriculum/page.png" alt=""/>*/}
            <NotepadText size={20} />
          </span>
          <span>과정 등록</span>
        </Button>
      </Link>

      <Button className={`h-[32px]`}
              onClick={deleteItems}
              disable={selectedRow.length ? false : true}
              color="transparentMedium">
        <span>
          {/*<img src="/images/content-management/delete_outline.png" alt=""/>*/}
          <Trash2 size={20} />
        </span>
        <span>삭제</span>
      </Button>

    </>
  );
}