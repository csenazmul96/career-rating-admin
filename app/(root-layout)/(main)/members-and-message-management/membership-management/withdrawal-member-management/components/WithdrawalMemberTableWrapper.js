'use client';
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import React from "react";
import {Button} from "@/components/common/button";
import {getSituationKoreanText} from "@/utils/helpers/CommonHelper";

export default function WithdrawalMemberTableWrapper({members, pagination}) {
    const columns = [
        { header: '이름', accessor: 'name'},
        { header: '아이디', accessor: 'memberId' },
        { header: '가입일', accessor: 'joinDate' },
        { header: '삭제일', accessor: 'deletionDate' },
        {   header: '상태',
            accessor: 'situation',
            cell: (_, member) => (
                <Button color={`${member.situation === 'Active' ? 'primaryRoundedSmall' : (member.situation === 'InActive' ? 'secondaryLightRoundedSmall' : 'dangerLightRoundedSmall')}`}>
                    {getSituationKoreanText(member.situation)}
                </Button>
            ),
        },
    ];

    return <>
        {pagination && <LmsTableHeaderActions pagination={pagination} />}
        <LmsTable
            columns={columns}
            data={members}
            pagination={pagination??null} />
    </>
}
