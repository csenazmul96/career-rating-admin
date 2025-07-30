"use server";

import { fetchRequest } from "@/utils/fetchRequest";
import { revalidatePath } from "next/cache";

const contextPath = "/lms-registration-membership/api/v1/private";

export async function getMembers(params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/member?${new URLSearchParams(params)}`
    );

    const data = await res.json();
    return { members: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}

export async function getMemberStatisticData(params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/member/statistics?${new URLSearchParams(params)}`
    );

    const data = await res.json();
    return { members: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}

export async function getLoginStatisticData(params) {
  try {
    const res = await fetchRequest(
        `${contextPath}/member/login/statistics?${new URLSearchParams(params)}`
    );

    const data = await res.json();
    return { members: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}


export async function getExcellData(params) {
  try {
    const res = await fetchRequest(
        `${contextPath}/member/login/statistics/excel?${new URLSearchParams(params)}`,
        {
          method: "GET",
          headers: {
            Accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
    );

    if (!res.ok) throw new Error("Excel download failed");

    const blob = await res.blob();

    // Extract filename from Content-Disposition
    const disposition = res.headers.get("Content-Disposition");
    const match = disposition?.match(/filename="?(.+?)"?$/);
    const fileName = match ? decodeURIComponent(match[1]) : "download.xlsx";

    return { blob, fileName };
  } catch (error) {
    console.error("Error in getExcellData:", error);
    throw error;
  }
}

export async function getLoginUserInfo() {
  try {
    const res = await fetchRequest(
      `${contextPath}/user/admin/profile`
    );
    const data = await res.json();
    return data.data
  } catch (error) {
    throw error;
  }
}

export async function updateLogedinUserInfo(payload) {
  try {
    const request = await fetchRequest(
        `${contextPath}/user/admin/profile`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
        }
    );
    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function updateLogedinUserPassword(payload, username) {
  try {
    const request = await fetchRequest(
        `${contextPath}/user/${username}/reset/password`,
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
    );
    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function memberSearch(params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/member/all?${new URLSearchParams(params)}`
    );

    const data = await res.json();
    return { members: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}
export async function getMembersWithAllPermissions(params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/member/permissions?${new URLSearchParams(params)}`,
      {
        next: { tags: ["member-permission"] },
      }
    );

    const data = await res.json();
    return { members: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}
export async function getMembersById(id) {
  try {
    const res = await fetchRequest(`${contextPath}/member/${id}`);

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}
export async function getMemberRegistrationsSettings() {
  try {
    const res = await fetchRequest(`${contextPath}/membership/items`, {
      next: { tags: ["member-registration-settings"] },
    });

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}
export async function getMemberRegistrationsSettingsUpdate(payload, id) {
  try {
    const request = await fetchRequest(
      `${contextPath}/membership/items/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
      }
    );
    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function singleMemberRoleUpdate(payload, id) {
  try {
    const request = await fetchRequest(`${contextPath}/member/role/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMembersByRole(roleId) {
  const req = await fetchRequest(`${contextPath}/member/role/${roleId}`);
  const res = await req.json();

  if (req.ok) {
    return res.data;
  } else {
    throw new Error(JSON.stringify(res));
  }
}

export async function memberExistsCheck(memberId) {
  try {
    const res = await fetchRequest(`${contextPath}/member/search/${memberId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}
export async function getMembersByGroup(id, params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/member/organization/${id}?${new URLSearchParams(params)}`,
      {
        next: { tags: [`organization-members-${id}`] },
      }
    );
    const data = await res.json();
    return { members: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}

export async function assignOrganizationToMembers(groupId, payload) {
  try {
    const request = await fetchRequest(
      `${contextPath}/members/organization/${groupId}`,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
      }
    );

    if (request && request.ok) {
      revalidatePath("organization-members-" + groupId);
      return true;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function memberRegistration(payload) {
  const res = await fetchRequest(`${contextPath}/register/admin`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res.json();
  }
}
export async function membersBulkUpload(form) {
  console.log(form);
  const res = await fetchRequest(`${contextPath}/register/bulk/member`, {
    method: "POST",
    body: form,
  });
  const response = res.json();
  return response;
}

export async function memberUpdate(payload, id) {
  const res = await fetchRequest(`${contextPath}/member/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    return res.json();
  } else {
    return res.json();
  }
}

export async function getSignInLogs(id, params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/site/log?${new URLSearchParams(params)}`
    );
    const data = await res.json();
    return { Logs: data.data, pagination: data.pagination };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getAllMembersSignInLogs(params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/site/log?${new URLSearchParams(params)}`
    );
    const data = await res.json();
    return { Logs: data.data, pagination: data.pagination };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function roleMembersSync(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/member/role`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (request && request.ok) {
      const res = await request.json();
      return res;
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function memberRolePermissionRemove(id) {
  try {
    const request = await fetchRequest(`${contextPath}/member/role/${id}`, {
      method: "DELETE",
    });

    if (request && request.ok) {
      revalidatePath("member-permission");
      const res = await request.json();
      return res;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMembersActivityLogs() {
  try {
    const request = await fetchRequest(`${contextPath}/member/role/${id}`, {
      method: "DELETE",
    });

    if (request && request.ok) {
      revalidatePath("member-permission");
      const res = await request.json();
      return res;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getWithdrawalMembers(params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/member/withdrawal?${new URLSearchParams(params)}`
    );

    const data = await res.json();
    return { members: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}
export async function getRolesWiseMembers() {
  try {
    const res = await fetchRequest(`${contextPath}/member/role`);

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}

export async function getMarketingInfo(params) {
  try {
    const res = await fetchRequest(
        `${contextPath}/member/consent/email-sms?${new URLSearchParams(params)}`
    );

    const data = await res.json();
    return { marketingInfo: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}