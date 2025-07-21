import ProfileUpdateForm from "@/app/(root-layout)/(main)/profile/info-update/components/ProfileUpdateForm";
import {getLoginUserInfo, getMemberRegistrationsSettings} from "@/utils/api/memberManagementRequest";

export default async function Page() {
    const [profile, settings] = await Promise.all([
        getLoginUserInfo(),
        getMemberRegistrationsSettings()
    ])

    return (
        <>
            <ProfileUpdateForm profile={profile} settings={settings} />
        </>
    );
}
