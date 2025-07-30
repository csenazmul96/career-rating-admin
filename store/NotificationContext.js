import { createContext, useContext, useState } from "react";

const NotificationContext = createContext({
    isOpen: false,
    notifications: [],
    selectedNotificationsIds: [],
    activeNotification: "ALL",
    setIsOpen: () => {},
    setNotifications: () => {},
    setSelectedNotificationsIds: () => {},
    setActiveNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
    const [isOpen, assignIsOpen] = useState(false);
    const [activeNotification, assignActiveNotification] = useState('ALL');
    const [notifications, assignNotifications] = useState([]);
    const [selectedNotificationsIds, assignSelectedNotificationsIds] = useState([]);



    const setIsOpen = (payload) =>{
        assignIsOpen(payload)
    }
    const setNotifications = (payload) =>{
        assignNotifications(payload)
    }
    const setActiveNotification = (payload) =>{
        assignActiveNotification(payload)
    }

    const setSelectedNotificationsIds = (payload) =>{
        assignSelectedNotificationsIds(payload)
    }

    const contexts = {
        isOpen,
        notifications,
        activeNotification,
        selectedNotificationsIds,
        setIsOpen,
        setNotifications,
        setActiveNotification,
        setSelectedNotificationsIds,

    };

    return (
        <NotificationContext.Provider value={contexts}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => useContext(NotificationContext);
