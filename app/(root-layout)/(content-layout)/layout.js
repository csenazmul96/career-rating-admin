import React from "react";
import MainContentWrapper from "@/components/layoutwapper/MainContentWrapper";
import {getChapterGroups} from "@/utils/api/videoContentRequest";
import ChapterSidebar from "@/app/(root-layout)/(content-layout)/components/ChapterSidebar";

export default async function layout({children}) {
    const groups = await getChapterGroups()
    return(
        <>
            <ChapterSidebar groups={groups} />
            <MainContentWrapper >
                {children}

            </MainContentWrapper>
        </>
    );
}