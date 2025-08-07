'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getAcademicRecords (params) {
    const req = await fetchRequest(`/academic?${new URLSearchParams(params)}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getSingleAcademicRecords (id) {
    const req = await fetchRequest(`/academic/${id}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}