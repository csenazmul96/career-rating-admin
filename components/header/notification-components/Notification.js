"use client";

import React, { useState } from "react";
import NotificationItem from "./NotificationItem";
import { BellRing, Settings} from "lucide-react";
import { Button } from "@/components/common/button";
import Link from "next/link";
import {useNotificationContext} from "@/store/NotificationContext";
import NotificationTabComponent from "@/components/header/notification-components/NotificationTabComponent";
import {deleteNotificationsSettings, updateNotificationsSettings} from "@/utils/api/notificationApi";
import CurrentSelectedNotification from "@/components/header/notification-components/CurrentSelectedNotification";
import ShowConfirmModalComponent from "@/components/header/notification-components/ShowConfirmModalComponent";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";


const Notification = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [checked, setChecked] = useState(false);
    const [currentActionNotification, setCurrentActionNotification] = useState(null);

    const {notifications, setNotifications, activeNotification, selectedNotificationsIds, setSelectedNotificationsIds} = useNotificationContext()

    const sendDeleteRequest = async () => {
        const response =  await deleteNotificationsSettings({ids:selectedNotificationsIds}).then(()=>{
            setSelectedNotificationsIds([]);
            setShowConfirmModal(false)
            setNotifications((prevNotifications) => prevNotifications.filter((item) => !selectedNotificationsIds.includes(item.id)))
            LmsToastMessage('성공.', '알림이 삭제되었습니다.', 'success')
        });
    }

    const selectAllNotifications = () => {
        setSelectedNotificationsIds(notifications.length > 0 ? notifications.map((item) => item.id) : []);
    }

    const filteredNotifications = () => {
        return notifications.filter(item => activeNotification === "ALL" || item.tag === activeNotification);
    }

    const clickEventOfDot = (notification) => {
        setCurrentActionNotification(notification)
    }


    const firstStepModalCallbackFunction = async (type) => {
        if (type === 'DELETE') {
            setSelectedNotificationsIds([currentActionNotification.id])
            setCurrentActionNotification(null)
        } else if (type === 'OFF-NOTIFICATION') {

            const formData = {}
            if (currentActionNotification.tag === 'LOGIN') {
                formData['login'] = false;
            } else if (currentActionNotification.tag === 'EMAIL_SMS') {
                formData['email'] = false;
                formData['sms'] = false;
            } else if (currentActionNotification.tag === 'CONTENT') {
                formData['videoUpload'] = false;
                formData['documentUpload'] = false;
            } else if (currentActionNotification.tag === 'INQUIRY') {
                formData['inquiry'] = false;
            } else if (currentActionNotification.tag === 'ICON') {
                formData['icon'] = false;
            }

            await updateNotificationsSettings(formData).then((res)=>{
                setSelectedNotificationsIds([])
                setCurrentActionNotification(null)
                LmsToastMessage('성공.', '작업이 업데이트되었습니다.', 'success')
            })
        }
    }
    const cancelAction = () => {
        setSelectedNotificationsIds([])
        setCurrentActionNotification(null)
    }

    return (
        <div className="w-[400px] shadow-notificatoindShadow bg-white border border-borderColor relative">
            <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-borderColor transform rotate-45 shadow-[0_-2px_4px_rgba(0,0,0,0.1)]" />

            <div className="flex items-center justify-between py-4 px-5">
                <h2 className="text-medium font-bold">알림</h2>
                {selectedNotificationsIds.length === 0 ?
                    <Link href={"/notification-settings"} className="w-6 h-6 flex items-center justify-center">
                        <Settings size={20} className="text-textSubColor" />
                    </Link>
                    :
                    <Button onClick={()=>setSelectedNotificationsIds([])} color={"transparentSmall"} >취소</Button>
                }
            </div>

            <NotificationTabComponent />

            <div className="notification-list max-h-[416px] h-[416px] overflow-hidden py-1 pr-1">
                {filteredNotifications().length > 0 ?
                    <div className="custom-notification-scrollbar">
                        <ul className="flex flex-col w-full divide-y divide-borderColor pl-5 pr-[10px]">
                            {filteredNotifications().map((item, id) => (
                                <NotificationItem
                                    key={id}
                                    id={item.id}
                                    title={item.title}
                                    tag={item.tag}
                                    description={item.description}
                                    createdBy={item.createdBy}
                                    memberId={item.memberId}
                                    date={item.createdAt}
                                    time={"00:00"}
                                    clickEventOfDot={clickEventOfDot}
                                />
                            ))}
                        </ul>
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className={`flex gap-4 flex-col items-center justify-center`}>
                            <BellRing size={36} />
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p className={`text-baseNormal`}>새로운 알람이 없습니다.</p>
                                <p className={`text-textSubColor`}>최근 14일 동안 받은 알림을 표시합니다.</p>
                            </div>
                        </div>
                    </div>
                }

            </div>

            {/* Delete button shown when any selected */}
            {selectedNotificationsIds.length > 0 && (
                <div className="absolute bottom-0 bg-white w-full p-5 z-40">
                    <div className="actions flex flex-col bg-white gap-3 justify-between">
                        {/*click delete notification */}
                        <Button
                            color="transparentLarge"
                            className="flex-1 w-full"
                            onClick={() => {
                                setShowConfirmModal(true)
                            }}
                        >
                            선택 알림 삭제
                        </Button>
                        {/*select all notification */}
                        <Button
                            color="primaryLarge"
                            className="flex-1 w-full"
                            onClick={selectAllNotifications}
                        >
                            전체 알림 선택
                        </Button>
                    </div>
                </div>
            )}
            {currentActionNotification &&
                <CurrentSelectedNotification firstStepModalCallbackFunction={firstStepModalCallbackFunction} cancelAction={cancelAction} />
            }

            {/* Confirm Modal */}
            {showConfirmModal && (
                    <ShowConfirmModalComponent setShowConfirmModal={setShowConfirmModal} sendDeleteRequest={sendDeleteRequest} />
            )}
        </div>
    );
};

export default Notification;
