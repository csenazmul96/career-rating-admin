"use client";
import LmsCommonPageSidebar from "@/components/common/page-sidebar/LmsCommonPageSidebar";
import {usePathname} from "next/navigation";

function EvaluationPageSidebar({groups}) {
    let pathname = usePathname();
    pathname = pathname.split('?')[0];
    const mainPath = pathname.replace(/(\/\d+)+$/, '');
    return (
        <>
            { mainPath === '/curriculum/evaluations' &&
            <LmsCommonPageSidebar groups={groups} module={'evaluation'} labels={{heading: "그룹선택"}} apiPrefix={'/lms-content-curriculum/api/v1/private/evaluation'} apiPostFix={'group'} />
            }
        </>
    );
}

export default EvaluationPageSidebar;