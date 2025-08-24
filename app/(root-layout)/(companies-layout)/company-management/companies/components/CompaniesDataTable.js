"use client";
import { Button } from "@/components/common/button";

import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CompanyTableActions
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/components/CompanyTableActions";

const CompaniesDataTable = ({ companies, pagination }) => {
    let columns = [
        {
            header: "Name",
            accessor: "name"
        },
        {
            header: "Brand Name",
            accessor: "brand_name"
        },
        {
            header: "Registration Number",
            accessor: "registration_number"
        },
        {
            header: "Industry",
            accessor: "industry"
        },
        {
            header: "Company Type",
            accessor: "company_type"
        },
        {
            header: "City",
            accessor: "city"
        },
        {
            header: "Country",
            accessor: "country_code"
        },
        {
            header: "",
            accessor: "action",
            cell: (_, employee) => (
                <Button>
                    <Link
                        className={"flex cursor-pointer"}
                        href={`/company-management/companies/details/${employee.id}`}
                    >
                        <ChevronRight size={24} />
                    </Link>
                </Button>
            ),
        },
    ];

    return (
        <>
            <LmsTableHeaderActions pagination={pagination} TableActions={<CompanyTableActions />} />
            {companies && columns && (
                <LmsTable
                    columns={columns}
                    data={companies}
                    serialNo={true}
                    rowLink={(row) => `/company-management/companies/details/${row.id}` }
                    checkMark={true}
                    showEmptyMessage={true}
                    pagination={pagination}
                />
            )}
        </>
    );
};

export default CompaniesDataTable;
