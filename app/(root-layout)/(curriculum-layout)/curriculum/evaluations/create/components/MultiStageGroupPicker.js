import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {Folder} from "@/app/(root-layout)/(content-layout)/components/icons";
import {ChevronDown, ChevronUp} from "lucide-react";

const MultiStageGroupPicker = ({isOpen, setIsOpen, groups = [], selectedGroup = null, callBackFunction = ()=>{}, callConfirmFunction = ()=>{}, showArrow=true}) => {
    const [activeGroup, setActiveGroup] =  useState(selectedGroup);
    const [currentSubGroup, setCurrentSubGroup] = useState(null);

    const getActiveStatus = (level) => {
        if (activeGroup) {
            if (level === 1) {
                return activeGroup.parentId ? activeGroup.parentId : activeGroup.id
            } else if (level === 2) {
                return activeGroup.secondId ? activeGroup.secondId : activeGroup.id
            } else if (level === 3) {
                return activeGroup.parentId && activeGroup.secondId ? activeGroup.id : null
            }
        }
        return null
    }

    const confirm = () => {
        setIsOpen(false)
        callConfirmFunction(activeGroup)
    }

    const hasThirdLevel = (group) => group.subGroups.some(
        subGroup => Array.isArray(subGroup.subGroups) && subGroup.subGroups.length > 0
    );
    useEffect(()=>{
        if (selectedGroup){
            setActiveGroup(selectedGroup)
            setCurrentSubGroup(selectedGroup ?   selectedGroup.secondId ? selectedGroup.secondId : selectedGroup.id : null )
        }
    }, [selectedGroup])
    return (
        <Dialog size="w500" open={isOpen} onClose={setIsOpen}>
            <DialogTitle>그룹 선택</DialogTitle>

            <DialogBody>
                {groups ?
                    <div className="border border-borderColor">
                        <ul className={`max-h-[240px] custom-siderbar-scrollbar flex flex-col`}>
                            {groups.map((item, index) => (
                                <li key={index} className={`flex flex-col ${!hasThirdLevel(item) && item.subGroups.length ? 'to-2nd-level' : ''}`}>
                                    <div
                                        onClick={() => {
                                            callBackFunction(item)
                                            setActiveGroup(item)
                                        }}
                                        className={`${getActiveStatus(1) === item.id ? 'bg-[#F4F9FF] text-themeColor' : ''}  cursor-pointer flex items-center gap-3 text-textSubColor  text-[13px]  hover:text-themeColor hover:bg-[#F4F9FF] h-[36px] py-[8px] px-4`}>
                                        <Folder size={16} />
                                        <span>{item.name}</span>
                                    </div>
                                    {item.subGroups.length ? (
                                        <ul className= {`ml-[48px] ${!hasThirdLevel(item) && item.subGroups.length ? 'to-2nd-level ul !ml-[24px]' : ''} ${hasThirdLevel(item) && item.subGroups.length ? 'ml-[44px]' : ''}`}>
                                            {item.subGroups.map((subItem) => (
                                                <li key={subItem.id}
                                                    className={` ${!subItem.subGroups.length ? "h-[36px] flex items-center py-[8px]" : "hello not"} hover:border-themeColor hover:text-themeColor  text-textSubColor font-normal text-[13px] ${!hasThirdLevel(item) && item.subGroups.length ? ' py-[8px] px-[20px] border-l border-borderColor hover:border-themeColor hover:text-themeColor hover:bg-[#F4F9FF]   text-textSubColor font-normal text-[13px]' : ''} ${hasThirdLevel(item) && item.subGroups.length ? 'to-3nd-level li' : ''}` } >
                                                    {subItem.subGroups.length ? (
                                                            <>
                                                                <div
                                                                    onClick={() => {
                                                                        callBackFunction({...subItem, parentId: item.id})
                                                                        setActiveGroup({...subItem, parentId: item.id})
                                                                    }}
                                                                    className={`${getActiveStatus(2) === subItem.id ? '  text-themeColor border-themeColor' : ''} ${hasThirdLevel(item) && item.subGroups.length ? 'to-3nd-level pl-0' : ''}  cursor-pointer flex items-start justify-between gap-3 text-textSubColor  text-[13px]  hover:text-themeColor h-[36px]  py-[8px] px-4`}>
                                                                    <span className={''}>{subItem.name}</span>
                                                                    {showArrow &&
                                                                        <span className={'justify-end'} onClick={() => setCurrentSubGroup(currentSubGroup === subItem.id ? null : subItem.id)} >
                                                                        {currentSubGroup === subItem.id ?
                                                                            <ChevronUp size={16} />
                                                                            :
                                                                            <ChevronDown size={16} />
                                                                        }
                                                                    </span>
                                                                    }
                                                                </div>
                                                                {currentSubGroup === subItem.id &&
                                                                    <ul>
                                                                        {subItem.subGroups.map((third, i) => (
                                                                            <li key={`third ${third.id}`}
                                                                                onClick={() => {
                                                                                    callBackFunction({
                                                                                        ...third,
                                                                                        parentId: item.id,
                                                                                        secondId: subItem.id
                                                                                    })
                                                                                    setActiveGroup({
                                                                                        ...third,
                                                                                        parentId: item.id,
                                                                                        secondId: subItem.id
                                                                                    })
                                                                                }}
                                                                                className={`  ${getActiveStatus(3) === third.id ? 'bg-[#F4F9FF] text-themeColor border-l border-themeColor' : ''} cursor-pointer py-[8px] px-[20px] border-l border-borderColor hover:border-themeColor hover:text-themeColor hover:bg-[#F4F9FF]  text-textSubColor font-normal  text-[13px]`}>
                                                                                <span className={`border-themeColor`} >{third.name}</span>

                                                                            </li>
                                                                        ))
                                                                        }
                                                                    </ul>
                                                                }
                                                            </>
                                                        ) :
                                                        <span
                                                            onClick={() => {
                                                                callBackFunction({
                                                                    ...subItem,
                                                                    parentId: item.id
                                                                })
                                                                setActiveGroup({
                                                                    ...subItem,
                                                                    parentId: item.id
                                                                })
                                                            }}
                                                            className={`${getActiveStatus(2) === subItem.id ? ' text-themeColor border-themeColor' : ''} items-center  cursor-pointer  w-full flex `}>{subItem.name} v</span>
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    ):''}
                                </li>
                            ))}
                        </ul>
                    </div>
                    : ''
                }
            </DialogBody>
            <DialogActions>
                <Button color="transparentMedium" className={`h-[40px]`} onClick={() => setIsOpen(false)}>
                    취소
                </Button>
                <Button color="primaryMedium" className={`h-[40px]`}
                        onClick={confirm}>확인</Button>
            </DialogActions>
        </Dialog>
    );
}

export default MultiStageGroupPicker