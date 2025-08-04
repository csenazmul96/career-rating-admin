"use client";
import React, {useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
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
    is_current: false,
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
                    fieldClass="w-full"
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
                    fieldClass="w-full"
                />
            </FieldWrapper>
            <FieldWrapper label="Duration" singleElement={true} required>
                <LmsStandardDatePicker
                    name={'start_date'}
                    value={form.start_date}
                    placeholder={'YYYY-MM-DD'}
                    changeDataHandler={inputChangeHandler}
                />
                <span>-</span>
                <LmsStandardDatePicker
                    name={'end_date'}
                    value={form.end_date}
                    placeholder={'YYYY-MM-DD'}
                    changeDataHandler={inputChangeHandler}
                />
            </FieldWrapper>
            <FieldWrapper label="과정명" singleElement={true} required>
                <LmsStandardSelectInputV2
                    fieldClass={"h-[200px]"}
                    name={`country_id`}
                    initialText={"Select Country"}
                    value={form.country_id}
                    options={countries}
                    changeDataHandler={inputChangeHandler}
                />
            </FieldWrapper>

        </>
    );
}

export default EducationForm;