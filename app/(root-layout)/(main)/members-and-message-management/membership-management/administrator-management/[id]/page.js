import React from "react";

import {getPermissions, getRoles} from "@/utils/api/administratorManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getMembersById} from "@/utils/api/memberManagementRequest";
import MemberSettingsDetails
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/[id]/components/MemberSettingsDetails";

export default async function MemberShipManagement({params}) {
    let allParams = await params
    const [member, roles, groups] = await Promise.all([
        getMembersById(allParams.id),
        getRoles(),
        getPermissions(),
    ])

    return (
        <div className="flex flex-col membership-management">
            <LmsPageHeading title="관리자 설정" tooltip={'어드민 사이트 관리자를 설정하고, 관리자별 접근 가능한 메뉴 권한을 부여할 수 있습니다.'} />

            <div className="grid">
                <MemberSettingsDetails groups={groups} roles={roles} member={member} />
            </div>
        </div>
    )
}