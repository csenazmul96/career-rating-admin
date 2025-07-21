import React, {useState} from 'react';
import {Heading} from "@/components/common/heading";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import {FilePlus, MessageCircleWarning, Trash2} from "lucide-react";
import {Button} from "@/components/common/button";
import srtIcon from "@/public/images/content-management/Extensions-srt.png";
import Image from "next/image";
import VideoSubTitleForm
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/details/[id]/components/VideoSubTitleForm";
const VideoSubtitle = ({video}) => {
    const [openForm, setOpenForm] = useState(false);
    const[subTitles, setSubTitles] = useState(video.subtitles || []);
    const newSubtitleAdded = (title) => {
        setSubTitles((old) => ([...old, title]))
    }

    return (
        <div>
            <div className="inner">
                <Heading level={2} className={`!pb-8`}>
                    <div className="flex items-center justify-between">
                        <span>자막 파일 추가</span>
                        <Button color="transparentLarge" onClick={()=>setOpenForm(true)}>
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
                            {subTitles.length ? subTitles.map((subtitle, index) => (
                                    <FieldWrapper label={subtitle.language} className={`relative`} singleElement={true} key={`key-${index}`}>
                                        <div className="flex items-center justify-between py-2 pr-[52px]">
                                            <div className="flex gap-3 items-center">
                                                <span><Image src={srtIcon} alt=""/></span>
                                                <span className={`text-textSubColor`}>{subtitle.fileName}</span>
                                            </div>
                                            <div className={`text-textSubColor`}>{subtitle.size}</div>
                                            <div className="absolute w-[52px] flex items-center justify-center right-0 bg-secondaryBgColor h-full border-l border-commonBorderColor">
                                                <Trash2 size={20} />
                                            </div>
                                        </div>
                                    </FieldWrapper>
                                ))
                                :
                                <div className={"relative justify-center flex items-center min-h-[300px]"}>
                                    <div className={"w-max text-center"}>
                                        <MessageCircleWarning size={40} className={`text-placeholderColor m-auto mb-4`} />
                                        <span className={"text-placeholderColor"}>등록된 자막 파일이 없습니다.</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
            <VideoSubTitleForm
                openForm={openForm}
                video={video}
                newSubtitleAdded={newSubtitleAdded}
                setOpenForm={setOpenForm}
            />
        </div>
    );
};

export default VideoSubtitle;