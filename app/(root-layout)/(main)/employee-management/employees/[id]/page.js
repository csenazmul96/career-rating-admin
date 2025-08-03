import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getsSingleEmployee} from "@/utils/api/employeeApi";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import {Eye, EyeOff} from "lucide-react";
import {Button} from "@/components/common/button";
import React from "react";

export default async function Page({params}) {
    const {id} = params;
    const employee = await getsSingleEmployee(id);
    return (
        <div className="flex flex-col member-registration">
            <LmsPageHeading title="Employee Details"/>
            {employee && (
                <div className="registration-form">
                    <FieldWrapper label="Status">
                        <Button
                            color={`${employee.status ? 'primaryNoBgRoundedSmall' : "secondaryLightRoundedSmall"}`}>
                            {employee.status ?
                                <> <Eye size={16} /> Active</>
                                :
                                <> <EyeOff size={16} /> Inactive</>
                            }
                        </Button>
                    </FieldWrapper>
                    <FieldWrapper label="Name">
                        <span>{employee.first_name} {employee.last_name}</span>
                    </FieldWrapper>
                </div>
            )}
        </div>
    );
}
