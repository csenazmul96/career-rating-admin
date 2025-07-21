import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import { getMembersWithAllPermissions} from "@/utils/api/memberManagementRequest";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import AdministratorTableFilter
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/components/AdministratorTableFilter";
import {getRoles} from "@/utils/api/administratorManagement";
import AdministratorTableWrapper
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/components/AdministratorTableWrapper";

export default async function page({searchParams}) {
    const queryParams = await searchParams;
    const [ {members, pagination}, organizations, roles] = await Promise.all([
        getMembersWithAllPermissions({...queryParams}),
        getOrganizationGroup(),
        getRoles()
    ])
    return (
        <div className="flex flex-col member-list">
            <LmsPageHeading title="관리자 관리" tooltip={'어드민 사이트 관리자를 설정하고, 관리자별 접근 가능한 메뉴 권한을 부여할 수 있습니다.'} />
            <AdministratorTableFilter queryParams={queryParams} organizations={organizations} roles={roles} />
            <div className="member-list-table pt-16">
                <AdministratorTableWrapper members={members} pagination={pagination} />
            </div>
        </div>
    );
};