import {getEmploymentHistory} from "@/utils/api/career/employeementHistory";
import {getCountries} from "@/utils/api/career/commonAPI";
import Link from "next/link";
import {Button} from "@/components/common/button";
import {PlusIcon} from "lucide-react";
import EmploymentHistoryOuter
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/employment-history/components/EmploymentHistoryOuter";

export default async function Page({params}) {
    const {id, user_id} = await params;
    const [employmentHistory, countries] = await Promise.all([
        getEmploymentHistory({user_id}),
        getCountries()
    ])
    return (
        <div className="dashboaed-stat flex flex-col">
            <div className="w-full flex justify-end">
                <Link href={`/employee-management/employees/${id}/${user_id}/employment-history/create`}>
                    <Button color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full'}><PlusIcon size={16} /> Create New </Button>
                </Link>
            </div>
            <div className="flex flex-col">
                <EmploymentHistoryOuter employmentHistory={employmentHistory} userId={user_id} id={id} />
            </div>
        </div>
    );
}
