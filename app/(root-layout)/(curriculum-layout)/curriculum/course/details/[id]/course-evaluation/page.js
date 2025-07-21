import {getCourseEvaluations} from "@/utils/api/curriculumManagement";
import CourseEvaluationTable
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/course-evaluation/components/CourseEvaluationTable";

export default async function Page({params, searchParams}) {
    const allParams = await params
    const allSearchParams = await searchParams
    const {evaluations, pagination} = await getCourseEvaluations(allParams.id, allSearchParams);
    return (
        <>
            <CourseEvaluationTable documents={evaluations} allParams={allParams} pagination={pagination} />
        </>
    );
}
