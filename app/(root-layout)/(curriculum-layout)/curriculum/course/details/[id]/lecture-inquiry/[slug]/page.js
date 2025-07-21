import {getCourseSingleInquiry} from "@/utils/api/curriculumManagement";
import {Clock, Menu, User} from "lucide-react";
import React from "react";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getFileExtension} from "@/utils/helpers/CommonHelper";
import Link from "next/link";
import {MdOpenInNew, MdOutlineDownload} from "react-icons/md";
import InquiryReplyDeleteButton
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/lecture-inquiry/[slug]/components/InquiryReplyDeleteButton";
import CourseInqueryReplyForm
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/lecture-inquiry/[slug]/components/CourseInqueryReplyForm";

export default async function Page({params}) {
    const {slug, id} = await params;
    const query = await getCourseSingleInquiry(slug)

    return (
        <>
            <LmsPageHeading title={'1:1 문의'} />
            {query &&
                <>
                    <div className="border-t border-commonBorderColor" >
                        <div
                            className="group px-5 py-4 flex w-full items-center justify-between bg-secondaryBgColor">
                            <div className="inner">
                                    <span className="text-medium font-bold">
                                    <span className={`text-themeColor font-bold`}>Q.</span>  {query.title} </span>
                            </div>
                            <div className="inner">
                                <ul className="flex gap-4 text-textSubColor">
                                    <li className={`text-base flex items-center gap-1`}><span>
                                        {/*<img*/}
                                        {/*src="/images/curriculum-management/person.png" alt=""/>*/}
                                        <User size={16} />
                                    </span>
                                        <span>{query.createdBy}</span></li>
                                    <li className={`text-base flex items-center gap-1`}><span><Clock
                                        className={`text-[#8E8E8E] size-[15px]`}/></span>
                                        <span>{query.createdAt}</span></li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <div className="flex flex-col p-8 gap-4 border-b border-commonBorderColor">
                                {query.details}
                            </div>
                        </div>
                    </div>
                    {query.reply.map(reply => (
                        <div className="flex flex-col p-8 gap-4 border-b border-commonBorderColor" key={reply.id}>
                            <div className="avatar-info flex items-start justify-between gap-2">
                                <div className="text">
                                    <p className={`text-base font-bold`}>{reply.createdBy}</p>
                                    <p className={`text-base text-textSubColor`}>{reply.createdAt}</p>
                                    <p className={`pt-3`}>{reply.details}</p>
                                </div>
                                <InquiryReplyDeleteButton  url={`/enrolled-course/inquiry/reply/${reply.id}`} />
                            </div>
                            {reply.files.length ?
                                <div className="download-list w-full my-10">
                                    <ul className="w-full flex flex-col border gap-y-7 border-commonBorderColor p-7">
                                        {reply.files.map((file, i) => (
                                            <li key={i}
                                                className="download-item flex items-center justify-between w-full">
                                                <div className="left flex items-center gap-3">
                                                <span><img src={`/images/content-management/${getFileExtension(file.fileType)}`} alt=""/></span>
                                                    <span className="text-textSubColor">{file?.fileName}</span>
                                                </div>
                                                <div className="right flex gap-3 items-center">
                                                    <span className="text-textSubColor">{file.size}</span>
                                                    <Link href={file.downloadLink} download={true}>
                                                    <span
                                                        className="text-textSubColor cursor-pointer"><MdOutlineDownload/></span>
                                                    </Link>
                                                    <Link href={file.downloadLink} target={'_blank'}>
                                                    <span
                                                        className="text-textSubColor cursor-pointer"><MdOpenInNew/></span>
                                                    </Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div> : ''
                            }
                        </div>
                    ))}
                    <CourseInqueryReplyForm id={slug} />
                    <div className="flex items-end justify-end pt-10">
                        <Link href={`/curriculum/course/details/${id}/lecture-inquiry`} className={"flex relative isolate inline-flex items-center justify-center gap-x-2.5  font-normal  data-[disabled]:opacity-50 bg-transparent border border-borderColor rounded-[0]  min-w-[190px] px-4 h-[48px]  text-textSubColor  md:text-[19px] cursor-pointer cursor-default"} color="transparent">
                            <span><Menu/></span> <span className={`leading-[normal]`}>목록</span>
                        </Link>
                    </div>
                </>
            }
        </>
    );
}
