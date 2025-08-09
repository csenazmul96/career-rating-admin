'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getsEmployeeLanguage (params) {
    const req = await fetchRequest(`/employee-languages?${new URLSearchParams(params)}`,{
        next: { tags: ['employee-language'] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function createEmployeeLanguage (payload) {
    try {
        const request = await fetchRequest(`/employee-languages`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        const res = await request.json();
revalidateTag("employee-language")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateEmployeeLanguage (payload, id) {
    try {
        const request = await fetchRequest(`/employee-languages/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
revalidateTag("employee-language")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteEmployeeLanguage ( id) {
    try {
        const request = await fetchRequest(`/employee-languages/${id}`, {
            method: "DELETE",
        });
        const res = await request.json();
revalidateTag("employee-language")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}