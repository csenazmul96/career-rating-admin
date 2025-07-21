"use client";
import CourseChaptesDocuments from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/lecture-materials/components/CourseChaptesDocuments";
import { Button } from "@/components/common/button";
import { useCurriculumContext } from "@/store/CurriculumContext";
import Link from "next/link";

function CourseTableOfContentDocuments({ courseId, documents }) {
  const { currentChapter } = useCurriculumContext();

  return (
    <div className="flex flex-col flex-1 gap-6 ">
      <div className="flex items-center justify-between w-full">
        <div className="left flex gap-3 items-center">
          <span className={`font-bold  text-[25px]`}>
            {currentChapter ? currentChapter.chapterName : "서류를 입력하세요"}
          </span>
        </div>
        {currentChapter && (
          <Link
            href={`/curriculum/course/details/${courseId}/lecture-materials/${currentChapter?.id}`}
          >
            <Button color="transparentMedium">
              <span>
                <img
                  src="/images/curriculum-management/li_file-input.png"
                  alt=""
                />
              </span>
              <span>자료 가져오기</span>
            </Button>
          </Link>
        )}
      </div>

      <CourseChaptesDocuments documents={documents} courseId={courseId} />
    </div>
  );
}

export default CourseTableOfContentDocuments;
