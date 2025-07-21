import ChapterDocumentsImport from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/lecture-materials/[chapter]/components/ChapterDocumentsImport";
import { getChapterGroups } from "@/utils/api/videoContentRequest";

export default async function Page({ searchParams, params }) {
  const queryParams = await searchParams;
  const groups = await getChapterGroups();
  const allParams = await params;
  return (
    <>
      <ChapterDocumentsImport
        groups={groups}
        queryParams={queryParams}
        allParams={allParams}
      />
    </>
  );
}
