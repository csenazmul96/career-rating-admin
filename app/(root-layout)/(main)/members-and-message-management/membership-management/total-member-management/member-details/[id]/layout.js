import MemberDetailsPageHeading from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-details/[id]/__components/MemberDetailsPageHeading";
import MemberDetailsTabsList from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/total-member-management/member-details/[id]/__components/MemberDetailsTabsList";
import { getMembersById } from "@/utils/api/memberManagementRequest";
import { TabGroup, TabPanels } from "@headlessui/react";

export default async function layout({ params, children }) {
  const { id } = await params;
  const member = await getMembersById(id);

  return (
    <div className="flex flex-col relative">
      <MemberDetailsPageHeading />
      <TabGroup className="tab-wrapper-controller">
        {member && <MemberDetailsTabsList member={member} />}
        <TabPanels className="tab-content-controller">{children}</TabPanels>
      </TabGroup>
    </div>
  );
}
