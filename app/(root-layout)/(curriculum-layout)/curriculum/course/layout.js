import React from "react";
import MainContentWrapper from "@/components/layoutwapper/MainContentWrapper";
import CurriculumSidebarWrapper from "@/app/(root-layout)/(curriculum-layout)/components/CurriculumSidebarWrapper";
import {getCurriculumCategory} from "@/utils/api/curriculumCategory";
import {getGroups} from "@/utils/api/lmsPageCommonSidebar";

export default async function layout({children}) {
    const groups = await getGroups('/lms-content-curriculum/api/v1/private/course/category', 'course')
    return(
        <>
            <CurriculumSidebarWrapper groups={groups} />
            <MainContentWrapper >
                {children}
            </MainContentWrapper>
        </>
    );
}