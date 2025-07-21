import LmsPageHeading from "@/components/common/LmsPageHeading";
import InqueryFilter from "@/app/(root-layout)/(main)/customer-service-center/inquiry/components/InqueryFilter";
import InquiryTable from "@/app/(root-layout)/(main)/customer-service-center/inquiry/components/InquiryTable";
import {get11Query, get11QueryCategory} from "@/utils/api/curriculumManagement";

export default async function Page({searchParams}) {
    const queryParams = await searchParams;
    const {queries, pagination} = await get11Query(queryParams)
    const categories = await get11QueryCategory()

    return (
        <>
            <LmsPageHeading title={'1:1 문의'} tooltipTitle={"1:1 문의"} tooltip={'수강자 홈페이지에서 등록된 1:1 문의글에 대해 답변 및 삭제 할 수 있습니다.'} />
            <InqueryFilter queryParams={queryParams} categories={categories} />
            <InquiryTable queryParams={queryParams} inqueries={queries} pagination={pagination} />
        </>
    );
}
