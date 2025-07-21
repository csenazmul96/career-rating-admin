import {getChapters} from "@/utils/api/curriculumManagement";
import TableOfContentsSidebar
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/table-of-contents/components/TableOfContentsSidebar";

export default async function layout({children, params}) {
    const allParams = await params
    const [groups] = await Promise.all([
        await getChapters(allParams.id)
    ])

    return(
        <div className="flex gap-6">
            <TableOfContentsSidebar groups={groups} courseId={allParams.id}/>
            {children}
        </div>
    );
}