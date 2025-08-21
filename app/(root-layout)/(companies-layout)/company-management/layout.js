import React from "react";
import MainContentWrapper from "@/components/layoutwapper/MainContentWrapper";
import {getIndustries} from "@/utils/api/career/industriesAPI";
import CompaniesSidebarWrapper from "@/app/(root-layout)/(companies-layout)/company-management/components/CompaniesSidebarWrapper";
import {curriculumChapterDateFormat} from "@/utils/helpers/CommonHelper";

export default async function layout({children}) {
    const industries = await getIndustries()
    const newData = curriculumChapterDateFormat(industries);
    return(
        <>
            <CompaniesSidebarWrapper industries={industries} />
            <MainContentWrapper >
                {children}
            </MainContentWrapper>
        </>
    );
}