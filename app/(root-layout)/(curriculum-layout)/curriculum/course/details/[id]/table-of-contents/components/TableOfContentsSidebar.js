'use client'
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/common/button";
import CourseChapterForm
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/table-of-contents/components/CourseChapterForm";
import {confirmAlert} from "react-confirm-alert";

import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {useCurriculumContext} from "@/store/CurriculumContext";
import {deleteChapter} from "@/utils/api/curriculumManagement";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Plus, Trash2} from "lucide-react";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

const TableOfContentsSidebar = ({groups, courseId}) => {
    const [openForm, setOpenForm] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(false)
    const {currentChapter, setCurrentChapter} = useCurriculumContext()
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const {replace} = useRouter();
    const chapterId = searchParams.get('chapter');
    const deleteSelectedChapter = () => {
        confirmAlert({
            title: '그룹 삭제',
            message: `${currentChapter.chapterName} 챕터를 삭제하시겠습니까?\n` +
                '포함된 강의 목차가 있는 경우\n' +
                '함께 삭제 됩니다.',
            buttons: [
                {
                    label: '취소',
                    onClick: () => {
                        return false;
                    }
                },
                {
                    label: '확인',
                    buttonLabel: '삭제',
                    onClick: async () => {
                        const response = await deleteChapter(currentChapter.id)

                        if (response.status === 'success') {
                            showDeleteButton && setShowDeleteButton(false)
                            CommonToastMessage('성공.', 'Chapter has been deleted', 'success')
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

    if (!currentChapter && groups.length){
        let item = groups.find (item=> item.id === +searchParams.get('chapter'))
        if(item !== undefined)
            setCurrentChapter(item)
    }

    useEffect(() => {
        if (currentChapter) {
            setCurrentChapter(null)
        }
    }, [pathname]);

    useEffect(() => {
        if (groups.length && !chapterId) {
            selectChapter(  groups[0] )
        }
    }, [searchParams]);



    const selectChapter = (chapter) => {
        setShowDeleteButton(true)
        setCurrentChapter(chapter)
        replace(`${pathname}?${new URLSearchParams({chapter:  chapter.id})}`);
    }

    return (
        <>
            <div className="flex flex-col w-[240px]">
                <div className="flex items-center justify-between w-full">
                    <span className={`font-bold text-textSubColor`}>챕터분류</span>
                    {currentChapter && showDeleteButton && !pathname.includes('lecture-materials') &&
                        <Button color="transparentSmall" className={`h-[28px]`} onClick={deleteSelectedChapter}>
                            <span>
                                <Trash2 size={16} color="#717171" strokeWidth={1.25} />
                            </span> <span>삭제</span>
                        </Button>
                    }
                </div>
                <div className="list">
                    <ul className={`pt-2 border-t border-commonBorderColor mt-6 mb-4`}>
                        {groups.length ? groups.map((item, i) => (
                            <li key={`key${i}`} onClick={()=>selectChapter(item)} className={`py-3 px-4 text-base cursor-pointer ${currentChapter && item.id === currentChapter.id ? 'text-themeColor bg-[#F4F9FF] font-bold' : 'text-textSubColor'} `}>
                                {item.chapterName}
                            </li>
                        )) : ''}
                    </ul>
                    {!pathname.includes('lecture-materials') &&
                        <Button color="transparentSmall" className={`w-full h-[42px]`} onClick={()=>setOpenForm(true)}>
                            <span>
                                {/*<img className={`size-[16px]`} src="/images/content-management/li_plus.png" alt=""/>*/}
                                <Plus size={16} />
                            </span>
                            <span>추가</span>
                        </Button>
                    }
                </div>
            </div>
            <CourseChapterForm openForm={openForm} setOpenForm={setOpenForm} chapter={currentChapter} courseId={courseId} groupsLength={groups.length} />
        </>
    );
};

export default TableOfContentsSidebar;