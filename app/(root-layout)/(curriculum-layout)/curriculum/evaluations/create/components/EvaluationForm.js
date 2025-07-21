'use client'
import {Button} from "@/components/common/button";
import {AlignJustify, Menu} from "lucide-react";
import React, {useEffect, useState} from "react";
import EvaluationFormGroupPortion
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/EvaluationFormGroupPortion";
import EvaluationFormQuestionList
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/EvaluationFormQuestionList";
import EvaluationFormQuestionSummary
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/EvaluationFormQuestionSummary";
import EvaluationFormQuestionDetails
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/EvaluationFormQuestionDetails";
import {generateQuestion} from "@/utils/helpers/CommonHelper";
import {createNewEvaluation, updateEvaluation} from "@/utils/api/evaluationManagement";
import {formatErrors, getNearestQuestionError} from "@/utils/helpers/ErrorHeloper";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

function EvaluationForm({groups, evaluation = null}) {
    const router = useRouter()
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false)
    const InitQuestion = generateQuestion(evaluation ? evaluation.questions : null)

    const [questions, setQuestions] = useState(InitQuestion)

    const [form, setForm] = useState({
        evaluationName: evaluation ? evaluation.evaluationName : "",
        evaluationGroupId: evaluation ? evaluation.evaluationGroupId : "",
        evaluationSubGroupId: evaluation ? evaluation.evaluationSubGroupId : "",
        evaluationSubSubGroupId: evaluation ? evaluation.evaluationSubSubGroupId : "",
        scoreType: evaluation ? evaluation.scoreType : "AUTO",
        totalScore: evaluation ? evaluation.totalScore : 100,
        customScore: evaluation ? evaluation.customScore : "",
        additionalScore: evaluation ? evaluation.additionalScore : "",
        usageHistory: evaluation ? evaluation.usageHistory : "",
        registrant: evaluation ? evaluation.registrant : "",
        questions: []
    })



    const [currentQuestion, setCurrentQuestion] = useState(InitQuestion.length ? InitQuestion[0] : null)


    useEffect(() => {
        const findItem = questions.find((item) => item.number === currentQuestion.number);
        if (JSON.stringify(currentQuestion) !== JSON.stringify(findItem)) {
            setQuestions((prevQuestions) => {
                const updatedQuestions = prevQuestions.map((question) =>
                    question.number === currentQuestion.number ? currentQuestion : question
                );
                return updatedQuestions;
            });
        }
    }, [currentQuestion]);

    useEffect(() => {
        if (form.scoreType === 'AUTO') {
            const point = (100 / questions.length).toFixed(2)
            setQuestions(questions.map(question => ({
                ...question,
                point: point
            })));
            setCurrentQuestion((old) => ({...old, point: point}))
        }
    }, [questions.length, form.scoreType]);



    const submitForm = async () => {
        setLoading(true)
        setErrors(null)
        try {
            let response = null
            if (evaluation) {
                response = await updateEvaluation({...form, questions: questions}, evaluation.id)
            } else {
                response = await createNewEvaluation({...form, questions: questions})
            }

            if(response.errors) {
                setErrors(formatErrors(response.errors))
            }
            if (response.status === 'success') {
                CommonToastMessage('성공.', evaluation ? "Evaluation has been updated successfully" : "Evaluation Created Successfully", 'success')
                setErrors(null)
                setQuestions(InitQuestion)
                setCurrentQuestion(InitQuestion.length ? InitQuestion[0] : null)
                if (!evaluation) {
                    router.push('/curriculum/evaluations')
                } else {
                    router.push('/curriculum/evaluations/details/' + evaluation.id)
                }

            }
        } catch (error) {
            CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
            console.log(error.message)
        }

        setLoading(false)
    }

    const nearestQuestionError = errors ? getNearestQuestionError(errors) : null;

    return (
        <>
            <EvaluationFormGroupPortion groups={groups} form={form} setForm={setForm} errors={errors} evaluation={evaluation} />
            <div className="flex gap-6">
                <div className="flex flex-col w-[373px] border border-borderColor py-8 gap-6 self-start">
                    <EvaluationFormQuestionSummary
                        errors={errors}
                        form={form}
                        setQuestions={setQuestions}
                        questions={questions}
                        setForm={setForm}/>

                    {nearestQuestionError &&
                        <div className="relative pl-8 mr-1">
                            <small className={'text-dangerDeppColor absolute text-sm'}> {`Something went wrong with question no ${nearestQuestionError}`}</small>
                        </div>
                    }

                    <EvaluationFormQuestionList
                        questions={questions}
                        form={form}
                        errors={errors}
                        setQuestions={setQuestions}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}/>

                </div>

                <div className="flex flex-col flex-1">
                    <EvaluationFormQuestionDetails
                        errors={errors}
                        form={form}
                        evaluation={evaluation}
                        questions={questions}
                        setQuestions={setQuestions}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion} />

                    <div className="flex items-center justify-between  py-10">
                        <Link href={'/curriculum/evaluations'}>
                            <Button color="transparent" className={`!gap-2.5`} type="submit">
                                <span><Menu /></span> <span className={`leading-[normal]`}>목록</span>
                            </Button>
                        </Link>
                        <Button color="primary" type="submit" onClick={submitForm} disable={loading} loading={loading}>
                            { evaluation ? `수정하기` : '등록하기' }
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EvaluationForm;