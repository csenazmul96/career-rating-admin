import {getsSingleEmployee} from "@/utils/api/career/employeeApi";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import EmployeeForm from "@/app/(root-layout)/(main)/employee-management/employees/create/components/EmployeeForm";

export default async function Page({params}) {
    const {id} = params;
    const employee = await getsSingleEmployee(id);
    return (
        <>
            <div className="flex flex-col member-registration">
                <LmsPageHeading title="Employee Edit."/>
                <EmployeeForm employee={employee} />
            </div>
        </>
    );
}
