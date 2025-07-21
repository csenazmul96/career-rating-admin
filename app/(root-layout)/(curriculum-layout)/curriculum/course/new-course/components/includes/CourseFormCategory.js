import CurriculumCategoryPicker from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/CurriculumCategoryPicker";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import { getCurriculumCategory } from "@/utils/api/curriculumCategory";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

const CourseFormCategory = ({ form, setForm, olddata, errors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeGroup, setActiveGroup] = useState(null);

  const loadCategories = async () => {
    const categories = await getCurriculumCategory();

    setCategories(categories);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (olddata) {
      let data = {
        id: null,
        name: " ",
        parentId: null,
        secondId: null,
      };

      if (olddata.courseSubSubCategory) {
        data.id = olddata.courseSubSubCategory.id;
        data.name = olddata.courseSubSubCategory.name;
        data.parentId = olddata.courseCategory.id;
        data.secondId = olddata.courseSubCategory.id;
      } else if (olddata.courseSubCategory) {
        data.id = olddata.courseSubCategory.id;
        data.name = olddata.courseSubCategory.name;
        data.parentId = olddata.courseCategory.id;
      } else if (olddata.courseCategory) {
        data.id = olddata.courseCategory.id;
        data.name = olddata.courseCategory.name;
      } else {
        data = null;
      }
      setActiveGroup(data);
    }
  }, [olddata]);

  const categorySelectHandler = (category) => {
    let courseCategoryId = '';
    let courseSubCategoryId = '';
    let courseSubSubCategoryId = '';

    if (category) {
      if (category.parentId && category.secondId) {
        courseCategoryId = category.parentId;
        courseSubCategoryId = category.secondId || "";
        courseSubSubCategoryId = category.id;
      } else if (category.parentId && !category.secondId) {
        courseCategoryId = category.parentId;
        courseSubCategoryId = category.id;
        courseSubSubCategoryId = "";
      } else {
        courseCategoryId = category.id;
        courseSubCategoryId = "";
        courseSubSubCategoryId = "";
      }
    }

    setActiveGroup(category);
    setForm({
      ...form,
      courseCategoryId: courseCategoryId,
      courseSubCategoryId: courseSubCategoryId,
      courseSubSubCategoryId: courseSubSubCategoryId,
    });
  };

  const checkCategory = (cat) => {
    setActiveGroup(cat);
  };

  return (
      <>
        <FieldWrapper label="카테고리" singleElement={true} required>
          <div className={`flex gap-3 items-center`}>
            <span>{activeGroup ? activeGroup.name : ""}</span>
            <div
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-[10px] border text-textSubColor border-commonBorderColor px-4 h-[40px]"
            >
            <span>
              {/*<img src="/images/curriculum-management/li_bookmark.png" alt=""/>*/}
              <Bookmark size={20} />
            </span>
              <span>카테고리 선택</span>
            </div>
          </div>
          {errors?.categoryId && (
              <small className={"text-dangerDeppColor text-sm"}>
                {errors.categoryId}
              </small>
          )}
        </FieldWrapper>

        <CurriculumCategoryPicker
            isOpen={isOpen}
            selectedGroup={activeGroup}
            setIsOpen={setIsOpen}
            categories={categories}
            callConfirmFunction={categorySelectHandler}
        />
      </>
  );
};

export default CourseFormCategory;
