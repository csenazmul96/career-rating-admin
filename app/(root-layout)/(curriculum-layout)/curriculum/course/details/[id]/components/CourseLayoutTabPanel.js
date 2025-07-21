"use client"
import {Tab, TabList} from "@headlessui/react";
import {useParams, usePathname} from "next/navigation";
import Link from "next/link";

const CourseLayoutTabPanel = () => {
    const pathName = usePathname()
    const params = useParams()

    return (
        <TabList className="tab-list-controller items-start justify-start self-start border-b border-commonBorderColor !pb-0 !mb-10 w-full">
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('course-information') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/curriculum/course/details/${params.id}/course-information`}> 과정정보 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('announcement') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/curriculum/course/details/${params.id}/announcement`}> 공지사항 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('table-of-contents') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/curriculum/course/details/${params.id}/table-of-contents`}> 과정목차 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('student-management') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/curriculum/course/details/${params.id}/student-management`}> 수강자관리 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('lecture-materials') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/curriculum/course/details/${params.id}/lecture-materials`}> 강의자료 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('course-evaluation') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/curriculum/course/details/${params.id}/course-evaluation`}> 과정평가 </Link>
            </Tab>
            <Tab className={`p-0 tab-list-controller-btn inline-flex w-auto ${pathName.includes('lecture-inquiry') ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                <Link className={"py-2 px-5"} href={`/curriculum/course/details/${params.id}/lecture-inquiry`}> 강의문의 </Link>
            </Tab>
        </TabList>
    );
};

export default CourseLayoutTabPanel;