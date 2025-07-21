'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath} from "next/cache";
const contextPath = "/lms-content-curriculum/api/v1/private";

export async function getCurriculumCategory () {
    const req = await fetchRequest(`${contextPath}/course/category`,{
        next: { tags: ['course-category'] },
    })
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function createCurriculumNewParentCategory (payload) {
    try {
        const request = await fetchRequest(`${contextPath}/course/category`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath('course-category')
            return await request.json()
        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createCurriculumNewSubCategory (payload, id) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub/category/${id}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath('course-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createCurriculumNewSubSubCategory (payload, id) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub-sub/category/${id}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (request && request.ok) {
            revalidatePath('course-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteCurriculumParentCategory(groupId) {
    try {
        const request = await fetchRequest(`${contextPath}/course/category/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('course-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteCurriculumSubCategory(groupId) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub/category/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('course-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteCurriculumSubSubCategory(groupId) {
    try {
        const request = await fetchRequest(`${contextPath}/course/sub-sub/category/${groupId}`, {
            method: "DELETE"
        });

        if (request && request.ok) {
            revalidatePath('course-category')
            return request.json()

        } else {
            throw new Error('Something went wrong!.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
