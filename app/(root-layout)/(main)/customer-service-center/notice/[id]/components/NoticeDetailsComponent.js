"use client"
import React from "react";

import Link from "next/link";
import {getFileExtension} from "@/utils/helpers/CommonHelper";
import {Button} from "@/components/common/button";
import {Clock, Download, ExternalLink, Eye, Menu, Pencil, User} from "lucide-react";
import LmsPageHeading from "@/components/common/LmsPageHeading";

const NoticeDetailsComponent = ({id, document}) => {

    return (
        <>

            {document &&
                <div className="flex flex-col member-send-information">
                    <div className="form">
                        <div className={`flex items-center    border-t  border-commonBorderColor  bg-secondaryBgColor`}>
                            <div className={`flex justify-between items-center p-4 w-full`}>
                            <span className="common-label-style py-0.5 pl-2 text-medium">
                                {document.title}
                            </span>
                                <div className="bredcrumbs">
                                    <div className="flex items-center text-[19px] text-textSubColor  gap-4">
                                        <div className="flex gap-1 items-center">
                                            <div className="img">
                                                <User size={16} />
                                            </div>
                                            <span className={'text-base'}>{document.registrant}</span>
                                        </div>

                                        <div className="flex gap-1 items-center">
                                            <div className="img">
                                                <Clock size={16} />
                                            </div>
                                            <span className={'text-base'}>{document.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex items-center`}>
                            <div className={`flex items-center p-8 w-full`}>
                                <p className="py-0.5 pl-2" dangerouslySetInnerHTML={{__html: document.details}}></p>
                            </div>
                        </div>

                        {document.files.length ?
                            <div className="download-list w-full my-10">
                                <ul className="w-full flex flex-col border gap-y-7 border-commonBorderColor p-7">
                                    {document.files && document.files.map((file, i) => (
                                        <li key={i}
                                            className="download-item flex items-center justify-between w-full">
                                            <div className="left flex items-center gap-3">
                                                <span><img
                                                    src={`/images/content-management/${getFileExtension(file.fileType)}`}
                                                    alt=""/></span>
                                                <span className="text-textSubColor">{file?.fileName}</span>
                                            </div>
                                            <div className="right flex gap-4 items-center">
                                                <span className="text-textSubColor">{file.size}</span>
                                                <Link href={file.downloadLink} download={true}>
                                                    <span
                                                        className="text-textSubColor cursor-pointer">
                                                        {/*<MdOutlineDownload/>*/}
                                                        <Download size={24} />
                                                    </span>
                                                </Link>
                                                <Link href={file.downloadLink} target={'_blank'}>
                                                    <span
                                                        className="text-textSubColor cursor-pointer">
                                                        {/*<MdOpenInNew/>*/}
                                                        <ExternalLink size={24} />
                                                    </span>
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

            <div className="flex items-center justify-between border-t pt-8 border-commonBorderColor mt-0">
                <div className="member-collapse-list">
                    <Link href={'/customer-service-center/notice'}>
                        <Button color="transparent" className="w-full text-center leading-[normal] !gap-2.5">
                           <span><Menu /></span>  <span className={`flex`}>목록</span>
                        </Button>
                    </Link>
                </div>
                <div className="flex items-end justify-end">
                    <Link href={`/customer-service-center/notice/edit/${id}`}>
                        <Button color="primary" className={`!gap-2.5`}>
                            <span className={`flex`}>수정하기</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NoticeDetailsComponent