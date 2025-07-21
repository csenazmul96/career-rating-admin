import CourseStudentFilter
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/student-management/components/CourseStudentFilter";
import StudentManagementTableWrapper
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/student-management/components/StudentManagementTableWrapper";
import {getStudentManagement} from "@/utils/api/curriculumManagement";

export default async function Page({ params, searchParams }) {
    const {id} = await params
    const allSearchParams = await searchParams;

    const {students, pagination} = await getStudentManagement(id, allSearchParams)


    return (
        <>
            <div className="flex flex-col gap-10 ">
            <CourseStudentFilter queryParams={allSearchParams} id={id} />
            <StudentManagementTableWrapper students={students ? students : []} id={id} pagination={pagination} allSearchParams={allSearchParams} />
            </div>
        </>
    );
}
