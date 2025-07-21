import { Button } from "@/components/common/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/common/dialog";
import { CommonToastMessage } from "@/components/common/CommonToastMessage";
import { assignVideoToDocument } from "@/utils/api/curriculumManagement";
import { Play } from "lucide-react";
import { useState } from "react";

function VideoAssignToDocument({ isOpen, setIsOpen, form, setForm }) {
  const closeDialog = () => {
    setIsOpen(false);
    setForm({
      courseId: "",
      chapterId: "",
      documentId: "",
      videos: [],
      videoId: "",
    });
  };

  const selectVideo = (id) => {
    setForm((prev) => ({ ...prev, videoId: id }));
  };

  const [loading, setLoading] = useState(false);
  const confirmVideo = async () => {
    setLoading(true);

    try {
      const response = await assignVideoToDocument(form);
      if (response.status === "success") {
        CommonToastMessage("성공.", "영상이 할당되었습니다.", "success");
        closeDialog();
      }
    } catch (e) {
      CommonToastMessage("오류.", e.message, "error");
    }
    setLoading(false);
  };

  return (
    <Dialog size="w500" open={isOpen} onClose={setIsOpen}>
      <DialogTitle>자료 등록 할 강의 선택</DialogTitle>

      <DialogBody>
        {form && form.videos.length ? (
          <div className="border border-borderColor px-1 py-2">
            <ul
              className={`max-h-[240px] custom-siderbar-scrollbar gap-2 flex flex-col `}
            >
              {form &&
                form.videos &&
                form.videos.map((item, i) => (
                  <li
                    className="flex flex-col cursor-pointer"
                    key={`key-${i}`}
                    onClick={() => selectVideo(item.Video.id)}
                  >
                    <div
                      className={`flex items-center group  gap-3 text-textSubColor  text-[13px] hover:font-bold hover:text-themeColor hover:bg-[#F4F9FF] py-[8px] px-4 ${
                        form.videoId === item.Video.id
                          ? "text-themeColor font-bold bg-[#F4F9FF]"
                          : ""
                      }`}
                    >
                      <span
                        className={`rounded-full group-hover:font-bold border border-[#C6C6C6] group-hover:border-themeColor ${
                          form.videoId === item.Video.id
                            ? "text-themeColor border-themeColor font-bold"
                            : ""
                        } group-hover:text-themeColor size-[18px] flex items-center justify-center`}
                      >
                        <Play className={`size-[10px]`} />
                      </span>
                      <span>{item.Video?.file?.fileName}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        {!form.videos.length && (
          <li className="flex flex-col cursor-pointer text-center text-medium">
            가져온 동영상이 없습니다.
          </li>
        )}
      </DialogBody>
      <DialogActions>
        <Button
          color="transparentMedium"
          className={`h-[40px]`}
          onClick={closeDialog}
        >
          취소
        </Button>
        <Button
          loading={loading}
          disable={loading}
          color="primaryMedium"
          className={`h-[40px]`}
          onClick={confirmVideo}
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default VideoAssignToDocument;
