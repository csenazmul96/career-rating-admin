import {getCourseInquiry} from "@/utils/api/curriculumManagement";
import CourseInquiryTableWrapper
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/lecture-inquiry/components/CourseInquiryTableWrapper";

export default async function Page({params, searchParams}) {
    const allSearchParams = await searchParams
    const {id} = await params;
    const {queries, pagination} = await getCourseInquiry(allSearchParams,  id)

    return (
        <>
            <CourseInquiryTableWrapper queries={queries} pagination={pagination} id={id} />
        </>
    );
}
