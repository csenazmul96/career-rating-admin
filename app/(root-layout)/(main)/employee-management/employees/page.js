import {getsEmployee} from "@/utils/api/employeeApi";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import EmployeeTable from "@/app/(root-layout)/(main)/employee-management/employees/components/EmployeeTable";
import EmployeeTableFilter
    from "@/app/(root-layout)/(main)/employee-management/employees/components/EmployeeTableFilter";

export default async function Page({searchParams}) {
    const queryParams = await searchParams
    const {employees, pagination} = await getsEmployee(queryParams)
    return (
        <div className="flex flex-col member-list">
            <LmsPageHeading title="Employees" />
            <EmployeeTableFilter queryParams={queryParams} />
            <div className="member-list-table pt-8">
            <EmployeeTable employees={employees} pagination={pagination}/>
            </div>
        </div>
    );
}
