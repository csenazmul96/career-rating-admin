import LmsPageHeading from "@/components/common/LmsPageHeading";
import React from "react";
import MemberRegistrationSettingsForm
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/member-registration-settings/components/MemberRegistrationSettingsForm";
import {getMemberRegistrationsSettings} from "@/utils/api/memberManagementRequest";

export default async function page() {
    const settings = await getMemberRegistrationsSettings()

    return (
        <div className="flex flex-col member-list">
            <LmsPageHeading title="회원가입 항목 설정" tooltip={"회원가입 항목에 노출시킬 항목을 설정 및 제한할 수 있습니다."} />
            <MemberRegistrationSettingsForm settings={settings} />
        </div>
    );
};