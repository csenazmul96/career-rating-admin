import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getsSingleEmployee} from "@/utils/api/career/employeeApi";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import {Eye, EyeOff, Menu, Pencil} from "lucide-react";
import {Button} from "@/components/common/button";
import React from "react";
import {getRatingBtnClass} from "@/utils/helpers/CommonHelper";
import Link from "next/link";

export default async function Page({params}) {
    const {id} = await params;
    const employee = await getsSingleEmployee(id, {queries: "currentCompany,currentRole"});
    console.log(employee)


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
                    <FieldWrapper label="Average Rating">
                        <Button
                            color={`${getRatingBtnClass(employee.average_rating)}`}>
                            {employee.average_rating}.0
                        </Button>
                    </FieldWrapper>
                    <FieldWrapper label="Name">
                        <span>{employee.first_name} {employee.last_name}</span>
                    </FieldWrapper>
                    <FieldWrapper label="Username">
                        <span>{employee.username} </span>
                    </FieldWrapper>
                    <FieldWrapper label="Email">
                        <span>{employee.email} </span>
                    </FieldWrapper>
                    <FieldWrapper label="Dob" className={"border-b border-borderColor"}>
                        <span>{employee.dob || "-"} </span>
                    </FieldWrapper>
                    <FieldWrapper label="Current Company" className={"border-b border-borderColor"}>
                        <span>{employee.currentCompany?.name}</span>
                        {employee.currentRole &&
                            <Button color={`${employee.status ? 'primaryNoBgRoundedSmall' : "secondaryLightRoundedSmall"}`}  >
                                {employee.currentRole?.name}
                            </Button>
                        }
                    </FieldWrapper>
                    <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
                        <div className="left-col flex items-center">
                            <div className="member-collapse-list ">
                                <Link href={`/employee-management/employees`} >
                                    <Button color="transparent" className="w-full mb-2 text-center cursor-pointer gap" >
                                        <span className={`flex`}> <Menu /> </span>
                                        <span className="text-19px flex leading-[normal]"> Back to Employee List </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="right-col flex justify-end items-end flex-1  px-4 pl-[20px] pr-0">
                            <Link href={`/employee-management/employees/edit/${employee.id}`} >
                                <Button color="transparent" className="w-full mb-2 text-center cursor-pointer gap" >
                                    <span className={`flex`}> <Pencil /> </span>
                                    <span className="text-19px flex leading-[normal]"> Edit</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
