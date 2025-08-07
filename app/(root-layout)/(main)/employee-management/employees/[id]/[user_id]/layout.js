import { TabGroup,  TabPanel, TabPanels} from "@headlessui/react";
import React from "react";
import EmployeeDetailsTabPanel
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/components/EmployeeDetailsTabPanel";
import EmployeeDetailsPageHeading
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/components/EmployeeDetailsPageHeading";
import {getsSingleEmployee} from "@/utils/api/employeeApi";

export default async function layout({children, params}) {
    const {id, user_id} = await params;
    const employee = await getsSingleEmployee(id);
    return(
        <div className="flex flex-col">
            <EmployeeDetailsPageHeading employee={employee} />
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">
                <EmployeeDetailsTabPanel employee={employee} />
                <TabPanels className="tab-content-controller">
                    <TabPanel>
                        {children}
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}