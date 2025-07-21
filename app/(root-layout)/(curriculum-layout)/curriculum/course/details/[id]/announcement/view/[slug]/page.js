import {getAnnouncementById} from "@/utils/api/curriculumManagement";
import AnnouncementDetailsView
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/announcement/view/[slug]/components/AnnouncementDetailsView";

export default async function Page({params}) {
    const allParams = await params
    const announcement = await getAnnouncementById(allParams.slug)

    return (
        <>
            <AnnouncementDetailsView announcement={announcement} courseId={allParams.id} />
        </>
    );
}
