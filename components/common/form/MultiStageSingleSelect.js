"use client";
import React, { useState, useEffect, useRef } from 'react';
import {ChevronDown, ChevronUp, ChevronLeft, ChevronRight} from "lucide-react";

const MultiStageSingleSelect = ({    selected,
                                  setSelected = () =>{},
                                  dataList=[],
                                  classes = ''}) => {
    const [open, setOpen] = useState(false);
    const [finalSelection, setFinalSelection] = useState(selected );

    useEffect(()=> {
        setFinalSelection(selected);
    }, [selected]);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    const renderButtonText = () => {
        return finalSelection ? finalSelection.name : 'Select an option';
    };

    const [parentItem, setParentItem] = useState([])
    const [currentShowList, setCurrentShowList] = useState(dataList)
    const [level, setLevel] = useState(0)

    const selectGroup = (grp) => {
        if (level === 0) {
            setLevel(1)
            setParentItem(grp)
        } else if (level === 1) {
            setLevel(2)
        }

        setCurrentShowList(grp.subGroups)
    }

    const backStep = () => {
        if (level === 1) {
            setLevel(0)
            setCurrentShowList(dataList)
        } else if (level === 2) {
            setLevel(1)
            setCurrentShowList(parentItem.subGroups)
        }
    }

    const handleToggleClick = () => {
        setCurrentShowList(dataList);
        setOpen(!open);
        setParentItem(null)
        setLevel(0)
    }
    const handleMenuFinalSelect = (item) => {
        let parentId = null;
        let secondParentId = null;
        let ids = [item.id];

        if (level === 2) {
            secondParentId = item.parent_id;
            parentId = parentItem.id;
            ids.push(parentId, secondParentId);
        } else if (level === 1) {
            secondParentId = null
            parentId = item.parent_id;
            ids.push(parentId);
        } else {
            secondParentId = null;
            parentId = null;
        }

        setFinalSelection({...item, parentId, secondParentId, ids: ids});
        setSelected({...item, parentId, secondParentId, ids: ids});

        setCurrentShowList(dataList);
        setOpen(!open);
        setParentItem(null)
        setLevel(0)
    }

    return (
        <div ref={dropdownRef} className={`relative inline-block text-left ${classes ? classes : "w-[270px]"} `}>
            <button
                onClick={ handleToggleClick}
                className={`w-full border relative overflow-hidden border-borderColor h-[48px] px-4 py-2 bg-white flex justify-between items-center focus:outline-none`}
            >
                    <span className={`text-base text-inputColor truncate`}>
                        {renderButtonText()}
                    </span>
                <span className={`absolute top-1/2 -translate-y-1/2 bg-white pr-4 right-0`}>
                        {!open ?
                            <ChevronDown size={24} className="text-inputColor" />
                            :
                            <ChevronUp size={24} className="text-inputColor" />
                        }
                    </span>
            </button>

            {open && (
                <div className={`absolute z-30 bg-white border-t-0 border border-borderColor w-full mt-[-2px] animate-fade-in ${open && "shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]"}`}>

                    {level > 0 &&
                        <div onClick={backStep} className={`flex items-center cursor-pointer px-3 min-h-[48px] py-3 text-base text-themeColor hover:bg-primaryLightColor-50 hover:font-bold transition-colors duration-150 ease-in-out border-t border-b border-borderColor`}>
                            <ChevronLeft size={20} className="mr-2 text-inputColor" />
                            <span>Back</span>
                        </div>
                    }
                    <div className="pr-1">
                        <div className="custom-curriculum-scrollbar max-h-[230px] overflow-y-auto">
                            {currentShowList.map((menu) => (
                                <div
                                    key={menu.id}
                                    className={`flex justify-between items-center cursor-pointer px-4 pr-[7px] min-h-[48px] py-3 text-base text-[#000B17] hover:font-bold hover:text-themeColor transition-colors duration-150 ease-in-out
                                                ${ finalSelection?.id === menu.id
                                    || finalSelection?.parentId === menu.id
                                    || finalSelection?.secondParentId === menu.id
                                    || finalSelection?.ids?.includes(menu.id) ? 'bg-blue-100 text-themeColor font-bold' : ''}`}>
                                    <p className={'w-full'} onClick={()=>handleMenuFinalSelect(menu)}>{menu.name}</p>

                                    {menu.subGroups.length ?
                                        <span onClick={() =>selectGroup(menu)}>
                                            <ChevronRight size={24} className="rotate-270 text-inputColor font-bold" />
                                        </span> : ''
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiStageSingleSelect;

