"use client"

import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {
    createCurriculumNewParentCategory,
    createCurriculumNewSubCategory,
    createCurriculumNewSubSubCategory
} from "@/utils/api/curriculumCategory";
import {useContentContext} from "@/store/ContentContext";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

const CurriculumCategoryForm = () => {
    const {openForm, setOpenForm, currentGroup, actionType, setActionType, activeDropdown} = useContentContext();
    const cancelForm = () => {
        setOpenForm(false)
        setActionType('')
    }
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({name: ''});
    const handleOnChange = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }

    useEffect(() => {
        if (currentGroup && actionType === 'edit') {
            setForm({name: currentGroup.name})
        } else {
            setForm({name: ''})
        }
    }, [actionType]);

    const submitForm = async () => {
        setLoading(true)
        try {
            let response = null;
            let newForm = {...form};

            if (actionType === 'edit') {
                newForm = {
                    ...form,
                    id: currentGroup.id
                }
            }

            if (!currentGroup) {
                response = await createCurriculumNewParentCategory(newForm)
            } else {
                if (currentGroup.level === 1) {
                    if (actionType === 'edit') {
                        response = await createCurriculumNewParentCategory(newForm)
                    } else {
                        response = await createCurriculumNewSubCategory(newForm, currentGroup.id)
                    }
                } else if (currentGroup.level === 2) {
                    if (actionType === 'edit') {
                        response = await createCurriculumNewSubCategory(newForm, activeDropdown.first.id)
                    } else {
                        response = await createCurriculumNewSubSubCategory(newForm, currentGroup.id)
                    }
                } else if (currentGroup.level === 3) {
                    if (actionType === 'edit') {
                        response = await createCurriculumNewSubSubCategory(newForm, activeDropdown.second.id)
                    }
                }
            }

            if (response && response.status === 'success') {
                cancelForm()
                CommonToastMessage('성공.', `${currentGroup ? 'Group has been updated' : 'Group has been created'}`, 'success')
            } else {
                if (response?.errors) {
                    setErrors(formatErrors(response?.errors))
                }
                CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
            }
        } catch (e){
            CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
        }

        setLoading(false)
    }

    return (
        <>
            <Dialog open={openForm} onClose={setOpenForm}>
                <DialogTitle><span>{currentGroup ? '그룹 수정' : '그룹 추가'}</span></DialogTitle>
                <DialogBody>

                    <LmsStandardInputField
                        error={errors?.name}
                        name="name"
                        label={'그룹명'}
                        vertical={true}
                        fieldClass={'w-full'}
                        value={form.name}
                        placeholder="그룹명을 입력해주세요."
                        changeDataHandler={handleOnChange}
                    />
                </DialogBody>
                <DialogActions>
                    <Button
                        type="button"
                        color="transparentMedium"
                        className={'h-10'}
                        onClick={cancelForm}> 취소 </Button>
                    <Button
                        type="button"
                        disable={!form.name ? true : loading ? true : false}
                        color={`${!form.name ? 'secondaryMedium' : 'primaryMedium'}`}
                        className={'h-10'}
                        loading={loading}
                        onClick={submitForm}> 확인 </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CurriculumCategoryForm