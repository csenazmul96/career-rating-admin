'use server';

import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";

const contextPath = "/lms-registration-membership/api/v1/private"

export async function getOrganizationGroup () {
    try {
        const req = await fetchRequest(`${contextPath}/organization/group`,{
            next: { tags: ['organization-group'] }
        });
        let data = null;

        if(req.status === 200){
            data = await req.json();
            return {organizations: data.data, pagination: data.pagination}
        }
    } catch (error) {
        console.error('Error in getPermissions:', error);
        throw error;
    }
}


export async function createOrganizationGroup (payload) {
    try {
        const request = await fetchRequest(`${contextPath}/organization/group`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        const res = await request.json();

        if (request && request.ok) {
            revalidatePath('organization-group')
            return res['data'];
        } else {
            return {
                errors: formatErrors(res.errors)
            };
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


export async function updateOrganizationGroup (id, payload) {
    try {
        const request = await fetchRequest(`${contextPath}/organization/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });

        const res = await request.json();

        if (request && request.ok) {
            revalidatePath('organization-group')
            return res['data'];
        } else {
            return {
                errors: formatErrors(res.errors)
            };
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteOrganizationGroup (id) {
    try {
        const request = await fetchRequest(`${contextPath}/organization/${id}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('organization-group')
            return true;
        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}