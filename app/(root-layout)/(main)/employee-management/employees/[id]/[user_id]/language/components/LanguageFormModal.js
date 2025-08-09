import React, {useEffect, useState} from 'react';
import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {Button} from "@/components/common/button";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import {Heading} from "@/components/common/heading";
import ToolTip from "@/components/common/ToolTip";
import {createEmployeeLanguage, updateEmployeeLanguage} from "@/utils/api/career/employeeLanguageApi";
const formObject = {
    "language_id": "",
    "language": "",
    "user_id": null,
    "proficiency_level": "",
    "reading": "",
    "writing": "",
    "speaking": "",
    "listening": "",
    "certification": "",
    "score": ""
}
function LanguageFormModal({openForm, setOpenForm, id, user_id,editItem, languages }) {
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({...formObject, user_id: user_id});
    const handleOnChange = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }

    useEffect(() => {
        if (editItem) {
            setForm(editItem);
        }
    }, [editItem])

    const submitForm = async () => {
        setLoading(true)
        try {
            let response = {}
            if (editItem) {
                response = await updateEmployeeLanguage(form, editItem.id)
            } else {
                response = await createEmployeeLanguage(form)
            }

            if (response.status === 201 || response.status === 200) {
                LmsToastMessage('성공.', editItem ? "Language has been updated" : 'Language has been created.', 'success')
                setOpenForm(false)
                setForm({...formObject, user_id: user_id})
            }
            if (response.status === 422) {
                setErrors(response.errors)
            }
        } catch (e){
            LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
        }
        setLoading(false)
    }

    const proficiencyLevels = [
        {
            id: "Beginner",
            name: "Beginner"
        },
        {
            id: "Intermediate",
            name: "Intermediate"
        },
        {
            id: "Advanced",
            name: "Advanced"
        },
        {
            id: "Fluent",
            name: "Fluent"
        },
        {
            id: "A1",
            name: "A1"
        },
        {
            id: "A",
            name: "A"
        },
        {
            id: "A2",
            name: "A2"
        },
        {
            id: "B1",
            name: "B1"
        },
        {
            id: "B2",
            name: "B2"
        },
        {
            id: "C1",
            name: "C1"
        },
        {
            id: "C2",
            name: "C2"
        },
        {
            id: "Native",
            name: "Native"
        },
    ]
    return (
        <Dialog open={openForm} onClose={setOpenForm} size={"2xl"} className={"w-[800px]"}>
            <DialogTitle><span>Language {editItem ? "Edit" : "Create"}</span></DialogTitle>
            <DialogBody>
                <FieldWrapper label="Language"   required>
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px] w-[270px]"}
                        name={`language_id`}
                        initialText={"Select Language"}
                        value={form.language_id}
                        search={true}
                        error={errors?.language_id}
                        optionLabel={'local_name'}
                        options={languages}
                        changeDataHandler={handleOnChange}
                    />
                    {form.language_id === 'other' &&
                        <LmsStandardInputField
                            changeDataHandler={handleOnChange}
                            name="language"
                            error={errors?.language}
                            value={form.language}
                            placeholder={`Language name`}
                        />
                    }
                </FieldWrapper>
                <FieldWrapper label="Proficency Level" required>
                    <LmsStandardSelectInputV2
                        fieldClass={"h-[200px] w-[270px]"}
                        name={`proficiency_level`}
                        initialText={"Overall proficiency level "}
                        value={form.proficiency_level}
                        error={errors?.proficiency_level}
                        options={proficiencyLevels}
                        changeDataHandler={handleOnChange}
                    />
                </FieldWrapper>
                <FieldWrapper label="Score">
                    <LmsStandardInputField
                        changeDataHandler={handleOnChange}
                        name="score"
                        error={errors?.score}
                        value={form.score}
                        placeholder={`Score`}
                    />
                </FieldWrapper>

                <div className={'flex'}>
                <Heading className={"mt-2 text-xl !pb-2"} level={5} >Each band proficiency </Heading>
                    <ToolTip content={'A1, A2 – Basic User, B1, B2 – Independent User, C1, C2 – Proficient User, Native – Mother tongue'} />
                </div>

                <div className="flex justify-between gap-2">
                    <LmsStandardSelectInputV2
                        label={'Reading proficiency level'}
                        search={true}
                        name={`reading`}
                        initialText={"Select Reading Score"}
                        value={form.reading}
                        error={errors?.reading}
                        options={proficiencyLevels}
                        fieldClass={"h-[200px] w-[270px]"}
                        changeDataHandler={handleOnChange}
                    />
                    <LmsStandardSelectInputV2
                        label={'Writing proficiency level'}
                        search={true}
                        name={`writing`}
                        initialText={"Select Writing Score"}
                        value={form.writing}
                        error={errors?.writing}
                        options={proficiencyLevels}
                        fieldClass={"h-[200px] w-[270px]"}
                        changeDataHandler={handleOnChange}
                    />
                </div>
                <div className="flex justify-between mt-3 gap-2">
                    <LmsStandardSelectInputV2
                        label={'Speaking proficiency level'}
                        search={true}
                        name={`speaking`}
                        initialText={"Select Speaking Score"}
                        value={form.speaking}
                        error={errors?.speaking}
                        options={proficiencyLevels}
                        fieldClass={"h-[200px] w-[270px]"}
                        changeDataHandler={handleOnChange}
                    />
                    <LmsStandardSelectInputV2
                        label={'Listening proficiency level'}
                        search={true}
                        name={`listening`}
                        initialText={"Select Listening Score"}
                        value={form.listening}
                        error={errors?.listening}
                        options={proficiencyLevels}
                        fieldClass={"h-[200px] w-[270px]"}
                        changeDataHandler={handleOnChange}
                    />
                </div>



            </DialogBody>
            <DialogActions>
                <Button
                    type="button"
                    color="transparentMedium"
                    className={'h-10'}
                    onClick={()=>setOpenForm(false)}> Cancel </Button>
                <Button
                    type="button"
                    disable={loading}
                    color={`primaryMedium`}
                    className={'h-10'}
                    loading={loading}
                    onClick={submitForm}> Save </Button>
            </DialogActions>
        </Dialog>
    );
}

export default LanguageFormModal;