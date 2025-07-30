import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getNotificationsSettings} from "@/utils/api/notificationApi";
import NotificationSettingsForm
    from "@/app/(root-layout)/(main)/notification-settings/components/NotificationSettingsForm";


export default async function Page() {
    const settings = await getNotificationsSettings()

    return (
        <div>
            <div className="flex flex-col gap-16">
                <NotificationSettingsForm settings={settings} />
            </div>

        </div>
    );
}
