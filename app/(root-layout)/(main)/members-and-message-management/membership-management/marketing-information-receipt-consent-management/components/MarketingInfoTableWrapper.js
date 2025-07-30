'use client';
import Link from 'next/link';
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import React from "react";
import {getSituationKoreanText} from "@/utils/helpers/CommonHelper";
import {Button} from "@/components/common/button";
import MemberListTableActions
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/components/MemberListTableActions";
import MarketingTableActions
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/marketing-information-receipt-consent-management/components/MarketingTableActions";

export default function MarketingInfoTableWrapper({marketingInfo, pagination, queryParams}) {
    const columns = [
        {
            header: '회원번호',
            accessor: 'memberId',
            cell: (_, info) => {
                const fullMemberId = info.memberId;
                const truncatedLength = 10;
                const displayedMemberId =
                    fullMemberId.length > truncatedLength
                        ? fullMemberId.substring(0, truncatedLength) + '...'
                        : fullMemberId;
                return (
                    <span title={fullMemberId}>
                        {displayedMemberId}
                    </span>
                );
            },
        },
        { header: '이름', accessor: 'name' },
        { header: '이메일 수신 동의 여부',
            accessor: 'agreeToReceiveEmail',
            cell: (_, info) => (
                <div className="flex items-center gap-3">
                    <Button color={info.agreeToReceiveEmail ? 'secondaryBorderRoundedSmall' : 'transparentBorderRoundedSmall'}
                    >
                        {info.agreeToReceiveEmail ? '수신동의' : '수신거부'}
                    </Button>
                    {info.emailConsentDate && <span>{info.emailConsentDate}</span>}
                </div>
            ),
        },
        { header: 'SMS 수신 동의 여부',
            accessor: 'agreeToReceiveSms',
            cell: (_, info) => (
                <div className="flex items-center gap-3">
                    <Button
                        color={info.agreeToReceiveSms ? 'secondaryBorderRoundedSmall' : 'transparentBorderRoundedSmall'}
                    >
                        {info.agreeToReceiveSms ? '수신동의' : '수신거부'}
                    </Button>
                    {info.smsConsentDate && <span>{info.smsConsentDate}</span>}
                </div>
            ),
        },
        { header: '수신 동의 안내일', accessor: 'receptionConsentDate' },
        { header: '다음 예상 안내일', accessor: 'nextExpectedDate' },
    ];

    return <>
        {pagination && <LmsTableHeaderActions
            pagination={pagination}
            TableActions={
                <MarketingTableActions
                    marketingInfo={marketingInfo}
                    pagination={pagination} />
            }
        />}
        <LmsTable
            columns={columns}
            data={marketingInfo}
            checkMark={true}
            pagination={pagination??null}  />
    </>
}
