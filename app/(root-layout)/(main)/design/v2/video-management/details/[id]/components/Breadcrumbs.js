'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {ChevronRight, House} from "lucide-react";
import React from "react";

const Breadcrumbs = ({breadcrumbs }) => {


    return (
        <div className="breadcrumbs">
            <div className="flex items-center text-[19px] text-textSubColor gap-1 pb-10">
                <Link href="/" className="flex items-center gap-1">
                    <House size={20} />
                    {/*<Image src="/images/content-management/home.png" alt="home" width={20} height={20} />*/}
                    <span>홈</span>
                </Link>

                {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center gap-1">
                        {/*<Image*/}
                        {/*    src="/images/content-management/keyboard_arrow_right.png"*/}
                        {/*    alt="arrow"*/}
                        {/*    width={20}*/}
                        {/*    height={20}*/}
                        {/*/>*/}
                        <ChevronRight size={20} />
                        {crumb.link ?
                            <Link href={crumb.slug}>
                                <span>{crumb.label}</span>
                            </Link>
                            :
                            <span>{crumb.label}</span>
                        }

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumbs;
