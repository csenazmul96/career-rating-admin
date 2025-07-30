import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import React from "react";

const RoleFormPermissionSingleElement = ({option, formData, handleCheckboxChange, disable}) => {
    return <li className={`px-4 py-3`}>
        <CheckboxField disabled={disable}>
            <Checkbox id={`permission-${option.id}`}
                      className={'cursor-pointer'}
                      disabled={disable}
                      checked={formData.permissions.find(item => ""+item.id === ""+option.id) ? true : false}
                      clickHandler={() => handleCheckboxChange(option, 'permissions')}
                      color="lmscheckbox" name="allow_embedding"/>
            <Label className="font-normal cursor-pointer text-black"
                   htmlFor={`permission-${option.id}`}>{option.koreanName}</Label>
        </CheckboxField>
    </li>
}

export default RoleFormPermissionSingleElement