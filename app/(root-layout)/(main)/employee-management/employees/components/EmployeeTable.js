"use client";
import { Button } from "@/components/common/button";

import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import EmployeeTableHeaderActions
    from "@/app/(root-layout)/(main)/employee-management/employees/components/EmployeeTableHeaderActions";

const EmployeeTable = ({ employees, pagination }) => {
    let columns = [
        {
            header: "Name",
            accessor: "name",
            cell: (_, employee) => <>{employee.first_name} {employee.last_name}</>
        },
        {
            header: "Email",
            accessor: "email"
        },
        {
            header: "Username",
            accessor: "username"
        },
        {
            header: "Rating",
            accessor: "average_rating"
        },
        {
            header: "",
            accessor: "action",
            cell: (_, employee) => (
                <Button>
                    <Link
                        className={"flex cursor-pointer"}
                        href={`/employee-management/employees/${employee.id}/personal-information`}
                    >
                        <ChevronRight size={24} />
                    </Link>
                </Button>
            ),
        },
    ];



    return (
        <>
            <LmsTableHeaderActions pagination={pagination} TableActions={<EmployeeTableHeaderActions />} />
            {employees && columns && (
                <LmsTable
                    columns={columns}
                    data={employees}
                    serialNo={true}
                    rowLink={(row) =>
                        `/employee-management/employees/${row.id}/personal-information`
                    }
                    checkMark={true}
                    pagination={pagination}
                />
            )}
        </>
    );
};

export default EmployeeTable;
