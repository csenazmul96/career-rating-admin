import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import MemberTableFilter
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/components/MemberTableFilter";
import {getMembers} from "@/utils/api/memberManagementRequest";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import MemberListTableWrapper
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/components/MemberListTableWrapper";

export default async function page({searchParams}) {
    const queryParams = await searchParams;
    const [ {members, pagination}, organizations] = await Promise.all([
        getMembers({...queryParams}),
        getOrganizationGroup()
    ])
    return (
        <div className="flex flex-col member-list">
            <LmsPageHeading title="회원 리스트" tooltip={'모든 회원 리스트를 통합적으로 확인하는 페이지입니다.'}/>

            <MemberTableFilter queryParams={queryParams} organizations={organizations} />

            <div className="member-list-table pt-16">
                 <MemberListTableWrapper
                     members={members}
                     queryParams={queryParams}
                     organizations={organizations}
                     pagination={pagination} />
            </div>
        </div>
    );
};