import CourseDetailsTable from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-details/[id]/course-details/components/CourseDetailsTable";
import { getCourseDetails } from "@/utils/api/curriculumManagement";

export default async function page({ params, searchParams }) {
  const { id } = await params;
  const queryParams = await searchParams;
  const allCourses = await getCourseDetails(queryParams.memberId, {
    ...queryParams,
    size: queryParams.size || 10,
  });
  const coursesData = allCourses.Courses;
  const pagination = allCourses.pagination;

  return <CourseDetailsTable courses={coursesData} pagination={pagination} />;
}
