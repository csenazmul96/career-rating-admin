'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import {curriculumChapterDateFormat} from "@/utils/helpers/CommonHelper";
import LmsCommonPageSidebar from "@/components/common/page-sidebar/LmsCommonPageSidebar";

const CurriculumSidebarWrapper = ({groups}) => {
    let pathname = usePathname();
    pathname = pathname.split('?')[0];
    const mainPath = pathname.replace(/(\/\d+)+$/, '');

    const newData = curriculumChapterDateFormat(groups);

    return (
        <>
            { mainPath === '/curriculum/course' &&
                <LmsCommonPageSidebar groups={newData} module={'course'} labels={{heading: "챕터분류"}} apiPrefix={'/lms-content-curriculum/api/v1/private/course'} apiPostFix={'category'} />
            }
        </>
    );
};

export default CurriculumSidebarWrapper;