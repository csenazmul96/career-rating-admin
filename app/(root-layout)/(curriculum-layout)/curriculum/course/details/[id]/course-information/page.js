import {getCourseById} from "@/utils/api/curriculumManagement";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import React from "react";
import {Button} from "@/components/common/button";
import Link from "next/link";
import {MdOpenInNew, MdOutlineDownload} from "react-icons/md";
import Image from "next/image";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import pencil from "@/public/images/content-management/pencil.png";
import {calculateCoursePrice} from "@/utils/helpers/CurriculumHelper";
import {getFileExtension} from "@/utils/helpers/CommonHelper";
import {Download, ExternalLink, Eye, EyeOff, Menu, Pencil} from "lucide-react";

export default async function Page({params}) {
    const allParams = await params

    const course = await getCourseById(allParams.id)
    return (
        <>
            <FieldWrapper label="노출 여부" singleElement={true} className={`min-h-[55.5px]`}>
                <Button
                    color={`${course.visibilityStatus === 'SHOW' ? 'primaryNoBgRoundedSmall' : "secondaryLightRoundedSmall"}`}>
                    {course.visibilityStatus === 'SHOW' ?
                        <>
                            {/*<img className={'h-4 w-4'} src="/images/blue_open_eye.png" alt=""/>*/}
                            <Eye size={16} />
                            보임</>
                        :
                        <>
                            {/*<img className={'h-4 w-4'} src="/images/grey_close_eye.png" alt=""/>*/}
                            <EyeOff size={16} />
                            숨김</>
                    }
                </Button>
            </FieldWrapper>

            <FieldWrapper label="과정명" singleElement={true} className={`min-h-[55.5px]`}>
                <span>{course.courseName}</span>
            </FieldWrapper>

            <FieldWrapper label="카테고리" singleElement={true} className={`min-h-[55.5px]`}>
                <span>{course.courseCategory?.name} {course.courseSubCategory ? `> ${course.courseSubCategory.name}` : '' } {course.courseSubSubCategory ? `> ${course.courseSubSubCategory.name}` : '' }</span>
            </FieldWrapper>

            <FieldWrapper label="대표 이미지" singleElement={true} className={`min-h-[55.5px]`}>
                {course.representativeImages &&
                    <div className="download-list w-full ">
                        <ul className="w-full flex flex-col">
                            <li className="download-item flex items-center justify-between w-full">
                                <div className="left flex items-center gap-3">
                                    <span><img src={`/images/content-management/${getFileExtension()}`} alt=""/></span>
                                    <span className="text-textSubColor">{course.representativeImages.fileName}</span>
                                </div>
                                <div className="right flex gap-3 items-center">
                                    <span className="text-textSubColor">{course.representativeImages.size}</span>
                                    <Link href={course.representativeImages.downloadLink} download={true}
                                          target={'_blank'}>
                                        <span className="text-textSubColor cursor-pointer"><Download size={24} className={` text-[#C6C6C6]`} /></span>
                                    </Link>
                                    <Link href={course.representativeImages.downloadLink} target={'_blank'}>
                                        <span className="text-textSubColor cursor-pointer"><ExternalLink size={24} className={` text-[#C6C6C6]`} /></span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
            </FieldWrapper>

            <FieldWrapper label="과정 유형" singleElement={true} className={`min-h-[55.5px]`}>
                <span>{course.courseType === 'free' ? "무료과정" : "jani na"}</span>
            </FieldWrapper>

            <FieldWrapper label="수강료" singleElement={true} className={`min-h-[55.5px]`}>
                <div className={"flex items-center gap-4 justify-between"}>
                    <span className={"font-bold flex gap-4"}> <span>정가</span> {course.courseType === 'free' ? 0 : (course.regularPrice ? course.regularPrice.toFixed(2) : '') }원 </span>
                    {course.discountRate &&
                        <>
                        {course.courseType === 'free' ?
                            <span className={`flex gap-4`}><span className={"text-themeColor"}>최종금액</span> (무료과정) <span className={"font-bold"}> 0원</span></span>
                            :
                            <span className={`flex gap-4`}>
                                <span className={"text-themeColor"}>최종금액 </span>
                                    {course.courseType === 'free' ? `(무료과정)` : ''}
                                <span className={"font-bold"}>{course.discountRate && course.regularPrice && calculateCoursePrice(course.discountRate, course.regularPrice)}원</span>
                            </span>
                        }
                        </>
                    }
                </div>
            </FieldWrapper>

            <FieldWrapper label="수강기간" singleElement={true} className={`min-h-[55.5px]`}>
                <div className={`flex gap-4 items-center`}> <span className={`font-bold`}>시작일</span> <span>{course.courseStartDate && course.courseStartDate.replaceAll('-', '.')}</span>  <span className={`font-bold`}>종료일</span> <span>{course.courseEndDate && course.courseEndDate.replaceAll('-', '.')}</span> </div>
            </FieldWrapper>

            <FieldWrapper label="인원 제한 설정" singleElement={true} className={`min-h-[55.5px]`}>
                <span>{course.restriction === "use" ? course.restrictionCount : "인원제한 없음"}</span>
            </FieldWrapper>

            <div className="flex">
                <div className="flex-1">
                    <FieldWrapper label="수료 조건 설정" className={`min-h-[55.5px]`}>
                        {course.averageScore && <> {course.averageScore}점 </>}
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="과락점수" className={`h-full min-h[55.5px]`}>
                        {course.overpass_score && <> {course.overpass_score}점</>}
                            </FieldWrapper>
                </div>
            </div>

            <FieldWrapper label="과정 소개" singleElement={true} className={`min-h-[55.5px]`}>
                {course.attachment &&
                    <div className="download-list w-full mb-3">
                        <ul className="w-full flex flex-col">
                            <li className="download-item flex items-center justify-between w-full">
                                <div className="left flex items-center gap-3">
                                    <span><img src={`/images/content-management/${getFileExtension()}`} alt=""/></span>
                                    <span className="text-textSubColor">{course.attachment.fileName}</span>
                                </div>
                                <div className="right flex gap-4 items-center">
                                    <span className="text-textSubColor">{course.attachment.size}</span>
                                    <Link href={course.attachment.downloadLink} download={true}
                                          target={'_blank'}>
                                        <span className="text-textSubColor cursor-pointer "><Download size={24} className={` text-[#C6C6C6]`} /></span>
                                    </Link>
                                    <Link href={course.attachment.downloadLink} target={'_blank'}>
                                        <span className="text-textSubColor cursor-pointer"><ExternalLink size={24} className={` text-[#C6C6C6]`} /></span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
                <span>{course.courseIntroduction}</span>
            </FieldWrapper>

            <FieldWrapper label="학슴 목표" singleElement={true} className={`min-h-[55.5px]`}>
                <span>{course.learningObjectives}</span>
            </FieldWrapper>

            <FieldWrapper label="수료조건" singleElement={true} className={`min-h-[55.5px]`}>
                <span>{course.completionRequirement}</span>
            </FieldWrapper>

            <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
                <Link href={'/curriculum/course'}>
                    <Button color="transparent" className="w-full mb-2 text-center cursor-pointer">
                        <span>
                            {/*<Image src={menuCollapse} alt='menu collapse'/> */}
                            <Menu size={20} />
                        </span>
                        <span className="text-19px leading-[normal]">목록</span>
                    </Button>
                </Link>

                <Link href={`/curriculum/course/details/${course.id}/course-information/edit`}>
                    <Button color="transparent" className="  mb-2 text-center cursor-pointer">
                        <span>
                            {/*<Image src={pencil} alt='menu collapse'/>*/}
                            <Pencil size={20} />
                        </span>
                        <span className="text-19px">수정</span>
                    </Button>
                </Link>
            </div>

        </>
    );
}
