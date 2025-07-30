import React from 'react';
import {BellOff, Trash2} from "lucide-react";
import {Button} from "@/components/common/button";

function CurrentSelectedNotification({ firstStepModalCallbackFunction, cancelAction}) {
    return (
        <div className="nofification-popup absolute inset-0 z-50">
            <div
                className="absolute inset-0 bg-black bg-opacity-20"
            />
        <div className="absolute bottom-0 left-0 w-full flex flex-col gap-6 bg-white p-5 z-10">
            <div className="flex flex-col">
                <div className="cursor-pointer flex p-3 gap-[10px] bg-primaryLightColor hover:bg-primaryLightColor" onClick={()=>firstStepModalCallbackFunction('DELETE')}>
                    <div>
                        <Trash2 size={28} className={`text-textSubColor`} />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                        <h2 className={`text-baseNormal`}>삭제하기</h2>
                    </div>
                </div>
                <div className="cursor-pointer flex items-center p-3 gap-[10px] hover:bg-primaryLightColor" onClick={()=>firstStepModalCallbackFunction('OFF-NOTIFICATION')}>
                    <div>
                        <BellOff className={`text-textSubColor`} size={28} />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                        <h2 className={`text-baseNormal`}>알림 끄기</h2>
                        <p className={`text-textSubColor text-13`}> 로그인 ‘관리자 로그인’ 알림을 끕니다.</p>
                    </div>
                </div>
            </div>
            <Button
                color="transparentLarge"
                className="flex-1 w-full"
                onClick={cancelAction}
            >
                취소
            </Button>
        </div>
        </div>
    );
}

export default CurrentSelectedNotification;