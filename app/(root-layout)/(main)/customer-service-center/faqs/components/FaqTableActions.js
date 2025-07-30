'use client'
import {Button} from "@/components/common/button";
import {useDataTable} from "@/store/DataTableContext";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import React from "react";
import {deleteFaqs} from "@/utils/api/curriculumManagement";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {FilePlus, Trash2} from "lucide-react";
import Link from "next/link";
function FaqTableActions() {
    const{selectedRow, setSelectedRows} = useDataTable()

    const handleDelete = () => {
        confirmAlert({
            title: '게시글 삭제',
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
                        const response = await deleteFaqs({ids: selectedRow})
                        if (response.status === "Success") {
                            setSelectedRows([])
                            LmsToastMessage('성공.', 'Faq has been deleted!', 'success')
                        } else {
                            LmsToastMessage('실패.', 'Faq has not been deleted!', 'error')
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
            <Link href={"/customer-service-center/faqs/create"}>
                <Button color="transparentMedium">
                    <FilePlus size={20} /> <span className={`flex`}>자주묻는질문 등록</span>
                </Button>
            </Link>
        <Button color="transparentMedium" onClick={handleDelete} disable={!selectedRow.length ? true : false}>
            <span><Trash2 size={20} /></span> <span>삭제</span>
        </Button>
        </>
    );
}

export default FaqTableActions;