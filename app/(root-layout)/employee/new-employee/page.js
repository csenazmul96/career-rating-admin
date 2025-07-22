import LmsPageHeading from "@/components/common/LmsPageHeading";
import React from "react";
import EmployeeForm from "@/app/(root-layout)/employee/new-employee/components/EmployeeForm";

export default async function Page() {
    return (
        <>
            <div className="flex flex-col member-registration">
                <LmsPageHeading title="회원 등록"/>
                <EmployeeForm />
            </div>
        </>
    );
}
