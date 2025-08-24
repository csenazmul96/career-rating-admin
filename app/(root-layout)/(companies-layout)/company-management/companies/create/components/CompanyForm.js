"use client"

import React, {useEffect, useState} from "react";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import {useCommonContext} from "@/store/CommonContext";
import LmsStandardTextEditor from "@/components/common/form/LmsStandardTextEditor";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import {Button} from "@/components/common/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import {storeCompany, updateCompany} from "@/utils/api/career/companiesAPI";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

function CompanyForm({company = null}) {
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const {countries, industries} = useCommonContext()
    const [form, setForm] = useState({
        name: "",
        brand_name: "",
        registration_number: "",
        user_id: "",
        verified: false,
        tax_id: "",
        industry: "",
        company_type: "Private",
        founded_year: "",
        phone: "",
        email: "",
        website: "",
        country_code: "",
        state: "",
        city: "",
        post_code: "",
        address_line_1: "",
        address_line_2: "",
        description: "",
        about_company: "",
    })

    const companyTypes = [
        { id: "Private", name: "Private" },
        { id: "Govt", name: "Govt" },
    ]

    const handleOnChange = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };

    useEffect(() => {
        if (company) {
            setForm({...company, username: company.user?.username || ""})
        }
    }, [company])


    const submitForm = async () => {
        setErrors(null);
        setLoading(true);
        try {
            let data = null;
            if (!company) {
                data = await storeCompany(form);
            } else {
                data = await updateCompany(form, company.id);
            }

            if (data.status === 422) {
                setErrors(data.errors);
            } else if (data.status === 201 || data.status === 200) {
                LmsToastMessage(
                    "Create",
                    form?.id
                        ? "Company has been updated."
                        : "New company has been created.",
                    "success"
                );
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            toast.error("문제가 발생했습니다.");
        }
    };

    return (
        <>
            <div className={"flex"}>
                <FieldWrapper label="Company Type" required={true} singleElement={true} className={'w-1/2'}>
                    <LmsStandardRadioFieldGroup
                        options={companyTypes}
                        name="company_type"
                        value={form.company_type}
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="Verify" singleElement={true} className={'w-1/2'}>
                    <CheckboxField>
                        <Checkbox color="lmscheckbox"
                                  onClickHandler={()=>handleOnChange('verified', !form.verified)}
                                  name="verified"
                                  checked={form.verified} />
                        <Label className={`font-normal cursor-pointer hover:text-themeColor ${form.verified ? " text-themeColor !font-bold" : "text-black "}`}
                               htmlFor={`verified`}>Verified?</Label>
                    </CheckboxField>
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                <FieldWrapper label="Name" required={true} className={"w-1/2"}>
                    <LmsStandardInputField
                        error={errors?.name}
                        name="name"
                        value={form.name}
                        placeholder="Company Name"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="Branding" singleElement={true} className={'w-1/2'}>
                    <LmsStandardInputField
                        error={errors?.brand_name}
                        name="brand_name"
                        value={form.brand_name}
                        placeholder="Brand Name"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                <FieldWrapper label="Username" required={true} className={"w-1/2"}>
                    <LmsStandardInputField
                        error={errors?.username}
                        name="username"
                        value={form.username}
                        placeholder="Login Admin Username"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="Email" required={true} singleElement={true} className={'w-1/2'}>
                    <LmsStandardInputField
                        error={errors?.email}
                        name="email"
                        type="email"
                        value={form.email}
                        placeholder="Email"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                {!company &&
                <FieldWrapper label="Password" required={true} singleElement={true} className={'w-1/2'}>
                    <LmsStandardInputField
                        error={errors?.password}
                        name="password"
                        type="password"
                        value={form.password}
                        placeholder="Password"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                }
                <FieldWrapper label="Phone" className={!company ? "w-1/2" : "w-full"}>
                    <LmsStandardInputField
                        error={errors?.phone}
                        name="phone"
                        value={form.phone}
                        placeholder="Phone"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                <FieldWrapper label="Tax Number" className={'w-1/2'}>
                    <LmsStandardInputField
                        error={errors?.tax_id}
                        name="tax_id"
                        value={form.tax_id}
                        placeholder="Tax Number"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="Registration Number" singleElement={true} className={'w-1/2'}>
                    <LmsStandardInputField
                        singleElement={true}
                        error={errors?.registration_number}
                        name="registration_number"
                        value={form.registration_number}
                        placeholder="Registration Number"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                <FieldWrapper label="Founded Year" className={'w-1/2'}>
                    <LmsStandardInputField
                        error={errors?.founded_year}
                        name="founded_year"
                        value={form.founded_year}
                        placeholder="Founded Year"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="Website" singleElement={true} className={'w-1/2'}>
                    <LmsStandardInputField
                        singleElement={true}
                        error={errors?.website}
                        name="website"
                        value={form.website}
                        placeholder="Website"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                <FieldWrapper label={'Industry'} required={true} className={'w-1/2'}>
                    <LmsStandardSelectInputV2
                        name={`industry`}
                        initialText={'Select Industry'}
                        fieldClass={'h-[250px] w-[270px]'}
                        search={true}
                        error={errors?.industry}
                        value={form?.industry}
                        options={industries}
                        changeDataHandler={handleOnChange}/>
                </FieldWrapper>
                <FieldWrapper label={'Country'} required={true} singleElement={true} className={'w-1/2'}>
                    <LmsStandardSelectInputV2
                        name={`country_code`}
                        error={errors?.country_code}
                        initialText={'Select Country'}
                        fieldClass={'h-[250px] w-[270px]'}
                        search={true}
                        optionValue={'code'}
                        value={form?.country_code}
                        options={countries}
                        changeDataHandler={handleOnChange}/>
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                <FieldWrapper label="State" className={'w-1/2'}>
                    <LmsStandardInputField
                        error={errors?.state}
                        name="state"
                        value={form.state}
                        placeholder="State"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="City" singleElement={true} className={'w-1/2'}>
                    <LmsStandardInputField
                        singleElement={true}
                        error={errors?.city}
                        name="city"
                        value={form.city}
                        placeholder="City"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
            </div>
            <div className={"flex"}>
                <FieldWrapper label="Address Line 1" className={'w-1/2'}>
                    <LmsStandardInputField
                        error={errors?.address_line_1}
                        name="address_line_1"
                        value={form.address_line_1}
                        placeholder="Address line 1"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="Address Line 2" className={'w-1/2'}>
                    <LmsStandardInputField
                        singleElement={true}
                        error={errors?.address_line_2}
                        name="address_line_2"
                        value={form.address_line_2}
                        placeholder="Address Line 2"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
            </div>
            <div className={'flex'}>
                <FieldWrapper label="Post Code" singleElement={true} className={'w-full'}>
                    <LmsStandardInputField
                        singleElement={true}
                        error={errors?.post_code}
                        name="post_code"
                        value={form.post_code}
                        placeholder="Post Code"
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>

            </div>

            <FieldWrapper label="About Company" singleElement={true} className={'w-full'}>
                <LmsStandardTextEditor
                    singleElement={true}
                    placeholder="About Company"
                    error={errors?.about_company}
                    name="about_company"
                    fieldClass={'w-full max-h-[200px] mb-2'}
                    value={form.about_company}
                    changeDataHandler={handleOnChange}/>
            </FieldWrapper>
            <div className="flex items-center justify-between border-t border-commonBorderColor pt-8 lg:pt-10">
                <div className="left-col flex items-center">
                    <div className="member-collapse-list ">
                        <Link href={`/company-management/companies`}>
                            <Button color="transparent" className="w-full text-center cursor-pointer gap">
                            <span className={`flex`}>
                              <Menu />
                            </span>
                                <span className="text-19px flex leading-[normal]">List</span>
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

export default CompanyForm;