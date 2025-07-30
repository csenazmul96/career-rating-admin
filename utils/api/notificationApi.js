'use server';

import {fetchRequest} from "@/utils/fetchRequest";
const contextPath = "/lms-notification/api/v1/private"

export async function getNotificationsSettings () {
    const req = await fetchRequest(`${contextPath}/notification/admin/settings`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function getNotifications (tag = 'ALL') {
    const req = await fetchRequest(`${contextPath}/notification?tag=${tag}`)
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function updateNotificationsSettings (payload) {
    const req = await fetchRequest(`${contextPath}/notification/admin/settings`, {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function deleteNotificationsSettings (payload) {
    const req = await fetchRequest(`${contextPath}/notification`, {
        method: 'DELETE',
        body: JSON.stringify(payload)
    })
    const res = await req.json();

    if (req.ok) {
        return res.data;
    } else {
        throw new Error(JSON.stringify(res));
    }
}
