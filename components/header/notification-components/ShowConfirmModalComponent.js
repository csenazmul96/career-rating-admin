import React from 'react';
import {Button} from "@/components/common/button";
import {useNotificationContext} from "@/store/NotificationContext";

function ShowConfirmModalComponent({ setShowConfirmModal, sendDeleteRequest }) {
    const {selectedNotificationsIds} = useNotificationContext()
    return (
        <div className="nofification-popup absolute inset-0 z-50">
            <div
                className="absolute inset-0 bg-black bg-opacity-20"
                onClick={() => setShowConfirmModal(false)}
            />
            <div className="absolute bottom-0 left-0 w-full flex flex-col gap-6 bg-white p-5 z-10">
                <div>
                    <h2 className="font-bold"> {`${selectedNotificationsIds.length === 1 ? "알림을 삭제하시겠습니까?" : "알림을 모두 삭제하시겠습니까?"}`} </h2>
                    <p>
                        {`${selectedNotificationsIds.length === 1 ? "선택한 알림이 삭제됩니다. " : "모든 알림이 삭제됩니다. "}`}
                        <br className="hidden lg:block" />
                        {`${selectedNotificationsIds.length === 1 ? "삭제된 알림은 다시 복구할 수 없습니다" : "모든 알림은 다시 복구할 수 없습니다."}`}
                    </p>
                </div>

                <div className="actions flex gap-3 justify-between">
                    <Button
                        color="transparentLarge"
                        className="flex-1"
                        onClick={() => setShowConfirmModal(false)}
                    >
                        취소
                    </Button>
                    <Button
                        color="primaryLarge"
                        className="flex-1"
                        onClick={() => {
                            sendDeleteRequest()
                        }}
                    >
                        삭제
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ShowConfirmModalComponent;