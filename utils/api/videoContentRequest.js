"use server";

import { fetchRequest } from "@/utils/fetchRequest";
import { revalidatePath, revalidateTag } from "next/cache";

const contextPath = "/lms-content-curriculum/api/v1/private";
const tag = "chapter";

export async function getChapterGroups() {
  const req = await fetchRequest(`${contextPath}/content/group`, {
    next: { tags: [tag] },
  });
  const res = await req.json();

  if (req.ok) {
    return res.data;
  } else {
    throw new Error(JSON.stringify(res));
  }
}

export async function createNewChapterParentGroup(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/content/group`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (request && request.ok) {
      revalidatePath(tag);
      return await request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewChapterSubGroup(payload, id) {
  try {
    const request = await fetchRequest(
      `${contextPath}/content/sub/group/${id}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    if (request && request.ok) {
      revalidatePath(tag);
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewChapterSubSubGroup(payload, id) {
  try {
    const request = await fetchRequest(
      `${contextPath}/content/sub-sub/group/${id}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    if (request && request.ok) {
      revalidatePath(tag);
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteGroup(groupId) {
  try {
    const request = await fetchRequest(
      `${contextPath}/content/group/${groupId}`,
      {
        method: "DELETE",
      }
    );

    if (request && request.ok) {
      revalidatePath(tag);
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteSubGroup(groupId) {
  try {
    const request = await fetchRequest(
      `${contextPath}/content/sub/group/${groupId}`,
      {
        method: "DELETE",
      }
    );

    if (request && request.ok) {
      revalidatePath(tag);
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function deleteSubSubGroup(groupId) {
  try {
    const request = await fetchRequest(
      `${contextPath}/content/sub-sub/group/${groupId}`,
      {
        method: "DELETE",
      }
    );

    if (request && request.ok) {
      revalidatePath(tag);
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewContent(payload, endpoint) {
  try {
    const request = await fetchRequest(`${contextPath}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateContent(payload, endpoint) {
  try {
    const request = await fetchRequest(`${contextPath}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getContentList(params, endpoint) {
  try {
    const res = await fetchRequest(
      `${contextPath}${endpoint}?${new URLSearchParams(params)}`,
      {
        next: { tags: endpoint },
      }
    );

    const data = await res.json();

    return { videos: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}
export async function getCategoryInfo(params) {
  try {
    const res = await fetchRequest(`${contextPath}/video/content/group/info?${new URLSearchParams(params)}`);

    const data = await res.json();

    return data.data
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}

export async function getContentDocumentList(params, endpoint) {
  try {
    const res = await fetchRequest(
      `${contextPath}${endpoint}?${new URLSearchParams(params)}`,
      {
        next: { tags: endpoint },
      }
    );

    const data = await res.json();

    return { documents: data.data, pagination: data.pagination };
  } catch (error) {
    console.error("Error in getPermissions:", error);
    throw error;
  }
}

export async function getVideoDetails(id) {
  try {
    const res = await fetchRequest(`${contextPath}/video/content/${id}`, {
      next: { tags: [`video_details_${id}`] },
    });
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("video details not found", error);
    throw error;
  }
}

export async function subTitleUpload(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/upload/subtitle`, {
      method: "POST",
      body: payload,
    });

    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getContentDetails(endpoint) {
  try {
    const res = await fetchRequest(`${contextPath}${endpoint}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("video details not found", error);
    throw error;
  }
}

export async function updateVideo(payload, endPoint) {
  try {
    const res = await fetchRequest(`${contextPath}${endPoint}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (error) {
    console.error("video details not found", error);
    throw error;
  }
}

export async function createThumbnail(id, payload) {
  try {
    const request = await fetchRequest(
      `${contextPath}/video/content/${id}/thumbnail`,
      {
        method: "POST",
        body: payload,
      }
    );

    if (request.ok) {
      revalidatePath(`video_details_${id}`);
      return request.json();
    } else {
      throw new Error(`API Error: ${request.status}`);
    }
  } catch (error) {
    console.error("Error in createThumbnail", error);
    throw error;
  }
}

export async function deleteExistsThumb(name, id) {
  try {
    const request = await fetchRequest(
      `${contextPath}/delete/thumbnail/${name}`,
      {
        method: "DELETE",
      }
    );

    if (request.ok) {
      revalidatePath(`video_details_${id}`);
      return request.json();
    } else {
      throw new Error(`API Error: ${request.status}`);
    }
  } catch (error) {
    console.error("Error in createThumbnail", error);
    throw error;
  }
}

export async function deleteRecentUploadedFile(name, endpoint) {
  try {
    const request = await fetchRequest(`${contextPath}${endpoint}${name ? "/"+name : ""}`, {
      method: "DELETE",
    });
    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function contentGroupChange(payload, endpoint) {
  try {
    const request = await fetchRequest(`${contextPath}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function applyDefaultThumbnail(videoId, thumbnailId) {
  try {
    const request = await fetchRequest(
      `${contextPath}/video/content/${videoId}/thumbnail/${thumbnailId}`,
      {
        method: "POST",
        body: {},
      }
    );
    revalidatePath(`video_details_${videoId}`);
    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteContent(ids, endpoint, tag) {
  try {
    const request = await fetchRequest(`${contextPath}/delete/${endpoint}`, {
      method: "DELETE",
      body: JSON.stringify({ ids }),
    });

    if (request && request.ok) {
      revalidateTag(tag);
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function textEditorFileUpload(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/upload/content`, {
      method: "POST",
      body: payload,
    });

    return request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
