"use client";
import React, {useEffect, useState} from "react";
import { CalendarDays, Clock, EllipsisVertical } from "lucide-react";
import { Button } from "@/components/common/button";
import { Checkbox } from "@/components/common/checkbox";
import {useNotificationContext} from "@/store/NotificationContext";

const NotificationItem = ({
                              id,
                              title,
                              tag,
                              description,
                              createdBy = '',
                              date = "24.09.05",
                              memberId = '',
                              time= "09:15",
                              clickEventOfDot
                          }) => {
    const [showCheckbox, setShowCheckbox] = useState(false);
    const {selectedNotificationsIds, setSelectedNotificationsIds} = useNotificationContext()

    const handleClickCheckbox = (checked) => {
        setSelectedNotificationsIds((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const onClickHandler = (e) => {
        e.stopPropagation();
    };

    // if (selectedNotificationsIds.includes(id) && !showCheckbox) {
    //     setShowCheckbox(true);
    // } else if (!selectedNotificationsIds.includes(id) && showCheckbox) {
    //     // setShowCheckbox(false);
    // }

    const getTagName = () => {
        let tagName = '';
        switch (tag) {
            case 'EMAIL_SMS':
                tagName = '이메일/SMS';
                break;
            case 'CONTENT':
                tagName = '콘텐츠';
                break;
            case 'INQUIRY':
                tagName = '1:1문의';
                break;
            case 'LOGIN':
                tagName = '로그인';
                break;
            default:
                tagName = '기타';
        }
        return tagName;
    }

    return (
        <li className="py-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <Button color="primaryLightBorderRoundedSmall">{getTagName()}</Button>

                <div className="flex items-center">
                    {!selectedNotificationsIds.length ? (
                        <button
                            onClick={() => clickEventOfDot({id, tag})}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <EllipsisVertical />
                        </button>
                    ) : (
                        <Checkbox
                            color="lmscheckbox"
                            name={`notification-${id}`}
                            checked={selectedNotificationsIds.includes(id)}
                            onClickHandler={onClickHandler}
                            clickHandler={handleClickCheckbox}
                            value="default"
                        />
                    )}
                </div>
            </div>

            <p className="text-textColor text-base font-bold line-clamp-2">{title}</p>

            <div className="flex items-center gap-2 justify-between text-textSubColor text-13">
                <div>{createdBy && createdBy.length > 15 ? createdBy.slice(0, 15) + "..." : createdBy}
                    ({memberId && memberId.length > 15 ? memberId.slice(0, 15) + "..." : memberId})</div>
                <div className="flex gap-2">
                    <div className="gap-1 flex items-center">
                        <CalendarDays size={16} />
                        <span>25.01.23</span>
                    </div>
                    <div className="gap-1 flex items-center">
                        <Clock size={16} />
                        <span>09.15</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default NotificationItem;
