import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Heading} from "@/components/common/heading";
import React from "react";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";

const MembershipRegistrationItemSettingsPage = () => {

    return (
        <>
            <Heading level={2}>
                <div className="flex items-center">
                    <span>회원가입 항목 설정</span>
                    <span className="pl-1"><Image src={infoImg} className="ml-1" alt="info image"/></span>
                </div>
            </Heading>
            <div className="membership-registration-item-settingsPage mt-3 py-7 border-t border-commonBorderColor">

                <div className="flex gap-4 py-3">
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">아이디</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">비밀번호</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">비밀번호 확인</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 py-3">
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">이름</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">연락처</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">이메일</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 py-3">
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">생년월일</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">선택</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">주소</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">선택</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">성별</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">선택</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 py-3">
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">직업</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">선택</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">회사명</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="필수" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid"/>
                                    <Label className="font-normal">선택</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between border border-commonBorderColor py-3 px-6">
                        <div className="left ">
                            <span className="common-label-style">유선전화</span>
                        </div>
                        <div className="right ">
                            <RadioGroup className="flex  space-x-6">
                                <RadioField>
                                    <Radio color="lmsradio" value="필수" defaultChecked/>
                                    <Label className="font-normal">필수</Label>
                                </RadioField>
                                <RadioField>
                                    <Radio color="lmsradio" value="forbid" defaultChecked/>
                                    <Label className="font-normal">선택</Label>
                                </RadioField>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default MembershipRegistrationItemSettingsPage;