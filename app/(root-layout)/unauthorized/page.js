
import MainContentWrapper from "@/components/layoutwapper/MainContentWrapper";
import Image from "next/image";
import errorIcon from "@/public/images/v2/error-page/error-page-icon.png";
import React from "react";

export default async function Page() {
    return (
        <>
            <MainContentWrapper >
                <div className={`error-page flex items-center justify-center   w-full  h-[calc(100dvh-124px)]`}>
                    <div className={`flex flex-col items-center justify-center gap-6`}>
                        <div>
                            <Image src={errorIcon} alt="404"/>
                        </div>
                        <div className={`error-text flex flex-col items-center justify-center gap-8`}>
                            <div className={`flex flex-col items-center justify-center`}>
                                <h2 className={`text-themeColor text-[4.125rem] font-bold`}>허가되지 않은</h2>
                                <div className={`flex flex-col items-center justify-center gap-6`}>
                                    <h3 className={`text-[2rem] font-bold`}>페이지를 찾을 수 없습니다.</h3>
                                    <p className={`text-[1.188rem] text-textSubColor text-center`}>이 페이지에 접근할 권한이 없습니다.< br className={`none md:block`}/>
                                        이것이 오류라고 생각되면 관리자에게 문의하십시오.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </MainContentWrapper>
        </>
    );
}
