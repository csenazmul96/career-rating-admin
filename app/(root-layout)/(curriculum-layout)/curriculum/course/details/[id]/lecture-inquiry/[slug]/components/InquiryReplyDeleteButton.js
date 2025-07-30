"use client";

import {Button} from "@/components/common/button";
import React from "react";
import {confirmAlert} from "react-confirm-alert";
import {deleteCourseInquirieswReply} from "@/utils/api/curriculumManagement";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

function InquiryReplyDeleteButton({ url}) {
    const deleteReply = () => {
        confirmAlert({
            title: '답변 삭제',
            message: '선택한 답변을 삭제하시겠습니까?',
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
                      const response =  await deleteCourseInquirieswReply(url)
                        if (response.status === 'error'){
                            LmsToastMessage('오류.', 'no data found by replyId', 'error')
                        } else {
                            LmsToastMessage('성공.', '답변이 삭제되었습니다.', 'success')
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
        <div className="avatar items-end">
            <Button onClick={deleteReply} color="transparentSmall" className={`rounded-[2px]`}>삭제</Button>
        </div>
    );
}

export default InquiryReplyDeleteButton;