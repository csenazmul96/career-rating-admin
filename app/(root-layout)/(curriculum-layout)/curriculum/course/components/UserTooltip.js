"use client"

import { useState } from "react"

export default function UserTooltip({ admins }) {
    const [isHovered, setIsHovered] = useState(false)

    if (!admins || admins.length <= 1) return null

    return (
        <div className="relative">
            <button
                className="relative isolate inline-flex items-center justify-center gap-x-1 data-[disabled]:opacity-50 bg-transparent border border-borderColor rounded-full text-textSubColor py-[0px] text-[13px] px-2 font-normal min-w-[auto] h-[24px] leading-19 cursor-pointer"
                type="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                +{admins.length - 1}
            </button>

            {isHovered && (
            <div className="pl-2 absolute left-full  top-0 z-10"
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)} >
                <div className="custom-scrollbar max-h-[108px]  bg-textColor bg-opacity-70 text-white rounded px-3 py-1  min-w-[122px]">
                    <div className="space-y-1">
                        {admins.slice(1).map((admin, index) => (
                            <div key={index} className="text-13 whitespace-nowrap">
                                {admin.name} {admin.id ? `(${admin.id})` : ""}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            )}

        </div>
    )
}
