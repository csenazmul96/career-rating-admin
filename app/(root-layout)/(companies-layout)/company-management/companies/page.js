import {getCompanies} from "@/utils/api/career/companiesAPI";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import CompaniesFilter
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/components/CompaniesFilter";
import CompaniesDataTable
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/components/CompaniesDataTable";

export default async function Page({searchParams}) {
    const queryParams = await searchParams
    const {companies, pagination} = await getCompanies(queryParams)
    return (
        <div className="flex flex-col member-list">
            <LmsPageHeading title="Companies" />
            <CompaniesFilter queryParams={queryParams} />
            <div className="flex flex-col pt-12 lg:pt-16">
                <CompaniesDataTable companies={companies} pagination={pagination}/>
            </div>
        </div>
    );
}
