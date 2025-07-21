'use client'
import Link from "next/link";
import React from "react";
import {ListPlus, Plus} from "lucide-react";

const  AdministratorListTableActions = () => {
    return (
        <>
            <button className="border border-borderColor h-[32px] px-4 flex items-center gap-2">
                <Link className={'flex gap-1 items-center leading-8'}
                      href={"/members-and-message-management/membership-management/administrator-management/role-management"}>
                    <span>
                        {/*<img src="/images/membership/playlist_add.png" alt=""/>*/}
                        <ListPlus size={20} className={`text-textSubColor`} />
                    </span> <span>관리자 유형 관리</span>
                </Link>
            </button>
            <button className="border border-borderColor h-[32px] px-4 flex items-center gap-2">
                <Link className={'flex gap-1 items-center leading-8'}
                      href={"/members-and-message-management/membership-management/administrator-management/administrator-registration"}>
                    <span>
                        {/*<img src="/images/membership/add.png" alt=""/>*/}
                        <Plus  size={20} className={`text-textSubColor`} />
                    </span> <span>관리자 등록</span>
                </Link>
            </button>
        </>
    );
}

export default AdministratorListTableActions