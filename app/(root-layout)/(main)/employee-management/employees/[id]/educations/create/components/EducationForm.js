"use client";
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
const initialForm = {
    user_id: "",
    institution_name: "",
    institution_type: "",
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
    const router = useRouter();
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(education ? { ...education } : initialForm);
    const inputChangeHandler = (column, value) => {
        setForm((prev) => ({ ...prev, [column]: value }));
    };
    return (
        <>
            <FieldWrapper label="과정명" singleElement={true} required>
                <LmsStandardInputField
                    singleElement={true}
                    changeDataHandler={inputChangeHandler}
                    name="courseName"
                    error={errors?.courseName}
                    value={form.courseName}
                    placeholder={`과정명을 입력하세요.`}
                    fieldClass="w-full"
                />
            </FieldWrapper>

        </>
    );
}

export default EducationForm;