'use server';
import {fetchRequest} from "@/utils/fetchRequest";
import {revalidatePath, revalidateTag} from "next/cache";

export async function getsEmployee (params) {
    const req = await fetchRequest(`/employees?${new URLSearchParams(params)}`,{
        next: { tags: ['employees'] },
    })
    const res = await req.json();

    if (req.ok) {
        return {employees: res.data, pagination: res.meta};
    } else {
        throw new Error(JSON.stringify(res));
    }
}
export async function getsSingleEmployee (id, params={}) {
    const req = await fetchRequest(`/employees/${id}?${new URLSearchParams(params)}`)
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function checkIfEmployeeExists (payload) {
    try {
        const request = await fetchRequest(`/employees/check-exists`, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        return request.status === 200;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function storeEmployee (payload) {
    try {
        const request = await fetchRequest(`/employees`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function storeEmployeeUpdate (payload, id) {
    try {
        const request = await fetchRequest(`/employees/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function deleteEmployee (payload) {
    try {
        const request = await fetchRequest('/employee/delete-multiple', {
            method: "DELETE",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("employees");
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}


export async function createAcademic (payload) {
    try {
        const request = await fetchRequest(`/academic`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateAcademic (payload, id) {
    try {
        const request = await fetchRequest(`/academic/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
        const res = await request.json();

        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getAddress (params) {
    const req = await fetchRequest(`/address?${new URLSearchParams(params)}`, {
        next: { tags: ['address'] }
    })
    const res = await req.json();

    if (req.ok) {
        return res.data
    } else {
        throw new Error(JSON.stringify(res));
    }
}

export async function createUpdateAddress (payload) {
    try {
        const request = await fetchRequest(`/address`, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        const res = await request.json();
        revalidateTag("address")
        return {...res, status: request.status};
    } catch (error) {
        throw new Error(error.message);
    }
}