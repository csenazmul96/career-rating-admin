import VideoUploadProgress from "@/app/(root-layout)/(content-layout)/content-management/video-management/new-video/components/VideoUploadProgress";
import { Button } from "@/components/common/button";
import { deleteRecentUploadedFile } from "@/utils/api/videoContentRequest";
import {FilePlus, Info} from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

const VideoFormDropzonWrapper = ({
                                     formClean,
                                     setFileUploadResponse,
                                     errors,
                                     form,
                                 }) => {
    const { data: session, status } = useSession();
    const accessToken = session.token;
    const [files, setFiles] = useState([]);

    const acceptedFiles = (acceptedFiles) => {
        acceptedFiles.forEach((item, i) => {
            let size = item.size / 1024 / 1024;
            size = size.toFixed(2);
            if (size > 1024) {
                size = (size / 1024).toFixed(2);
                item.fileSize = size + "GB";
            } else {
                item.fileSize = size + "MB";
            }
            item.uniqueName = files.length + "_" + item.name;

            setFiles((prev) => [...prev, item]);
            uploadFile(item);
        });
    };

    useEffect(() => {
        if (formClean) {
            setFiles([]);
        }
    }, [formClean]);

    useEffect(() => {
        if (files.length > 0) {
            const filesWithObjectName = files
                .filter((item) => item.objectName)
                .map((item) => ({
                    objectName: item.objectName,
                    fileName:item.name,
                    fileType:item.type,
                    size:item.fileSize,
                    resolution :item.resolution,
                    playbackTime:item.playbackTime,
                    uniqueName:item.uniqueName,
                    id: item.id || ""
                }));
            setFileUploadResponse(filesWithObjectName)
        } else {
            setFileUploadResponse([])
        }

    }, [files]);


    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append("files", file);

        const xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            `${process.env.NEXT_PUBLIC_API_URL}/lms-content-curriculum/api/v1/private/upload/content-file?uniqueNameParam=${file.uniqueName}`,
            true
        );
        xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                setFiles((prevFiles) =>
                    prevFiles.map((item) => {
                        if (item.uniqueName === file.uniqueName) {
                            item.uploadProgress =  percentComplete
                            return item;
                        }
                        return item
                    })
                );
            }
        };

        xhr.onload = () => {
            if (xhr.status === 201) {
                let response = xhr.responseText;
                response = JSON.parse(response);
                const uploadedFile = response.data[0];
                setFiles((prevProgress) => {
                    return prevProgress.map((item) => {
                        if (item.uniqueName === uploadedFile.uniqueName) {
                            item.objectName =  uploadedFile.objectName
                            item.playbackTime =  uploadedFile.playbackTime
                            item.resolution =  uploadedFile.resolution
                            return item;
                        }
                        return item;
                    })
                });

            } else {
                CommonToastMessage('오류.', `${file.name} upload failed`, 'error')
            }
        };

        xhr.onerror = () => {
            console.error(`${file.name} upload failed:`, xhr.statusText);
        };

        xhr.send(formData);
    };
    const [loading, setLoading] = useState({ status: false, uniqueName: "" });

    const deleteVideo = async (file) => {
        setLoading({ status: true, uniqueName: file.uniqueName });
        let item = files.find((item) => item.uniqueName === file.uniqueName);
        if (item) {
            const response = await deleteRecentUploadedFile(item.objectName, "/delete/video-file");

            if (response.status !== "success") {
                CommonToastMessage('성공.', response.message, 'error')
                setLoading({ status: false, uniqueName: "" });
                return;
            }

            let filterdFiels = files.filter((item) => item.uniqueName !== file.uniqueName);
            setFiles(filterdFiels);
            setLoading({ status: false, uniqueName: "" });
        }

    };

    return (
        <>
            <div className=" pb-10 ">
                <Dropzone
                    onDrop={acceptedFiles}
                    accept={{
                        "video/*": [
                            ".mp4",
                            ".mov",
                            ".AVI",
                            ".WebM",
                            ".MKV",
                            ".WMV",
                            ".FLV",
                            ".AVCHD",
                        ],
                    }}
                >
                    {({ getRootProps, getInputProps }) => (
                        <section className="flex flex-col border border-dotted border-commonBorderColor w-full">
                            <div
                                {...getRootProps()}
                                className={`h-[275px] flex items-center justify-center flex-col gap-3`}
                            >
                                <input {...getInputProps()} />
                                <img
                                    src="/images/content-management/drag.png"
                                    className={`mb-2`}
                                    alt=""
                                />
                                <p className={`text-baseNormal text-textSubColor`}>파일을 이곳에 드롭하세요.</p>
                                <p className={`flex items-center gap-1 mb-2 text-baseNormal text-textSubColor`}>
                                    <Info size={16} className={`text-textSubColor`} />
                                    {" "}
                                    최대
                                    <span className={`font-bold text-themeColor`}>
                    10개{" "}
                  </span>{" "}
                                    MP4, MOV 파일 첨부 가능합니다.
                                </p>
                                <Button
                                    color={`primary`}
                                    className={`w-[121px] max-w-[121px] !text-base   !min-w-[121px] !h-[40px] !p-0 `}
                                >
                                    <FilePlus size={20} />
                                    파일추가
                                </Button>
                            </div>
                        </section>
                    )}
                </Dropzone>
                {errors?.file && (
                    <small className="!mt-0 text-dangerColor">{errors.file}</small>
                )}

                {errors?.files && (
                    <small className="!mt-0 text-dangerColor">{errors.files}</small>
                )}
            </div>
            {files.length ? (
                <div className="download-list w-full my-10">
                    <ul className="w-full flex flex-col border gap-y-7 border-commonBorderColor p-7">
                        {files.map((file) => (
                            <li
                                key={file.uniqueName}
                                className="download-item flex items-center justify-between w-full"
                            >
                                <div className="left flex items-center gap-3">
                  <span>
                    <img
                        src="/images/content-management/Extensions.png"
                        alt=""
                    />
                  </span>
                                    <span className="text-textSubColor">{file.name}</span>
                                </div>
                                <div className="right flex gap-3 items-center">
                                    <span className="text-textSubColor">{file.fileSize}</span>
                                    <VideoUploadProgress
                                        value={file.uploadProgress || 0}
                                        uniqueName={file.uniqueName}
                                        deleteVideo={() => deleteVideo(file)}
                                        loading={loading}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </>
    );
};
export default VideoFormDropzonWrapper;
