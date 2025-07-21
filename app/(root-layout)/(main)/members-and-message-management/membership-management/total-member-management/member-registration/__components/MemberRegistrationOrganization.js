import {ErrorMessage, Field} from "@/components/common/fieldset";
import React, {useEffect, useState} from "react";
import {useOrganization} from "@/custom-hooks/useOrganization";
import LmsOrganizationSingleSelect from "@/components/common/form/organizations/LmsOrganizationSingleSelect";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";

const MemberRegistrationOrganization = ({setForm, errors, form, settings}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrg, setSelectedOrg] = useState(null);

    const { allOrganizations} = useOrganization();

    useEffect(() => {
        if(form.organizationGroupId && form.id){
            setSelectedOrg({id:form.organizationGroupId, name: form.organizationGroupName})
        }
    }, [form.id]);


    const changedOrganization = (item) => {
        if(item) {
            setSelectedOrg(item)
            setForm((prev) => ({
                ...prev,
                organizationGroupId: item.id
            }));
        }
        setIsOpen(false)
    }

    const requiredForId = (field) => { return settings?.some(
        setting =>
            setting.item === field &&
            setting.use.toLowerCase() === "yes"
    )};

    return (
        <>
            <div className="custom-common-row">
                <div className="custom-common-left-col">
                    <span className="common-label-style">
                        조직그룹
                        {requiredForId( 'Company Name') &&
                            <span  className="text-dangerColor">*</span>
                        }
                    </span>
                </div>
                <div className="custom-common-right-col">
                    <Field className={`!pb-0 w-[230px]`}>
                        <div onClick={()=>setIsOpen(!isOpen)}
                             className={`flex justify-between bg-white h-[48px]  py-[3px] px-[15px] border cursor-pointer relative z-20 border-borderColor ${ isOpen ? "border-placeholderColor border-b border-b-white" : "border-b border-borderColor" }`}>
                                    <span className={'pt-[10px] pl-0 '}>
                                        {selectedOrg ? selectedOrg.name : '그룹 선택'}
                                    </span>
                            {!isOpen ?
                                <span className={'pt-[12px] pr-0 '}><SlArrowDown/></span>
                                :
                                <span className={'pt-[12px] pr-0 '}><SlArrowUp /></span>
                            }
                        </div>
                        {errors?.organizationGroupId && <ErrorMessage className="!mt-0">{errors.organizationGroupId}</ErrorMessage>}
                    </Field>
                    {isOpen &&
                        <LmsOrganizationSingleSelect organizations={allOrganizations} callBack={changedOrganization}/>
                    }
                </div>
            </div>
        </>
    );
}

export default MemberRegistrationOrganization