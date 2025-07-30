"use client"; // Required for interactivity

import React, { useState} from "react";
import {chapterData} from "./data";
import {useSidebar} from "@/custom-hooks/useSidebar";
import {Button} from "@/components/common/button";
import ChapterSidebarItem
    from "@/app/(root-layout)/(main)/design/content-management-design/video-management/chapter/components/ChapterSidebarItem";

const Sidebar = () => {

    const { isSidebarOpen, setIsSidebarOpen, toggleSidebar}  = useSidebar();

    const [activeMenu, setActiveMenu] = useState([]);

    const handleClick = (item)=>{
        setActiveMenu((prevList) => {
            if (prevList.includes(item)) {
                return prevList.filter((i) => i !== item);
            } else {
                return [...prevList, item];
            }
        });
    }

    return (
        <div
            className={`transition-all duration-300 chapterSidebar-container   bg-white  text-subColor  fixed left-[260px] ${isSidebarOpen ? "w-[315px] border-r  border-borderColor" : "w-[0px]"}  top-[70px] h-[calc(100%-70px)]  `}>
            <div onClick={toggleSidebar}
                 className={`cursor-pointer flex right-[-31px] text-[13px] text-textSubColor leading-[18.2px] sidebar-collapse absolute top-5  border-l-0 rounded-[8px]`}>
                {/*<span><img src="/images/content-management/li_chevron-first.png" alt=""/></span>*/}
                {/*<span className>그룹접기</span>*/}
                <img src="/images/content-management/collapsible.png" alt=""/>
            </div>
            {
                isSidebarOpen && (
                    <div className="p-6">

                        <h2 className={`text-baseNormal text-textSubColor pt-[56px] pb-[20px] font-bold border-b border-commonBorderColor mb-2`}>챕터분류</h2>

                        <div className="custom-siderbar-scrollbar">
                            <ul className="">
                                {chapterData.map((item, index) => (
                                    <ChapterSidebarItem key={index}
                                                        menu={item}
                                                        index={`parent-${index}`}
                                                        level={'first-level'}
                                                        setActiveMenu={handleClick}
                                                        parentSlug={item.slug}
                                                        activeMenu={activeMenu}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex-col flex gap-3">
                                <Button color="transparentMedium" className={`h-[40px] w-full`} >
                                    <span><img src="/images/content-management/li_plus.png" alt=""/></span> <span>추가</span>
                                </Button>
                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <Button color="transparentMedium" className={`h-[40px] w-full`}>
                                            <span><img src="/images/content-management/li_pencil.png" alt=""/></span> <span>추가</span>
                                        </Button>
                                    </div>
                                    <div className="flex-1">
                                        <Button color="transparentMedium" className={`h-[40px] w-full`}>
                                            <span><img src="/images/content-management/li_trash-2.png" alt=""/></span>
                                            <span>추가</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>

    );
};

export default Sidebar;
