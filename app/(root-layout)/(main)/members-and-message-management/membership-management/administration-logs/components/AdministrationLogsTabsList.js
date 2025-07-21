'use client'
import {Tab, TabList} from "@headlessui/react";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

const AdministrationLogsTabsList = () => {
    const [tab, setTab] = useState('signin-logs')
    const pathName = usePathname()

    useEffect(() => {
        setTab(pathName.split('/').at(-1))
    }, [pathName]);

    return (
        <>
            <TabList className="tab-list-controller">
                <Link href="/members-and-message-management/membership-management/administration-logs/signin-logs">
                    <Tab className={`tab-list-controller-btn ${tab === 'signin-logs' ? 'border-themeColor font-bold text-textColor': 'border-0'}`}> 사이트 로그인 로그 </Tab>
                </Link>
                <Link href="/members-and-message-management/membership-management/administration-logs/activity-logs">
                    <Tab className={`tab-list-controller-btn ${tab === 'activity-logs' ? 'border-themeColor font-bold text-textColor': 'border-0'}`}> 관리자 작업 로그 </Tab>
                </Link>
            </TabList>
        </>
    );
}

export default AdministrationLogsTabsList