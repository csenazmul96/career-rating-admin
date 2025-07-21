import LmsPageHeading from "@/components/common/LmsPageHeading";
import {get11QueryCategory, getFaqs} from "@/utils/api/curriculumManagement";
import FaqFilter from "@/app/(root-layout)/(main)/customer-service-center/faqs/components/FaqFilter";
import FaqDataTable from "@/app/(root-layout)/(main)/customer-service-center/faqs/components/FaqDataTable";

export default async function Page({searchParams}) {
    const queryParams = await searchParams;
    const {faqs, pagination} = await getFaqs(queryParams)
    const categories = await get11QueryCategory()

    return (
        <>
            <LmsPageHeading title={'자주 묻는 질문'} tooltipTitle={"자주 묻는 질문"} tooltip={'수강자 홈페이지 자주묻는질문 글 작성 및 수정, 삭제할 수 있습니다.'} />
            <FaqFilter queryParams={queryParams} categories={categories} />
            <FaqDataTable inqueries={faqs} pagination={pagination} />
        </>
    );
}
