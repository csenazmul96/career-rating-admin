"use client";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import React, {useEffect, useState} from "react";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import {Tab, TabGroup, TabList} from "@headlessui/react";
import Link from "next/link";
import {Button} from "@/components/common/button";
import {Menu} from "lucide-react";
import {createAcademic, createUpdateAddress, updateAcademic} from "@/utils/api/career/employeeApi";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

function AddressForm({ user_id, id , countries, address}) {
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");

    const [form, setForm] = useState({
        "id": "",
        "user_id": user_id,
        "address_type": activeTab,
        "address_line_1": " ",
        "address_line_2": "",
        "building": "",
        "floor": "",
        "neighborhood": "",
        "sub_district": "",
        "landmark": "",
        "post_code": "",
        "city": "",
        "state": "",
        "country": ""
    });
    const inputChangeHandler = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };


    const submitForm = async () => {
        setLoading(true);
        setErrors(null);

        const response = await createUpdateAddress({...form, user_id});


        if (response.status === 422) {
            setErrors(response.errors);
        } else if (response.status === 200 || response.status === 201) {
            LmsToastMessage( address ? "Update" : 'Create', address ? 'Address updated successfully ' : 'Address created successfully', 'success' );
        }
        setLoading(false);
    }


    useEffect(() => {
        if (address && address.length) {
            let addressData = address.find(item => item.address_type === activeTab);
            setForm(addressData)
        }
        setErrors(null);
        setForm((prev) => ({ ...prev, address_type: activeTab }));
    }, [activeTab])


    return (
        <>
            <TabGroup defaultIndex={0} className="tab-wrapper-controller">
                <TabList className="tab-list-controller flex w-full border-b border-commonBorderColor !pb-0 !mb-10">
                    <Tab onClick={()=>setActiveTab("Home")} className={`flex-1 items-center p-0 tab-list-controller-btn inline-flex w-auto ${activeTab === "Home" ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                        Home
                    </Tab>
                    <Tab onClick={()=>setActiveTab("Office")} className={`flex-1 items-center p-0 tab-list-controller-btn inline-flex w-auto ${activeTab === "Office" ? "border-themeColor font-bold text-textColor" : "border-transparent"}` }>
                        Office
                    </Tab>
                </TabList>
                <div className={"flex flex-col w-full"}>
                    <FieldWrapper label="Address Line 1" singleElement={true} required>
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="address_line_1"
                            error={errors?.address_line_1}
                            value={form.address_line_1}
                            placeholder={`Address Line 1`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="Address Line 2" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="address_line_2"
                            error={errors?.address_line_2}
                            value={form.address_line_2}
                            placeholder={`Address Line 2`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="Post code" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="post_code"
                            error={errors?.post_code}
                            value={form.post_code}
                            placeholder={`post code`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="Country" singleElement={true} >
                        <LmsStandardSelectInputV2
                            fieldClass={"h-[200px] w-[270px]"}
                            name={`country`}
                            initialText={"Select Country"}
                            value={form.country}
                            search={true}
                            error={errors?.country}
                            options={countries}
                            changeDataHandler={inputChangeHandler}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="State" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="state"
                            error={errors?.state}
                            value={form.state}
                            placeholder={`State`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="City" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="city"
                            error={errors?.city}
                            value={form.city}
                            placeholder={`City`}
                        />
                    </FieldWrapper>

                    <FieldWrapper label="Building" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="building"
                            error={errors?.building}
                            value={form.building}
                            placeholder={`Building`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="Floor" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="floor"
                            error={errors?.floor}
                            value={form.floor}
                            placeholder={`Floor`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="Neighborhood" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="neighborhood"
                            error={errors?.neighborhood}
                            value={form.neighborhood}
                            placeholder={`Neighborhood`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="Sub district" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="sub_district"
                            error={errors?.sub_district}
                            value={form.sub_district}
                            placeholder={`Sub district`}
                        />
                    </FieldWrapper>
                    <FieldWrapper label="Landmark" singleElement={true} >
                        <LmsStandardInputField
                            singleElement={true}
                            changeDataHandler={inputChangeHandler}
                            name="landmark"
                            error={errors?.landmark}
                            value={form.landmark}
                            placeholder={`Landmark`}
                        />
                    </FieldWrapper>
                    <div className="flex items-center justify-between border-t border-commonBorderColor pt-10">
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
            </TabGroup>
        </>
    );
}

export default AddressForm;