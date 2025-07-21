import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getEvaluations} from "@/utils/api/evaluationManagement";
import EvaluationFilter
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/components/EvaluationFilter";
import EvaluationTableComponent
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/components/EvaluationTableComponent";

export default async function Page({params, searchParams}) {
    const searchParamsAll = await searchParams
    const allParams = await params
    const {id} = await allParams
    const parentId = id && id.length ? id[0] : ''
    const secondId = id && id.length > 1 ? id[1] : ''
    const thirdId = id && id.length > 2 ? id[2] : ''
    const {evaluations, pagination}  = await getEvaluations( {...searchParamsAll, evaluationGroupId: parentId, evaluationSubGroupId: secondId, evaluationSubSubGroupId:thirdId})

    const getCategoryName = () => {
        let firstRow = evaluations[0]
        if (parentId && secondId && thirdId) {
            return `${firstRow.evaluationGroupName} > ${firstRow.evaluationSubGroupName} > ${firstRow.evaluationSubSubGroupName}`
        } else if (parentId && secondId) {
            return `${firstRow.evaluationGroupName} > ${firstRow.evaluationSubGroupName}`
        } else if (parentId) {
            return `${firstRow.evaluationGroupName}`
        } else {
            return '평가 관리'
        }
    }

    return (
        <>
            <LmsPageHeading title={`${evaluations.length ? getCategoryName() : '평가 관리'}`}  />
            <EvaluationFilter queryParams={searchParamsAll} allParams={allParams} />
            <EvaluationTableComponent queryParams={searchParamsAll} evaluations={evaluations} pagination={pagination} parentGrpId={id} />
        </>
    );
}
