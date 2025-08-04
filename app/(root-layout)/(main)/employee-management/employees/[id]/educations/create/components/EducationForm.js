"use client";
import React, {useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import ToggleSwitch from "@/components/common/form/ToggleSwitch";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
const initialForm = {
    user_id: "",
    institution_name: "",
    country_id: "",
    city: "",
    degree_title: "",
    field_of_study: "",
    education_level: "",
    credential_type: "",
    start_date: "",
    end_date: "",
    is_current: true,
    grade: "",
    grading_system: "",
    grading_scale: "",
    study_mode: "",
    language_of_instruction: "",
    thesis_title: "",
    description: "",
    verified: false
};
function EducationForm({education, educationLevels, countries, gradingScales, gradingSystems}) {
    const params = useParams();
    const router = useRouter();
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(education ? { ...education } : initialForm);
    const inputChangeHandler = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };

    const thumbnailClickHandler = (item) => {
        console.log(item)
    }
    return (
        <>
            <FieldWrapper label="Degree Name" singleElement={true} required>
                <LmsStandardInputField
                    singleElement={true}
                    changeDataHandler={inputChangeHandler}
                    name="degree_title"
                    error={errors?.degree_title}
                    value={form.degree_title}
                    placeholder={`Degree name`}
                />
            </FieldWrapper>
            <FieldWrapper label="과정명" singleElement={true} required>
                <LmsStandardInputField
                    singleElement={true}
                    changeDataHandler={inputChangeHandler}
                    name="institution_name"
                    error={errors?.institution_name}
                    value={form.institution_name}
                    placeholder={`Institute name`}
                />
            </FieldWrapper>
            <FieldWrapper label="Duration" singleElement={true} required>
                <div className={"flex items-center gap-x-2"}>
                    <LmsStandardDatePicker
                        name={'start_date'}
                        value={form.start_date}
                        placeholder={'YYYY-MM-DD'}
                        changeDataHandler={inputChangeHandler}
                    />
                    <span>-</span>
                    {!form.is_current &&
                        <LmsStandardDatePicker
                            name={'end_date'}
                            value={form.end_date}
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

            <div className={"flex items-center"}>
                <FieldWrapper label="Country">
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px]"}
                        name={`country_id`}
                        initialText={"Select Country"}
                        value={form.country_id}
                        options={countries}
                        changeDataHandler={inputChangeHandler}
                    />
                </FieldWrapper>
                <FieldWrapper label="City">
                    <LmsStandardInputField
                        changeDataHandler={inputChangeHandler}
                        name="city"
                        error={errors?.city}
                        value={form.city}
                        placeholder={`City`}
                    />
                </FieldWrapper>
            </div>

        </>
    );
}

export default EducationForm;