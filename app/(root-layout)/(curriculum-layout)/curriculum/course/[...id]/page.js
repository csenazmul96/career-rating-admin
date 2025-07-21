import LmsPageHeading from "@/components/common/LmsPageHeading";
import CourseFilter from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/CourseFilter";
import CourseTable from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/CourseTable";
import {getCourses} from "@/utils/api/curriculumManagement";

export default async function Page({params, searchParams}) {
    const searchParamsAll = await searchParams
    const {id} = await params
    const parentId = id && id.length ? id[0] : ''
    const secondId = id && id.length > 1 ? id[1] : ''
    const thirdId = id && id.length > 2 ? id[2] : ''
    const {courses, pagination}  = await getCourses(null, {...searchParamsAll, categoryId: parentId, subCategoryId: secondId, subSubCategoryId:thirdId})
    return (
        <>
            <>
                <LmsPageHeading title="과정 관리" />
                <CourseFilter />
                <div className="flex flex-col">
                    <CourseTable courses={courses} pagination={pagination} />
                </div>
            </>
        </>
    );
}
