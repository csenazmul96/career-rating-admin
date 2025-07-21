import {getEvaluationById} from "@/utils/api/evaluationManagement";
import EvaluationDetailsView
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/details/[id]/components/EvaluationDetailsView";
import {Button} from "@/components/common/button";
import {Heading} from "@/components/common/heading";
import React from "react";

export default async function Page({params}) {
    const allParams = await params
    const {id} = allParams
    const evaluation = await getEvaluationById(id)

    if (!evaluation) {
        return(<div className="flex flex-col">
            <div className="text-red-500 text-center">평가 정보를 불러오지 못했습니다.</div>
        </div>)
    }
    return (
        <>
            <div className="flex flex-col">
                <Heading level={2} className={`items-center gap-2 flex`}>
                    <Button color="transparentRoundedSmall"> 피그마과정 </Button>
                    <span>{evaluation?.evaluationName}</span>
                </Heading>

                <EvaluationDetailsView evaluation={evaluation}/>
            </div>
        </>
    );
}
