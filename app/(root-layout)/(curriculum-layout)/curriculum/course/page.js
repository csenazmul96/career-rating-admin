import LmsPageHeading from "@/components/common/LmsPageHeading";
import CourseFilter from "./components/CourseFilter";
import CourseTable from "./components/CourseTable";
import {getCourses} from "@/utils/api/curriculumManagement";

export default async function CoursePage({params, searchParams}) {
    const pageParams = await params
    const queryParams = await searchParams;
    const {courses, pagination} = await getCourses(pageParams, queryParams)

    return (
        <>
            <LmsPageHeading title="과정 관리" />

            <CourseFilter queryParams={queryParams} />

            <div className="flex flex-col mt-8">
                <CourseTable courses={courses} pagination={pagination}/>
            </div>
        </>
    );
}