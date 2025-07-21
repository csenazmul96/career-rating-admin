import {Heading} from "@/components/common/heading";
import ToolTip from "@/components/common/ToolTip";
import {Button} from "@/components/common/button";
import {CircleMinus, Plus} from "lucide-react";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import React from "react";

function EvaluationFormQuestionSummary({form, setForm, questions, setQuestions, errors}) {
    const handleOnChnage = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }

    const setNewQuestion = () => {
        setQuestions((prev) => {
            const newQuestion = {
                number: prev.length + 1,
                label: `${prev.length + 1}번 문항`,
                title: "",
                questionFileId: "",
                fileName: "",
                questionPrompt: "",
                point: "",
                answers: [
                    {
                        option: "",
                        isCorrectAnswer: true,
                        answerFileId: "",
                        fileName: "",
                    },
                    {
                        option: "",
                        isCorrectAnswer: false,
                        answerFileId: "",
                        fileName: "",
                    }
                ]
            }
            return [...prev, newQuestion]
        })
    }

    return (
        <div className="flex flex-col px-8 gap-6">
            <div className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                <Heading level={2} className={`items-center !pb-0 gap-2 flex`}>
                    <span>배점</span>
                    <ToolTip title={`lorem ipsum`}/>
                </Heading>

                <LmsStandardRadioFieldGroup
                    value={form.scoreType}
                    changeDataHandler={handleOnChnage}
                    options={[{id: 'AUTO', name: '자동'}, {id: 'PASSIVE', name: '수동'}]}
                    name="scoreType"/>
            </div>
            {form.scoreType === 'PASSIVE' && (
                <div className="inner bg-secondaryBgColor flex flex-col gap-[20px] p-6">
                    <div className="inner-wrap flex gap-2 items-center justify-between">
                        <span>총점</span>

                        <LmsStandardInputField
                            error={errors?.totalScore}
                            name="totalScore"
                            size={'medium'}
                            fieldClass={'h-[42px] w-[54px] !rounded-[4px]'}
                            value={form.totalScore}
                            placeholder="10"
                            changeDataHandler={handleOnChnage}
                        />

                        {/*<LmsStandardInputField size={'medium'} placeholder={`10`}*/}
                        {/*                       fieldClass={`h-[42px] w-[54px] !rounded-[4px]`}/>*/}
                        <span><CircleMinus/></span>
                        <span>입력 배점</span>
                        <LmsStandardInputField
                            error={errors?.customScore}
                            name="customScore"
                            size={'medium'}
                            fieldClass={'h-[42px] w-[54px] !rounded-[4px]'}
                            value={form.customScore}
                            placeholder="10"
                            changeDataHandler={handleOnChnage}
                        />
                        {/*<LmsStandardInputField size={'medium'} placeholder={`73`}*/}
                        {/*                       fieldClass={`h-[42px] w-[54px] !rounded-[4px]`}/>*/}
                    </div>
                    <div className="inner-wrap flex gap-2 items-end justify-end border-t pt-[14px] border-borderColor">
                        <span>추가 입력 배점</span>
                        <LmsStandardInputField
                            error={errors?.additionalScore}
                            name="additionalScore"
                            size={'medium'}
                            fieldClass={'h-[42px] w-[54px] !rounded-[4px]'}
                            value={form.additionalScore}
                            placeholder="10"
                            changeDataHandler={handleOnChnage}
                        />
                        {/*<LmsStandardInputField size={'medium'} placeholder={`73`}*/}
                        {/*                       fieldClass={`h-[42px] w-[54px] !rounded-[4px]`}/>*/}
                    </div>
                </div>
                )}


            <div className="inner flex items-center justify-between">
                <Heading level={2} className={`items-center !pb-0 gap-2 flex`}>
                    <span>문항</span>
                </Heading>
                <div className="inner">
                    <p className={`font-bold text-base`}>전체 문항 수 <span
                        className={`text-themeColor font-bold`}>{questions.length}</span> 개</p>
                </div>
            </div>
            <div className="inner">
                <Button onClick={setNewQuestion} color="secondary" className={`w-full`}>
                    <span><Plus/></span> <span>문항 추가</span>
                </Button>
            </div>
        </div>
    );
}

export default EvaluationFormQuestionSummary;