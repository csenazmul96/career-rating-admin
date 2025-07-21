"use client";

import {Button} from "@/components/common/button";

function InquiryReplyFileUploadButton({triggerFileInput }) {

    return (
        <>
            <Button color="transparentSmall" className={`rounded-[2px]`} onClick={triggerFileInput}>삭제</Button>
        </>
    );
}

export default InquiryReplyFileUploadButton;