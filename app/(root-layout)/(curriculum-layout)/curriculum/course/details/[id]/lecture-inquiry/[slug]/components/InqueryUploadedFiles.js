import React, {useCallback, useEffect,   useState} from 'react';
import VideoUploadProgress
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/new-video/components/VideoUploadProgress";
import {useSession} from "next-auth/react";
import {deleteRecentUploadedFile} from "@/utils/api/videoContentRequest";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

function InqueryUploadedFiles({fileInputRef, formClean, setFileUploadResponse, errors }) {
    const { data: session } = useSession();
    const accessToken = session.token;

    const [uploadProgress, setUploadProgress] = useState({});
    const [completeFiles, setCompleteFiles] = useState([]);
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((item, i) =>{
            let size = (item.size/1024)

            size = size.toFixed(2)
            if (size > 1024) {
                item.fileSize = size+"MB"
            } else {
                item.fileSize = size+"KB"
            }
            item.uniqueName = files.length+'_'+item.name

            setFiles((prev) => ([...prev, item]));
            uploadFile(item)
        });
    }, [])

    useEffect(() => {
        if (formClean){
            setFiles([])
            setCompleteFiles([])
            setUploadProgress({})
        }
    }, [formClean]);

    useEffect(() => {
        if (completeFiles.length) {
            setFileUploadResponse(completeFiles)
        }
    }, [completeFiles]);


    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append("files", file);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${process.env.NEXT_PUBLIC_API_URL}/lms-content-curriculum/api/v1/private/upload/curriculum-file?bucketParam=REPLY`, true);
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                setUploadProgress((prevProgress) => ({
                    ...prevProgress,
                    [file.name]: percentComplete,
                }));
            }
        };

        xhr.onload = () => {
            if (xhr.status === 201) {
                let response = xhr.responseText
                response = JSON.parse(response);
                setFileUploadResponse({...response.data[0]})
                setCompleteFiles((prev) => ([...prev, response.data[0]]))
            } else {
                LmsToastMessage('오류.', `${file.name} upload failed`, 'error')
            }
        };

        xhr.onerror = () => {
            console.error(`${file.name} upload failed:`, xhr.statusText);
        };

        xhr.send(formData);
    };
    const [loading, setLoading] = useState({status: false, name: ''})

    const deleteVideo = async (name) => {
        setLoading({status: true, name: name})
        let item = completeFiles.find(item => item.fileName === name)
        if (item) {
            let response = await deleteRecentUploadedFile(item.objectName, '/delete/content-file')
            if (response.status === 'error') {
                setLoading({status: false, name: ''})
            } else {
                LmsToastMessage('삭제.', 'File has been deleted.', 'success')
                setLoading({status: false, name: ''})
            }
        }
        let filteredItems = completeFiles.filter(item => item.fileName !== name)
        let filterdFiels = files.filter(item => item.name !== name)
        setCompleteFiles(filteredItems)
        setFiles(filterdFiels)
        setLoading({status: false, name: ''})
    }
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length) {
            onDrop(files);
        }
    };

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                multiple={true}
                accept=".jpeg, .jpg, .png, .gif, .bmp, .tiff, .webp, .pdf, .docx, .doc"
                onChange={handleFileChange}
                className="hidden"
            />
            {errors?.contentFiles &&
                <div className="flex">
                    <small className="!mt-0 text-dangerColor">{errors.contentFiles}</small>
                </div>
            }
            {files.length ?
                <div className="download-list w-full mt-3">
                    <ul className="w-full flex flex-col  gap-y-7 ">
                        {files.map((file, i) => (
                            <li key={`file-${i}`}
                                className="download-item flex items-center justify-between w-full">
                                <div className="left flex items-center gap-3">
                                                <span><img src="/images/content-management/Extensions.png"
                                                           alt=""/></span>
                                    <span className="text-textSubColor">{file.fileName ? file.fileName : file.name}</span>
                                </div>
                                <div className="right flex gap-3 items-center">
                                    <span className="text-textSubColor">{file.fileSize}</span>
                                    <VideoUploadProgress value={uploadProgress[file.name]} name={file.name}
                                                         deleteVideo={() => deleteVideo(file.name)}
                                                         loading={loading}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div> : ''
            }
        </>
    );
}

export default InqueryUploadedFiles;