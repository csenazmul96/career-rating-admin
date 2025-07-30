// layout.js (or layout.tsx for TypeScript)
import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <>

            <nav>
                <ul className="inline-flex gap-x-3 mb-6 py-1 px-5 border ">
                    <li>
                        <Link
                            href="/design/members-and-message-management-design/membership-management-design/administrator/administrator-registration"
                            className="block py-2 underline">administrator registration</Link>
                    </li>
                    <li>
                        <Link
                            href="/design/members-and-message-management-design/membership-management-design/administrator/administrator-type-management"
                            className="block py-2 underline">administrator type management</Link>
                    </li>

                </ul>
            </nav>
            <>
                {children}
            </>

        </>
    );
};

export default Layout;
