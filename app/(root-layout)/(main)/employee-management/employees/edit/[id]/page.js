import {getsSingleEmployee} from "@/utils/api/career/employeeApi";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import EmployeeForm from "@/app/(root-layout)/(main)/employee-management/employees/create/components/EmployeeForm";
import {getCompanies} from "@/utils/api/career/companiesAPI";
import {getRoles} from "@/utils/api/career/commonAPI";

export default async function Page({params}) {
    const {id} = params;
    const [employee, {companies}] = await Promise.all([
        getsSingleEmployee(id),
        getCompanies()
    ]);
    return (
        <>
            <div className="flex flex-col member-registration">
                <LmsPageHeading title="Employee Edit."/>
                <EmployeeForm employee={employee} companies={companies} />
            </div>
        </>
    );
}
