import React from "react";
import CourseTableOfContent
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/table-of-contents/components/CourseTableOfContent";
import {getChapterVideos} from "@/utils/api/curriculumManagement";

export default async function Page({params, searchParams}) {
    const allParams = await params
    const allSearchParams = await searchParams
    const videos = await getChapterVideos(allParams.id, allSearchParams.chapter)

    return (
        <>
            <CourseTableOfContent courseId={allParams.id} videos={videos} allSearchParam={allSearchParams} />
        </>
    );
}