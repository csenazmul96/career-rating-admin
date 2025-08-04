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