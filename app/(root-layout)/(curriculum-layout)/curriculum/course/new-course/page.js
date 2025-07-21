import LmsPageHeading from "@/components/common/LmsPageHeading";
import CourseForm from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/CourseForm";

export default async function page(){
    return (
        <div className="flex flex-col">
            <LmsPageHeading title="과정 등록"/>
            <CourseForm />
        </div>
    );
}