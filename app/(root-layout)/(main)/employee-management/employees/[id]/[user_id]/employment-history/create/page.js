import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getEmploymentHistory} from "@/utils/api/career/employeementHistory";
import {getCountries, getIndustries} from "@/utils/api/career/commonAPI";
import EmploymentForm
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/employment-history/create/components/EmploymentForm";

export default async function Page({params}) {
    const {id, user_id} = await params;
    const [ countries, industries] = await Promise.all([
        getCountries(),
        getIndustries()
    ])
    return (
        <div className="flex flex-col">
            <LmsPageHeading title="Record Employment History"/>
            <EmploymentForm
                countries={countries}
                industries={industries} />
        </div>
    );
}
