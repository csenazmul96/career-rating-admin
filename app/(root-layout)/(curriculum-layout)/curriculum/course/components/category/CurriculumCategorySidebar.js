"use client";

import React, {useEffect} from "react";

import {useParams, usePathname, useSearchParams} from "next/navigation";
import CurriculumCategorySidebarItem
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/category/CurriculumCategorySidebarItem";
import CurriculumCategoryForm from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/category/CurriculumCategoryForm";
import {useCurriculumContext} from "@/store/CurriculumContext";
import {Folder} from "@/app/(root-layout)/(content-layout)/components/icons";
import Link from "next/link";

const CurriculumCategorySidebar = ({groups, headingText= '챕터분류'}) => {
    const params = useParams()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const { setChapterGroup,  setCurrentGroup, currentGroup, setActiveDropdown, openForm}  = useCurriculumContext();

    const ids = params.id ? params.id : []
    useEffect(() => {
        const oldParams = new URLSearchParams(searchParams);
        if (groups.length > 0 ) {
            let first = groups.find(item => +item.id === +oldParams.get('contentGroupId'));
            let second = first?.subGroups.find(item => +item.id === +oldParams.get('contentSubGroupId'));
            let third = second?.subGroups.find(item => +item.id === +oldParams.get('contentSubSubGroupId'));

            setActiveDropdown({first: first??null, second: second??null, third: third??null});
            setCurrentGroup(third !== undefined ? {...third, level: 3} : second !== undefined ? {...second, level: 2} : first !== undefined? {...first, level: 1} : null);
        }

    }, [params]);

    useEffect(() => {
        setChapterGroup(groups)
    }, [groups]);

    const check = () => {
        setCurrentGroup(null)
        setChapterGroup(null)
        setActiveDropdown({first: '', second: '', third: ''})
    }


    return (
        <div className={`transition-all duration-300 chapterSidebar-container bg-white  text-subColor h-[calc(100%-70px)] relative left-[auto] w-full top-[0px] ` }  >
            <div className={`pt-8 pb-6`}>
                <h2 className={`text-baseNormal text-textSubColor pt-[0px] pb-[20px]  font-bold border-b border-commonBorderColor mb-2`}>{headingText}</h2>
                <div className="custom-siderbar-scrollbar">
                    <ul className="">
                        <li>
                            <Link href={pathName} onClick={check}>
                                <div className={`group flex items-center px-5 cursor-pointer hover:text-themeColor ${currentGroup === null && 'text-themeColor'}`}>
                                    <div className="flex items-center   w-full gap-3">
                                        <span className={`group-hover:fill-themeColor`}>  <Folder/></span>
                                        <span className={'py-3 w-full cursor-pointer'}>전체</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        {groups.map((item, index) => (
                            <CurriculumCategorySidebarItem key={index}
                                                           menu={item}
                                                           index={`parent-${index}`}
                                                           level={1}
                                                           slug={item.id}
                            />
                        ))}
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default CurriculumCategorySidebar;
