"use client";

import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import {Button} from "@/components/common/button";
import {Menu} from "lucide-react";
import React, {useState, useRef} from "react";
import InquiryReplyFileUploadButton
    from "@/app/(root-layout)/(main)/customer-service-center/inquiry/[id]/components/InquiryReplyFileUploadButton";
import InqueryUploadedFiles
    from "@/app/(root-layout)/(main)/customer-service-center/inquiry/[id]/components/InqueryUploadedFiles";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {submitInquiryReply} from "@/utils/api/curriculumManagement";
import Link from "next/link";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

function InqueryReplyForm({id}) {
    const [formClean, setFormClear] = useState(false)

    const [form, setForm] = useState({
        attachmentIds: [],
        details: ''
    });

    const [errors, setErrors] = useState(null);

    const setFileUploadResponse = (data) => {
        if (data.id) {
            setForm((prev) => ({...prev, attachmentIds: [...prev.attachmentIds, data.id]}))
            setFormClear(false)
        }
    }


    const fileInputRef = useRef(null);

    // Function to trigger the hidden input click
    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const onChangeHandler = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }
    const [loading, setLoading] = useState(false)
    const submitForm = async () => {
        setErrors(null)
        setLoading(true)
        try {
            const  response = await submitInquiryReply(form, id)

            if (response.status === "success") {
                LmsToastMessage('성공.', 'Reply has been submitted successfully', 'success')
                setForm({
                    attachmentIds: [],
                    details: ''
                })
                setFormClear(true)

            } else if (response.status === "error") {
                setErrors(formatErrors(response.errors))
            } else {
                LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
            }

        } catch (e){
            console.log(e.message)
        }
        setLoading(false)
    }

    return (
        <>

            <div className="flex flex-col p-6 gap-4 border-b border-commonBorderColor">
                <div className="flex gap-3">
                    <div className="flex-1 flex  items-start justify-between">
                        <div className="text">
                            <p className={`text-base font-bold`}>답글달기</p>
                        </div>
                        <div className="avatar items-end">
                            <InquiryReplyFileUploadButton triggerFileInput={triggerFileInput} />
                        </div>
                    </div>
                    <div className={`!w-[130px] !min-w-[130px] h-full`}> </div>
                </div>

                <div className="flex gap-3">
                    <div className="flex-1">
                        <LmsStandardTextArea singleElement={true}
                                             error={errors?.details}
                                             value={form.details}
                                             name="details"
                                             placeholder={"내용을 입력하세요."}
                                             changeDataHandler={onChangeHandler}
                                             className={`w-full`} />
                    </div>
                    <div className="button">
                        <Button color="secondary"
                                loading={loading}
                                disable={loading}
                                onClick={submitForm}
                                className={`!w-[130px] !min-w-[130px] h-full`}>
                            등록하기
                        </Button>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex-1 flex  items-start justify-between">
                        <InqueryUploadedFiles
                            fileInputRef={fileInputRef}
                            formClean={formClean}
                            setFileUploadResponse={setFileUploadResponse}
                            errors={errors}
                        />
                    </div>
                    <div className={`!w-[130px] !min-w-[130px] h-full`}> </div>
                </div>

            </div>
            <div className="flex items-end justify-end pt-10">
                <Link href={"/customer-service-center/inquiry"} className={"flex"} color="transparent">
                    <span><Menu/></span> <span>목록</span>
                </Link>
            </div>
        </>
    );
}

export default InqueryReplyForm;