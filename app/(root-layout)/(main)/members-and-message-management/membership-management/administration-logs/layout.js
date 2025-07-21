import { TabGroup,   TabPanels} from "@headlessui/react";
import AdministrationLogsTabsList
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administration-logs/components/AdministrationLogsTabsList";


export default function layout({children}) {
    return(
        <div className="flex flex-col relative">
            <TabGroup className="tab-wrapper-controller">
                <AdministrationLogsTabsList />
                <TabPanels className="tab-content-controller">
                    {children}
                </TabPanels>
            </TabGroup>
        </div>
    );
}