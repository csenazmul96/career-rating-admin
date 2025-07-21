import { TabGroup, TabPanels } from "@headlessui/react";
import ProfileUpdateTab from "@/app/(root-layout)/(main)/profile/components/ProfileUpdateTab";
import LmsPageHeading from "@/components/common/LmsPageHeading";

export default async function layout({ children }) {
    return (
        <div className="flex flex-col relative">
            <LmsPageHeading title={"회원 정보"} headingClasses={"top-[10px] absolute"} />
            <TabGroup className="tab-wrapper-controller">
                <ProfileUpdateTab />
                <TabPanels className="tab-content-controller">{children}</TabPanels>
            </TabGroup>
        </div>
    );
}
