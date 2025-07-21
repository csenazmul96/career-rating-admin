import React from 'react';
import {Button} from "@/components/common/button";
import {AlignJustify, Pencil} from "lucide-react";
import EvaluationDetailsQuestions
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/details/[id]/components/EvaluationDetailsQuestions";
import Link from "next/link";

function EvaluationDetailsView({evaluation}) {
    return (
        <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1">
                {evaluation.questions.map((question, index) => (
                    <div key={`mainquestion-${index}`} className="p-8 border border-borderColor">
                        <div className="flex flex-col gap-4">
                            <span className={`text-textSubColor text-base`}>{question.title}</span>
                            <div
                                className="inner flex items-center justify-between pb-6 border-b border-borderColor">
                                <div className={`text-[17px]`}>
                                    <span className={`text-[25px] font-bold`}>{index+1}.</span>  {question.questionPrompt}
                                </div>
                                <div className="inner">
                                    <span className={`cursor-pointer`}>{question.point}점</span>
                                </div>
                            </div>
                        </div>
                        <div className="inner">
                            {question.questionFileUrl &&
                                <div className="inner-wrap py-4">
                                    <img src={question.questionFileUrl} className={`w-[500px]`} alt=""/>
                                </div>
                            }
                            <div className={`list pt-6`}>
                                <ul className="flex flex-col gap-6">
                                    {question.answers && question.answers.map((answer, i) => (
                                        <li key={`question${index}-ans${i}`}>
                                            <div className="inner items-center flex gap-2">
                                                <span className={`size-[30px] border ${answer.isCorrectAnswer ? 'border-themeColor bg-leftMenuHoverColor' : ''}  flex items-center justify-center rounded-full`}>{i+1}</span>
                                                <span>{answer.option}</span>
                                                {answer.isCorrectAnswer &&
                                                    <span> <Button color={`primaryRoundedSmall`}>정답</Button> </span>
                                                }
                                            </div>
                                            {answer.answerFileUrl &&
                                                <div className="inner-wrap py-4">
                                                    <img src={answer.answerFileUrl} className={`w-[184px]`} alt=""/>
                                                </div>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex items-center justify-between  py-10">
                    <Link href={'/curriculum/evaluations'}>
                        <Button color="transparent" type="submit">
                            <span><AlignJustify/></span> <span className={`leading-[normal]`}>목록</span>
                        </Button>
                    </Link>
                    <Link href={`/curriculum/evaluations/edit/${evaluation.id}`}>
                    <Button color="transparent" type="submit">
                        <span><Pencil/></span> <span className={`leading-[normal]`}>수정</span>

                    </Button>
                    </Link>
                </div>
            </div>
            <EvaluationDetailsQuestions evaluation={evaluation} />
        </div>
    );
}

export default EvaluationDetailsView;