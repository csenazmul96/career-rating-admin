"use client"

import {ReactSortable} from "react-sortablejs";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import React from "react";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {Tally2} from "lucide-react";

function EvaluationFormQuestionList({questions, setQuestions, currentQuestion, setCurrentQuestion, form}) {
    const sortNewList = (list) => {
        setQuestions(list);
        return
        confirmAlert({
            title: '평가관리 목록 이동',
            message: '평가관리 목록으로 이동하시겠습니까? 작성중인 글은 삭제 됩니다.',
            buttons: [
                {
                    label: '취소',
                    onClick: () => {
                        return false;
                    }
                },
                {
                    label: '확인',
                    buttonLabel: '확인',
                    onClick: async () => {
                        setQuestions(list);
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

    const handleOnChnage = (column, value, row) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = prevQuestions.map((question) =>
                question.number === row.number ? {...row, point: value} : question
            );
            return updatedQuestions;
        });
    }

    return (
        <div className="inner pl-8 mr-1 custom-curriculum-scrollbar  max-h-[335px]">
            <ul className={`flex flex-col pr-6 gap-3 `}>
                <ReactSortable list={questions} setList={sortNewList} className={'flex flex-col gap-3'}>
                    {questions.map((question, index) => (
                        <li key={`question ${index}`}
                            onClick={() => setCurrentQuestion(question)}
                            className={`${currentQuestion && currentQuestion.number === question.number ? 'bg-secondaryLightColor' : ''} cursor-pointer p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                            <div className="inner font-bold">
                                {`${index+1}번 문항`}
                            </div>
                            <div className="inner flex gap-4 font-bold ">
                                {form.scoreType === 'PASSIVE' &&
                                    <LmsStandardInputField size={'small'}
                                                           placeholder={`0`}
                                                           value={question.point}
                                                           singleElement={true}
                                                           changeDataHandler={(column, value)=>handleOnChnage(column, value, question)}
                                                           fieldClass={`w-[73px] h-[32px]`}/>
                                }
                                <span>{question.point && form.scoreType === 'AUTO' && question.point } 점</span>
                                <span className={'hover:cursor-move relative top-[5px]'}>
                                    <Tally2 size={20} className={`transform rotate-90`} />
                                </span>
                            </div>
                        </li>
                    ))}
                </ReactSortable>
            </ul>
        </div>
    );
}

export default EvaluationFormQuestionList;