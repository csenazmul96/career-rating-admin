'use client'
import {Button} from "@/components/common/button";
import {useDataTable} from "@/store/DataTableContext";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import React from "react";
import {deleteInquiries} from "@/utils/api/curriculumManagement";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";
function InqueriTableActions({url}) {
    const{selectedRow, setSelectedRows} = useDataTable()

    const handleDelete = () => {
        confirmAlert({
            title: '게시글 삭제 설명',
            message: '선택한 게시글을 삭제하시겠습니까?',
            buttons: [
                {
                    label: '취소',
                    onClick: () => {
                        return false;
                    }
                },
                {
                    label: '확인',
                    onClick: async () => {
                        const response = await deleteInquiries({ids: selectedRow}, url)
                        if (response.status === "success") {
                            setSelectedRows([])
                            CommonToastMessage('성공.', 'Inquiry has been deleted!', 'success')
                        } else {
                            CommonToastMessage('실패.', 'Inquiry has not been deleted!', 'error')
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
            <Button color="transparentMedium" onClick={handleDelete} disable={!selectedRow.length ? true : false}>
                <span><img src="/images/content-management/li_trash-2.png" alt=""/></span> <span>삭제</span>
            </Button>
    );
}

export default InqueriTableActions;