"use client";

import LmsPageHeading from "@/components/common/LmsPageHeading";
import ToggleSwitch from "@/components/common/form/ToggleSwitch";
import React, {useEffect, useState} from "react";
import ToolTip from "@/components/common/ToolTip";
import {updateNotificationsSettings} from "@/utils/api/notificationApi";
import {useNotificationContext} from "@/store/NotificationContext";

function NotificationSettingsForm({settings}) {
    const [notificationSettings, setNotificationSettings] = useState(settings);
    const handleToggleChange = async (name, value) => {
        const response = await updateNotificationsSettings({[name]: value})
        setNotificationSettings(response)
    }
    const {setIsOpen} = useNotificationContext()

    useEffect(() => {
        setIsOpen(false);
    }, [])

    return (
        <>
            <div className="flex-col">
                <LmsPageHeading title={`알림 설정`}/>
                <div className="border-b border-borderColor mb-10"></div>
                <div className="flex items-center justify-between border border-borderColor p-6">
                    <div className="div flex">
                        <span className={`text-medium text-black font-bold`}>배지 아이콘 표시</span>
                        <ToolTip title={`loem ipsum`}/>
                    </div>
                    <ToggleSwitch
                        defaultValue={!!notificationSettings?.icon}
                        name={'icon'}
                        options={[
                            { value: true, label: "On" },
                            { value: false, label: "OFF" },
                        ]}
                        onChange={handleToggleChange}
                    />
                </div>
            </div>
            <div className="flex-col">
                <LmsPageHeading title={`알림 유형별 설정`}/>
                <div className="border-b border-borderColor mb-10"></div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6">
                        <div className={`text-medium text-black font-bold`}>로그인</div>
                        <div className="flex items-center justify-between border border-borderColor p-6">
                            <div className="div flex">
                                <span className={`text-medium text-black font-bold`}>관리자 로그인 알림</span>
                            </div>
                            <ToggleSwitch
                                defaultValue={!!notificationSettings?.login}
                                name={'login'}
                                options={[
                                    { value: true, label: "On" },
                                    { value: false, label: "OFF" },
                                ]}
                                onChange={handleToggleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className={`text-medium text-black font-bold`}>콘텐츠</div>
                        <div className="flex items-center justify-between border border-borderColor p-6">
                            <div className="div flex">
                                <span className={`text-medium text-black font-bold`}>동영상 업로드 알림</span>
                            </div>
                            <ToggleSwitch
                                defaultValue={!!notificationSettings?.videoUpload}
                                name={'videoUpload'}
                                options={[
                                    { value: true, label: "On" },
                                    { value: false, label: "OFF" },
                                ]}
                                onChange={handleToggleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between border border-borderColor p-6">
                            <div className="div flex">
                                <span className={`text-medium text-black font-bold`}>자료 업로드 알림</span>
                            </div>
                            <ToggleSwitch
                                defaultValue={!!notificationSettings?.documentUpload}
                                name={'documentUpload'}
                                options={[
                                    { value: true, label: "On" },
                                    { value: false, label: "OFF" },
                                ]}
                                onChange={handleToggleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className={`text-medium text-black font-bold`}>1:1 문의</div>
                        <div className="flex items-center justify-between border border-borderColor p-6">
                            <div className="div flex">
                                <span className={`text-medium text-black font-bold`}>신규 문의 접수 알림</span>
                            </div>
                            <ToggleSwitch
                                defaultValue={!!notificationSettings?.inquiry}
                                name={'inquiry'}
                                options={[
                                    { value: true, label: "On" },
                                    { value: false, label: "OFF" },
                                ]}
                                onChange={handleToggleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className={`text-medium text-black font-bold`}>이메일/SMS</div>
                        <div className="flex items-center justify-between border border-borderColor p-6">
                            <div className="div flex">
                                <span className={`text-medium text-black font-bold`}>이메일 발송 알림</span>
                            </div>
                            <ToggleSwitch
                                defaultValue={!!notificationSettings?.email}
                                name={'email'}
                                options={[
                                    { value: true, label: "On" },
                                    { value: false, label: "OFF" },
                                ]}
                                onChange={handleToggleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between border border-borderColor p-6">
                            <div className="div flex">
                                <span className={`text-medium text-black font-bold`}>SMS 발송 알림</span>
                            </div>
                            <ToggleSwitch
                                defaultValue={!!notificationSettings?.sms}
                                name={'sms'}
                                options={[
                                    { value: true, label: "On" },
                                    { value: false, label: "OFF" },
                                ]}
                                onChange={handleToggleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NotificationSettingsForm;