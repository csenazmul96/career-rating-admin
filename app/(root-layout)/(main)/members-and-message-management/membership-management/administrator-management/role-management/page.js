import React from "react";
import AdministratorList
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/AdministratorList";
import AdministratorForm
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/AdministratorForm";
import {getPermissions, getRoles} from "@/utils/api/administratorManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";

export default async function MemberShipManagement() {
    const [groups, roles] = await Promise.all([
        getPermissions(),
        getRoles()
    ])

    return (
        <div className="flex flex-col membership-management">
            <LmsPageHeading title="관리자 유형 관리" tooltip={'관리자 유형에 대한 이름과 메뉴 권한을 생성합니다. 생성된 관리자 수정은 유형명을 클릭하여 가능합니다.'} />

            <div className="grid">
                <div className="flex gap-8">
                    <AdministratorList roles={roles}/>
                    <div className="flex-1  pr-0 bg-white">
                        <AdministratorForm groups={groups} grpSelectBtnText={'전체 선택'} />
                    </div>
                </div>

            </div>
        </div>
    )
}