import MemberStatiscitsChart
    from "@/app/(root-layout)/(main)/statistics-management/member-statistics/components/MemberStatiscitsChart";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import React from "react";
import { getMemberStatisticData} from "@/utils/api/memberManagementRequest";
import MemberStatisticDataTable
    from "@/app/(root-layout)/(main)/statistics-management/member-statistics/components/MemberStatisticDataTable";
import MemberStatisticFilter
    from "@/app/(root-layout)/(main)/statistics-management/member-statistics/components/MemberStatisticFilter";

export default async function Page({searchParams}) {
    const queryParams = await searchParams;
    const {members, pagination} = await getMemberStatisticData(queryParams)
    return (
        <>
            <div className={`flex flex-col`}>
                <LmsPageHeading title="회원 리스트" tooltip={'회원 유형별 가입자수에 대한 기간별 통계를 확인할 수 있습니다.'} tooltipTitle={"회원통계"}/>
                <div className="flex flex-col gap-16">
                    <MemberStatisticFilter queryParams={queryParams} />
                    <MemberStatiscitsChart members={members} />
                    <MemberStatisticDataTable queryParams={queryParams} members={members??[]} pagination={pagination} />
                </div>
            </div>

        </>
    );
}
