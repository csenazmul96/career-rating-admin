import {Button} from "@/components/common/button";
import {getFileSize} from "@/utils/helpers/CommonHelper";
import {IoMdClose} from "react-icons/io";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import React, {useCallback, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import CourseFileUpload
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseFileUpload";

const CourseIntroduction = ({form, setForm, attachment}) => {
    const onChangeHandler = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }

    return (
        <FieldWrapper label="과정 소개" singleElement={true}>
            <CourseFileUpload name="attachmentId"
                              fieldName={'introductionFile'}
                              file={attachment}
                              placeholder="업로드는 최대 1장 가능하며, jpg, jpeg, png, webp 확장자만 업로드 가능합니다. (용량: 5MB 첨부 가능)"
                              setForm={setForm} />

            <div className={`w-full pt-4`}>
                <LmsStandardTextArea singleElement={true}
                                     name="courseIntroduction"
                                     value={form.courseIntroduction}
                                     changeDataHandler={onChangeHandler}
                                     placeholder={"내용을 입력해주세요."} />
            </div>
        </FieldWrapper>
    );
}

export default  CourseIntroduction