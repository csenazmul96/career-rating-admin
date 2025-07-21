import React from "react";
import AdministrationLogsPageHeading
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administration-logs/components/AdministrationLogsPageHeading";

export default async function page() {
    return (
        <>
            <AdministrationLogsPageHeading title={'관리자 작업 로그'} />
        </>
    );
}