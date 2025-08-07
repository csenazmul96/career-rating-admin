import {getAcademicRecords} from "@/utils/api/academicApi";
import AcademicItemCard
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/educations/components/AcademicItemCard";
import {Button} from "@/components/common/button";
import { PlusIcon} from "lucide-react";
import Link from "next/link";

export default async function Page({params}) {
    const {id, user_id} = await params;
    const academics = await getAcademicRecords(user_id)
    return (
        <div className="dashboaed-stat flex flex-col">
            <div className="w-full flex justify-end">
                <Link href={`/employee-management/employees/${id}/${user_id}/educations/create`}>
                    <Button color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full'}><PlusIcon size={16} /> Create New </Button>
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {academics.map((academic, index) => (
                    <AcademicItemCard key={`index-${index}`} academic={academic} userId={user_id} id={id}/>
                ))}
            </div>
        </div>
    );
}
