"use client"
import React from "react";

import Link from "next/link";
import {getFileExtension} from "@/utils/helpers/CommonHelper";
import {Button} from "@/components/common/button";
import {Clock, Download, ExternalLink, Eye, Menu, Pencil, User} from "lucide-react";

const DocumentsDetailsComponent = ({document}) => {
    return (
        <>
            {document &&
                <div className="flex flex-col member-send-information">
                    <div className="form">
                        <div
                            className={`flex items-center    border-t border-b border-commonBorderColor  bg-secondaryBgColor`}>
                            <div className={`flex justify-between items-center p-4 w-full`}>
                            <span className="common-label-style py-0.5 pl-2">
                                {document.title}
                            </span>
                                <div className="bredcrumbs">
                                    <div className="flex items-center text-[19px] text-textSubColor  gap-4">
                                        <div className="flex gap-1 items-center">
                                            <div className="img">
                                                {/*<Image src={person} className="ml-1" alt="info image"/>*/}
                                                <User size={16} />
                                            </div>
                                            <span className={'text-base'}>{document.registrant}</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <div className="img">
                                                {/*<Image src={visibility} className="ml-1" alt="info image"/>*/}
                                                <Eye size={16} />
                                            </div>
                                            <span className={'text-base'}>전체보기</span>
                                        </div>

                                        <div className="flex gap-1 items-center">
                                            <div className="img">
                                                {/*<Image src={access_time} className="ml-1" alt="info image"/>*/}
                                                <Clock size={16} />
                                            </div>
                                            <span className={'text-base'}>{document.registrationDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex items-center`}>
                            <div className={`flex items-center p-4 w-full`}>
                                <p className="py-0.5 pl-2" dangerouslySetInnerHTML={{__html: document.description}}></p>
                            </div>
                        </div>

                        {document.file.length ?
                            <div className="download-list w-full my-10">
                                <ul className="w-full flex flex-col border gap-y-7 border-commonBorderColor p-7">
                                    {document.file && document.file.map((file, i) => (
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

            <div className="flex items-center justify-between mt-0 mb-6">
                <div className="member-collapse-list">
                    <Link href={'/content-management/document-management'}>
                        <Button color="transparent" className="w-full text-center !gap-2.5">
                            <Menu /> <span className={`flex`}>목록</span>
                        </Button>
                    </Link>
                </div>
                <div className="flex items-end justify-end">
                    <Link href={'/content-management/document-management/edit/'+document?.id}>
                        <Button color="transparent" className={`!gap-2.5`}>
                            {/*<Image src={pencil}   alt="info image"/>*/}
                            <Pencil/>
                            <span className={`flex`}>수정</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default DocumentsDetailsComponent