import {getEvaluationById} from "@/utils/api/evaluationManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import EvaluationForm
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/EvaluationForm";
import {getGroups} from "@/utils/api/lmsPageCommonSidebar";
import {evaluationGroupDataFormat} from "@/utils/helpers/CommonHelper";

export default async function Page({params}) {
    const allParams = await params
    const {id} = allParams
    const [evaluation,groups] = await Promise.all([
        getEvaluationById(id),
        await getGroups('/lms-content-curriculum/api/v1/private/evaluation/group')
    ])
    const newData = evaluationGroupDataFormat(groups);

    if (!evaluation){
        return (
            <div className="flex flex-col">
                <div className="text-red-500 text-center">평가 정보를 불러오지 못했습니다.</div>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col">
                <LmsPageHeading title={'평가 등록'}/>
                <EvaluationForm groups={newData} evaluation={evaluation} />
            </div>
        </>
    );
}
