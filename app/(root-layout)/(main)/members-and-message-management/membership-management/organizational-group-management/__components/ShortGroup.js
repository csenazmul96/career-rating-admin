"use client"; // Required for interactivity

import React, {useState} from "react";
import ShortGroupList
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/organizational-group-management/__components/ShortGroupList";
import {ReactSortable} from "react-sortablejs";

const ShortGroup = ({groups, setGroups}) => {
    const [activeMenu, setActiveMenu] = useState([]);


    const handleClick = (item)=>{
        setActiveMenu((prevList) => {
            if (prevList.includes(item)) {
                return prevList.filter((i) => i !== item);
            } else {
                return [...prevList, item];
            }
        });
    }
    const bannerShort = (list) => {
        setGroups(list)
    }

    return (
        <ReactSortable animation={200}
                       className={"width_full d_inline_flex"}
                       list={groups}
                       setList={bannerShort}>
            {groups && groups.map((item, index) => (
                <ShortGroupList key={index}
                                menu={item}
                                index={`parent-${index}`}
                                level={'first-level'}
                                stage={1}
                                setGroups={setGroups}
                                setActiveMenu={handleClick}
                                parentSlug={item.id}
                                activeMenu={activeMenu}
                />
            ))}
        </ReactSortable>
    );
};

export default ShortGroup;
