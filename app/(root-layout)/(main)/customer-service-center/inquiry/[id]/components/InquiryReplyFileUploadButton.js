"use client";

import { Button } from "@/components/common/button";

function InquiryReplyFileUploadButton({ triggerFileInput }) {
  return (
    <>
      <Button
        color="transparentSmall"
        className={`rounded-[2px]`}
        onClick={triggerFileInput}
      >
        업로드
      </Button>
    </>
  );
}

export default InquiryReplyFileUploadButton;
