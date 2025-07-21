import {Alert, AlertActions, AlertDescription, AlertTitle} from "@/components/common/alert";
import {Button} from "@/components/common/button";
import React, {useContext, useEffect, useState} from "react";
import {ErrorMessage, Field, Label} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {createOrganizationGroup, updateOrganizationGroup} from "@/utils/api/organizationManagement";
import OrganizationContext from "@/store/OrganizationContext";
import {Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle} from "@/components/common/dialog";

const OrganizationForm = ({isOpen, setIsOpen, action}) => {
    const {currentOrganization, setIsNewGroupAdded} = useContext(OrganizationContext);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState(
        {
            name: "",
            description: "",
            parentOrganizationGroupId: null
        }
    );

    useEffect(() => {
        if (!isOpen) {
            resetForm();
        } else {
            if (action === 'edit') {
                setForm({
                    name: currentOrganization.name,
                    description: "",
                    parentOrganizationGroupId: currentOrganization.parentOrganizationGroup?.id || null
                });
            } else {
                setForm({
                    name: "",
                    description: "",
                    parentOrganizationGroupId: currentOrganization?.id || null
                });
            }
        }
    }, [isOpen, currentOrganization, action]);

    const closeForm = () => {
        setIsOpen(false)
        resetForm()
    }

    const submitForm = async () => {
        setErrors({});

        let response = null;

        if (action === 'create') {
            const parentId = currentOrganization ? currentOrganization.id : null;
            response = await createOrganizationGroup({...form, parentOrganizationGroupId: parentId});
        } else if (action === 'edit') {
            response =  await updateOrganizationGroup(currentOrganization.id, form);
        }

        if (response.errors) {
            setErrors(response.errors)
            return;
        }
        if (action === 'create')
            setIsNewGroupAdded(currentOrganization);
        setIsOpen(false);
    }

    const resetForm = () => {
        setErrors({});

        setForm({
            name: "",
            description: "",
            parentOrganizationGroupId: null
        })
    }

    return (
        <>
            <Dialog size="md" open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>
                    {currentOrganization ?
                        <span>
                        {action === 'edit' ? `${currentOrganization.name} 편집하다` : `${currentOrganization.name} >  새 조직 추가` }
                    </span> :
                        <span>
                        새 상위 조직 추가
                    </span>
                    }
                </DialogTitle>
                <DialogBody>
                    <Field>
                        <Input name="full_name"
                               invalid={!!errors?.name}
                               value={form.name}
                               onChange={(e)=>setForm((old) => ({...old, name: e.target.value}))}
                               placeholder="그룹명을 입력해주세요." />
                        <ErrorMessage>{errors?.name}</ErrorMessage>
                    </Field>
                </DialogBody>
                <DialogActions className={`!mt-0`}>
                    <Button onClick={closeForm} color={'transparentMedium'} className={`!h-10`}>
                        취소
                    </Button>
                    <Button onClick={submitForm} color={'primaryMedium'} className={`!h-10`}>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default OrganizationForm;