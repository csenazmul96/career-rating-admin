"use client";
import React from 'react';
import Notification from "@/app/(root-layout)/(main)/design/v2/notification/components/Notification";
import ToggleSwitch from "@/components/common/form/ToggleSwitch";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import ToolTip from "@/components/common/ToolTip";

const Page = () => {
    return (
        <div>
            <div className="flex flex-col gap-16">
                <div className="flex-col">
                    <LmsPageHeading title={`알림 설정`}/>
                    <div className="border-b border-borderColor mb-10"></div>
                    <div className="flex items-center justify-between border border-borderColor p-6">
                        <div className="div flex">
                            <span className={`text-medium text-black font-bold`}>배지 아이콘 표시</span>
                            <ToolTip title={`loem ipsum`}/>
                        </div>
                        <ToggleSwitch
                            options={[
                                { value: "visible", label: "보임" },
                                { value: "hidden", label: "숨김" },
                            ]}
                            onChange={(value) => handleToggleChange(value, "Korean toggle")}
                        />
                    </div>
                </div>
                <div className="flex-col">
                    <LmsPageHeading title={`알림 설정`}/>
                    <div className="border-b border-borderColor mb-10"></div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                            <div className={`text-medium text-black font-bold`}>로그인</div>
                            <div className="flex items-center justify-between border border-borderColor p-6">
                                <div className="div flex">
                                    <span className={`text-medium text-black font-bold`}>배지 아이콘 표시</span>
                                </div>
                                <ToggleSwitch
                                    options={[
                                        { value: "visible", label: "보임" },
                                        { value: "hidden", label: "숨김" },
                                    ]}
                                    onChange={(value) => handleToggleChange(value, "Korean toggle")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className={`text-medium text-black font-bold`}>로그인</div>
                            <div className="flex items-center justify-between border border-borderColor p-6">
                                <div className="div flex">
                                    <span className={`text-medium text-black font-bold`}>배지 아이콘 표시</span>
                                </div>
                                <ToggleSwitch
                                    options={[
                                        { value: "visible", label: "보임" },
                                        { value: "hidden", label: "숨김" },
                                    ]}
                                    onChange={(value) => handleToggleChange(value, "Korean toggle")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="div pt-10"></div>
            <Notification />
        </div>
    );
};

export default Page;