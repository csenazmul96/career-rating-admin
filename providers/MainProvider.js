"use client"
import {SessionProvider} from "next-auth/react";
import {RoleContextProvider} from "@/store/RoleContext";
import {OrganizationContextProvider} from "@/store/OrganizationContext"
import {PageSidebarProvider} from "@/store/PageSidebarContext"
import {DataTableProvider} from "@/store/DataTableContext"
import SidebarProvider from "@/providers/SidebarProvider";
import {AuthContextProvider} from "@/store/AuthContext";
import {NotificationProvider} from "@/store/NotificationContext";

export default function Provider({children, session}) {
    return (
        <SessionProvider session={session}>
            <AuthContextProvider>
                <DataTableProvider>
                    <NotificationProvider>
                        <PageSidebarProvider>
                                <SidebarProvider>
                                        <RoleContextProvider>
                                                <OrganizationContextProvider>
                                                    {children}
                                                </OrganizationContextProvider>
                                        </RoleContextProvider>
                                </SidebarProvider>
                        </PageSidebarProvider>
                    </NotificationProvider>
                </DataTableProvider>
            </AuthContextProvider>
        </SessionProvider>
    )
}