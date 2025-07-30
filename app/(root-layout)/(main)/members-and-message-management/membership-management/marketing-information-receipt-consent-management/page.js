import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import MemberTableFilter
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/components/MemberTableFilter";
import {getMarketingInfo, getMembers} from "@/utils/api/memberManagementRequest";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import MemberListTableWrapper
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/components/MemberListTableWrapper";
import MarketingInfoTableWrapper
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/marketing-information-receipt-consent-management/components/MarketingInfoTableWrapper";
import MarketingTableFilter
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/marketing-information-receipt-consent-management/components/MarketingTableFilter";
import ToolTip from "@/components/common/ToolTip";

export default async function page({searchParams}) {
    const queryParams = await searchParams;
    // const [ {members, pagination}, organizations] = await Promise.all([
    //     getMembers({...queryParams}),
    //     getOrganizationGroup()
    // ])
    const {marketingInfo, pagination } = await getMarketingInfo(queryParams)
    return (
        <div className="flex flex-col member-list">
            <div className="flex items-start">
                <LmsPageHeading title="마케팅정보수신동의관리" />
                <ToolTip title={`모든 회원 리스트를 통합적으로 확인하는 페이지입니다.`} content={`정보통신망법상 영리목적의 광고성 정보를 전송하기 위해 사전에 수신자의 동의를 받고 관리하는 페이지입니다.
광고성 정보에는 이메일, SMS, 팩스, 채팅의 쪽지를 통한 마케팅도 포함됩니다.`} />
            </div>

            <MarketingTableFilter marketingInfo={marketingInfo} queryParams={queryParams} />

            <div className="member-list-table pt-16">
                <MarketingInfoTableWrapper
                    marketingInfo={marketingInfo}
                    queryParams={queryParams}
                    pagination={pagination} />
            </div>
        </div>
    );
};