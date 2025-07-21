import {getFaqSingle} from "@/utils/api/curriculumManagement";
import {Clock4, Menu, User} from "lucide-react";
import React from "react";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import Link from "next/link";
import {Button} from "@/components/common/button";

export default async function Page({params}) {
    const {id} = await params;
    const faq = await getFaqSingle(id)

    return (
        <>
            <LmsPageHeading title={'자주 묻는 질문'} />
            {faq &&
                <>
                    <div className="flex flex-col member-send-information">
                        <div className="form">
                            <div className="form">
                                <div
                                    className={`flex items-center    border-t border-b border-commonBorderColor  bg-secondaryBgColor`}>
                                    <div className={`flex justify-between items-center p-4 w-full`}>
                                        <span className="common-label-style py-0.5 pl-2">
                                            {faq.question}
                                        </span>
                                        <div className="bredcrumbs">
                                            <div className="flex items-center text-[19px] text-textSubColor  gap-1">
                                                <div className="flex gap-1">
                                                    <div className="img">
                                                        <User size={16} />
                                                    </div>
                                                    <span className={'text-sm'}>{faq.registrant}</span>
                                                </div>

                                                <div className="flex gap-1">
                                                    <div className="img">
                                                        <Clock4 size={16} />
                                                    </div>
                                                    <span className={'text-sm'}>{faq.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex items-center`}>
                                    <div className={`flex items-center p-4 w-full`}>
                                        { faq.answer &&
                                            <p className="py-0.5 pl-2" dangerouslySetInnerHTML={{__html: faq.answer}}></p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-0 mb-6">
                        <Link href={`/customer-service-center/faqs`}>
                            <Button color="transparent" className="w-full mb-2 text-center cursor-pointer">
                                <span>
                                    <Menu size={20} />
                                </span>
                                <span className="text-19px leading-[normal]">목록</span>
                            </Button>
                        </Link>

                        <Link href={`/customer-service-center/faqs/edit/${id}`}>
                            <Button color="primary" className="  mb-2 text-center cursor-pointer">
                                <span className="text-19px">수정하기</span>
                            </Button>
                        </Link>
                    </div>
                </>
            }
        </>
    )}
