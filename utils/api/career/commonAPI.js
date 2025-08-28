'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getCountries () {
    const req = await fetchRequest(`/countries`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getEducationLevel () {
    const req = await fetchRequest(`/academic-level`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getGradingSystem () {
    const req = await fetchRequest(`/grading-system`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getGradingScale () {
    const req = await fetchRequest(`/grading-scale`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getDegreeNames () {
    const req = await fetchRequest(`/degree-name`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getLanguages () {
    const req = await fetchRequest(`/languages`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}


export async function storeSidebarGroup (payload,  endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
         if (request.status === 200)
                revalidateTag(tag);

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateSidebarGroup (payload, endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag(tag);
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getsSingleSidebarGroup (endpoint) {
    const req = await fetchRequest(`${endpoint}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function deleteSidebarGroup (endpoint, tag='') {
    try {
        const request = await fetchRequest(`${endpoint}`, {
            method: "DELETE"
        });
        const res = await request.json();
        revalidateTag(tag);
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getRoles () {
    const req = await fetchRequest(`/roles`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}