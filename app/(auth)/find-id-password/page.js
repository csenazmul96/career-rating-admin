import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";
import {Button} from "@/components/common/button";
import React from "react";
import AuthPageFooter from "@/app/(auth)/components/AuthPageFooter";
import Link from "next/link";

export default async function Page() {
    return (
        <>
            <div className={`flex flex-col px-8 py-6 lg:p-12  min-h-[calc(100dvh-53px)]`}>
                <div className={`max-w-[1200px] w-full m-auto`}>
                    <div className="flex flex-col gap-10">

                        <div className="flex flex-col gap-4">
                            <h2 className={`text-25 font-bold`}>아이디/비밀번호 찾기</h2>
                            <p className={`text-textSubColor text-baseNormal`}>인증수단을 선택 해주세요.</p>
                        </div>

                        <div className="flex flex-col gap-6">

                            <div className="flex flex-col rounded-lg p-8 border border-borderColor">
                                <div className="flex flex-col lg:flex-row items-start gap-5">
                                    <RadioGroup className="flex  ">
                                        <RadioField>
                                            <Radio color="lmsradio" value="permit"/>
                                            <Label className="font-normal"></Label>
                                        </RadioField>
                                    </RadioGroup>
                                    <div className="text flex flex-col gap-[1.0625rem]">
                                        <h3 className={`text-medium font-bold`}>휴대전화 인증</h3>
                                        <p className={`text-textSubColor `}>회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야, 인증번호를
                                            받을 수
                                            있습니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-lg p-8 border border-borderColor">
                                <div className="flex items-start gap-5">
                                    <RadioGroup className="flex  ">
                                        <RadioField>
                                            <Radio color="lmsradio" value="permit"/>
                                            <Label className="font-normal"></Label>
                                        </RadioField>
                                    </RadioGroup>
                                    <div className="text flex flex-col gap-[1.063rem]">
                                        <h3 className={`text-medium font-bold`}>이메일 인증</h3>
                                        <p className={`text-textSubColor `}>회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야, 인증번호를
                                            받을 수 있습니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-lg p-8 border border-borderColor">
                                <div className="flex items-start gap-5">
                                    <RadioGroup className="flex  ">
                                        <RadioField>
                                            <Radio color="lmsradio" value="permit"/>
                                            <Label className="font-normal"></Label>
                                        </RadioField>
                                    </RadioGroup>
                                    <div className="text flex flex-col gap-[1.063rem]">
                                        <h3 className={`text-medium font-bold`}>본인명의 휴대전화 인증</h3>
                                        <p className={`text-textSubColor `}>내 명의(주민등록번호)로 가입한 아이디를 찾을 수 있씁니다.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="actions">
                            <div className="flex items-center justify-between">
                                <Link href={"/login"} >
                                    <Button color="transparent"> 돌아가기 </Button>
                                </Link>
                                <Button color="primary">
                                    다음
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthPageFooter/>
        </>
    );
}
