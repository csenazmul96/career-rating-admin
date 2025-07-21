import React, {useEffect, useState} from 'react';
import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import MultiStageGroupPicker
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/create/components/MultiStageGroupPicker";
import {ErrorMessage, Field} from "@/components/common/fieldset";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";

function EvaluationFormGroupPortion({form, groups, setForm, errors, evaluation}) {
    const handleOnChnage = (column, value) => {
        setForm((prev) => ({...prev, [column]: value}));
    }
    let [isOpen, setIsOpen] = useState(false)
    let [selectedGroup, setSelectedGroup] = useState(getEditEvaluationGroup())

    function getEditEvaluationGroup () {
      let group = evaluation ? groups.find((group) => +group.id === +evaluation.evaluationGroupId) : null;

      if (group && evaluation.evaluationSubGroupId){
        group = group.subGroups.find((group) => +group.id === +evaluation.evaluationSubGroupId);
          if (group && evaluation.evaluationSubSubGroupId){
              group = group.subGroups.find((group) => +group.id === +evaluation.evaluationSubSubGroupId);
          }
      }

        if (group) {
            return group
        } else {
            return null
        }
    }

    const handleCategorySelectClick = (grp) => {
        setSelectedGroup(grp)
        let parentId = grp.parentId ? grp.parentId : grp.id
        let secondId = grp.secondId ? grp.secondId : (grp.parentId ? grp.id : "")
        let subId = grp.parentId && grp.secondId ? grp.id : ""
        setForm((prev) => ({...prev, evaluationGroupId: parentId, evaluationSubGroupId: secondId, evaluationSubSubGroupId: subId}));
    }

    useEffect(() => {
        if (evaluation) {
            let data = {
                id: null,
                name: " ",
                parentId: null,
                secondId: null
            }

            if (evaluation.evaluationSubSubGroupId) {
                data.id = evaluation.evaluationSubSubGroupId;
                data.name = evaluation.evaluationSubSubGroupName;
                data.parentId = evaluation.evaluationGroupId;
                data.secondId = evaluation.evaluationSubGroupId;
            } else if (evaluation.evaluationSubGroupId) {
                data.id = evaluation.evaluationSubGroupId;
                data.name = evaluation.evaluationSubGroupName;
                data.parentId = evaluation.evaluationGroupId;
            } else {
                data.id = evaluation.evaluationGroupId;
                data.name = evaluation.evaluationGroupName;
            }
            setSelectedGroup(data)
        }

    }, [evaluation]);

    return (
        <>
        <div className="flex flex-col pb-16">
            <div className="flex border-b border-commonBorderColor">
                <div className="flex-1">
                    <FieldWrapper label="평가명" singleElement={true} className={`w-full`}>

                        <LmsStandardInputField
                            error={errors?.evaluationName}
                            name="evaluationName"
                            vertical={true}
                            fieldClass={'w-full'}
                            value={form.evaluationName}
                            placeholder="평가명을 입력하세요."
                            changeDataHandler={handleOnChnage}
                        />
                    </FieldWrapper>
                </div>
                <div className="flex-1">
                    <FieldWrapper label="평가그룹" className={``}>
                        <div className={`  flex-[0_1_auto]`}>
                            <Field className={`!pb-0 w-[270px] relative`}>
                                <div onClick={() => setIsOpen(!isOpen)}
                                     className={'flex justify-between bg-white h-[48px] relative py-[3px] px-[15px] border cursor-pointer border-borderColor '}>
                                    <span className={'pt-[10px] pl-0 '}>
                                        {selectedGroup ? selectedGroup.name : '그룹 선택'}
                                    </span>
                                    {!isOpen ?
                                        <span className={'pt-[12px] pr-0 '}><SlArrowDown/></span> :
                                        <span className={'pt-[12px] pr-0 '}><SlArrowUp/></span>
                                    }
                                </div>
                                {errors?.evaluationGroupId && <ErrorMessage className="!mt-0 absolute leading-[16px]">{errors.evaluationGroupId}</ErrorMessage>}
                            </Field>
                        </div>
                    </FieldWrapper>
                </div>
            </div>
        </div>
            <MultiStageGroupPicker
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedGroup={selectedGroup || null}
                groups={groups}
                callConfirmFunction={handleCategorySelectClick}/>
        </>
    );
}

export default EvaluationFormGroupPortion;