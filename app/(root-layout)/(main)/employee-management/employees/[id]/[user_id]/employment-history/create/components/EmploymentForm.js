"use client"

import {useParams, useRouter} from "next/navigation";
import React, {useState} from "react";
import {createAcademic, updateAcademic} from "@/utils/api/career/employeeApi";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import LmsStandardTextArea from "@/components/common/form/LmsStandardTextArea";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import Link from "next/link";
import {Button} from "@/components/common/button";
import {Menu} from "lucide-react";
import {storeEmploymentHistory} from "@/utils/api/career/employeementHistory";

const initialForm = {
    user_id: "",
    job_title: "",
    employment_type: "Full-time",
    company_name: "",
    industry_id: "",
    industry: "",
    country_id: "",
    city: "",
    start_date: "",
    end_date: "",
    is_current: true,
    job_level: "Mid",
    department: "",
    achievements: "",
    responsibilities: "",
    supervisor_name: "",
    supervisor_email: "",
    salary_currency: "",
    salary_amount: "",
    salary_frequency: "Monthly",
    work_mode: "On-site"
};

function EmploymentForm({countries, industries, job = null}) {
    const params = useParams();
    const {replace} = useRouter();
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(job ? { ...job } : initialForm);
    const inputChangeHandler = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };

    const submitForm = async () => {
        setLoading(true);
        setErrors(null);
        let response = {};
        if (!job) {
            response = await storeEmploymentHistory({...form, user_id: params.user_id});
        } else {
            response = await updateAcademic({...form, user_id: params.user_id}, job.id);
        }
console.log(response)
        if (response.status === 422) {
            setErrors(response.errors);
        } else if (response.status === 200 || response.status === 201) {
            LmsToastMessage(job ? "Update" : 'Create', job ? 'Education updated successfully ' : 'Education created successfully', 'success')
            replace(`/employee-management/employees/${params.id}/${params.user_id}/employment-history`);
        }
        setLoading(false);
    }

    const jobTypes = [
        {
            id: "Full-time",
            name : "Full-time"
        },
        {
            id: "Part-time",
            name : "Part-time"
        },
        {
            id: "Freelance",
            name : "Freelance"
        },
        {
            id: "Contract",
            name : "Contract"
        },
        {
            id: "Internship",
            name : "Internship"
        },
        {
            id: "Remote",
            name : "Remote"
        },
        {
            id: "Temporary",
            name : "Temporary"
        }
    ]
    const jobLevels = [
        {
            id: "Entry",
            name : "Entry"
        },
        {
            id: "Mid",
            name : "Mid"
        },
        {
            id: "Senior",
            name : "Senior"
        },
        {
            id: "Management",
            name : "Management"
        },
        {
            id: "Executive",
            name : "Executive"
        }
    ]
    const salaryFrequerncy = [
        {
            id: "Monthly",
            name : "Monthly"
        },
        {
            id: "Yearly",
            name : "Yearly"
        },
        {
            id: "Weekly",
            name : "Weekly"
        },
        {
            id: "Hourly",
            name : "Hourly"
        },
        {
            id: "Contractual",
            name : "Contractual"
        },
        {
            id: "Half Month",
            name : "Half Month"
        }
    ];

    return (
        <>
            <FieldWrapper label="Job Title" singleElement={true} required>
                <LmsStandardInputField
                    singleElement={true}
                    changeDataHandler={inputChangeHandler}
                    name="job_title"
                    error={errors?.job_title}
                    value={form.job_title}
                    placeholder={`Job Title`}
                />
            </FieldWrapper>
            <FieldWrapper label="Employment Name" singleElement={true} required>
                <LmsStandardInputField
                    singleElement={true}
                    changeDataHandler={inputChangeHandler}
                    name="company_name"
                    error={errors?.company_name}
                    value={form.company_name}
                    placeholder={`Employment Name`}
                />
            </FieldWrapper>
            <FieldWrapper label="Work Mode" className={"h-full"}>
                <LmsStandardRadioFieldGroup
                    options={[
                        { id: "On-site", name: "On-site" },
                        { id: "Remote", name: "Remote" },
                        { id: "Hybrid", name: "Hybrid" },
                    ]}
                    changeDataHandler={inputChangeHandler}
                    value={form.work_mode}
                    name="work_mode"
                />
            </FieldWrapper>
            <FieldWrapper label="Duration" singleElement={true} required>
                <div className={"flex items-center gap-x-2"}>
                    <LmsStandardDatePicker
                        name={'start_date'}
                        value={form.start_date}
                        error={errors?.start_date}
                        placeholder={'YYYY-MM-DD'}
                        changeDataHandler={inputChangeHandler}
                    />
                    <span>-</span>
                    {!form.is_current &&
                        <LmsStandardDatePicker
                            name={'end_date'}
                            value={form.end_date}
                            error={errors?.end_date}
                            placeholder={'YYYY-MM-DD'}
                            changeDataHandler={inputChangeHandler}
                        />
                    }
                    <CheckboxField>
                        <Checkbox
                            color="lmscheckbox"
                            name="is_current"
                            value={1}
                            clickHandler={()=>inputChangeHandler('is_current', !form.is_current)}
                            checked={form.is_current}
                        />
                        <Label className="font-normal">Currently studying</Label>
                    </CheckboxField>
                </div>
            </FieldWrapper>
            <div className={"flex items-center justify-between"}>
                <FieldWrapper label="Employment Type" required className={'w-[50%]'}>
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px] w-[270px]"}
                        name={`employment_type`}
                        initialText={"Select Job Type"}
                        value={form.employment_type}
                        error={errors?.employment_type}
                        options={jobTypes}
                        changeDataHandler={inputChangeHandler}
                    />
                </FieldWrapper>
                <FieldWrapper label="Industry type" required className={'w-[50%]'}>
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px] w-[270px]"}
                        name={`industry_id`}
                        initialText={"Select Employment Company type"}
                        value={form.industry_id}
                        search={true}
                        error={errors?.industry_id}
                        options={industries}
                        changeDataHandler={inputChangeHandler}
                    />
                    {form.industry_id === 'other' &&
                        <LmsStandardInputField
                            changeDataHandler={inputChangeHandler}
                            name="industry"
                            error={errors?.industry}
                            value={form.industry}
                            placeholder={`Other Industry type`}
                        />
                    }
                </FieldWrapper>
            </div>
            <div className={"flex items-center justify-between"}>
                <FieldWrapper label="Country" required className={'w-[50%]'}>
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px] w-[270px]"}
                        name={`country_id`}
                        initialText={"Industry in country"}
                        value={form.country_id}
                        search={true}
                        error={errors?.country_id}
                        options={countries}
                        changeDataHandler={inputChangeHandler}
                    />
                </FieldWrapper>
                <FieldWrapper label="City" singleElement={true} required className={'w-[50%]'}>
                    <LmsStandardInputField
                        singleElement={true}
                        changeDataHandler={inputChangeHandler}
                        name="city"
                        error={errors?.city}
                        value={form.city}
                        placeholder={`City`}
                    />
                </FieldWrapper>
            </div>
            <div className={"flex items-center justify-between"}>
                <FieldWrapper label="Salary currency" required className={'w-[50%]'}>
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px] w-[270px]"}
                        name={`salary_currency`}
                        initialText={"Salary currency"}
                        value={form.salary_currency}
                        search={true}
                        optionLabel={"currency_name"}
                        optionValue={"currency_name"}
                        error={errors?.salary_currency}
                        options={countries}
                        changeDataHandler={inputChangeHandler}
                    />
                </FieldWrapper>
                <FieldWrapper label="Salary Frequency" singleElement={true} required className={'w-[50%]'}>
                    <LmsStandardSelectInputV2
                        name={`salary_frequency`}
                        initialText={"Salary Frequency"}
                        value={form.salary_frequency}
                        error={errors?.salary_frequency}
                        options={salaryFrequerncy}
                        changeDataHandler={inputChangeHandler}
                    />
                </FieldWrapper>
            </div>

            <div className={"flex items-center justify-between"}>
                <FieldWrapper label="Job level" required className={'w-[50%]'}>
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px] w-[270px]"}
                        name={`job_level`}
                        initialText={"Your position level"}
                        value={form.job_level}
                        search={true}
                        error={errors?.job_level}
                        options={jobLevels}
                        changeDataHandler={inputChangeHandler}
                    />
                </FieldWrapper>

                <FieldWrapper label="Department" className={'w-[50%]'}>
                    <LmsStandardInputField
                        singleElement={true}
                        changeDataHandler={inputChangeHandler}
                        name="department"
                        error={errors?.department}
                        value={form.department}
                        placeholder={`Department`}
                    />
                </FieldWrapper>
            </div>

            <FieldWrapper label="Responsibilities" singleElement={true} >
                <LmsStandardTextArea
                    singleElement={true}
                    error={errors?.responsibilities}
                    value={form.responsibilities}
                    name="responsibilities"
                    placeholder={"Description of responsibilities"}
                    changeDataHandler={inputChangeHandler}
                    className={`w-full`} />
            </FieldWrapper>
            <FieldWrapper label="Achievements" singleElement={true} >
                <LmsStandardTextArea
                    singleElement={true}
                    error={errors?.achievements}
                    value={form.achievements}
                    name="achievements"
                    placeholder={"Description of Achievements"}
                    changeDataHandler={inputChangeHandler}
                    className={`w-full`} />
            </FieldWrapper>
            <div className={"flex items-center justify-between"}>
                <FieldWrapper label="Supervisor Name" className={'w-[50%] border-b border-borderColor'}>
                    <LmsStandardInputField
                        changeDataHandler={inputChangeHandler}
                        name="supervisor_name"
                        error={errors?.supervisor_name}
                        value={form.supervisor_name}
                        placeholder={`Supervisor Name`}
                    />
                </FieldWrapper>
                <FieldWrapper label="Supervisor Email" className={'w-[50%] border-b border-borderColor'}>
                    <LmsStandardInputField
                        changeDataHandler={inputChangeHandler}
                        name="supervisor_email"
                        error={errors?.supervisor_email}
                        value={form.supervisor_email}
                        placeholder={`Supervisor Email`}
                    />
                </FieldWrapper>
            </div>
            <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
                <div className="left-col flex items-center">
                    <div className="member-collapse-list ">
                        <Link href={`/employee-management/employees/${params.id}/${params.user_id}/employment-history`} className="w-full">
                            <Button color="transparent" className="w-full mb-2 text-center cursor-pointer gap">
                                <span className={`flex`}><Menu /></span>
                                <span className="text-19px flex leading-[normal]">Back</span>
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

        </>
    );
}

export default EmploymentForm;