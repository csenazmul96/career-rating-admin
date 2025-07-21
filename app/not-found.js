import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Provider from "@/providers/MainProvider";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import errorIcon from "@/public/images/v2/error-page/error-page-icon.png";
import React from "react";
import ErrorPageSidebarWrapper from "@/components/sidebar/ErrorPageSidebarWrapper";
import RedirectButtons from "@/components/error-page-components/RedirectButtons";

export default async function Page( ) {
    const session = await getServerSession(authOptions);

    return (
        <>
            <div className=" bg-cover bg-center ">
            <Provider session={session} >

                <div id="wrapper">
                    <Header/>
                    <ErrorPageSidebarWrapper defaultStatus ={false} />

                    <div className={`error-page flex items-center justify-center   w-full  h-[calc(100dvh-124px)] mt-[70px]`}>
                        <div className={`flex flex-col items-center justify-center gap-6`}>
                            <div>
                                <Image src={errorIcon} alt="404"/>
                            </div>
                            <div className={`error-text flex flex-col items-center justify-center gap-8`}>
                                <div className={`flex flex-col items-center justify-center`}>
                                    <h2 className={`text-themeColor text-[4.125rem] font-bold`}>404</h2>

                                    <div className={`flex flex-col items-center justify-center gap-6`}>
                                        <h3 className={`text-[2rem] font-bold`}>페이지를 찾을 수 없습니다.</h3>
                                        <p className={`text-medium text-textSubColor text-center`}>페이지 주소가 잘 못 입력되었거나, 주소가
                                            변경 또는
                                            삭제되어 < br className={`none md:block`}/>
                                            요청하신 페이지를 찾을 수 없습니다. < br className={`none md:block`}/>
                                            서비스 이용을 불편하게 해드려 죄송합니다.</p>
                                    </div>
                                </div>
                                <RedirectButtons />
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </Provider>
            </div>
        </>
    );
}
