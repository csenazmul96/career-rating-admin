"use client"
import {Button} from "@/components/common/button";
import React from "react";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {
    deleteCurriculumParentCategory,
    deleteCurriculumSubCategory,
    deleteCurriculumSubSubCategory
} from "@/utils/api/curriculumCategory";
import {useContentContext} from "@/store/ContentContext";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

const CurriculumCategoryActions = () => {
    const {setOpenForm, currentGroup, setActionType} = useContentContext();

    const createNewGroup = () => {
        setActionType('create')
        setOpenForm(true)
    }

    const editGroup = () => {
        setActionType('edit')
        setOpenForm(true)
    }

    const deleteHandler = () => {
        confirmAlert({
            title: '그룹 삭제',
            message: '선택한 그룹을 삭제하시겠습니까?',
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
                        let response = null;

                        if (currentGroup.level === 1) {
                            response = await deleteCurriculumParentCategory(currentGroup.id)
                        } else if (currentGroup.level === 2) {
                            response = await deleteCurriculumSubCategory(currentGroup.id)
                        } else if (currentGroup.level === 3) {
                            response = await deleteCurriculumSubSubCategory(currentGroup.id)
                        }

                        if (response && response.status === 'success') {
                            CommonToastMessage('삭제.', 'Group has been removed', 'success')
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
        <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="flex-col flex gap-3">
                {!currentGroup || (currentGroup.level === 1 || currentGroup.level === 2) ?
                    <Button color="transparentMedium"
                            onClick={createNewGroup}
                            className={`h-[40px] w-full`} >
                        <span><img src="/images/content-management/li_plus.png" alt=""/></span> <span>추가</span>
                    </Button> : ''
                }
                {currentGroup &&
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <Button color="transparentMedium"
                                    onClick={editGroup}
                                    className={`h-[40px] w-full`}>
                                <span><img src="/images/content-management/li_pencil.png" alt=""/></span> <span>추가</span>
                            </Button>
                        </div>
                        <div className="flex-1">
                            <Button color="transparentMedium"
                                    onClick={deleteHandler}
                                    className={`h-[40px] w-full`}>
                                <span><img src="/images/content-management/li_trash-2.png" alt=""/></span>
                                <span>추가</span>
                            </Button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default CurriculumCategoryActions