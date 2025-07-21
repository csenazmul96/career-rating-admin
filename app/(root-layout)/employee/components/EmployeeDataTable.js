'use client';
 
import DataTable from "@/components/common/DataTable";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
import React from "react";
import EmployeeDataTableActions from "@/app/(root-layout)/employee/components/EmployeeDataTableActions";

export default function EmployeeDataTable({employees, pagination, queryParams}) {
    const columns = [
        { header: 'Username', accessor: 'username' },
        { header: 'Email', accessor: 'email' },
        {   header: 'Name',
            accessor: 'contact',
            cell: (_, employee) => (
                <span> {employee.first_name}{employee.last_name} </span>
            ),
        },
        { header: 'Rating', accessor: 'average_rating' },
        { header: 'Join Date', accessor: 'created_at' }
    ];

    return <>
        {pagination && <TableHeaderCommonActions
            pagination={pagination}
            TableActions={
                <EmployeeDataTableActions />
            }
        />}
        <DataTable
            columns={columns}
            data={employees}
            checkMark={true}
            rowLink={(row) => `/employee/${row.id}?page=${queryParams?.page || 1}&size=${queryParams?.size || 5}`}
            pagination={pagination??null}  />
    </>
}
