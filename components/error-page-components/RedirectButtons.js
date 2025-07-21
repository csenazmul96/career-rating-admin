"use client";

import {Button} from "@/components/common/button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function RedirectButtons(props) {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    };
    return (
        <div className={`actions flex items-center justify-center gap-6`}>
            <Button onClick={handleClick} color="transparent">검색
                이전 페이지
            </Button>
            <Link href={"/"} >
                <Button color="primary">검색
                    대시보드
                </Button>
            </Link>
        </div>
    );
}

export default RedirectButtons;