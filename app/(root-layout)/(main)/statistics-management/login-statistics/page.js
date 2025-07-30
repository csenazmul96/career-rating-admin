import MemberStatiscitsChart
    from "@/app/(root-layout)/(main)/statistics-management/member-statistics/components/MemberStatiscitsChart";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import React from "react";
import {getLoginStatisticData, getMemberStatisticData} from "@/utils/api/memberManagementRequest";
import MemberStatisticDataTable
    from "@/app/(root-layout)/(main)/statistics-management/member-statistics/components/MemberStatisticDataTable";
import MemberStatisticFilter
    from "@/app/(root-layout)/(main)/statistics-management/member-statistics/components/MemberStatisticFilter";

export default async function Page({searchParams}) {
    const queryParams = await searchParams;
    const {members, pagination} = await getLoginStatisticData(queryParams)
    return (
        <>
            <div className={`flex flex-col`}>
                <LmsPageHeading title="로그인 통계" tooltip={'회원 유형별 로그인 횟수에 대한 기간별 통계를 확인할 수 있습니다.'} tooltipTitle={"로그인 통계"}/>
                <div className="flex flex-col gap-16">
                    <MemberStatisticFilter queryParams={queryParams} />
                    <MemberStatiscitsChart members={members} />
                    <MemberStatisticDataTable queryParams={queryParams} members={members??[]} pagination={pagination} />
                </div>
            </div>

        </>
    );
}
