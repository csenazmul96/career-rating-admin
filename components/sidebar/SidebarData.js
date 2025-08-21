import {LayoutDashboard, LayoutList, Monitor, Package, Phone, Users, ChartPie, Building2} from "lucide-react";

export const menuItems = [
    {
        id: "1",
        label: "대시보드",
        icon: <LayoutDashboard size={16} />,
        slug:'/'
    },
    {
        id: "11",
        label: "Employee Management",
        icon: <Users size={16} />,
        slug:'/employee-management',
        dropdown: [
            { id: "12", label: "Employees", slug: '/employees' },
        ],
    },
    {
        id: "12",
        label: "Company Management",
        icon: <Building2 size={16} />,
        slug:'/company-management',
        dropdown: [
            { id: "21", label: "Company", slug: '/companies' },
        ],
    },


];
