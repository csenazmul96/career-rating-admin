import React from "react";
import MainContentWrapper from "@/components/layoutwapper/MainContentWrapper";
import { evaluationGroupDataFormat} from "@/utils/helpers/CommonHelper";
import {getGroups} from "@/utils/api/lmsPageCommonSidebar";
import EvaluationPageSidebar
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/components/EvaluationPageSidebar";

export default async function layout({children}) {
    const groups = await getGroups('/lms-content-curriculum/api/v1/private/evaluation/group', 'evaluation-group')
    const newData = evaluationGroupDataFormat(groups);

    return (
        <>
            <EvaluationPageSidebar groups={newData} />
            <MainContentWrapper >
                {children}
            </MainContentWrapper>
        </>
    );
}