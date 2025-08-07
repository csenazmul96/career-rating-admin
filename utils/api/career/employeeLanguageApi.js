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