'use client';
import Link from 'next/link';
import DataTable from "@/components/common/DataTable";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
import React from "react";
import {getSituationKoreanText} from "@/utils/helpers/CommonHelper";
import {Button} from "@/components/common/button";
import MemberListTableActions
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/components/MemberListTableActions";

export default function MemberListTableWrapper({members, pagination, organizations, queryParams}) {
    const columns = [
        { header: '조직그룹', accessor: 'organizationGroupName' },
        { header: '이름', accessor: 'name' },
        { header: '회원ID', accessor: 'memberId' },
        {   header: '연락처',
            accessor: 'contact',
            cell: (_, member) => (
                <span>
                    {member.contact && <>
                        {member.contact?.first }-{member.contact?.middle }-{member.contact?.last }
                    </>}
                </span>
            ),
        },
        { header: '이메일', accessor: 'email' },
        { header: '가입일', accessor: 'joinDate' },
        {
            header: '상태',
            accessor: 'situation',
            cell: (_, member) => (
                <Button color={`${member.situation === 'Active' ? 'primaryRoundedSmall' : (member.situation === 'InActive' ? 'secondaryLightRoundedSmall' : 'dangerLightRoundedSmall')}`}>
                    {getSituationKoreanText(member.situation)}
                </Button>
            ),
        },
        {
            header: '',
            accessor: 'action',
            cell: (_, member) => (
                <Button>
                    <Link className={'flex cursor-pointer'}  href={`/members-and-message-management/membership-management/total-member-management/member-details/${member.id}/member-information`}>
                        상세보기
                    </Link>
                </Button>
            ),
        },
    ];

    return <>
        {pagination && <TableHeaderCommonActions
            pagination={pagination}
            TableActions={
                <MemberListTableActions
                    members={members}
                    pagination={pagination}
                    organizations={organizations} />
            }
        />}
        <DataTable
            columns={columns}
            serialNo={true}
            data={members}
            checkMark={true}
            rowLink={(row) => `/members-and-message-management/membership-management/total-member-management/member-details/${row.id}/member-information?page=${queryParams?.page || 1}&size=${queryParams?.size || 5}`}
            pagination={pagination??null}  />
    </>
}
