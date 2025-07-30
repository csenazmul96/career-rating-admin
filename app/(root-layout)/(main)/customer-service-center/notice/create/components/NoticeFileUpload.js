import {Button} from "@/components/common/button";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import {IoMdClose} from "react-icons/io";
import {noticeFileUpload, uploadCurriculumFile} from "@/utils/api/curriculumManagement";
import {getFileExtension} from "@/utils/helpers/CommonHelper";
import {FilePlus} from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {useSession} from "next-auth/react";

const NoticeFileUpload = ({ setForm, cleanForm, notice = null}) => {
    const [files, setFileInfo] = useState([]);
    const fileInputRef = useRef(null);
    const { data: session } = useSession();
    const accessToken = session.token;

    const clearFile = (id) => {
        setFileInfo((prev) => prev.filter(item => item.id !== id))
        setForm((prev) => ({...prev, attachmentIds:  prev.attachmentIds.filter(item => item !== id)}));
    }

    const uploadFile = async (file) => {
        const formData = new FormData();

        formData.append("files", file);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${process.env.NEXT_PUBLIC_API_URL}/lms-content-curriculum/api/v1/private/upload/curriculum-file?bucketParam=NOTICE`, true);
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
            }
        };

        xhr.onload = () => {
            if (xhr.status === 201) {
                let response = xhr.responseText
                response = JSON.parse(response);
                const data = response["data"][0];
                setFileInfo((prev) => [...prev, data]);
                setForm((prev) => ({...prev, attachmentIds: [...prev.attachmentIds ,data.id]}));
            } else {
                LmsToastMessage('오류.', `${file.name} upload failed`, 'error')
            }
        };

        xhr.onerror = () => {
            console.error(`${file.name} upload failed:`, xhr.statusText);
        };

        xhr.send(formData);

        // const response = await noticeFileUpload(formData);
        // console.log(response)
        // setFileInfo((prev) => [...prev, response]);
        //

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
        acceptedFiles.forEach(file =>{
            uploadFile(file);
        })

    }, [])

    useEffect(() => {
        if (notice && notice.files.length) {
            setFileInfo(notice.files)
        }
    }, [notice]);


    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", ".jpg", ".png", ".gif"],
            "application/pdf": [".pdf"],
            "application/x-hwp": [".hwp"],
            "text/plain": [".txt"],
            "application/msword": [".doc", ".docx"],
            "application/vnd.ms-excel": [".xls", ".xlsx"],
            "application/vnd.ms-powerpoint": [".ppt", ".pptx"],
            "application/zip": [".zip", ".alz", ".7z", ".rar", ".egg"],
            "audio/mpeg": [".mp3"]
        },
        multiple: true,
    })

    useEffect(() => {
        if (cleanForm){
            setFileInfo([])
        }
    }, [cleanForm]);



    return (
        <>
            <div className="flex items-center justify-between border border-dashed border-[#D8D8D8] pl-4 pr-4">
                <div className="flex items-center text-textSubColor text-[17px] pt-5 pb-5 cursor-pointer w-full" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <span className="pr-2">
                        <FilePlus size={26} />
                    </span>
                    첨부할 파일을 여기에 끌어다 놓거나 파일 선택 버튼을 직접 선택해주세요.
                </div>
                <div className="flex">
                    <div className="flex flex-col items-start space-y-3">
                        <Button color="primary" type="button" onClick={handleClick} className={'h-10 !min-w-[124px] !pl-[13px] !pr-[13px]'}>
                            <span>
                                <FilePlus size={20} />
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
            {files &&
                <div className="download-list w-full mt-3">
                    <ul className="w-full flex flex-col  gap-y-7 ">
                        {files.map((file, index) =>(
                            <li className="download-item flex items-center justify-between w-full" key={`index ${index}`}>
                                <div className="left flex items-center gap-3">
                                    <span><img src={`/images/content-management/${getFileExtension(file.fileType)}`} alt=""/></span>
                                    <span className="text-textSubColor">{file.fileName}</span>
                                </div>
                                <div className="right flex gap-3 items-center">
                                    <span className="text-textSubColor">{file.size}</span>
                                    <span className="text-textSubColor" onClick={()=>clearFile(file.id)}><IoMdClose className="size-[24px] text-[#C6C6C6] cursor-pointer"/></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>
    );
}

export default NoticeFileUpload