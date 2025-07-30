import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import React from "react";

const RoleFormPermissionGroupSingleElement = ({option, formData, hangleGroupClick, selectGroup, disable}) => {
  const getCheckedStatus = () => {
    let status = false
      if(formData.permissions.find(obj => obj.groupId === option.id)){
        status = true;
      }
    return status
  }

  return <li className={`px-4 py-3`}>
    <CheckboxField disabled={disable}>
      <Checkbox id={`option-${option.id}`}
                className={'cursor-pointer'}
                checked={getCheckedStatus()}
                disabled={disable}
                clickHandler={(e) => hangleGroupClick(option, e)}
                color="lmscheckbox" name="allow_embedding"/>
      <Label className="font-normal cursor-pointer text-black" onClick={()=>selectGroup(option)}>{option.koreanName}</Label>
    </CheckboxField>
  </li>
}
export default RoleFormPermissionGroupSingleElement