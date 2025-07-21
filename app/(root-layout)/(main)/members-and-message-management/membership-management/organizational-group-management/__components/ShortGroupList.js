'use client';

import React, {useState, useRef, useEffect, useContext} from "react";

import {GoChevronDown, GoChevronUp} from "react-icons/go";
import OrganizationContext from "@/store/OrganizationContext";
import {ReactSortable} from "react-sortablejs";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
// import {ChevronDown, ChevronUp} from "@/components/sidebar/icons";
import {ChevronDown, ChevronUp, Folder, Tally2} from "lucide-react";

const SidebarItem = ({ menu, index, setActiveMenu, activeMenu, level, parentSlug = "" , stage, setGroups}) => {
    const {currentOrganization, setCurrentOrganization, isNewGroupAdded, setIsNewGroupAdded} = useContext(OrganizationContext);

    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef(null);


    const selectOrganizationGroup = (slug) => {
        setActiveMenu(slug);
    };

    const selectUnSelectMenu = (item) => {
        if (currentOrganization && currentOrganization.id === item.id) {
            setCurrentOrganization(null)
        } else {
            setCurrentOrganization(item);
        }
    };

    useEffect(() => {
        if (isNewGroupAdded && isNewGroupAdded.id === menu.id) {
            setTimeout(()=>{
                setIsOpen(true);
                setIsNewGroupAdded(false);
            }, 500)

        }
    }, [isNewGroupAdded]);

    const handleDropdown = (slug) => {
        setIsOpen((prev) => !prev); // Toggle the open state
    }

    const getTotalHeight = (element) => {
        let totalHeight = 0;

        if (element) {
            totalHeight += element.scrollHeight; // Height of the current submenu
            const submenus = element.querySelectorAll("ul"); // Find nested ul elements
            submenus.forEach((submenu) => {
                totalHeight += submenu.scrollHeight; // Add height of nested submenus
            });
        }
        return totalHeight;
    };


    useEffect(() => {
        if (submenuRef.current) {
            const totalHeight = getTotalHeight(submenuRef.current);
            submenuRef.current.style.maxHeight = isOpen ? `${totalHeight}px` : "0px";
        }
    }, [isOpen]);

    const bannerShort = (list) => {

    }

    return (
        <li key={menu.id} data-index={menu.id} className={`stage-${stage} `}>
            <div
                className={`group 
                ${stage === 2 ? " stage-2-div pl-12 relative z-10 before:content-[\'\'] before:absolute before:top-[20px] before:left-[28px] before:h-[1px] before:w-[8px] before:bg-borderColor" : ""} 
                ${stage === 3 ? " stage-3-div pl-20 relative z-10 before:content-[\'\'] before:absolute before:top-[20px] before:left-[56px] before:h-[1px] before:w-[12px] before:bg-borderColor" : ""} 
                flex items-center px-4 py-2  ${level === "first-level" ? 'text-base h-10' : 'text-base h-[42px] '} 
                cursor-pointer hover:bg-primaryLightColor hover:text-themeColor ${currentOrganization?.id === menu.id ? 'text-themeColor bg-primaryLightColor' : '' }`}
                onClick={() => selectOrganizationGroup(menu.id)}
                style={{ "--multiplier": stage }}>
                <div className="flex items-center gap-3 w-full">
                    {stage === 1 && <Folder size={20} className={`text-textSubColor`} /> }
                    <span className={`hover:text-themeColor leading-[normal] cursor-pointer ${currentOrganization?.id === menu.id ? 'text-themeColor font-bold ' : '' }`} onClick={()=>selectUnSelectMenu(menu)}>{menu.name} ({menu.totalNumberOfMembers }) </span>
                </div>
                <span onClick={() => handleDropdown(menu.id)} className={`group-hover:fill-themeColor  flex items-center justify-center gap-2`}>
                    {menu.subOrganizationGroupList && menu.subOrganizationGroupList.length ? (
                        <span className={`transition-transform duration-200`}>
                            {isOpen ? <ChevronUp size={20} className={`text-inputColor`} /> : <ChevronDown size={20} className={`text-inputColor`} />}
                        </span>
                    ) : ''}
                    <Tally2 size={20} className={`transform rotate-90 relative top-[5px] text-inputColor`} />
                </span>
            </div>

            {/* Submenu with dynamic height transition */}
            {menu.subOrganizationGroupList && (
                <ul
                    ref={submenuRef}
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out bg-white 
                    ${stage === 1 ? 'relative before:z-20 before:content-[\'\'] before:absolute before:top-0 before:left-[28px] before:h-full before:w-px before:bg-borderColor' : ''} 
                    ${stage === 2 ? 'relative before:z-20 before:content-[\'\'] before:absolute before:top-0 before:left-[56px] before:h-full before:w-px before:bg-borderColor' : ''}` }
                    style={{
                        maxHeight: isOpen ? `${getTotalHeight(submenuRef.current)}px` : "0px", // Dynamically set the max-height
                    }}
                >
                    <ReactSortable animation={200}
                                   className={"width_full d_inline_flex"}
                                   list={menu.subOrganizationGroupList}
                                   setList={bannerShort}>
                        {menu.subOrganizationGroupList.map((subItem, subIndex) => (
                            <SidebarItem
                                key={subItem.id}
                                menu={subItem}
                                index={`${index}-${subIndex}`}
                                setActiveMenu={setActiveMenu}
                                activeMenu={activeMenu}
                                setGroups={setGroups}
                                level="next-level"
                                stage={stage + 1}
                                parentSlug={'#'} // Ensure consistent slug accumulation
                            />
                        ))}
                    </ReactSortable>
                </ul>
            )}
        </li>
    );
};

export default SidebarItem;
