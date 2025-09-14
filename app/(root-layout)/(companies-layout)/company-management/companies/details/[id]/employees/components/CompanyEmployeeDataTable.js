"use client";
import { Button } from "@/components/common/button";

import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CompanyTableActions
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/components/CompanyTableActions";
import CompanyEmployeeTableActions
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/details/[id]/employees/components/CompanyEmployeeTableActions";

const CompanyEmployeeDataTable = ({ employees, pagination, id }) => {
    let columns = [
        {
            header: "Name",
            accessor: "name"
        },
        {
            header: "Email",
            accessor: "email"
        },
        {
            header: "A.Rating",
            accessor: "average_rating"
        },
        {
            header: "Role",
            accessor: "action",
            cell: (_, employee) => (
                <Button>
                    {employee.currentRole?.name}
                </Button>
            ),
        }
    ];

    return (
        <>
            <LmsTableHeaderActions pagination={pagination} TableActions={<CompanyEmployeeTableActions id={id} />} />
            {employees && columns && (
                <LmsTable
                    columns={columns}
                    data={employees}
                    serialNo={true}
                    checkMark={true}
                    showEmptyMessage={true}
                    pagination={pagination}
                />
            )}
        </>
    );
};

export default CompanyEmployeeDataTable;
