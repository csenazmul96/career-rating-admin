import {getEmployeeOfCompany, getRoleByCompany} from "@/utils/api/career/companiesAPI";
import CompanyEmployeeDataTable
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/details/[id]/employees/components/CompanyEmployeeDataTable";
import CompanyEmployeeFilter
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/details/[id]/employees/components/CompanyEmployeeFilter";

export default async function Page({params, searchParams}) {
    const {id} = await params
    const allSearchParams = await searchParams
    const [{employees, pagination}, roles] = await Promise.all([
        getEmployeeOfCompany({...allSearchParams, per_page: allSearchParams.per_page || 20}, id),
        getRoleByCompany(id)
    ])

    return (
        <>
            <CompanyEmployeeFilter queryParams={allSearchParams} roles={roles} />
            <div className="flex flex-col pt-12 lg:pt-16">
            <CompanyEmployeeDataTable pagination={pagination} employees={employees} id={id} />
            </div>
        </>
    );
}
