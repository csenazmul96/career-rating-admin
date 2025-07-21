import {getFileExtension} from "@/utils/helpers/CommonHelper";
import Link from "next/link";
import {MdOpenInNew, MdOutlineDownload} from "react-icons/md";
import {Button} from "@/components/common/button";
import React from "react";
import {Clock4, Menu, Pencil, User} from "lucide-react";

function AnnouncementDetailsView({announcement, courseId}) {
    return (
        <>
            {announcement &&
                <div className="flex flex-col member-send-information">
                    <div className="form">
                        <div
                            className={`flex items-center    border-t border-b border-commonBorderColor  bg-secondaryBgColor`}>
                            <div className={`flex justify-between items-center p-4 w-full`}>
                            <span className="common-label-style py-0.5 pl-2">
                                {announcement.title}
                            </span>
                                <div className="bredcrumbs">
                                    <div className="flex items-center text-[19px] text-textSubColor  gap-1">
                                        <div className="flex gap-1">
                                            <div className="img">
                                                <User size={16} />
                                            </div>
                                            <span className={'text-sm'}>{announcement.registrant}</span>
                                        </div>

                                        <div className="flex gap-1">
                                            <div className="img">
                                                <Clock4 size={16} />
                                            </div>
                                            <span className={'text-sm'}>{announcement.registrationDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex items-center`}>
                            <div className={`flex items-center p-4 w-full`}>
                                { announcement.description &&
                                <p className="py-0.5 pl-2" dangerouslySetInnerHTML={{__html: announcement.description}}></p>
                                }
                            </div>
                        </div>

                        {announcement.announcementFiles.length ?
                            <div className="download-list w-full my-10">
                                <ul className="w-full flex flex-col border gap-y-7 border-commonBorderColor p-7">
                                    {announcement.announcementFiles && announcement.announcementFiles.map((file, i) => (
                                        <li key={i}
                                            className="download-item flex items-center justify-between w-full">
                                            <div className="left flex items-center gap-3">
                                                <span><img src={`/images/content-management/${getFileExtension(file.fileType)}`} alt=""/></span>
                                                <span className="text-textSubColor">{file?.fileName}</span>
                                            </div>
                                            <div className="right flex gap-3 items-center">
                                                <span className="text-textSubColor">{file.size}</span>
                                                <Link href={file.downloadLink} download={true}>
                                                    <span className="text-textSubColor cursor-pointer"><MdOutlineDownload/></span>
                                                </Link>
                                                <Link href={file.downloadLink} target={'_blank'}>
                                                    <span className="text-textSubColor cursor-pointer"><MdOpenInNew/></span>
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div> : ''
                        }
                    </div>
                </div>
            }

            <div className="flex items-center justify-between mt-0 mb-6">
                <Link href={`/curriculum/course/details/${courseId}/announcement`}>
                    <Button color="transparent" className="w-full mb-2 text-center cursor-pointer">
                        <span>
                            <Menu size={20} />
                        </span>
                        <span className="text-19px leading-[normal]">목록</span>
                    </Button>
                </Link>

                <Link href={`/curriculum/course/details/${courseId}/announcement/${announcement.id}`}>
                    <Button color="transparent" className="  mb-2 text-center cursor-pointer">
                        <span>
                            <Pencil size={20} />
                        </span>
                        <span className="text-19px">수정</span>
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default AnnouncementDetailsView;