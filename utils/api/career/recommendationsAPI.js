'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getRecommendations (params) {
    const req = await fetchRequest(`/recommendations?${new URLSearchParams(params)}`, {
        next: { tags: ['recommendations'] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getSingleRecommendations (id) {
    const req = await fetchRequest(`/recommendations/${id}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function storeRecommendations (payload) {
    try {
        const request = await fetchRequest(`/recommendations`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("recommendations")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function updateRecommendations (payload, id) {
    try {
        const request = await fetchRequest(`/recommendations/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("recommendations")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteRecommendations (id) {
    const req = await fetchRequest(`/recommendations/${id}`,{
        method: 'DELETE',
    })
    const res = await req.json();

    if (req.ok) {
        revalidatePath('recommendations');
        return {...res.data, status: req.status};
    } else {
        throw new Error(JSON.stringify(res));
    }
}


export async function sortRecommendations (payload) {
    try {
        const request = await fetchRequest(`/recommendations/sort`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}