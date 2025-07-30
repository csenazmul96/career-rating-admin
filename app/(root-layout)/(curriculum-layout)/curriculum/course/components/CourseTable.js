"use client";

import CourseTableActions from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/CourseTableActions";
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import { Button } from "@/components/common/button";
import Link from "next/link";
import {ChevronRight, Eye, EyeOff, User} from "lucide-react";
import UserTooltip from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/UserTooltip";

const course = {
    courseAdmins: [
        { name: "주석아", id: "jsa001" },
        { name: "배지은", id: "bje002" },
        { name: "김의진", id: "kyj003" },
        { name: "김진", id: "kn1004" },
        { name: "홍길동", id: "hgd1234" },
        { name: "Admin 1", id: "admin1" }, // Added to make length > 1
    ],
}
export default function CourseTable({ courses, pagination }) {



  let columns = [
    {
      header: "NO",
      accessor: "serial",
      thClass: "w-28",
      tdClass: "w-28",
      cell: (_value, _row, index) => {
        const currentPage = Number(pagination?.page || 1);
        const pageSize = Number(pagination?.size || 5);

        return (currentPage - 1) * pageSize + index + 1;
      },
    },
    {
      header: "과정명",
      accessor: "thumbnail",
      cell: (_, course) => (
          <div className={"course_table_title relative flex items-center gap-4"}>
            <Link
                href={`/curriculum/course/details/${course.id}/course-information`}
            >
              <div
                  className={`relative h-[88px] rounded-[4px] overflow-hidden z-20 w-[160px]
              ${course.situation !== 'IN-PROGRESS' ? " before:content-[''] before:w-full before:h-full before:z-[4] before:bg-black before:bg-opacity-50 before:absolute" : ''}`}
              >
                {course.representativeImages ? (
                    <img
                        src={course.representativeImages.downloadLink}
                        className={"absolute w-full z-[3] h-full object-cover  mr-4"}
                        alt=""
                    />
                ) : (
                    <img
                        src="/images/content-management/c-dashboard.png"
                        className={"z-[3] absolute w-full h-full object-cover mr-4"}
                        alt=""
                    />
                )}
                <div className={" z-[5] absolute top-3 left-3"}>
                  <Button
                      color={
                        course.situation === 'IN-PROGRESS'
                            ? "primaryRoundedSmall"
                            : "secondaryLightRoundedSmall"
                      }
                  >
                    {course.situation === 'IN-PROGRESS' ? "진행중" : "종료"}
                  </Button>
                </div>
              </div>
            </Link>
            <div className={"space-y-2"}>
              {course.courseDivision === "regular" ? (
                  <Button color="primaryNoBgSmall" className={`rounded-[2px]`}>
                    정규
                  </Button>
              ) : (
                  <Button color="transparentSmall" className={`rounded-[2px]`}>
                    상시
                  </Button>
              )}
              <p>{course.courseName}</p>
            </div>
          </div>
      ),
    },
    {
      header: "수강기간",
      accessor: "courseStartDate",
      cell: (_, course) => (
          <>
            {course.courseStartDate && (
                <span>
              {course.courseStartDate} ~ {course.courseEndDate}{" "}
            </span>
            )}
          </>
      ),
    },
    {
      header: "담당자",
      accessor: "enrolledStudentCount",
      cell: (_, course) => (
          <>
            {course.courseAdmins.length > 0 &&
                <div className={"flex items-center gap-2"}>
                  <span className={"flex gap-2"}> <User size={16} /> <span>{course.courseAdmins[0].name || ''}</span> </span>
                    <UserTooltip admins={course.courseAdmins} />
                </div>
            }
          </>
      ),
    },
    {
      header: "노출",
      accessor: "restrictionCount",
      cell: (_, course) => (
          <Button
              className={"!gap-1"}
              color={`${
                  course.visibilityStatus === "SHOW"
                      ? "primaryNoBgRoundedSmall"
                      : "secondaryLightRoundedSmall"
              }`}
          >
            {course.visibilityStatus === "SHOW" ? (
                <>
                  <Eye size={16} />{" "}
                  보임
                </>
            ) : (
                <>
                  <EyeOff size={16} />{" "}
                  숨김
                </>
            )}
          </Button>
      ),
    },
    {
      header: "",
      accessor: "action",
      cell: (_, video) => (
          <Button>
            <Link
                className={"flex cursor-pointer"}
                href={`/curriculum/course/details/${video.id}/course-information`}
            >
              <ChevronRight size={24} />
              {/*<Image src={arrow} className="ml-1" alt="info image" />*/}
            </Link>
          </Button>
      ),
    },
  ];

  return (
      <>
        <LmsTableHeaderActions
            pagination={pagination}
            TableActions={<CourseTableActions />}
            classes={"mt-8"}
        />
        {courses && columns && (
            <LmsTable
                columns={columns}
                data={courses}
                checkMark={true}
                rowLink={(row) => `/curriculum/course/details/${row.id}/course-information` }
                pagination={pagination}
            />
        )}
      </>
  );
}
