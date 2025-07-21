import {Button} from "@/components/common/button";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import React, {useCallback, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import VideoUploadProgress
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/new-video/components/VideoUploadProgress";
import {IoMdClose} from "react-icons/io";
import {getFileSize} from "@/utils/helpers/CommonHelper";

const CourseRepresentativeImage = () => {


    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };


    const onDrop = useCallback(acceptedFiles => {
        setFileName(acceptedFiles[0])
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", ".jpg", ".png", ".webp"]
        },
        multiple: false,
    })


    return (
        <FieldWrapper label="대표 이미지" singleElement={true}>
            <div className="flex items-center justify-between border border-dotted border-[#D8D8D8] pl-4 pr-4">
                <div className="flex items-center text-textSubColor text-[17px] pt-5 pb-5 cursor-pointer w-full" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <span className="pr-2">
                        <img src="/images/membership/note-add-gray.png" alt=""/>
                    </span>
                    첨부할 파일을 여기에 끌어다 놓으세요. 대표 이미지는 최대 1장 가능하며, jpg, png 확장자만 업로드 가능합니다.
                </div>
                <div className="flex">
                    <div className="flex flex-col items-start space-y-3">
                        <Button color="secondary" type="button" onClick={handleClick} className={'h-10 !min-w-[122px] !pl-[13px] !pr-[13px]'}>
                            <span><img src="/images/membership/note_add.png" alt=""/></span> 파일선택
                        </Button>

                        <input
                            type="file"
                            ref={fileInputRef}
                            accept=".jpeg, .jpg, .png, .webp"
                            onChange={handleFileChange}
                            className="hidden"
                        />

                    </div>
                </div>
            </div>
            {fileName &&
            <div className="download-list w-full mt-3">
                <ul className="w-full flex flex-col  gap-y-7 ">
                    <li className="download-item flex items-center justify-between w-full">
                        <div className="left flex items-center gap-3">
                            <span><img src="/images/content-management/Extensions.png" alt=""/></span>
                            <span className="text-textSubColor">{fileName.name}</span>
                        </div>
                        <div className="right flex gap-3 items-center">
                            <span className="text-textSubColor">{getFileSize(fileName.size)}</span>
                            <span className="text-textSubColor"><IoMdClose className="size-[24px] text-[#C6C6C6] cursor-pointer"/></span>
                        </div>
                    </li>
                </ul>
            </div>
            }

        </FieldWrapper>
    );
}

export default CourseRepresentativeImage