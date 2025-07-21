'use client'

import React from "react";
import {Button} from "@/components/common/button";
import Link from "next/link";
import {FilePen} from "lucide-react";

export default function EvaluationTableActions() {
    return (
        <>
            <Link href={"/curriculum/evaluations/create"} className={`h-[32px]`}>
                <Button  color="primaryMedium">
                    <span>
                        {/*<img src="/images/pencil-white.png" alt=""/>*/}
                        <FilePen size={20} />
                    </span>
                    <span>평가 등록</span>
                </Button>
            </Link>
        </>
    );
}