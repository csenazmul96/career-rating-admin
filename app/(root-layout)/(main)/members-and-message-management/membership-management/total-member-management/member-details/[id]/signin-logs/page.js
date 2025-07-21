import React from "react";
import {getSignInLogs} from "@/utils/api/memberManagementRequest";
import CommonSignInLogsTableWrapper
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administration-logs/signin-logs/components/CommonSignInLogsTableWrapper";


export default async function page({params, searchParams}) {
    const {id} = await params;
    const queryParams = await searchParams;
    const allLogs = await getSignInLogs(id, {...queryParams, size: queryParams.size || 10, memberId: id });
    const logsData = allLogs.Logs;
    const pagination = allLogs.pagination;

    return (
        <CommonSignInLogsTableWrapper logs={logsData} pagination={pagination} />
    )
}


