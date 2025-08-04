"use client";
import React, {useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
const initialForm = {
    user_id: "",
    institution_name: "",
    country_id: "",
    city: "",
    degree_title: "",
    degree_title_id: "",
    field_of_study: "",
    education_level_id: "",
    education_level: "",
    credential_type: "",
    start_date: "",
    end_date: "",
    is_current: true,
    grade: "",
    grading_system_id: "",
    grading_system: "",
    grading_scale_id: "",
    grading_scale: "",
    study_mode: "",
    language_of_instruction: "",
    thesis_title: "",
    description: "",
    verified: false
};
function EducationForm({education, educationLevels, countries, gradingScales, gradingSystems, degreeNames}) {
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
            <FieldWrapper label="Degree Name"   required>
                <LmsStandardSelectInputV2
                    fieldClass={"h-[200px] w-[270px]"}
                    name={`degree_title_id`}
                    initialText={"Select Degree Name"}
                    value={form.degree_title_id}
                    options={degreeNames}
                    changeDataHandler={inputChangeHandler}
                />
                {form.degree_title_id === 'other' &&
                    <LmsStandardInputField
                        changeDataHandler={inputChangeHandler}
                        name="degree_title"
                        error={errors?.degree_title}
                        value={form.degree_title}
                        placeholder={`Degree name`}
                    />
                }
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
            <FieldWrapper label="Subject/major" singleElement={true} required>
                <LmsStandardInputField
                    changeDataHandler={inputChangeHandler}
                    name="field_of_study"
                    error={errors?.field_of_study}
                    value={form.field_of_study}
                    placeholder={`Subject/major`}
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

            <FieldWrapper label="Level of degree" singleElement={true} required>
                <LmsStandardSelectInputV2
                    fieldClass={"h-[200px] w-[270px]"}
                    name={`education_level_id`}
                    initialText={"Degree Level"}
                    value={form.education_level_id}
                    options={educationLevels}
                    changeDataHandler={inputChangeHandler}
                />
                {form.education_level_id === 'other' &&
                    <LmsStandardInputField
                        fieldClass={'mt-1 w-[270px]'}
                        changeDataHandler={inputChangeHandler}
                        name="education_level"
                        error={errors?.education_level}
                        value={form.education_level}
                        placeholder={`Other level of degree`}
                    />
                }
            </FieldWrapper>

            <FieldWrapper label="Grading System">
                <LmsStandardSelectInputV2
                    fieldClass={"h-[200px] w-[270px]"}
                    name={`grading_system_id`}
                    initialText={"Grading System"}
                    value={form.grading_system_id}
                    options={gradingSystems}
                    changeDataHandler={inputChangeHandler}
                />
                {form.grading_system_id === 'other' &&
                    <LmsStandardInputField
                        fieldClass={'mt-1 w-[270px]'}
                        changeDataHandler={inputChangeHandler}
                        name="grading_system"
                        error={errors?.grading_system}
                        value={form.grading_system}
                        placeholder={`Other Grading System`}
                    />
                }
            </FieldWrapper>

            <FieldWrapper label="Grading Scale">
                <LmsStandardSelectInputV2
                    fieldClass={"h-[200px] w-[270px]"}
                    name={`grading_scale_id`}
                    initialText={"Grading Scale"}
                    value={form.grading_scale_id}
                    options={gradingScales}
                    changeDataHandler={inputChangeHandler}
                />
                {form.grading_scale_id === 'other' &&
                    <LmsStandardInputField
                        fieldClass={'mt-1 w-[270px]'}
                        changeDataHandler={inputChangeHandler}
                        name="grading_scale"
                        error={errors?.grading_scale}
                        value={form.grading_scale}
                        placeholder={`Other Grading Scale`}
                    />
                }
            </FieldWrapper>
            <FieldWrapper label="Obtain Score" singleElement={true} required>
                <LmsStandardInputField
                    singleElement={true}
                    changeDataHandler={inputChangeHandler}
                    name="grade"
                    error={errors?.grade}
                    value={form.grade}
                    placeholder={`Obtain Score of the degree`}
                />
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