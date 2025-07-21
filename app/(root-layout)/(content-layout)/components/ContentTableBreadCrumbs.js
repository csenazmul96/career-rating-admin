"use client";

import { ChevronRight, Folder } from "lucide-react";

const ContentTableBreadCrumbs = ({ breadcrumbData }) => {
  return (
    <>
      <div className="text-placeholderColor flex gap-1 items-center">
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
    </>
  );
};

export default ContentTableBreadCrumbs;
