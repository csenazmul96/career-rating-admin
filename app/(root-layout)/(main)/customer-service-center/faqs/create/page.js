import LmsPageHeading from "@/components/common/LmsPageHeading";
import FaqForm from "@/app/(root-layout)/(main)/customer-service-center/faqs/create/components/FaqForm";
import {get11QueryCategory} from "@/utils/api/curriculumManagement";

export default async function Page() {
    const categories = await get11QueryCategory()
    return (
        <>
            <LmsPageHeading title={'자주 묻는 질문 등록'} />
            <div className="flex flex-col member-send-information">
                <FaqForm categories={categories} />
            </div>
        </>
    );
}
