'use server';

import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";

export async function getGroups (endpoint, tag='') {
    const req = await fetchRequest(`${endpoint}`,{
        next: { tags: [tag] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function createEditParentGroup (payload, endPoint, tag='') {
    try {
        const request = await fetchRequest(`${endPoint}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath(tag)
            return await request.json()
        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createEditSubGroup (payload, id, endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}/${id}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath(tag)
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createEditSubSubGroup (payload, id, endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}/${id}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath(tag)
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteParentGroup(groupId, endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath(tag)
            return request.json()
        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteSubGroup(groupId, endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath(tag)
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteSubSubGroup(groupId, endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath(tag)
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
