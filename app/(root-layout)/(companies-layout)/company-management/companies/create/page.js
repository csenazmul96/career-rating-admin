import LmsPageHeading from "@/components/common/LmsPageHeading";
import CompanyForm
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/create/components/CompanyForm";

export default async function Page() {
    return (
        <div className="flex flex-col">
            <LmsPageHeading title="Register New Company" />
            <div className="flex flex-col member-registration">
                <CompanyForm />
            </div>
        </div>
    );
}
