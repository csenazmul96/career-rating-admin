import LmsPageHeading from "@/components/common/LmsPageHeading";
import VideoForm from "@/app/(root-layout)/(content-layout)/content-management/video-management/new-video/components/VideoForm";
import {getRolesWiseMembers} from "@/utils/api/memberManagementRequest";

export default async function page() {
    const [roles] = await Promise.all([
        getRolesWiseMembers()
    ])
    return (
        <>
            <LmsPageHeading title={'동영상 등록'} />
            <VideoForm roles={roles} />
        </>
    );
}