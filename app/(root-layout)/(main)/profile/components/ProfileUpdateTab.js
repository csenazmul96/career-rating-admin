"use client";
import { Tab, TabList } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileUpdateTab = () => {
    const pathName = usePathname();

    return (
        <>
            <TabList className="tab-list-controller">
                <Link href={`/profile/info-update`} >
                    <Tab className={`tab-list-controller-btn ${
                            pathName.includes("info-update")
                                ? "border-themeColor font-bold text-textColor"
                                : "border-0"
                        }`}
                    >
                        기본정보
                    </Tab>
                </Link>
                <Link href={`/profile/password-update`} >
                    <Tab className={`tab-list-controller-btn ${
                            pathName.includes("password-update")
                                ? "border-themeColor font-bold text-textColor"
                                : "border-0"
                        }`}
                    >
                        비밀번호 변경
                    </Tab>
                </Link>
            </TabList>
        </>
    );
};

export default ProfileUpdateTab;
