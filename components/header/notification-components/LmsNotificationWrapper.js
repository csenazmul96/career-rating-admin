"use client"


import React, {useEffect, useRef} from "react";
import Notification from "@/components/header/notification-components/Notification";
import {useNotificationContext} from "@/store/NotificationContext";
import {getNotifications} from "@/utils/api/notificationApi";
import { connectSocket, disconnectSocket } from '@/utils/socketClient';

function LmsNotificationWrapper({bellRef }) {
    const {setIsOpen, isOpen, activeNotification, setNotifications, notifications} = useNotificationContext()
    const wrapperRef = useRef(null);


    const sendNotificationRequest = async () => {
        const response = await getNotifications(activeNotification)
        setNotifications(response)
    }

    useEffect(() => {
        connectSocket((msg) => {
            setNotifications(prevNotifications => [msg, ...prevNotifications]);
        });
        return () => {
            disconnectSocket();
        };
    }, []);



    useEffect(() => {
        const handleClickOutside = (event) => {
            const isOutsideWrapper =
                wrapperRef.current && !wrapperRef.current.contains(event.target);
            const isOutsideBell =
                bellRef?.current && !bellRef.current.contains(event.target);

            if (isOpen && isOutsideWrapper && isOutsideBell) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, bellRef]);




    return (
        <div className={"absolute top-[55px] right-[86px]"} ref={wrapperRef}>
            {isOpen && <Notification /> }
        </div>
    );
}

export default LmsNotificationWrapper;