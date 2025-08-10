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

export async function getSingleAcademicRecords (id) {
    const req = await fetchRequest(`/academic/${id}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function deleteAcademicRecords (id) {
    const req = await fetchRequest(`/academic/${id}`,{
        method: 'DELETE',
    })
    const res = await req.json();

    if (req.ok) {
        revalidatePath('academic');
        return {...res.data, status: req.status};
    } else {
        throw new Error(JSON.stringify(res));
    }
}