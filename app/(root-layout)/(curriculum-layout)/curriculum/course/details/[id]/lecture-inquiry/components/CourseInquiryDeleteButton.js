'use client'

import {Button} from "@/components/common/button";
import {useDataTable} from "@/store/DataTableContext";
import {confirmAlert} from "react-confirm-alert";
import {deleteAnnouncements} from "@/utils/api/curriculumManagement";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {Trash2} from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

function CourseInquiryDeleteButton({id}) {
    const{selectedRow, setSelectedRows} = useDataTable()

    const deleteItems = async () => {
        let form = {
            ids: selectedRow
        }
        confirmAlert({
            title: '공지사항 삭제',
            message: '선택한 게시글을 삭제하시겠습니까?',
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
                            const response = await deleteAnnouncements(form)
                            if (response.status === 'success'){
                                setSelectedRows([]) // Clear selected rows after deletion
                                LmsToastMessage('삭제.', 'Announcement has been deleted!', 'success')
                            }
                        } catch (error) {
                            console.error("Error in onClick:", error.message);
                            LmsToastMessage('오류.', 'Failed to delete item', 'error')
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
            <Button className={`h-[32px]`}
                    onClick={deleteItems}
                    disable={selectedRow.length ? false : true}
                    color="transparentMedium">
                <span>
                    <Trash2 size={20} />
                </span>
                <span>삭제</span>
            </Button>

        </>
    );
}

export default CourseInquiryDeleteButton;