"use client";

import React, {useState, useEffect} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardTextEditor from "@/components/common/form/LmsStandardTextEditor";
import NoticeFileUpload from "@/app/(root-layout)/(main)/customer-service-center/notice/create/components/NoticeFileUpload";
import {Button} from "@/components/common/button";
import {Menu} from "lucide-react";
import {createFaqs, createNotice, updateFaqs, updateNotice} from "@/utils/api/curriculumManagement";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {useRouter} from "next/navigation";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

function NoticeForm({notice = null, categories}) {
    const [form, setForm] = useState({
        title: "",
        details: "",
        category: "",
        noticeType: "GENERAL",
        attachmentIds: []
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cleanForm, setCleanForm] = useState(false)
    const handleOnChange = (column, value) => {
        console.log(`Updating ${column} with value:`, value);
        setForm((prev) => ({ ...prev, [column]: value }));
    };

    useEffect(() => {
        if (notice) {
            let ids = notice.files.map(item => {return item.id})
            setForm({
                title: notice.title,
                details: notice.details,
                category: notice.category,
                noticeType: notice.noticeType,
                attachmentIds: ids
            })
        }
    }, [notice]);

    const submitForm = async () => {
        setErrors(null)
        setLoading(true)

        let response = null;

        if (notice) {
            response = await updateNotice(form, notice.id)
        } else {
            response = await createNotice(form)
        }
        console.log("Submitting payload:", JSON.stringify(form, null, 2));

        console.log('Form data being sent:', form) // Already good
        console.log('Raw API Response:', response);
        if (response?.status === "success") {

            setForm({
                title: "",
                details: "",
                category: "",
                noticeType: "",
                attachmentIds: []
            })
            confirmAlert({
                title: '자주묻는질문 등록 완료',
                message: '자주 묻는 질문 글이 등록되었습니다.',
                buttons: [
                    {
                        label: '확인',
                        onClick: async () => {
                            return false
                        }
                    }
                ],
                customUI: ({ title, message, onClose , buttons}) => {
                    return (
                        <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
                    );
                }
            });
        } else if (response?.status === "error") {
            setErrors(formatErrors(response?.errors))
        } else {
            CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
        }


        setLoading(false)
    }

    const {replace} = useRouter();
    const redirectPage = () => {
        confirmAlert({
            title: '자주묻는질문 목록 이동',
            message: '자주 묻는 질문 목록으로 이동하시겠습니까? 작성중인 게시글은 삭제됩니다.',
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
                        replace('/customer-service-center/notice')
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
            <FieldWrapper label="제목" singleElement={true}>
                <LmsStandardInputField singleElement={true}
                                       changeDataHandler={handleOnChange}
                                       name="title"
                                       value={form.title}
                                       error={errors?.title}
                                       placeholder={`제목을 입력해주세요.`}
                                       fieldClass="w-full"/>
            </FieldWrapper>
            <div className="flex">
                <div className="flex-1">
                    <FieldWrapper label="카테고리" singleElement={true}>
                        <LmsStandardSelectInputV2
                            name={`category`}
                            optionLabel={'label'}
                            error={errors?.category}
                            optionValue={'name'}
                            initialText={'카테고리 선택'}
                            value={form.category}
                            options={categories}
                            changeDataHandler={handleOnChange}/>
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="구분" singleElement={true} className={`h-full`}>
                        <LmsStandardRadioFieldGroup
                            name="noticeType"
                            options={[
                                { id: 'GENERAL', name: '일반' },
                                { id: 'IMPORTANT', name: '중요' },
                            ]}
                            value={form.noticeType}
                            changeDataHandler={handleOnChange}
                        />
                    </FieldWrapper>
                </div>

            </div>

            <FieldWrapper singleElement={true} label={'내용'}>
                <LmsStandardTextEditor placeholder="공지사항 내용을 입력하세요."
                                       error={errors?.details}
                                       name="details"
                                       fieldClass={'w-full'}
                                       value={form.details}
                                       changeDataHandler={handleOnChange}
                                       singleElement={true}/>
            </FieldWrapper>


            <FieldWrapper singleElement={true} label={'첨부파일'} tooltipTitle={"업로드 가능 확장자"} tooltipContent={'jpg, jpeg, gif, png, pdf, hwp, txt, doc, docx, xls, xlsx, ppt, pptx, zip, alz, 7z, rar, egg, mp3'}>
                <NoticeFileUpload setForm={setForm} cleanForm={cleanForm} notice={notice} />
            </FieldWrapper>

            <div className="flex items-center justify-end border-t border-commonBorderColor pt-10">
                <Button color="primary"
                        loading={loading}
                        disable={loading}
                        onClick={submitForm}
                        className="mb-2 text-center cursor-pointer">
                    { notice ? "수정 완료" : "등록" }

                </Button>
            </div>

        </>
    );
}

export default NoticeForm;