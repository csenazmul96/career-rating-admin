
import { TabGroup,  TabPanel, TabPanels} from "@headlessui/react";
import CompanyDetailsHeading
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/details/[id]/components/CompanyDetailsHeading";
import ComapnyDetailsTabPanel
    from "@/app/(root-layout)/(companies-layout)/company-management/companies/details/[id]/components/CompanyDetailsTabPanel";
import {getSingleCompanies} from "@/utils/api/career/companiesAPI";

export default async function layout({children, params}) {
    const allParams = await params
    const company = await getSingleCompanies(allParams.id)

    return(
        <div className="flex flex-col">
            <CompanyDetailsHeading company={company} />
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">
                <ComapnyDetailsTabPanel />
                <TabPanels className="tab-content-controller">
                    <TabPanel>
                        {children}
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}