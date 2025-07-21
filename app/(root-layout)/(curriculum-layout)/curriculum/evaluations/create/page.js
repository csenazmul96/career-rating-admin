import EvaluationForm
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/EvaluationForm";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getGroups} from "@/utils/api/lmsPageCommonSidebar";
import {evaluationGroupDataFormat} from "@/utils/helpers/CommonHelper";

export default async function Page() {
    const groups = await getGroups('/lms-content-curriculum/api/v1/private/evaluation/group')
    const newData = evaluationGroupDataFormat(groups);
    return (
        <>
            <div className="flex flex-col">
                <LmsPageHeading title={'평가 등록'}/>
                <EvaluationForm groups={newData}/>
            </div>
        </>
    );
}
