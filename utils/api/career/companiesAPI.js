'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getCompanies (params) {
    const req = await fetchRequest(`/companies?${new URLSearchParams(params)}`,{
        next: { tags: ['companies'] },
    })
    const res = await req.json();

    if (req.ok) {
        return {companies: res.data, pagination: res.meta};
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getSingleCompanies (id) {
    const req = await fetchRequest(`/companies/${id}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function storeCompany (payload) {
    const req = await fetchRequest(`/companies`,{
        method: 'POST',
        body: JSON.stringify(payload)
    })
    const res = await req.json();
    if (req.status !== 200) {
        return {...res, status: req.status};
    } else {
        revalidateTag('companies')
        return {...res.data, status: req.status};
    }

}
export async function updateCompany (payload, id) {
    const req = await fetchRequest(`/companies/${id}`,{
        method: 'PUT',
        body: JSON.stringify(payload)
    })
    const res = await req.json();
    if (req.status !== 200) {
        return {...res, status: req.status};
    } else {
        revalidateTag('companies')
        return {...res.data, status: req.status};
    }
}