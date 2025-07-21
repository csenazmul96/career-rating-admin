import CourseTableOfContentDocuments from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/lecture-materials/components/CourseTableOfContentDocuments";
import { getChapterDocuments } from "@/utils/api/curriculumManagement";

export default async function Page({ params, searchParams }) {
  const allParams = await params;
  const allSearchParams = await searchParams;
  const documents = await getChapterDocuments(
    allParams.id,
    allSearchParams.chapter
  );

  return (
    <>
      <CourseTableOfContentDocuments
        courseId={allParams.id}
        documents={documents}
        allSearchParam={allSearchParams}
      />
    </>
  );
}
