import {getAnnouncementById} from "@/utils/api/curriculumManagement";
import AnnouncementForm
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/announcement/create/components/AnnouncementForm";

export default async function Page({params}) {
    const allParams = await params

    const announcement = await getAnnouncementById(allParams.slug)

    return (
        <>
            <AnnouncementForm id={allParams.id} announcement={announcement} />
        </>
    );
}
