import EvaluationQuestionImport
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/course-evaluation/import/components/EvaluationQuestionImport";
import {getGroups} from "@/utils/api/lmsPageCommonSidebar";
import {evaluationGroupDataFormat} from "@/utils/helpers/CommonHelper";

export default async function Page({searchParams, params}) {
    const queryParams = await searchParams
    const allParams = await params
    const groups = await getGroups('/lms-content-curriculum/api/v1/private/evaluation/group', 'evaluation-group')
    const newData = evaluationGroupDataFormat(groups);
    return (
        <>
            <EvaluationQuestionImport groups={newData} queryParams={queryParams} allParams={allParams} />
        </>
    );
}
