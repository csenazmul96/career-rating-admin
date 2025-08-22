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