import React from "react";
import {getAllMembersSignInLogs} from "@/utils/api/memberManagementRequest";
import AdministrationLogsPageHeading
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administration-logs/components/AdministrationLogsPageHeading";
import AdministrationLoginLogsFilter
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administration-logs/signin-logs/components/AdministrationLoginLogsFilter";
import CommonSignInLogsTableWrapper
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administration-logs/signin-logs/components/CommonSignInLogsTableWrapper";


export default async function page(props) {
    const queryParams = await props.searchParams
    const allLogs = await getAllMembersSignInLogs(queryParams)
    const logsData = allLogs.Logs;
    const pagination = allLogs.pagination;

    return(
        <>
            <AdministrationLogsPageHeading title={'사이트 로그인 로그'} />
            <div className={"mb-10"}>
                <AdministrationLoginLogsFilter queryParams={queryParams} />
            </div>
            <CommonSignInLogsTableWrapper logs={logsData} pagination={pagination} />
        </>
    )
        ;
}


