import React from "react";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import {getRoles} from "@/utils/api/administratorManagement";
import MemberRegistrationForm
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationForm";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {generateMemberForm} from "@/utils/helpers/CommonHelper";
import {getMemberRegistrationsSettings} from "@/utils/api/memberManagementRequest";

export default async function page() {
    const [organization, roles, member, settings] = await Promise.all([
        getOrganizationGroup(),
        getRoles(),
        generateMemberForm(),
     getMemberRegistrationsSettings()
    ]);
    return(
        <div className="flex flex-col member-registration">
            <LmsPageHeading title="회원 등록"/>
            <MemberRegistrationForm organization={organization?.organizations} settings={settings} roles={roles} member={member}/>
        </div>
    );
}