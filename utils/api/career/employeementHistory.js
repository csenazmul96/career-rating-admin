'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getEmploymentHistory (params) {
    const req = await fetchRequest(`/employment-histories?${new URLSearchParams(params)}`, {
        next: { tags: ['employment-histories'] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getSingleEmploymentHistory (id) {
    const req = await fetchRequest(`/employment-histories/${id}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function storeEmploymentHistory (payload) {
    try {
        const request = await fetchRequest(`/employment-histories`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("employment-histories")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function updateEmploymentHistory (payload, id) {
    try {
        const request = await fetchRequest(`/employment-histories/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("employment-histories")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteEmployeHistory (id) {
    const req = await fetchRequest(`/employment-histories/${id}`,{
        method: 'DELETE',
    })
    const res = await req.json();

    if (req.ok) {
        revalidatePath('employment-histories');
        return {...res.data, status: req.status};
    } else {
        throw new Error(JSON.stringify(res));
    }
}