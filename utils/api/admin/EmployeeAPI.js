"use server";


import {fetchRequest} from "@/utils/fetchRequest";

export async function getEmployees(params) {
    try {
        const res = await fetchRequest(`/employees`);
        const data = await res.json();
        return { employees: data.data, pagination: data.meta };
    } catch (error) {
        console.error("Error in getPermissions:", error);
        throw error;
    }
}

export async function multipleEmployeeDelete(payload) {
    try {
        const request = await fetchRequest(
            `/employee/delete-multiple`,
            {
                method: "POST",
                body: JSON.stringify(payload),
            }
        );
        return request.json();
    } catch (error) {
        throw new Error(error.message);
    }
}