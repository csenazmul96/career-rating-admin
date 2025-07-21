'use server';

import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";
const contextPath = "/role-management-service/api/v1/private"

export async function getRoles () {
    const req = await fetchRequest(`${contextPath}/organization/composite-permissions`,{
        next: { tags: ['composite-permissions'] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function getRolesById (id) {
    const req = await fetchRequest(`${contextPath}/organization/composite-permissions/${id}`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function getPermissions () {
    const req = await fetchRequest(`${contextPath}/organization/group/permissions`)
    const res = await req.json();
    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function createRole (payload) {
    try {
        const request = await fetchRequest(`${contextPath}/organization/composite-permissions`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        if (request && request.ok) {
            revalidatePath('composite-permissions')
        }
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateRole (payload, id) {
    try {
        const request = await fetchRequest(`${contextPath}/organization/composite-permissions/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        if (request && request.ok) {
            revalidatePath('composite-permissions')
        }
        return res;

    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}

export async function deleteRole (id) {
    try {
        const request = await fetchRequest(`${contextPath}/organization/composite-permissions/${id}`, {
            method: "DELETE",
        });
        if (request && request.ok) {
            revalidatePath('composite-permissions')
            const res = await request.json();
            return res;
        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}