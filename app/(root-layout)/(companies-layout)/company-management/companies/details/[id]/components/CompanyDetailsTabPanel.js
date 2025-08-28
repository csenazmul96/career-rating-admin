"use client"
import {Tab, TabList} from "@headlessui/react";
import {useParams, usePathname} from "next/navigation";
import Link from "next/link";

const ComapnyDetailsTabPanel = () => {
    const pathName = usePathname()
    const params = useParams()

    return (
        <TabList className="tab-list-controller items-start justify-start self-start border-b border-commonBorderColor !pb-0 !mb-10 w-full">
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('basic-information') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/company-management/companies/details/${params.id}/basic-information`}>Basic Information </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('employees') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/company-management/companies/details/${params.id}/employees`}> Employee </Link>
            </Tab>
        </TabList>
    );
};

export default ComapnyDetailsTabPanel;