"use client";

import { ChevronRight, Folder } from "lucide-react";
import {useState} from "react";

const ContentTableBreadCrumbs = ({ breadcrumbData }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <>
            <div className="text-placeholderColor flex gap-1 items-center w-max relative">
                <div className="w-full flex gap-1"
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                >
                {breadcrumbData.contentSubSubGroup ? (
                    <>
                        <div className="flex gap-1 items-center">
                            <Folder size={16} />
                            <ChevronRight size={16} />
                        </div>
                        <div className="flex gap-1 items-center">
                            <Folder size={16} />
                            <ChevronRight size={16} />
                            <span className="text-[13px]">
                {breadcrumbData.contentSubSubGroup.name}
              </span>
                        </div>
                    </>
                ) : breadcrumbData.contentSubGroup ? (
                    <>
                        <div className="flex gap-1 items-center">
                            <Folder size={16} />
                            <ChevronRight size={16} />
                        </div>
                        <div className="flex gap-1 items-center">
              <span  className="text-[13px]">
                {breadcrumbData.contentSubGroup.name}
              </span>
                        </div>
                    </>
                ) : breadcrumbData.contentGroup ? (
                    <div className="flex gap-1 items-center">
                        <span  className="text-[13px]">{breadcrumbData.contentGroup.name}</span>
                    </div>
                ) : null}
                </div>
                {isHovered &&
                    <div className="pl-4 absolute left-full  top-1/2 -translate-y-1/2 z-10">
                        <div className="bg-textColor bg-opacity-70 text-white rounded px-3 py-1">
                            <div className="gap-1 flex items-center text-13">
                                { breadcrumbData.contentGroup && <span className={`flex items-center`}>{breadcrumbData.contentGroup.name}</span> }
                                { breadcrumbData.contentSubGroup && <span className={`flex items-center`}><ChevronRight  size={16} /></span>}
                                { breadcrumbData.contentSubGroup && <span className={'flex items-center !m-0'}> {breadcrumbData.contentSubGroup.name}</span> }
                                { breadcrumbData.contentSubSubGroup && <span className={`flex items-center`}><ChevronRight size={16} /></span>}
                                { breadcrumbData.contentSubSubGroup && <span className={'flex items-center !m-0'}> {breadcrumbData.contentSubSubGroup.name}</span> }
                            </div>
                        </div>
                    </div>
                }

            </div>

        </>
    );
};

export default ContentTableBreadCrumbs;
