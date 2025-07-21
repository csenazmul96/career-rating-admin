import CourseLayoutHeading
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/components/CourseLayoutHeading";
import { TabGroup,  TabPanel, TabPanels} from "@headlessui/react";
import React from "react";
import CourseLayoutTabPanel
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/components/CourseLayoutTabPanel";
import {getCourseById} from "@/utils/api/curriculumManagement";

export default async function layout({children, params}) {
    const allParams = await params
    const course = await getCourseById(allParams.id)
    if (!course) {
        return <div className="text-center text-red-500">해당 과정을 찾을 수 없습니다</div>;
    }
    return(
        <div className="flex flex-col">
            <CourseLayoutHeading course={course} />
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">
                <CourseLayoutTabPanel />
                <TabPanels className="tab-content-controller">
                    <TabPanel>
                        {children}
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}