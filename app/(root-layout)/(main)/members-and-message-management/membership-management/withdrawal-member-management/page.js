import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import WithdrawalFilter
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/withdrawal-member-management/components/WithdrawalFilter";
import { getWithdrawalMembers} from "@/utils/api/memberManagementRequest";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import LmsPaginations from "@/components/common/LmsPaginations";
import WithdrawalTableRow
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/withdrawal-member-management/components/WithdrawalTableRow";
import WithdrawalTableActions
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/withdrawal-member-management/components/WithdrawalTableActions";
import WithdrawalMemberTableWrapper
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/withdrawal-member-management/components/WithdrawalMemberTableWrapper";

const Page = async({searchParams}) => {
    const queryParams = await searchParams;
    const [ {members, pagination}] = await Promise.all([
        getWithdrawalMembers({...queryParams})
    ])


    return (
        <div className="flex flex-col member-list">
            <LmsPageHeading title={'탈퇴회원 관리'} tooltip={'탈퇴회원을 확인하는 페이지입니다. 개인정보는 30일 후 자동삭제됩니다.'} />

            <WithdrawalFilter queryParams={queryParams} />

            <div className="member-list-table pt-16">
                <WithdrawalMemberTableWrapper members={members} pagination={pagination} />
            </div>
        </div>
    );
};

export default Page;