"use client";
import CourseChaptesVideos from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/table-of-contents/components/CourseChaptesVideos";
import { Button } from "@/components/common/button";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import { useCurriculumContext } from "@/store/CurriculumContext";
import Link from "next/link";
import { useEffect, useState } from "react";

function CourseTableOfContent({ courseId, videos: allVideos }) {
  const { currentChapter } = useCurriculumContext();
  const [videos, setVideos] = useState([]);

  const [search, setSearch] = useState("");

  const changeHandler = (name, value) => {
    setSearch(value.toLowerCase());
    if (value) {
      const finalList = filteredData();
      setVideos(finalList);
    } else {
      setVideos(allVideos);
    }
  };

  useEffect(() => {
    setVideos(allVideos);
  }, [allVideos]);

  const filteredData = () => {
    return allVideos.filter((item) =>
      item.Video.file.fileName?.toLowerCase().includes(search)
    );
  };

  return (
    <div className="flex flex-col flex-1 gap-6 ">
      <div className="flex items-center justify-between w-full">
        <div className="left flex gap-3 items-center">
          <span className={`font-bold  text-[25px]`}>
            {currentChapter ? currentChapter.chapterName : "동영상 입력"}
          </span>
          <LmsStandardInputField
            value={search}
            name={"search"}
            changeDataHandler={changeHandler}
            placeholder="챕터명을 입력해 주세요."
          />
        </div>
        {currentChapter && (
          <Link
            href={`/curriculum/course/details/${courseId}/table-of-contents/${currentChapter?.id}`}
          >
            <Button color="primary">
              <span>
                <img
                  src="/images/curriculum-management/li_monitor-up.png"
                  alt=""
                />
              </span>
              <span>강의 영상 가져오기</span>
            </Button>
          </Link>
        )}
      </div>

      <CourseChaptesVideos videos={videos} />
    </div>
  );
}

export default CourseTableOfContent;
