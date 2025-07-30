'use client';
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import React from "react";
import MemberListTableActions
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/components/MemberListTableActions";
import MemberStatisticsTableActions
    from "@/app/(root-layout)/(main)/statistics-management/member-statistics/components/MemberStatisticsTableActions";

export default function MemberStatisticDataTable({members, pagination}) {
    const columns = [
        { header: '날짜', accessor: 'date' },
        { header: '전체회원', accessor: 'totalMembers' },
        { header: '일반회원', accessor: 'generalMembers' },
        { header: '관리자', accessor: 'AdminMembers' },
        { header: '탈퇴회원', accessor: 'withdrawMember' },
    ];

    return <div className={"w-full flex-col gap-4"}>
         <LmsTableHeaderActions
            pagination={pagination}
        />
        {/*<MemberStatisticsTableActions members={members} queryParams={queryParams} />*/}
        <LmsTable
            columns={columns}
            data={members}
            pagination={pagination??null}  />
    </div>
}
