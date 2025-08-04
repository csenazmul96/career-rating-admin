import {getAcademicRecords} from "@/utils/api/academicApi";
import React from "react";
import AcademicItemCard
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/educations/components/AcademicItemCard";

export default async function Page({params}) {
    const {id} = await params;
    const academics = await getAcademicRecords({user_id: id})

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {academics.map((academic, index) => (
                    <AcademicItemCard key={`index-${index}`} academic={academic} userId={id}/>
                ))}
            </div>
        </>
    );
}
