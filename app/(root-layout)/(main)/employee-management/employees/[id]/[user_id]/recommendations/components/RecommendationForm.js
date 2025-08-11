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
const formObject = {
    user_id: '',
    name: '',
    email: '',
    role: '',
    phone: '',
    link: '',
    details: '',
}
function RecommendationForm({openForm, setOpenForm, id, user_id, editItem }) {
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
                response = await updateRecommendations(form, editItem.id)
            } else {
                response = await storeRecommendations(form)
            }


            if (response.status === 201 || response.status === 200) {
                LmsToastMessage(editItem ? 'Update.' : "Create", editItem ? "Language has been updated" : 'Language has been created.', 'success')
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
            <DialogTitle><span>Recommendation {editItem ? "Edit" : "Create"}</span></DialogTitle>
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
                        name="email"
                        required={true}
                        label={"Email"}
                        vertical={true}
                        fieldClass={"w-full"}
                        singleElement={true}
                        error={errors?.email}
                        value={form.email}
                        placeholder={`Email`}
                    />
                </div>
                <div className={"flex items-center gap-x-2 mb-2"}>
                    <LmsStandardInputField
                        changeDataHandler={handleOnChange}
                        name="role"
                        required={true}
                        label={"Role"}
                        vertical={true}
                        fieldClass={"w-full"}
                        singleElement={true}
                        error={errors?.role}
                        value={form.role}
                        placeholder={`Role`}
                    />

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
                <div className={"flex items-center gap-x-2 mb-2"}>
                    <LmsStandardInputField
                        changeDataHandler={handleOnChange}
                        name="phone"
                        label={"Phone"}
                        vertical={true}
                        fieldClass={"w-full"}
                        singleElement={true}
                        error={errors?.phone}
                        value={form.phone}
                        placeholder={`Phone`}
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

export default RecommendationForm;