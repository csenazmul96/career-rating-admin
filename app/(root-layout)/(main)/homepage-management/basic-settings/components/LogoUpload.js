import {Button} from "@/components/common/button";
import React, {useCallback, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import {IoMdClose} from "react-icons/io";
import {uploadCurriculumFile} from "@/utils/api/curriculumManagement";
import {FilePlus} from "lucide-react";

const LogoUpload = ({name, setForm, placeholder, file = null, errors}) => {
    const [fileInfo, setFileInfo] = useState(file);
    const fileInputRef = useRef(null);

    const clearFile = () => {
        setFileInfo(null);
        setForm((prev) => ({...prev, [name]: ''}));
    }

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append("files", file);

        const response = await uploadCurriculumFile(formData);
        setFileInfo(response);
        setForm((prev) => ({...prev, [name]: response.id}));
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            uploadFile(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const onDrop = useCallback(acceptedFiles => {
        uploadFile(acceptedFiles[0]);
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", ".jpg", ".png", ".webp"]
        },
        multiple: false,
    })


    return (
        <>
            <div className="flex items-center justify-between border border-dotted border-[#D8D8D8] pl-4 pr-4">
                <div className="flex items-center text-textSubColor text-[17px] pt-5 pb-5 cursor-pointer w-full" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <span className="pr-2">
                        {/*<img src="/images/membership/note-add-gray.png" alt=""/>*/}
                        <FilePlus size={32} className={`text-borderColor`} />
                    </span>
                    {placeholder}
                </div>
                <div className="flex">
                    <div className="flex flex-col items-start space-y-3">
                        <Button color="primary" type="button" onClick={handleClick} className={'!h-10 pl-0 pr-0 !gap-1 !min-w-[122px]'}>
                            <span>
                                {/*<img src="/images/page-white.png" alt=""/>*/}
                                <FilePlus size={20} className={`text-baseNormal`} />
                            </span> 파일선택
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
            {fileInfo &&
                <div className="download-list w-full mt-3">
                    <ul className="w-full flex flex-col  gap-y-7 ">
                        <li className="download-item flex items-center justify-between w-full">
                            <div className="left flex items-center gap-3">
                                <span><img src="/images/content-management/Extensions.png" alt=""/></span>
                                <span className="text-textSubColor">{fileInfo.fileName}</span>
                            </div>
                            <div className="right flex gap-3 items-center">
                                <span className="text-textSubColor">{fileInfo.size}</span>
                                <span className="text-textSubColor" onClick={clearFile}><IoMdClose className="size-[24px] text-[#C6C6C6] cursor-pointer"/></span>
                            </div>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
}

export default LogoUpload