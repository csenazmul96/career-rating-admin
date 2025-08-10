import {getCountries, getIndustries} from "@/utils/api/career/commonAPI";
import {getSingleEmploymentHistory} from "@/utils/api/career/employeementHistory";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import EmploymentForm
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/employment-history/create/components/EmploymentForm";

export default async function Page({params}) {
    const {id, user_id, job_id} = await params;
    const [ job, countries, industries] = await Promise.all([
        getSingleEmploymentHistory(job_id),
        getCountries(),
        getIndustries()
    ])
    return (
        <div className="flex flex-col">
            <LmsPageHeading title="Record Employment History"/>
            <EmploymentForm
                job={job}
                countries={countries}
                industries={industries} />
        </div>
    );
}
