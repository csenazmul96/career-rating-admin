'use client';
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import React from "react";
import MemberSignInLogsTableActions
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-details/[id]/signin-logs/components/MemberSignInLogsTableActions";

export default function CommonSignInLogsTableWrapper({logs, pagination}) {
    const columns = [
        { header: '회원명(회원ID)', accessor: 'name', cell: (_, member) => `${member.memberName} (${member.memberId})` },
        { header: '로그인', accessor: 'loginTime' },
        { header: '로그아웃', accessor: 'logoutTime' },
        { header: '접속기기', accessor: 'connection' },
        { header: 'IP', accessor: 'ip' }
    ];

    return <>
        {pagination && <LmsTableHeaderActions pagination={pagination}
                                              pageSize={10}
                                              TableActions={<MemberSignInLogsTableActions />} />}
        <LmsTable
            columns={columns}
            data={logs}
            pageSize={10}
            pagination={pagination??null} />
    </>
}
