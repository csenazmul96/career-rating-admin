"use client";

import React, {useState} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import EmployeeExistsCheck
    from "@/app/(root-layout)/(main)/employee-management/employees/create/components/EmployeeExistsCheck";
import {Button} from "@/components/common/button";
import Link from "next/link";
import {Menu} from "lucide-react";
import {storeEmployee, storeEmployeeUpdate} from "@/utils/api/career/employeeApi";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import {useCommonContext} from "@/store/CommonContext";
const formObject = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    first_name: "",
    current_company_id: "",
    current_role_id: "",
    last_name: "",
    status: true,
    checkEmployee: false,
}

function EmployeeForm({employee = null, companies}) {

    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(employee ? {...employee, status: employee.status ? true : false} : formObject);

    const {roles} = useCommonContext()

    const handleOnChnage = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };


    const submitForm = async () => {
        setLoading(true);
        let response = {};
         if (employee) {
             response = await storeEmployeeUpdate(form, employee.id);
         } else {
             response = await storeEmployee(form);
         }

        if (response.status === 422) {
            setErrors(response.errors);
        } else  if (response.status === 201 || response.status === 200) {
            LmsToastMessage(employee ? "Update" : 'Create', employee ? 'Employee updated successfully ' : 'Employee created successfully', 'success')
           if (!employee) setForm(formObject)
        }
        setLoading(false);
    }



    return (
        <div className="registration-form">
            <div className="form">
                <FieldWrapper label="Status" required={true}>
                    <LmsStandardRadioFieldGroup
                        options={[
                            { id: true, name: "Active" },
                            { id: false, name: "Inactive" },
                        ]}
                        name="status"
                        value={form.status}
                        changeDataHandler={handleOnChnage}
                    />
                </FieldWrapper>
                <EmployeeExistsCheck form={form} errors={errors} setForm={setForm} />

                    <FieldWrapper label={"First Name"} required={true}>
                        <LmsStandardInputField
                            error={errors?.first_name}
                            name="first_name"
                            value={form.first_name}
                            placeholder="Enter First Name"
                            changeDataHandler={handleOnChnage}
                        />
                    </FieldWrapper>
                    <FieldWrapper label={"Last Name"} className={"w-full"}>
                        <LmsStandardInputField
                            error={errors?.last_name}
                            name="last_name"
                            value={form.last_name}
                            placeholder="Enter Last Name"
                            changeDataHandler={handleOnChnage}
                        />
                    </FieldWrapper>

                <FieldWrapper label={"Email"} required={true}>
                    <LmsStandardInputField
                        error={errors?.email}
                        name="email"
                        type={"email"}
                        value={form.email}
                        placeholder="Enter Email"
                        changeDataHandler={handleOnChnage}
                    />
                </FieldWrapper>

                <FieldWrapper label="Password" required={true}>
                        <LmsStandardInputField
                            error={errors?.password}
                            name="password"
                            type="password"
                            value={form.password}
                            placeholder="Enter Password"
                            changeDataHandler={handleOnChnage}
                        />
                    </FieldWrapper>
                    <FieldWrapper
                        label="Confirm Password"
                        className={"w-full"}
                        required={true}
                    >
                        <LmsStandardInputField
                            error={errors?.confirmPassword}
                            name="confirmPassword"
                            type="password"
                            value={form.confirmPassword}
                            placeholder="Enter Confirm Password"
                            changeDataHandler={handleOnChnage}
                        />
                    </FieldWrapper>
                <FieldWrapper label={'Company'} className={``}  >
                    <LmsStandardSelectInputV2
                        name={`current_company_id`}
                        initialText={'Select Company'}
                        fieldClass={'h-[250px] w-[270px]'}
                        search={true}
                        error={errors?.current_company_id}
                        value={ form.current_company_id}
                        options={companies}
                        changeDataHandler={handleOnChnage}/>

                        <LmsStandardSelectInputV2
                            name={`current_role_id`}
                            initialText={'Select Role'}
                            fieldClass={'h-[250px] w-[270px]'}
                            error={errors?.current_role_id}
                            value={form.current_role_id}
                            options={roles && roles.filter((role)=> role.company_id === form.current_company_id)}
                            changeDataHandler={handleOnChnage}/>
                </FieldWrapper>

                <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
                    <div className="left-col flex items-center">
                        <div className="member-collapse-list ">
                            <Link href={`/employee-management/employees`}>
                                <Button color="transparent" className="w-full mb-2 text-center cursor-pointer gap">
                                <span className={`flex`}><Menu /></span>
                                    <span className="text-19px flex leading-[normal]"> Employee List</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="right-col flex justify-end items-end flex-1  px-4 pl-[20px] pr-0">
                        <Button
                            color="primary"
                            onClick={() => submitForm()}
                            loading={loading}
                            disable={loading}
                            className={"cursor-pointer"}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;