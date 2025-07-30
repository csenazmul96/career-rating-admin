"use client";

import React, {useState} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import {Button} from "@/components/common/button";
import {Menu} from "lucide-react";
import {createFaqs, updateFaqs} from "@/utils/api/curriculumManagement";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {useRouter} from "next/navigation";

function FaqForm({faq = null, categories}) {
    const [form, setForm] = useState({
        question: faq ? faq.question : "",
        answer: faq ? faq.answer : "",
        category: faq? faq.category : ""
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleOnChnage = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };

    const submitForm = async () => {
        setErrors(null)
        setLoading(true)

        let response = null;

        if (faq) {
            response = await updateFaqs(form, faq.id)
        } else {
            response = await createFaqs(form)
        }

        if (response?.status === "success") {
            setForm({
                question: "",
                answer: "",
                category: ""
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
            LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
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
                        replace('/customer-service-center/faqs')
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
            <div className="form">
                <FieldWrapper label="카테고리" singleElement={true}>
                    <LmsStandardSelectInputV2
                        name={`category`}
                        optionLabel={'label'}
                        fieldClass={`h-[190px] w-[270px]`}
                        error={errors?.category}
                        optionValue={'name'}
                        initialText={'카테고리 선택'}
                        value={form.category}
                        options={categories}
                        changeDataHandler={handleOnChnage}/>
                </FieldWrapper>
                <FieldWrapper label="질문" singleElement={true}>
                    <LmsStandardInputField
                        placeholder="자주 묻는 질문 내용을 입력하세요."
                        error={errors?.question}
                        name="question"
                        fieldClass={"w-full"}
                        value={form.question}
                        changeDataHandler={handleOnChnage}
                        singleElement={true}
                    />
                </FieldWrapper>
                <FieldWrapper label="답변" singleElement={true} className={'border-b border-commonBorderColor'}>
                    <LmsStandardTextArea singleElement={true}
                                         error={errors?.answer}
                                         value={form.answer}
                                         name="answer"
                                         placeholder={"자주 묻는 질문 답변을 입력하세요."}
                                         changeDataHandler={handleOnChnage}
                                         className={`w-full m-h-200px`} />
                </FieldWrapper>
                <div className="flex items-center justify-between mt-10 mb-6">
                    <div className="member-collapse-list">
                            <Button onClick={redirectPage} color="transparent" className="w-full text-center">
                                <Menu /> <span className={`flex`}>목록</span>
                            </Button>
                    </div>

                    <div className="flex items-end justify-end">
                        <Button
                            color="primary"
                            loading={loading}
                            disable={loading}
                            onClick={submitForm}
                        >
                            등록하기
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqForm;