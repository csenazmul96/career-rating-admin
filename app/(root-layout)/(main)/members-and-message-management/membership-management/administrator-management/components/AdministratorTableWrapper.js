'use client';
import Link from 'next/link';
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import React from "react";
import {Button} from "@/components/common/button";
import AdministratorListTableActions
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/components/AdministratorListTableActions";
import {IoSettingsOutline} from "react-icons/io5";
import AdministratorDeleteButton
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/components/AdministratorDeleteButton";
import {Settings} from "lucide-react";

export default function AdministratorTableWrapper({members, pagination}) {
    const columns = [
        { header: '관리자 유형', accessor: 'memberRoles', cell: (_, member) => (
                <span>{member.memberRoles? member.memberRoles[0]?.name : ''}</span>
            )},
        { header: '조직그룹', accessor: 'organizationGroupName' },
        { header: '이름', accessor: 'name' },
        {   header: '접근 가능 메뉴',
            tdClass: 'max-w-[350px]',
            accessor: 'koreanPermissions',
            cell: (_, member) => (
                <div className="flex flex-wrap gap-2">
                    {member.koreanPermissions && member.koreanPermissions.map((permission, i) => (
                        <Button color={'primaryLightSmall'} key={`key_${i}`} className={'rounded-[4px] ml-1 mr-1'}>
                            <span className={'text-themeColor'}>{permission}</span>
                        </Button>
                    ))}
                </div>
            ),
        },
        {   header: '접근권한',
            accessor: 'permissions',
            cell: (_, member) => (
                <>
                    <div className="flex gap-1 items-center">
                        <Link href={`/members-and-message-management/membership-management/administrator-management/${member.id}`} className={'flex gap-1 items-center'}>
                            <Button color={'transparentMedium'}>
                                {/*<IoSettingsOutline /> */}
                                <Settings size={20} color="#717171"  /> 설정
                            </Button>
                        </Link>
                        <AdministratorDeleteButton id={member.id} />
                    </div>

                </>
            ),
        },

    ];

    return <>
        {pagination && <LmsTableHeaderActions
            pagination={pagination}
            TableActions={
                <AdministratorListTableActions />
            }
        />}
        {members &&
        <LmsTable
            columns={columns}
            data={members}
            rowLink={(member) => `/members-and-message-management/membership-management/administrator-management/${member.id}`}
            pagination={pagination??null} />
        }
    </>
}
