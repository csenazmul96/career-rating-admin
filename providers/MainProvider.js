"use client"
import {SessionProvider} from "next-auth/react";
import {PageSidebarProvider} from "@/store/PageSidebarContext"
import {DataTableProvider} from "@/store/DataTableContext"
import SidebarProvider from "@/providers/SidebarProvider";
import {AuthContextProvider} from "@/store/AuthContext";
import {NotificationProvider} from "@/store/NotificationContext";
import {CommonContextProvider} from "@/store/CommonContext";

export default function Provider({children, session}) {
    return (
        <SessionProvider session={session}>
            <CommonContextProvider>
                <AuthContextProvider>
                    <DataTableProvider>
                        <NotificationProvider>
                            <PageSidebarProvider>
                                <SidebarProvider>
                                    {children}
                                </SidebarProvider>
                            </PageSidebarProvider>
                        </NotificationProvider>
                    </DataTableProvider>
                </AuthContextProvider>
            </CommonContextProvider>
        </SessionProvider>
    )
}