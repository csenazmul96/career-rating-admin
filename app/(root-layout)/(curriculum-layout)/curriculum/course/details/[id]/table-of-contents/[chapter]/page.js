import ChapterVideoImport
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/table-of-contents/[chapter]/components/ChapterVideoImport";
import {getChapterGroups} from "@/utils/api/videoContentRequest";

export default async function Page({searchParams, params}) {
    const queryParams = await searchParams
    const groups = await getChapterGroups()
    const allParams = await params
    return (
        <>
            <ChapterVideoImport groups={groups} queryParams={queryParams} allParams={allParams} />
        </>
    );
}
