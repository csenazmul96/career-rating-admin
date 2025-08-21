import LmsPageHeading from "@/components/common/LmsPageHeading";
import EducationForm
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/educations/create/components/EducationForm";

export default async function Page({params}) {

    return (
        <div className="flex flex-col">
            <LmsPageHeading title="Create Academic Record"/>
            <EducationForm education={null} />
        </div>
    );
}
