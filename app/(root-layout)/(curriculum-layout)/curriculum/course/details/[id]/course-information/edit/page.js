import CourseForm from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/CourseForm";
import { getCourseById } from "@/utils/api/curriculumManagement";

export default async function Page({ params }) {
  const { id } = await params;

  const course = await getCourseById(id);
  const courseData = { ...course };

  courseData.courseCategoryId = courseData?.courseCategory?.id;
  courseData.courseSubCategoryId = courseData.courseSubCategory
    ? courseData.courseSubCategory.id
    : "";
  courseData.courseSubSubCategoryId = courseData.courseSubSubCategoryId
    ? courseData.courseSubSubCategoryId.id
    : "";

  courseData.representativeImagesId = courseData.representativeImages
    ? courseData.representativeImages.id
    : "";
  courseData.attachmentId = courseData.attachment
    ? courseData.attachment.id
    : "";
  delete courseData.situation;

  return (
    <>
      <CourseForm oldData={courseData} />
    </>
  );
}
