import {getSingleCompanies} from "@/utils/api/career/companiesAPI";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import CompanyForm
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/create/components/CompanyForm";

export default async function Page({params}) {
    const {id} = await params
    const company = await getSingleCompanies(id)

    return (
        <div className="flex flex-col">
            <LmsPageHeading title={`${company?.name} Edit`} />
            <div className="flex flex-col member-registration">
                <CompanyForm company={company} />
            </div>
        </div>
    );
}
