import FieldWrapper from "@/components/common/form/FieldWrapper";
import React, {useEffect, useState} from "react";
import ContentGroupPicker from "@/app/(root-layout)/(main)/design/components/ContentGroupPicker";
import {ErrorMessage, Field} from "@/components/common/fieldset";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";
import {useContentContext} from "@/store/ContentContext";

export default function GroupSelect({video, setFormData, formData}) {
    const {chapterGroup} = useContentContext();
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (video) {
            let data = {
                id: null,
                name: " ",
                parentId: null,
                secondId: null
            }

            if (video.contentSubSubGroup) {
                data.id = video.contentSubSubGroup.id;
                data.name = video.contentSubSubGroup.name;
                data.parentId = video.contentGroup.id;
                data.secondId = video.contentSubGroup.id;
            } else if (video.contentSubGroup) {
                data.id = video.contentSubGroup.id;
                data.name = video.contentSubGroup.name;
                data.parentId = video.contentGroup.id;
            } else {
                data.id = video.contentGroup.id;
                data.name = video.contentGroup.name;
            }
            setSelectedGroup(data)
        }
    }, [video]);

    const groupSelectHandler = (group) => {
        if (group) {
            setSelectedGroup(group);

            let groupId =   ""
            let subGroupId =  ""
            let subSubGroupId = ""

            if (group.secondId && group.parentId) {
                groupId = group.parentId
                subGroupId = group.secondId
                subSubGroupId = group.id
            } else if (group.parentId) {
                groupId = group.parentId
                subGroupId = group.id
                subSubGroupId = ""
            } else {
                groupId = group.id
                subGroupId = ""
                subSubGroupId = ""
            }

            setFormData({
                ...formData,
                groupId,
                subGroupId,
                subSubGroupId
            })
        }
    }

    return (
        <>
            <FieldWrapper label="그룹">
                <div className={`  flex-[0_1_auto]`}>
                    <Field className={`!pb-0 w-[230px]`}>
                        <div onClick={()=>setIsOpen(!isOpen)}
                             className={'flex justify-between bg-white h-[48px] relative py-[3px] px-[15px] border cursor-pointer border-borderColor '}>
                                    <span className={'pt-[10px] pl-0 '}>
                                        {selectedGroup ? selectedGroup.name : '피그마의 정석'}
                                    </span>
                            {!isOpen ?
                                <span className={'pt-[12px] pr-0 '}><SlArrowDown/></span> : <span className={'pt-[12px] pr-0 '}><SlArrowUp/></span>
                            }
                        </div>
                    </Field>
                </div>
            </FieldWrapper>

            <ContentGroupPicker
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedGroup={selectedGroup || null}
                callConfirmFunction={groupSelectHandler} />
        </>
    );
}