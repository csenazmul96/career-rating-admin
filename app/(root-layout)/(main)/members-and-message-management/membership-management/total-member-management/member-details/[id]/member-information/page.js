import React from "react";
import {getMembersById} from "@/utils/api/memberManagementRequest";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import {getRoles} from "@/utils/api/administratorManagement";
import MemberRegistrationForm
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-registration/__components/MemberRegistrationForm";
import {generateMemberForm} from "@/utils/helpers/CommonHelper";

export default async function page({params, searchParams}) {
    const allParams = await params;
    const queryParams = await searchParams;
    const [member, organization, roles] = await Promise.all([
        getMembersById(allParams.id),
        getOrganizationGroup(),
        getRoles()
    ]);

    const formData = await generateMemberForm(member)

    return(
        <div className="flex flex-col member-registration">
            <MemberRegistrationForm organization={organization?.organizations} roles={roles} member={formData} allParams={queryParams} />
        </div>
    );
}