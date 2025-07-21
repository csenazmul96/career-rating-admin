"use client";
import { Button } from "@/components/common/button";
import { CommonToastMessage } from "@/components/common/CommonToastMessage";
import { deleteRecentUploadedFile } from "@/utils/api/videoContentRequest";
import { FilePlus, Info } from "lucide-react";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadProgress from "./FileUploadProgress";
import ToolTip from "@/components/common/ToolTip";

const DocumentUploadComponent = ({
  formClean,
  setFileUploadResponse,
  documentFiles,
  errors,
}) => {
  const { data: session } = useSession();
  const accessToken = session?.token;

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState({ status: false, uniqueName: "" });

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const sizeKB = (file.size / 1024).toFixed(2);
        file.fileSize =
          sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(2)}MB` : `${sizeKB}KB`;
        file.uniqueName = `${files.length}_${file.name}`;
        setFiles((prev) => [...prev, file]);
        uploadFile(file);
      });
    },
    [files]
  );

  useEffect(() => {
    if (files.length > 0) {
      const filesWithObjectName = files
        .filter((item) => item.objectName)
        .map((item) => ({
          objectName: item.objectName,
          fileType: item.type,
          fileName: item.name,
          size: item.fileSize,
          resolution: item.resolution,
          playbackTime: item.playbackTime,
          uniqueName: item.uniqueName,
        }));
      setFileUploadResponse(filesWithObjectName);
    } else {
      setFileUploadResponse([]);
    }
  }, [files]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".bmp", ".tiff", ".webp"],
    },
    multiple: true,
  });

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("files", file);

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL}/lms-content-curriculum/api/v1/private/upload/content-file?uniqueNameParam=${file.uniqueName}`
    );
    xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = (event.loaded / event.total) * 100;
        setFiles((prevFiles) =>
          prevFiles.map((item) => {
            if (item.uniqueName === file.uniqueName) {
              item.uploadProgress = percent;
              return item;
            }
            return item;
          })
        );
      }
    };

    xhr.onload = () => {
      if (xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        const uploadedFile = response.data[0];
        setFiles((prevProgress) => {
          return prevProgress.map((item) => {
            if (item.uniqueName === uploadedFile.uniqueName) {
              item.objectName = uploadedFile.objectName;
              item.playbackTime = uploadedFile.playbackTime;
              item.resolution = uploadedFile.resolution;
              return item;
            }
            return item;
          });
        });
      } else {
        CommonToastMessage("오류.", `${file.name} upload failed`, "error");
      }
    };

    xhr.onerror = () => {
      CommonToastMessage("오류.", `${file.name} upload failed`, "error");
    };

    xhr.send(formData);
  };

  const deleteFile = async (file) => {
    setLoading({ status: true, uniqueName: file.uniqueName });
    const item = files.find(
      (document) => document.uniqueName === file.uniqueName
    );

    if (item) {
      const response = await deleteRecentUploadedFile(
        file.id ? item.objectName : null,
        `${
          file.id
            ? "/delete/content-file"
            : `/delete/file/${item.objectName}?bucketParam=DOCUMENT`
        }`
      );

      if (response.status !== "success") {
        CommonToastMessage("성공.", response.message, "error");
        setLoading({ status: false, uniqueName: "" });
        return;
      }

      let filterdFiels = files.filter(
        (item) => item.uniqueName !== file.uniqueName
      );
      setFiles(filterdFiels);
      setLoading({ status: false, uniqueName: "" });

      CommonToastMessage("성공.", "File has been deleted.", "success");
    }
  };

  useEffect(() => {
    if (formClean) {
      setFiles([]);
    }
  }, [formClean]);

  useEffect(() => {
    if (documentFiles) {
      const loaded = documentFiles.map((file, i) => ({
        ...file,
        fileSize: file.size,
        name: file.fileName || file.objectName,
        uniqueName: `${i}_${file.fileName}`,
        uploadProgress: 100,
      }));
      setFiles(loaded);
      const progress = {};
      loaded.forEach((f) => {
        progress[f.name] = 100;
      });
      setFileUploadResponse(loaded);
    }
  }, [documentFiles]);

  const fileInputRef = useRef(null);
  const handleFileChange = (e) => {
    const item = e.target.files[0];
    if (item) onDrop([item]);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="custom-common-row">
      <div className="custom-common-left-col">
        <span className="common-label-style flex items-center">
          첨부파일
          <span>
            <ToolTip content={`다음과 같은 파일 형식의 자료관리 관련 파일을 첨부해 주세요: .jpeg, .jpg, .png, .gif, .bmp, .tiff, .webp, .pdf, .docx, .doc.`}/>
          </span>
        </span>
      </div>
      <div className="custom-common-right-col">
        <div className="flex items-center justify-between border border-dotted border-[#D8D8D8] p-4">
          <div
            className="flex items-center text-textSubColor w-full"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <span className="pr-2">
              <FilePlus size={32} className={`text-borderColor`} />
            </span>
            첨부할 파일을 여기에 끌어다 놓거나 파일 선택 버튼을 직접
            선택해주세요.
          </div>
          <div className="flex flex-col items-start space-y-3">
            <Button
              color="primary"
              type="button"
              className={`!pl-0 !pr-0 min-w-[121px] w-[121px] !text-baseNormal !h-10`}
              onClick={handleClick}
            >
              <span>
                <FilePlus size={20} />
              </span>
              파일선택
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              accept=".jpeg, .jpg, .png, .gif, .bmp, .tiff, .webp, .pdf, .docx, .doc"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {errors?.contentFiles && (
          <div className="flex">
            <small className="!mt-0 text-dangerColor">
              {errors.contentFiles}
            </small>
          </div>
        )}

        {files.length > 0 && (
          <div className="download-list w-full mt-3">
            <ul className="w-full flex flex-col gap-y-7">
              {files.map((file, i) => (
                <li
                  key={`file-${i}`}
                  className="download-item flex items-center justify-between w-full relative"
                >
                  <div className="left flex items-center gap-3">
                    <span>
                      <img
                        src="/images/content-management/Extensions.png"
                        alt=""
                      />
                    </span>
                    <span className="text-textSubColor">
                      <span>{file.name}</span>
                    </span>
                  </div>
                  <div className="right flex gap-3 items-center">
                    <span className="text-textSubColor">{file.fileSize}</span>
                    <FileUploadProgress
                      value={file.uploadProgress || 0}
                      uniqueName={file.uniqueName}
                      deleteFile={() => deleteFile(file)}
                      loading={loading}
                    />
                  </div>
                  {errors?.[`file${i}`] && <span className={'text-13, text-red-700 absolute mt-11'}>{errors?.[`file${i}`]}</span> }
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUploadComponent;
