'use client';
import React, { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { usePathname, useRouter, useSearchParams} from "next/navigation";
import {Folder} from "@/app/(root-layout)/(content-layout)/components/icons";
import {useCurriculumContext} from "@/store/CurriculumContext";

const  CurriculumCategorySidebarItem = ({ menu, index, level,  slug }) => {
    const {setCurrentGroup } = useCurriculumContext()
    const pathname = usePathname();
    const params = useSearchParams()
    const {replace} = useRouter();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const oldParams = new URLSearchParams(params);
        let ids = []

        let contentGroupId = oldParams.get('contentGroupId') || null
        if (contentGroupId)
            ids.push(contentGroupId)

        let contentSubGroupId = oldParams.get('contentSubGroupId') || null
        if (contentSubGroupId)
            ids.push(contentSubGroupId)

        let contentSubSubGroupId = oldParams.get('contentSubSubGroupId') || null
        if (contentSubSubGroupId)
            ids.push(contentSubSubGroupId)

            if (level === 1 && ids[0]) {
                setIsActive(menu.id === +ids[0] ? true : false);
            } else if (level === 2 && ids[1]) {
                setIsActive(menu.id === +ids[1] ? true : false);
            } else if (level === 3 && ids[2]) {
                setIsActive(menu.id === +ids[2] ? true : false);
            }

    }, [params]);

    const [isOpen, setIsOpen] = useState(isActive);
    const submenuRef = useRef(null);

    const toggleDropdown = (menu) => {
        setCurrentGroup(menu);
        setIsOpen((prev) => !prev); // Toggle the open state
    };

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
        setIsOpen(isActive);
    }, [pathname, isActive]);

    useEffect(() => {
        if (submenuRef.current) {
            const totalHeight = getTotalHeight(submenuRef.current);
            submenuRef.current.style.maxHeight = isOpen ? `${totalHeight}px` : "0px";
        }
    }, [isOpen]);


    const changeRoute = (menu) => {
        let newSlug =   null
        if (level > 1)
            newSlug = slug.split('/')

        let contentGroupId =  level > 1 ? newSlug[0] : menu.id
        let contentSubGroupId =  level === 2 || level === 3 ? newSlug[1] : ''
        let contentSubSubGroupId = level === 3 ? newSlug[2] : ''

        setCurrentGroup({...menu, parentId: contentGroupId, secondId: contentSubGroupId  });

        replace(`${pathname}?${new URLSearchParams({
            contentGroupId: contentGroupId,
            contentSubGroupId: contentSubGroupId,
            contentSubSubGroupId: contentSubSubGroupId,
            page: 1})}`);
    }


    return (
        <li key={menu.id} data-index={menu.id}>
            <div
                className={`group flex items-center px-5 cursor-pointer hover:text-themeColor 
                ${level === 1 || level === 3   ? "hover:bg-leftMenuHoverColor " : ""}
                ${ level === 2 ? "ml-[30px] border-l border-borderColor" : ""}    
                ${ level === 3 ? "ml-[50px] border-l border-borderColor" : ""}    
                ${isActive ? 'text-themeColor ' : ''} 
                ${menu.subGroups && menu.subGroups.length ? "py-3 " : !menu.id ? "py-3" : ""}
                ${level === 1 && isActive || level === 3 && isActive ? "bg-leftMenuHoverColor" : ""}
                ${ level === 3 && isActive ? "border-l border-themeColor" : ""}
                ${ level === 2  ? "border-l border-white" : ""}
                `}

                onClick={() => toggleDropdown(menu)}
            >
                <div className= {`flex items-center   w-full ${level > 1 ? "gap-0" : "gap-3"}`}>
                    <span className={`group-hover:fill-themeColor ${isActive ? 'fill-themeColor' : ''}`}>{level === 1 && <Folder/>}</span>
                    {menu.subGroups && menu.subGroups.length? (
                        <span onClick={() => changeRoute(menu)} >{menu.name}</span>
                    ) : (
                        <span className={`py-3 w-full cursor-pointer`} onClick={() => changeRoute(menu)}>
                            <span  >{menu.name}</span>
                        </span>
                    )}
                </div>
                {menu.subGroups && menu.subGroups.length ?  (
                    <span
                        className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        <GoChevronDown />
                    </span>
                ): ''}
            </div>

            {/* Submenu with dynamic height transition */}
            {menu.subGroups && (
                <ul
                    ref={submenuRef}
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out bg-white`}
                    style={{
                        maxHeight: isOpen ? `${getTotalHeight(submenuRef.current)}px` : "0px", // Dynamically set the max-height
                    }}
                >
                    {menu.subGroups.map((subItem, subIndex) => (
                        <CurriculumCategorySidebarItem
                            key={subItem.id}
                            menu={subItem}
                            index={`${index}-${subIndex}`}

                            level={level+1}
                            slug={slug+'/'+subItem.id}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default CurriculumCategorySidebarItem;
