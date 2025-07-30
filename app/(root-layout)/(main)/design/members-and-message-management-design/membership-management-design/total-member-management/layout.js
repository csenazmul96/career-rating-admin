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
                            href="/design/members-and-message-management-design/membership-management-design/total-member-management/member-type-2"
                            className="block py-2 underline">member list type 2</Link>
                    </li>
                    <li>
                        <Link
                            href="/design/members-and-message-management-design/membership-management-design/total-member-management/member-registration"
                            className="block py-2 underline">Member Registration</Link>
                    </li>
                    <li>
                        <Link
                            href="/design/members-and-message-management-design/membership-management-design/total-member-management/member-tab"
                            className="block py-2 underline">Member Tab</Link>
                    </li>
                    <li>
                        <Link
                            href="/design/members-and-message-management-design/membership-management-design/total-member-management/bulk-registration"
                            className="block py-2 underline">bulk registration</Link>
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
