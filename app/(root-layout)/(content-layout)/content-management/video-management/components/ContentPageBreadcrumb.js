"use client";
import { ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const ContentPageBreadcrumb = ({category}) => {

  return (
      <div className="flex items-center text-[25px] text-black font-bold gap-6 pb-10">
        {!category&& (
            <span className="font-semibold">
          동영상 관리
        </span>
        )}
        {category?.group && (
            <Link href={`/content-management/video-management/${category.group.id}`}><span className="font-semibold">{category.group.name}</span></Link>
        )}
        {category?.subGroup && (
            <>
          <span>  <ChevronRight className={'text-placeholderColor'} size={20} /> </span>
              <Link href={`/content-management/video-management/${category.group.id}/${category.subGroup.id}`}> <span className="font-semibold">{category.subGroup.name}</span></Link>
            </>
        )}
        {category?.SubSubGroup && (
            <>
            <span> <ChevronRight className={'text-placeholderColor'} size={20} /> </span>
              <span className="font-semibold">{category.SubSubGroup.name}</span>
            </>
        )}
      </div>
  );
};
export default ContentPageBreadcrumb;
