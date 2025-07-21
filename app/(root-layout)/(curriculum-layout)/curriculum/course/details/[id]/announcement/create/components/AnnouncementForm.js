"use client"

import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import React, {useEffect, useState} from "react";
import LmsStandardTextEditor from "@/components/common/form/LmsStandardTextEditor";
import AnnouncementFileUpload
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/announcement/create/components/AnnouncementFileUpload";

import {Button} from "@/components/common/button";
import {createAnnouncement, updateAnnouncement} from "@/utils/api/curriculumManagement";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {useRouter} from "next/navigation";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

function AnnouncementForm({id, announcement = null}) {
    const router = useRouter()
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false)
    const [cleanForm, setCleanForm] = useState(false)
    const [form, setForm] = useState({
        courseId: id,
        title: "",
        description: "",
        attachmentIds: []
    });

    useEffect(() => {
        if (announcement) {
            let ids = announcement.announcementFiles.map(item => {return item.id})
            setForm({
                courseId: id,
                title: announcement.title,
                description: announcement.description,
                attachmentIds: ids
            })
        }
    }, [announcement]);

    const inputChangeHandler = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }

    const submitForm = async () => {
        setErrors(null)
        setCleanForm(false)
        setLoading(true)
        let response = null
        if (announcement) {
            response = await updateAnnouncement(form, announcement.id)
        } else {
            response = await createAnnouncement(form)
        }

        if (response && response.errors){
            setErrors(formatErrors(response.errors))
        }
        if (response && response.status === "success") {
            setCleanForm(true)
            CommonToastMessage('성공.', announcement ? 'Announcement has been updated' :'Announcement has been created', 'success')
            setForm({
                courseId: id,
                title: "",
                description: "",
                attachmentIds: []
            })
            router.push(`/curriculum/course/details/${id}/announcement`)
        } else {
            CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
        }
        setLoading(false)
    }

    return (
        <>
            <FieldWrapper label="제목" singleElement={true}>
                <LmsStandardInputField singleElement={true}
                                       changeDataHandler={inputChangeHandler}
                                       name="title"
                                       value={form.title}
                                       error={errors?.title}
                                       placeholder={`피그마 완전 정복 제 1강 학습자료`}
                                       fieldClass="w-full"/>
            </FieldWrapper>
            <FieldWrapper singleElement={true} label={'내용'}>
                <LmsStandardTextEditor placeholder="내용을 입력하세요."
                                       error={errors?.description}
                                       name="description"
                                       fieldClass={'w-full'}
                                       value={form.description}
                                       changeDataHandler={inputChangeHandler}
                                       singleElement={true}/>
            </FieldWrapper>

            <FieldWrapper singleElement={true} label={'첨부파일'} tooltipTitle={"업로드 가능 확장자"} tooltipContent={'jpg, jpeg, gif, png, pdf, hwp, txt, doc, docx, xls, xlsx, ppt, pptx, zip, alz, 7z, rar, egg, mp3'} required={true}>
                <AnnouncementFileUpload setForm={setForm} cleanForm={cleanForm} announcement={announcement} />
            </FieldWrapper>

            <div className="flex items-center justify-end border-t border-commonBorderColor pt-10">
                <Button color="primary"
                        loading={loading}
                        disable={loading}
                        onClick={submitForm}
                        className="mb-2 text-center cursor-pointer">
                    { announcement ? "수정 완료" : "등록" }

                </Button>
            </div>

        </>
    );
}

export default AnnouncementForm;