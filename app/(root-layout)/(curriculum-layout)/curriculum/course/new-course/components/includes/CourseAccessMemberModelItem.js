import {Checkbox, CheckboxField} from "@/components/common/checkbox";
import {Label} from "@/components/common/fieldset";
import React from "react";

const CourseAccessMemberModelItem = ({option, handleCheckboxChange, selectedMembers}) => {
    return <li className={`px-4 py-3 ${selectedMembers && selectedMembers.find(item => ""+item.id === ""+option.id) ? "bg-[#F4F9FF]" : ""}`}>
        <CheckboxField>
            <Checkbox id={`permission-${option.id}`}
                      className={'cursor-pointer'}
                      checked={selectedMembers && !!selectedMembers.find(item => "" + item.id === "" + option.id)}
                      clickHandler={() => handleCheckboxChange(option, 'permissions')}
                      color="lmscheckbox" name="allow_embedding"/>
            <Label className={`font-normal cursor-pointer hover:text-themeColor ${selectedMembers && selectedMembers.find(item => ""+item.id === ""+option.id) ? " text-themeColor" : "text-black "}`}
                   htmlFor={`permission-${option.id}`}>{option.name} ({option.memberId})</Label>
        </CheckboxField>
    </li>
}

export default CourseAccessMemberModelItem