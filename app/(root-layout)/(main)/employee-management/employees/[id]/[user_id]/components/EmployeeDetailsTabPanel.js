"use client"
import {Tab, TabList} from "@headlessui/react";
import {useParams, usePathname} from "next/navigation";
import Link from "next/link";

const EmployeeDetailsTabPanel = ({employee}) => {
    const pathName = usePathname()
    const params = useParams()

    return (
        <TabList className="tab-list-controller items-start justify-start self-start border-b border-commonBorderColor !pb-0 !mb-10 w-full">
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('personal-information') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/employee-management/employees/${params.id}/${employee?.user_id}/personal-information`}> Personal Information </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('educations') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/employee-management/employees/${params.id}/${employee?.user_id}/educations`}> Academic </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('language') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/employee-management/employees/${params.id}/${employee?.user_id}/language`}> Language </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('address') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/employee-management/employees/${params.id}/${employee?.user_id}/address`}> Address </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('educations') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/employee-management/employees/${params.id}/${employee?.user_id}/educations`}> 강의자료 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('educations') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/employee-management/employees/${params.id}/${employee?.user_id}/educations`}> 과정평가 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('educations') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/employee-management/employees/${params.id}/${employee?.user_id}/educations`}> 강의문의 </Link>
            </Tab>
        </TabList>
    );
};

export default EmployeeDetailsTabPanel;