import {getAnnouncementByCourse} from "@/utils/api/curriculumManagement";
import AnnouncementTableWrapper
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/announcement/component/AnnouncementTableWrapper";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";

export default async function Page({params}) {
    const allParams = await params

    const data = await getAnnouncementByCourse(allParams.id)

    if (data?.errors && data.errors.length > 0 ) {
        const errors = formatErrors(data.errors)
        if (errors.courseId)
            return <div className="text-red-500 text-center">{errors.courseId}</div>
    }

    return (
        <>
            {data && data.data && <AnnouncementTableWrapper announcements={data.data} pagination={data.pagination} id={allParams.id} />}
        </>
    );
}
