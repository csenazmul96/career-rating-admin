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
                            href="/design/members-and-message-management-design/membership-management-design/marketing-information/send-information"
                            className="block py-2 underline">Send information</Link>
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
