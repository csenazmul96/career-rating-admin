"use client"
import {Button} from "@/components/common/button";
import React from "react";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {memberRolePermissionRemove} from "@/utils/api/memberManagementRequest";
import {Trash2} from "lucide-react";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

const AdministratorDeleteButton = ({id}) => {
    const deleteMember = async (e) => {
        e.stopPropagation();
        confirmAlert({
            title: '삭제',
            message: '정말 이 작업을 하시겠습니까?',
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
                      const response =  await memberRolePermissionRemove(id)
                         
                        if(response.status === 'success'){
                            CommonToastMessage('성공.', 'Member has been removed', 'success')
                        } else {
                            CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
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
      <Button color={'transparentMedium'} className={'ml-2'} onClick={(e)=>deleteMember(e)}>
          {/*<PiTrashLight />*/}
          <Trash2 size={20} color="#717171" strokeWidth={1.25} />
      </Button>
  );
}

export default AdministratorDeleteButton
