"use client";

import { Button } from "@/components/common/button";
import { Checkbox, CheckboxField } from "@/components/common/checkbox";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import { Label } from "@/components/common/fieldset";
import { Heading } from "@/components/common/heading";
import { LmsToastMessage } from "@/components/common/LmsToastMessage";
import { useSidebar } from "@/custom-hooks/useSidebar";
import {
  applyDefaultThumbnail,
  createThumbnail,
  deleteExistsThumb,
} from "@/utils/api/videoContentRequest";
import {ImagePlus, Info, Play, X} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import Dropzone from "react-dropzone";
import VideoPlayerOuter
  from "@/app/(root-layout)/(content-layout)/content-management/video-management/details/[id]/components/VideoPlayerOuter";
import {FaPlay} from "react-icons/fa";

const VideoDetailsThumbnails = ({ thumbnail, id, setFormData, video }) => {
  const { isSidebarOpen } = useSidebar();

  const fileInputRef = useRef(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(
    thumbnail.find((t) => t.isSelected)
  );
  const [tempSelectedThumbnail, setTempSelectedThumbnail] = useState(
    thumbnail.find((t) => t.isSelected)
  );

  useEffect(() => {
    const selected = thumbnail.find((t) => t.isSelected);

    setSelectedThumbnail(selected);
  }, [thumbnail]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const acceptedFiles = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    await createThumbnail(id, formData);
    fileInputRef.current.value = null;
  };

  const thumbnailClickHandler = (item) => {
    setTempSelectedThumbnail(item);

    setFormData((prev) => ({ ...prev, defaultThumbnailId: item.id }));
  };

  const [open, setOpen] = useState(false);

  const deleteThumbnail = (name) => {
    confirmAlert({
      title: "썸네일 삭제",
      message: "선택한 썸네일을 삭제하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: async () => {
            const response = await deleteExistsThumb(name, id);
            if (response && response.status === "success") {
              LmsToastMessage("성공.", "Image has been deleted", "success");
            }
          },
        },
      ],
      customUI: ({ title, message, onClose, buttons }) => {
        return (
          <ConfirmPopup
            title={title}
            message={message}
            onClose={onClose}
            onConfirm={buttons}
          />
        );
      },
    });
  };

  const applyThumbnail = () => {
    confirmAlert({
      title: "확인하다",
      message: "지원하고 싶습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: async () => {
            const response = await applyDefaultThumbnail(
              id,
              tempSelectedThumbnail.id
            );
            if (response && response.status === "success") {
              LmsToastMessage("성공.", "Thumbnail has been updated", "success");
            }
          },
        },
      ],
      customUI: ({ title, message, onClose, buttons }) => {
        return (
          <ConfirmPopup
            title={title}
            message={message}
            onClose={onClose}
            onConfirm={buttons}
          />
        );
      },
    });
  };

  return (
    <>
      <div
        className={`flex flex-col gap-8 ${
          isSidebarOpen ? "w-[35%]" : "w-[50%]"
        }`}
      >
        <div className="inner relative rounded-[20px] overflow-hidden  w-full bg-[#000] aspect-[16/9]" onClick={()=>setOpen(true)}>
          <div className={` absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center`}>
            <div className="gradient-border-rounded z-10 size-[120px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
              <div className="
                    relative
                    h-full w-full flex items-center justify-center overflow-hidden rounded-full
                    bg-black bg-opacity-25
                    backdrop-blur-[33.33px]
                    shadow-[inset_-1.22px_1.22px_1.22px_-2.43px_#ffffff59]
                    p-4
                ">
                <FaPlay size={45} className={`text-white`} />
              </div>
            </div>
          </div>
          {selectedThumbnail ? (
            <img
              src={selectedThumbnail.url}
              alt={selectedThumbnail.objectName}
              className={`absolute top-0 left-0 w-full h-full object-contain`}
            />
          ) : (
            <img
              src="/images/content-management/Frame 3465185.png"
              alt="Default image"
              className={`absolute top-0 left-0 w-full h-full object-contain`}
            />
          )}
        </div>

        <div className="flex items-center justify-between pb-6 border-b border-commonBorderColor">
          <Heading level={2} className={`!pb-0`}>
            <span>썸네일</span>
          </Heading>
          <div className="flex gap-4">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={(e) => acceptedFiles(e.target.files)}
            />
            <Button
              className={`h-[32px]`}
              onClick={handleUploadClick}
              color="transparentMedium"
            >
              <div className="flex gap-1 items-center">
                <span>
                  {/*<img src="/images/content-management/li_image-plus.png" alt=""/>*/}
                  <ImagePlus size={20} />
                </span>
                <span>업로드</span>
              </div>
            </Button>
            <Button
              onClick={applyThumbnail}
              className={`h-[32px] bg-[#F0F0F0]`}
              disable={tempSelectedThumbnail ? false : true}
              color="transparentMedium"
            >
              <span>적용</span>
            </Button>
          </div>
        </div>

        <div className="inner">
          {!thumbnail.length ? (
            <div>
              <div className="relative ">
                <Dropzone
                  onDrop={(files) => acceptedFiles(files)}
                  maxFiles={1}
                  accept={{
                    "image/*": [
                      ".jpeg",
                      ".jpg",
                      ".png",
                      ".gif",
                      ".bmp",
                      ".tiff",
                      ".webp",
                    ],
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section className="flex flex-col border border-dotted rounded-[8px] border-commonBorderColor w-full ">
                      <div
                        {...getRootProps()}
                        className={`h-[207px] flex items-center justify-center flex-col gap-3`}
                      >
                        <input {...getInputProps()} />
                        <img
                          src="/images/content-management/drag.png"
                          className={`mb-2`}
                          alt=""
                        />
                        <p>파일을 이곳에 드롭하세요.</p>
                        <p className={`flex items-center mb-2`}>
                          {/*<img*/}
                          {/*  className={`size-[13px] mr-2`}*/}
                          {/*  src="/images/login-img.png" alt=""/>*/}
                          <Info size={13} className={`mr-1`} />
                          최대
                          <span className={`font-bold text-themeColor mr-2`}>
                            1개{" "}
                          </span>{" "}
                          가능합니다.
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              {thumbnail.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-lg overflow-hidden w-full bg-[#000] aspect-[16/9]"
                >
                  <span
                    className={`absolute top-[10px] left-[10px] w-full z-10 pr-4`}
                  >
                    <div className={"flex items-center justify-between "}>
                      <CheckboxField>
                        <Checkbox
                          color="lmscheckbox"
                          name="discoverability"
                          value={1}
                          onClickHandler={() => thumbnailClickHandler(item)}
                          checked={
                            tempSelectedThumbnail &&
                            tempSelectedThumbnail.id === item.id
                          }
                        />
                        <Label className="font-normal"></Label>
                      </CheckboxField>
                      {!item.isSelected && (
                        <span
                          className={"cursor-pointer"}
                          onClick={() => deleteThumbnail(item.objectName)}
                        >
                          <X className={`text-white`} size={20} />
                        </span>
                      )}
                    </div>
                  </span>
                  <img
                    src={item.url}
                    className={`absolute top-0 left-0 w-full h-full object-contain`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <VideoPlayerOuter video={video} open={open} setOpen={setOpen} />
    </>
  );
};

export default VideoDetailsThumbnails;
