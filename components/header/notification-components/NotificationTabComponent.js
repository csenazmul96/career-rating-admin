import {useNotificationContext} from "@/store/NotificationContext";

function NotificationTabComponent(props) {
    const {activeNotification, setActiveNotification} = useNotificationContext()

    const handleTabClick = (type) => {
        setActiveNotification(type);
    }

    return (
        <div className="navwrap px-[26.5px] border-b border-borderColor">
            <nav className="flex">
                <span onClick={()=>handleTabClick("ALL")} className={`cursor-pointer px-3 py-2 text-base hover:bg-primaryLightColor whitespace-nowrap ${activeNotification === "ALL" ? "font-bold text-textColor relative before:absolute before:bottom-[-1px] before:bg-themeColor before:left-0 before:h-[1.5px] before:w-full before:content-['']" : "text-textSubColor"}`}>전체</span>
                <span onClick={()=>handleTabClick("LOGIN")} className={`cursor-pointer px-3 py-2 text-base hover:bg-primaryLightColor whitespace-nowrap ${activeNotification === "LOGIN" ? "font-bold text-textColor relative before:absolute before:bottom-[-1px] before:bg-themeColor before:left-0 before:h-[1.5px] before:w-full before:content-['']" : "text-textSubColor"}`}>로그인</span>
                <span onClick={()=>handleTabClick("CONTENT")} className={`cursor-pointer px-3 py-2 text-base hover:bg-primaryLightColor  whitespace-nowrap ${activeNotification === "CONTENT" ? "font-bold text-textColor relative before:absolute before:bottom-[-1px] before:bg-themeColor before:left-0 before:h-[1.5px] before:w-full before:content-['']" : "text-textSubColor"}`}>콘텐츠</span>
                <span onClick={()=>handleTabClick("INQUIRY")} className={`cursor-pointer px-3 py-2 text-base hover:bg-primaryLightColor  whitespace-nowrap ${activeNotification === "INQUIRY" ? "font-bold text-textColor relative before:absolute before:bottom-[-1px] before:bg-themeColor before:left-0 before:h-[1.5px] before:w-full before:content-['']" : "text-textSubColor"}`}>1:1문의</span>
                <span onClick={()=>handleTabClick("EMAIL_SMS")} className={`cursor-pointer px-3 py-2 text-base hover:bg-primaryLightColor  whitespace-nowrap ${activeNotification === "EMAIL_SMS" ? "font-bold text-textColor relative before:absolute before:bottom-[-1px] before:bg-themeColor before:left-0 before:h-[1.5px] before:w-full before:content-['']" : "text-textSubColor"}`}>이메일/SMS</span>
            </nav>
        </div>
    );
}

export default NotificationTabComponent;