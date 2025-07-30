import FieldWrapper from "@/components/common/form/FieldWrapper";
import { Heading } from "@/components/common/heading";
import { Copy } from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

const VideoDetailsInfo = ({ video }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        LmsToastMessage('성공.', 'Copied to clipboard!', 'success')
      })
      .catch(() => {
        LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
      });
  };

  return (
    <>
      <div className="inner">
        <Heading level={2} className={`!pb-8`}>
          <span>URL</span>
        </Heading>
        <FieldWrapper label="HLS URL" singleElement={true}>
          <div className="max-w-full flex items-center relative h-[40px] pr-[40px]">
            <div
              className={`absolute pr-[40px] w-[90%]  custom-horizontal-scrollbar whitespace-nowrap`}
            >
              <span className={``}>{video.url}</span>
            </div>
            <span
              onClick={() => copyToClipboard(video.url)}
              className={`absolute right-0 cursor-pointer`}
            >
              {/*<img src="/images/content-management/copy.png" className={`cursor-pointer`}*/}
              {/*     alt=""/>*/}
              <Copy size={20} />
            </span>
          </div>
        </FieldWrapper>
        <FieldWrapper
          label="Embedded Player URL"
          labelClass={`whitespace-normal`}
          singleElement={true}
          className={`border-b border-commonBorderColor`}
        >
          <div className="max-w-full flex items-center relative h-[40px] pr-[40px]">
            <div
              className={`absolute pr-[40px] w-[90%]  custom-horizontal-scrollbar whitespace-nowrap`}
            >
              <span className={``}>{video.embeddedUrl}</span>
            </div>
            <span
              onClick={() => copyToClipboard(video.embeddedUrl)}
              className={`absolute right-0 cursor-pointer`}
            >
              {/*<img src="/images/content-management/copy.png" className={`cursor-pointer`}*/}
              {/*         alt=""/>*/}
              <Copy size={20} />
            </span>
          </div>
        </FieldWrapper>
      </div>

      <div className="inner">
        <Heading level={2} className={`!pb-8`}>
          <span>파일 메타데이터</span>
        </Heading>
        <FieldWrapper label="해상도" singleElement={true}>
          <span>{video.file.resolution}</span>
        </FieldWrapper>
        <FieldWrapper label="재생시간" singleElement={true}>
          <span>{video.file.playbackTime}</span>
        </FieldWrapper>
        <FieldWrapper
          label="크기"
          singleElement={true}
          className={`border-b border-commonBorderColor`}
        >
          <span>{video.file.size}</span>
        </FieldWrapper>
      </div>
    </>
  );
};

export default VideoDetailsInfo;
