import {get11QueryCategory, getFaqSingle} from "@/utils/api/curriculumManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import FaqForm from "@/app/(root-layout)/(main)/customer-service-center/faqs/create/components/FaqForm";

export default async function Page({params}) {
    const {id} = await params;
    const categories = await get11QueryCategory()
    const faq = await getFaqSingle(id)
    return (
        <>
            <LmsPageHeading title={'자주 묻는 질문 등록'} />
            <div className="flex flex-col member-send-information">
                <FaqForm categories={categories} faq={faq} />
            </div>
        </>
    );
}
