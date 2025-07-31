'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";

export async function getsEmployee (params) {
    const req = await fetchRequest(`/employees?${new URLSearchParams(params)}`,{
        next: { tags: ['employees'] },
    })
    const res = await req.json();

    if (req.ok) {
        return {employees: res.data, pagination: res.meta};
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function checkIfEmployeeExists (payload) {
    try {
        const request = await fetchRequest(`/employees/check-exists`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        return request.status === 200;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function storeEmployee (payload) {
    try {
        const request = await fetchRequest(`/employees`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
