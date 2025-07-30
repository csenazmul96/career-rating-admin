import React from 'react';
import {Heading} from "@/components/common/heading";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import {FilePlus, FileText, ImagePlus, Trash2} from "lucide-react";
import {Button} from "@/components/common/button";
import srtIcon from "@/public/images/content-management/Extensions-srt.png";
import Image from "next/image";
const VideoSubtitle = () => {
    return (
        <div>
            <div className="inner">
                <Heading level={2} className={`!pb-8`}>
                    <div className="flex items-center justify-between">
                        <span>subtitle</span>
                        <Button color="transparentLarge">
                            <div className="flex gap-[10px] items-center">
                                <span>
                                    <FilePlus size={20} />
                                </span>
                                <span>자막파일 업로드</span>
                            </div>
                        </Button>
                    </div>

                </Heading>

                <div className="h-[341px] overflow-hidden bg-secondaryBgColor pr-1">
                    <div className="flex flex-col custom-subtitle-scrollbar pr-1 relative min-h-[341px]">
                        <div className="absolute inset-0">
                            <FieldWrapper label="해상도" className={`relative`} singleElement={true}>
                                <div className="flex items-center justify-between py-2 pr-[52px]">
                                    <div className="flex gap-3 items-center">
                                        <span><Image src={srtIcon} alt=""/></span>
                                        <span className={`text-textSubColor`}>SubUpload.srt</span>
                                    </div>
                                    <div className={`text-textSubColor`}>3.3KB</div>
                                    <div className="absolute w-[52px] flex items-center justify-center right-0 bg-secondaryBgColor h-full border-l border-commonBorderColor">
                                        <Trash2 size={20} />
                                    </div>
                                </div>
                            </FieldWrapper>
                            <FieldWrapper label="해상도" className={`relative`} singleElement={true}>
                                <div className="flex items-center justify-between py-2 pr-[52px]">
                                    <div className="flex gap-3 items-center">
                                        <span><Image src={srtIcon} alt=""/></span>
                                        <span className={`text-textSubColor`}>SubUpload.srt</span>
                                    </div>
                                    <div className={`text-textSubColor`}>3.3KB</div>
                                    <div className="absolute w-[52px] flex items-center justify-center right-0 bg-secondaryBgColor h-full border-l border-commonBorderColor">
                                        <Trash2 size={20} />
                                    </div>
                                </div>
                            </FieldWrapper>
                            <FieldWrapper label="해상도" className={`relative`} singleElement={true}>
                                <div className="flex items-center justify-between py-2 pr-[52px]">
                                    <div className="flex gap-3 items-center">
                                        <span><Image src={srtIcon} alt=""/></span>
                                        <span className={`text-textSubColor`}>SubUpload.srt</span>
                                    </div>
                                    <div className={`text-textSubColor`}>3.3KB</div>
                                    <div className="absolute w-[52px] flex items-center justify-center right-0 bg-secondaryBgColor h-full border-l border-commonBorderColor">
                                        <Trash2 size={20} />
                                    </div>
                                </div>
                            </FieldWrapper>
                            <FieldWrapper label="해상도" className={`relative`} singleElement={true}>
                                <div className="flex items-center justify-between py-2 pr-[52px]">
                                    <div className="flex gap-3 items-center">
                                        <span><Image src={srtIcon} alt=""/></span>
                                        <span className={`text-textSubColor`}>SubUpload.srt</span>
                                    </div>
                                    <div className={`text-textSubColor`}>3.3KB</div>
                                    <div className="absolute w-[52px] flex items-center justify-center right-0 bg-secondaryBgColor h-full border-l border-commonBorderColor">
                                        <Trash2 size={20} />
                                    </div>
                                </div>
                            </FieldWrapper>
                            <FieldWrapper label="해상도" className={`relative`} singleElement={true}>
                                <div className="flex items-center justify-between py-2 pr-[52px]">
                                    <div className="flex gap-3 items-center">
                                        <span><Image src={srtIcon} alt=""/></span>
                                        <span className={`text-textSubColor`}>SubUpload.srt</span>
                                    </div>
                                    <div className={`text-textSubColor`}>3.3KB</div>
                                    <div className="absolute w-[52px] flex items-center justify-center right-0 bg-secondaryBgColor h-full border-l border-commonBorderColor">
                                        <Trash2 size={20} />
                                    </div>
                                </div>
                            </FieldWrapper>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoSubtitle;