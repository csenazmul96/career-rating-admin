"use server";

import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";

const contextPath = "/lms-content-curriculum/api/v1/private"

export async function createNewEvaluation(payload) {
    const res = await fetchRequest(`${contextPath}/evaluation`,{
        method: "POST",
        body: JSON.stringify(payload)
    })
    if (res.ok){
        revalidatePath('evaluation')
        return res.json()
    } else {
        return  res.json()
    }
}

export async function updateEvaluation(payload, id) {
    const res = await fetchRequest(`${contextPath}/evaluation/${id}`,{
        method: "PUT",
        body: JSON.stringify(payload)
    })
    if (res.ok){
        revalidatePath('evaluation')
        return res.json()
    } else {
        return  res.json()
    }
}

export async function imageUploadCommonFunction(payload, bucket='') {
    try {
        const request = await fetchRequest(`${contextPath}/upload/curriculum-file?bucketParam=${bucket}`, {
            method: "POST",
            body: payload
        });

        const data = await request.json();
        return data['data'][0];

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getEvaluations(params) {
    try {
        const res = await fetchRequest(`${contextPath}/evaluation?${ new URLSearchParams(params)}`,{
            next: { tags: ['evaluation'] },
        });
        const data = await res.json();
        return {evaluations: data.data, pagination: data.pagination}
    } catch (error) {
        console.error('Error in getPermissions:', error);
        throw error;
    }
}

export async function evaluationsWithoutPagination(params) {
    try {
        const res = await fetchRequest(`${contextPath}/evaluation/all?${ new URLSearchParams(params)}`,{
            next: { tags: ['all-evaluation'] },
        });
        const data = await res.json();
        return {evaluations: data.data, pagination: data.pagination}
    } catch (error) {
        console.error('Error in getPermissions:', error);
        throw error;
    }
}


export async function deleteEvaluation (id) {
    try {
        const request = await fetchRequest(`${contextPath}/evaluation/${id}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('evaluation')
            const res = await request.json();
            return res;
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteEvaluationQuestion (id) {
    try {
        const request = await fetchRequest(`${contextPath}/evaluation/question/${id}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            const res = await request.json();
            return res;
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getEvaluationById(id) {
    try {
        const res = await fetchRequest(`${contextPath}/evaluation/${id}`);

        const data = await res.json();
        return data.data
    } catch (error) {
        console.error('Error in evaluation', error);
        throw error;
    }
}