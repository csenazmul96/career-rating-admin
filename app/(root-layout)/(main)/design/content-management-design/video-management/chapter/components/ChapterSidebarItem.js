'use client';
import React, { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import Link from "next/link";
import {usePathname} from "next/navigation";
import ChapterSidebarItem from "@/app/(root-layout)/(content-layout)/components/ChapterSidebarItem";
const SidebarItem = ({ menu, index, setActiveMenu, activeMenu, level, parentSlug = "" }) => {

    const pathname = usePathname();

    const generateLink = (menu, parentSlug = "") => {

        if (!menu.slug) return "/";

        const normalizedParentSlug = parentSlug.replace(/\/$/, ""); // Remove trailing slash
        const normalizedSlug = menu.slug.replace(/^\//, "");

        if (normalizedParentSlug.endsWith(`/${normalizedSlug}`)) {
            return normalizedParentSlug;
        }

        const finalLink = normalizedParentSlug ? `/${normalizedParentSlug}/${normalizedSlug}`.replace("//", "/") : `/${normalizedSlug}`;

        // console.log(`Generated link for ${menu.label}:`, finalLink);
        return finalLink;
    };

    const menuLink = generateLink(menu, parentSlug);

    const isActive = menuLink === "/" ? pathname === "/" : pathname.startsWith(menuLink) && pathname !== "/";

    // console.log(`Menu: ${menu.label}, MenuLink: ${menuLink}, Pathname: ${pathname}, Active: ${isActive}`);


    const [isOpen, setIsOpen] = useState(isActive);
    const submenuRef = useRef(null);


    const toggleDropdown = (slug) => {
        setActiveMenu(slug);
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
        if (pathname === "/") {
            setIsOpen(false);
        }
    }, [pathname]);


    useEffect(() => {
        setIsOpen(isActive);
    }, [pathname, isActive]);

    useEffect(() => {
        if (submenuRef.current) {
            const totalHeight = getTotalHeight(submenuRef.current);
            submenuRef.current.style.maxHeight = isOpen ? `${totalHeight}px` : "0px";
        }
    }, [isOpen]);

    return (
        <li key={menu.id} data-index={menu.id}>
            <div
                className={`group flex items-center px-5 cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor ${isActive && pathname !== menuLink ? "text-themeColor pl-[0px] border-l-0" : ""}  ${
                    level === "next-level" ? "ml-[53px] border-l border-borderColor" : ""} ${pathname === menuLink ? "bg-leftMenuHoverColor text-themeColor" : ""} ${level === "next-level" && pathname === menuLink ? "bg-leftMenuHoverColor border-l border-themeColor text-themeColor" : ""}
     ${isActive ? 'text-themeColor' : ''} ${menu.dropdown ? "py-3 " : !menu.slug ? "py-3" : ""}`}
                onClick={() => toggleDropdown(menu.slug)}
            >
                <div className= {`flex items-center   w-full ${level === "next-level" ? "gap-0" : "gap-3"}`}>
                    <span className={`group-hover:fill-themeColor ${isActive ? 'fill-themeColor' : ''}`}>{menu.icon}</span>
                    {menu.dropdown ? (
                        <span className={`hover:text-themeColor ${isActive ? 'text-themeColor' : ''}`}>{menu.label}</span>
                    ) : (
                        <Link href={menuLink} className={`py-3 w-full`}>
                            <span className={`hover:bg-leftMenuHoverColor hover:text-themeColor ${isActive ? 'text-themeColor' : ''}`}>{menu.label}</span>
                        </Link>
                    )}
                </div>
                {menu.dropdown && (
                    <span
                        className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        <GoChevronDown />
                    </span>
                )}
            </div>

            {/* Submenu with dynamic height transition */}
            {menu.dropdown && (
                <ul
                    ref={submenuRef}
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out bg-white`}
                    style={{
                        maxHeight: isOpen ? `${getTotalHeight(submenuRef.current)}px` : "0px", // Dynamically set the max-height
                    }}
                >
                    {menu.dropdown.map((subItem, subIndex) => (
                        <ChapterSidebarItem
                            key={subItem.id}
                            menu={subItem}
                            index={`${index}-${subIndex}`}
                            setActiveMenu={setActiveMenu}
                            activeMenu={activeMenu}
                            level="next-level"
                            parentSlug={menuLink} // Ensure consistent slug accumulation
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SidebarItem;
