"use client"

import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {Button} from "@/components/common/button";
import React, { useState} from "react";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {createChapter} from "@/utils/api/curriculumManagement";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

const CourseChapterForm = ({openForm, setOpenForm, chapter, courseId, groupsLength}) => {
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({chapterName: ''});
    const handleOnChange = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }

    const submitForm = async () => {
        setLoading(true)
        try {
            const response = await createChapter(form, courseId)

            if (response.status === 'success') {
                CommonToastMessage('성공.', 'Chapter has been created.', 'success')
                setOpenForm(false)
                setForm({chapterName: ''})
            }
            if (response.status === 'error') {
                if (response.errors) {
                    setErrors(formatErrors(response.errors))
                }
            }
        } catch (e){
            CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
        }
        setLoading(false)
    }

    return (
        <>
            <Dialog open={openForm} onClose={setOpenForm}>
                <DialogTitle><span>{`제${groupsLength+1}장`}</span></DialogTitle>
                <DialogBody>
                    <LmsStandardInputField
                        error={errors?.chapterName || errors?.courseId}
                        name="chapterName"
                        label={`제${groupsLength+1}장 제목`}
                        vertical={true}
                        fieldClass={'w-full'}
                        value={form.chapterName}
                        placeholder={`${groupsLength+1}장 이름을 입력하세요`}
                        changeDataHandler={handleOnChange}
                    />
                </DialogBody>
                <DialogActions>
                    <Button
                        type="button"
                        color="transparentMedium"
                        className={'h-10'}
                        onClick={()=>setOpenForm(false)}> 취소 </Button>
                    <Button
                        type="button"
                        disable={!form.chapterName ? true : loading ? true : false}
                        color={`${!form.chapterName ? 'secondaryMedium' : 'primaryMedium'}`}
                        className={'h-10'}
                        loading={loading}
                        onClick={submitForm}> 확인 </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CourseChapterForm