'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";
const contextPath = "/lms-content-curriculum/api/v1/private";

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
