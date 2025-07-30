import FieldWrapper from "@/components/common/form/FieldWrapper";
import { Heading } from "@/components/common/heading";
import { Copy } from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

const VideoDetailsInfo = ({ video }) => {
  return (
    <>
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
