import React from "react";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getEmployees} from "@/utils/api/admin/EmployeeAPI";
import EmployeeDataTable from "@/app/(root-layout)/employee/components/EmployeeDataTable";
import EmployeeFilter from "@/app/(root-layout)/employee/components/EmployeeFilter";

export default async function page({searchParams}) {
    const queryParams = await searchParams;
    const [ {employees, pagination}] = await Promise.all([
        getEmployees({...queryParams})
    ])
    return (
        <div className="flex flex-col member-list">
            <LmsPageHeading title="Employee List" tooltip={'Employee List'}/>
            <EmployeeFilter />
            <div className="member-list-table pt-16">
                <EmployeeDataTable employees={employees} pagination={pagination} queryParams={queryParams}/>
            </div>
        </div>
    );
};