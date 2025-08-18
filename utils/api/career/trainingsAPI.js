'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getTrainings (params) {
    const req = await fetchRequest(`/trainings?${new URLSearchParams(params)}`, {
        next: { tags: ['trainings'] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getSingleTrainings (id) {
    const req = await fetchRequest(`/trainings/${id}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function storeTrainings (payload) {
    try {
        const request = await fetchRequest(`/trainings`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("trainings")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function updateTrainings (payload, id) {
    try {
        const request = await fetchRequest(`/trainings/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("trainings")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteTrainings (id) {
    const req = await fetchRequest(`/trainings/${id}`,{
        method: 'DELETE',
    })
    const res = await req.json();

    if (req.ok) {
        revalidatePath('trainings');
        return {...res.data, status: req.status};
    } else {
        throw new Error(JSON.stringify(res));
    }
}


export async function sortTrainings (payload) {
    try {
        const request = await fetchRequest(`/trainings/sort`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}