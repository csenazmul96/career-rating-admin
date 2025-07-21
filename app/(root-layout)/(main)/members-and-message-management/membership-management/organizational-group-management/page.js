import React from 'react';
import OrganizationGroup from "./__components/OrganizationGroup";
import OrganizationMemberList from "./__components/OrganizationMemberList";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";

const OrganizationManagement = async ({searchParams}) => {
  const {organizations, pagination} = await getOrganizationGroup();
  const queryParams = await searchParams

  return (
    <div className="flex flex-col membership-management">
      <LmsPageHeading title="조직 그룹 관리" tooltip={"조직도 그룹을 구성하고 상세 정보를 확인할 수 있습니다."} />

      <div className="flex gap-6 mb-3">
        <OrganizationGroup getAllGroupData={organizations}/>
        <OrganizationMemberList organizations={organizations}
                                searchParams={queryParams} />
      </div>
    </div>
  );
};

export default OrganizationManagement;