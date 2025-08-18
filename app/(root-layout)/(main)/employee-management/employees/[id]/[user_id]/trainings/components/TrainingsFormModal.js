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
import LmsStandardTextEditor from "@/components/common/form/LmsStandardTextEditor";
import {storeRecommendations, updateRecommendations} from "@/utils/api/career/recommendationsAPI";
import {storeTrainings, updateTrainings} from "@/utils/api/career/trainingsAPI";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
const formObject = {
    name: '',
    start_date: '',
    end_date: '',
    is_continue: true,
    link: '',
    details: '',
    organization_name: '',
}
function TrainingsFormModal({openForm, setOpenForm, id, user_id, editItem }) {
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
                response = await updateTrainings(form, editItem.id)
            } else {
                response = await storeTrainings(form)
            }


            if (response.status === 201 || response.status === 200) {
                LmsToastMessage(editItem ? 'Update.' : "Create", editItem ? "Training has been updated" : 'Training has been created.', 'success')
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


    return (
        <Dialog open={openForm} onClose={setOpenForm} size={"4xl"}>
            <DialogTitle><span>Training {editItem ? "Edit" : "Create"}</span></DialogTitle>
            <DialogBody>
                <div className={"flex items-center gap-x-2 mb-2"}>
                    <LmsStandardInputField
                        changeDataHandler={handleOnChange}
                        name="name"
                        required={true}
                        label={"Name"}
                        vertical={true}
                        fieldClass={"w-full"}
                        singleElement={true}
                        error={errors?.name}
                        value={form.name}
                        placeholder={`Name`}
                    />

                    <LmsStandardInputField
                        changeDataHandler={handleOnChange}
                        name="organization_name"
                        label={"Organization Name"}
                        vertical={true}
                        fieldClass={"w-full"}
                        singleElement={true}
                        error={errors?.organization_name}
                        value={form.organization_name}
                        placeholder={`Organization Name`}
                    />
                </div>
                <div className={"flex items-center gap-x-2"}>
                    <LmsStandardDatePicker
                        name={'start_date'}
                        value={form.start_date}
                        error={errors?.start_date}
                        label={"Start Date"}
                        vertical={true}
                        required={true}
                        fieldClass={"w-full"}
                        singleElement={true}
                        placeholder={'YYYY-MM-DD'}
                        changeDataHandler={handleOnChange}
                    />
                    <span className={"items-center h-12 flex mt-8"}>-</span>
                    {!form.is_continue &&
                        <LmsStandardDatePicker
                            name={'end_date'}
                            value={form.end_date}
                            vertical={true}
                            label={"End Date"}
                            fieldClass={"w-full"}
                            singleElement={true}
                            error={errors?.end_date}
                            placeholder={'YYYY-MM-DD'}
                            changeDataHandler={handleOnChange}
                        />
                    }
                    <div className={"mt-8"}>
                    <CheckboxField>
                        <Checkbox
                            color="lmscheckbox"
                            name="is_continue"
                            value={1}
                            clickHandler={()=>handleOnChange('is_continue', !form.is_continue)}
                            checked={form.is_continue}
                        />
                        <Label className="font-normal">Continue</Label>
                    </CheckboxField>
                    </div>
                </div>
                <div className={"flex items-center gap-x-2 mb-2"}>
                    <LmsStandardInputField
                        changeDataHandler={handleOnChange}
                        name="link"
                        label={"Link"}
                        vertical={true}
                        fieldClass={"w-full"}
                        singleElement={true}
                        error={errors?.link}
                        value={form.link}
                        placeholder={`Link`}
                    />
                </div>


                <LmsStandardTextEditor placeholder="Details"
                                       error={errors?.details}
                                       name="details"
                                       label={"Details"}
                                       vertical={true}
                                       fieldClass={'w-full max-h-[200px] mb-2'}
                                       value={form.details}
                                       changeDataHandler={handleOnChange}
                                       singleElement={true}/>

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

export default TrainingsFormModal;