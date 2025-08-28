import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getCompanies} from "@/utils/api/career/companiesAPI";
import CompaniesFilter
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/components/CompaniesFilter";
import CompaniesDataTable
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/components/CompaniesDataTable";

export default async function Page({params, searchParams}) {
    const searchParamsAll = await searchParams
    const {id} = await params
    const parentId = id && id.length ? id[0] : ''
    const secondId = id && id.length > 1 ? id[1] : ''
    const thirdId = id && id.length > 2 ? id[2] : ''

    const {companies, pagination} = await getCompanies({...searchParamsAll, industry_id:parentId, sub_industry_id:secondId, sub_sub_industry_id:thirdId})
    return (
        <>
            <LmsPageHeading title="Companies" />
            <CompaniesFilter queryParams={searchParamsAll}/>
            <div className="flex flex-col pt-12 lg:pt-16">
                <CompaniesDataTable companies={companies} pagination={pagination}/>
            </div>
        </>
    );
}
