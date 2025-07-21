import React from 'react';
import {Heading} from "@/components/common/heading";
import ToolTip from "@/components/common/ToolTip";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";

function EvaluationDetailsQuestions({evaluation}) {

    const getCurrectAnswerNumber = (questions) => {
        return questions.answers ? questions.answers.findIndex((answer) => answer.isCorrectAnswer === true) +1 : 0;
    }

    return (
        <div className="flex flex-col w-[373px] border border-borderColor py-8 gap-6 self-start">
            <div className="flex flex-col px-8 gap-6">
                <div className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                    <Heading level={2} className={`items-center !pb-0 gap-2 flex`}>
                        <span>배점</span>
                        <ToolTip title={` `}/>
                    </Heading>
                    <RadioGroup className="flex  space-x-6" name={'scoreType'}
                                value={evaluation.scoreType}>
                        <RadioField>
                            <Radio color="lmsradio" value="AUTO"/>
                            <Label className="font-normal">자동</Label>
                        </RadioField>
                        <RadioField>
                            <Radio color="lmsradio" value="PASSIVE"/>
                            <Label className="font-normal">수동</Label>
                        </RadioField>
                    </RadioGroup>
                </div>

                <div className="inner flex items-center justify-between">
                    <Heading level={2} className={`items-center text-base !pb-0 gap-2 flex`}>
                        <span>정답 및 점수</span>
                    </Heading>
                    <div className="inner">
                        <p className={`font-bold text-base`}>
                            <span className={`text-themeColor font-bold`}>{evaluation.questions.length}</span> 개
                        </p>
                    </div>
                </div>

            </div>
            <div className="inner pl-8 mr-1 custom-curriculum-scrollbar  max-h-[335px]">
                <ul className={`flex flex-col pr-6 gap-3 `}>
                    {evaluation.questions.map((question, index) => (
                        <li key={`question-${index}`} className={`p-4 flex items-center justify-between border hover:bg-secondaryLightColor border-borderColor`}>
                            <div className="inner font-bold"> {index+1}번 문항 </div>
                            <div className="inner flex items-center gap-3 font-bold ">
                                <div className='flex border border-borderColor items-center gap-[10px] py-3 px-2 w-[85px] h-[44px]'>
                                    <span className='whitespace-nowrap'>정답</span>
                                    <span className={`!size-[30px] border border-themeColor bg-leftMenuHoverColor flex items-center justify-center rounded-full`}>{getCurrectAnswerNumber(question)}</span>
                                </div>
                                <span>{question.point} 점</span>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default EvaluationDetailsQuestions;