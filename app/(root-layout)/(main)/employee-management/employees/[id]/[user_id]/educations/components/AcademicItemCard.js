import { GraduationCap, Pencil, Trash2} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/common/button";
import React from "react";


function AcademicItemCard({academic, userId, id}) {
    return (
        <div className={`shadow-dashboardShadow relative flex-1 min-w-0 bg-white py-[1.625rem] px-8 group`}>
            <div className="flex gap-x-4   ">
                <div className="icon size-[60px] flex-shrink-0 bg-secondaryBgColor flex items-center justify-center rounded-[12px]">
                    <GraduationCap className={`text-themeColor`} size={32}/>
                </div>
                <div className="text flex flex-col gap-1 w-full">
                    <p className={`text-baseNormal text-textSubColor`}>{academic.degree_title}</p>
                    <span>{academic.institution_name}</span>
                    <span className={`text-13 text-textColor`}>{academic.start_date.replaceAll('-', '.')} - {academic.is_current ?
                        <Button color="primaryRoundedSmall" className={`!bg-transparent !text-themeColor whitespace-nowrap flex-shrink-0 cursor-auto`}>
                            Continue
                        </Button>
                        : academic.end_date.replaceAll('-', '.')}</span>
                </div>
            </div>
            <Link href={`/employee-management/employees/${id}/${userId}/educations/${academic.id}`} className="opacity-0 absolute right-2 top-2 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                <Button color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full'}><Pencil size={16} /> </Button>
            </Link>
            <span className="opacity-0 absolute right-2 bottom-2 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                <Button color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full !text-dangerDeppColor'}><Trash2 size={16} /> </Button>
            </span>
        </div>
    );
}

export default AcademicItemCard;