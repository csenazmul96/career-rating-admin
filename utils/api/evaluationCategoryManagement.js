'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";
const contextPath = "/lms-content-curriculum/api/v1/private";

export async function getEvaluationCategory () {
    const req = await fetchRequest(`${contextPath}/evaluation/group`,{
        next: { tags: ['evaluation-category'] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function createEvaluationNewParentCategory (payload) {
    try {
        const request = await fetchRequest(`${contextPath}/evaluation/group`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath('evaluation-category')
            return await request.json()
        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createEvaluationNewSubCategory (payload, id) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub/category/${id}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath('evaluation-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createEvaluationNewSubSubCategory (payload, id) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub-sub/category/${id}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath('evaluation-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteEvaluationParentCategory(groupId) {
    try {
        const request = await fetchRequest(`${contextPath}/course/category/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('evaluation-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteEvaluationSubCategory(groupId) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub/category/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('evaluation-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteEvaluationSubSubCategory(groupId) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub-sub/category/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('evaluation-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
