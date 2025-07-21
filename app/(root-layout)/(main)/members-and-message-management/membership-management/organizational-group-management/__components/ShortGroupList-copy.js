'use client';
import React, { useState, useRef, useEffect } from "react";

import { GoChevronDown } from "react-icons/go";
import Link from "next/link";
const ShortGroupList = ({ menu, index, setActiveMenu, activeMenu, level, parentSlug = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef(null); // Reference to submenu for dynamic height
    const [initActiveMenu , setInitActiveMenu] = useState(true) //at reload first calculate active menu height

    const toggleDropdown = (slug) => {
        setActiveMenu(slug);
        setIsOpen((prev) => !prev); // Toggle the open state
    };

    const generateLink = (menu, parentSlug = "") => {
        const normalizedParentSlug = parentSlug.replace(/\/$/, "");
        const normalizedSlug = menu.id.replace(/^\//, "");

        if (normalizedParentSlug.endsWith(normalizedSlug)) {
            return normalizedParentSlug;
        }

        const link = `${normalizedParentSlug}/${normalizedSlug}`;
        return link;
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
        if (submenuRef.current) {
            const totalHeight = getTotalHeight(submenuRef.current); // Get the total height of the submenu and all nested levels
            submenuRef.current.style.maxHeight = isOpen ? `${totalHeight}px` : "0px";
        }
    }, [isOpen]);

    useEffect(()=> {
        if (activeMenu.length && initActiveMenu && parentSlug === activeMenu[0]){
            setInitActiveMenu(false)
            toggleDropdown(parentSlug)
            setIsOpen(true)
        }
    }, [activeMenu])

    return (
        <li key={index}>
            <div
                className={`group flex items-center px-5 py-3 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor ${
                    level === "next-level" ? "pl-[36px]" : ""} ${activeMenu.includes(menu.id) ? 'text-themeColor' : ''}`}
                onClick={() => toggleDropdown(menu.id)}
            >
                <div className="flex items-center gap-3 w-full">
                    <span className={`group-hover:fill-themeColor ${activeMenu.includes(menu.id) ? 'fill-themeColor' : ''}`}>{menu.icon}</span>
                    {menu.subOrganizationGroupList ? (
                        <span className={`hover:text-themeColor ${activeMenu.includes(menu.id) ? 'text-themeColor' : ''}`}>{menu.label}</span>
                    ) : (
                        <Link href={generateLink(menu, parentSlug)}>
                            <span className={`hover:bg-leftMenuHoverColor hover:text-themeColor ${activeMenu.includes(menu.id) ? 'text-themeColor' : ''}`}>{menu.label}</span>
                        </Link>
                    )}
                </div>
                {menu.subOrganizationGroupList && (
                    <span
                        className={`transition-transform duration-200 ${
                            activeMenu.includes(menu.id) ? "rotate-180" : ""
                        }`}
                    >
                        <GoChevronDown />
                    </span>
                )}
            </div>

            {/* Submenu with dynamic height transition */}
            {menu.subOrganizationGroupList && (
                <ul
                    ref={submenuRef}
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out bg-white`}
                    style={{
                        maxHeight: isOpen ? `${getTotalHeight(submenuRef.current)}px` : "0px", // Dynamically set the max-height
                    }}
                >
                    {menu.subOrganizationGroupList.map((subItem, subIndex) => (
                        <ShortGroupList
                            key={subIndex}
                            menu={subItem}
                            index={`${index}-${subIndex}`}
                            setActiveMenu={setActiveMenu}
                            activeMenu={activeMenu}
                            level="next-level"
                            parentSlug={generateLink(menu, parentSlug)} // Ensure consistent slug accumulation
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default ShortGroupList;
