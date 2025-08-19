'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import {curriculumChapterDateFormat} from "@/utils/helpers/CommonHelper";
import LmsCommonPageSidebar from "@/components/common/page-sidebar/LmsCommonPageSidebar";

const CompaniesSidebarWrapper = ({industries}) => {
    return (
        <LmsCommonPageSidebar groups={industries} module={'industries'} labels={{heading: "Industries"}} apiPrefix={'/industries'} />
    );
};

export default CompaniesSidebarWrapper;