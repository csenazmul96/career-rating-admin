"use server";

import { fetchRequest } from "@/utils/fetchRequest";
import { revalidateTag } from "next/cache";
const contextPath = "/lms-content-curriculum/api/v1/private";

export async function getCourseById(id) {
  const req = await fetchRequest(`${contextPath}/course/${id}`, {
    next: { tags: [`course-${id}`] },
  });
  const res = await req.json();

  return res.data ?? null;
}

export async function uploadCurriculumFile(payload) {
  try {
    const request = await fetchRequest(
      `${contextPath}/upload/curriculum-file`,
      {
        method: "POST",
        body: payload,
      }
    );

    const data = await request.json();
    return data["data"][0];
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createCourse(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/course`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    revalidateTag("course");
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateCourse(courseId, payload) {
  try {
    const request = await fetchRequest(`${contextPath}/course/${courseId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    revalidateTag("course");
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteCourse(form) {
  try {
    const request = await fetchRequest(`${contextPath}/course`, {
      method: "DELETE",
      body: JSON.stringify(form),
    });

    if (request && request.ok) {
      revalidateTag("course");
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function getCourses(pageParams, queryParams) {
  const req = await fetchRequest(
    `${contextPath}/course?${new URLSearchParams(queryParams)}`,
    {
      next: { tags: [`course`] },
    }
  );
  const res = await req.json();
  return { courses: res.data, pagination: res.pagination };

  return res.data ?? null;
}

export async function getCourseDetails(id, params) {
  try {
    const res = await fetchRequest(
      `${contextPath}/course/member/${id}/details?${new URLSearchParams(
        params
      )}`
    );
    const data = await res.json();
    return { Courses: data.data, pagination: data.pagination };
  } catch (error) {
    throw error;
  }
}

export async function getAnnouncementByCourse(id) {
  const req = await fetchRequest(`${contextPath}/announcement/course/${id}`, {
    next: { tags: [`course-announcement-${id}`] },
  });
  const res = await req.json();
  return res;
}

export async function createAnnouncement(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/announcement`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    revalidateTag(`course-announcement-${payload.courseId}`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function updateAnnouncement(payload, id) {
  try {
    const request = await fetchRequest(`${contextPath}/announcement/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    revalidateTag(`course-announcement-${payload.courseId}`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteAnnouncements(form) {
  try {
    const request = await fetchRequest(`${contextPath}/announcement/delete`, {
      method: "DELETE",
      body: JSON.stringify(form),
    });

    if (request && request.ok) {
      revalidateTag("course");
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAnnouncementById(id) {
  const req = await fetchRequest(`${contextPath}/announcement/${id}`, {
    next: { tags: [`announcement-${id}`] },
  });
  const res = await req.json();

  return res.data ?? null;
}

export async function getCourseChapterLectures(id) {
  const req = await fetchRequest(`${contextPath}/announcement/course/${id}`, {
    next: { tags: [`course-announcement-${id}`] },
  });
  const res = await req.json();

  return {
    announcements: res.data ?? null,
    pagination: res.pagination ?? null,
  };
}

export async function createChapter(payload, id) {
  try {
    const request = await fetchRequest(`${contextPath}/chapter/course/${id}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    revalidateTag(`chapters`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getChapters(id) {
  const req = await fetchRequest(`${contextPath}/chapter/course/${id}`, {
    next: { tags: [`chapters`] },
  });
  const res = await req.json();

  return res.data ?? [];
}

export async function deleteChapter(id) {
  const req = await fetchRequest(`${contextPath}/chapter/${id}`, {
    method: "DELETE",
  });
  revalidateTag(`chapters`);
  return await req.json();
}

export async function assignVideoToChapter(payload, courseId, chapterId) {
  try {
    const request = await fetchRequest(
      `${contextPath}/chapter/${chapterId}/videos`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    revalidateTag(`chapter-video-${courseId}`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCourseEvaluations(courseId, params) {
  const req = await fetchRequest(
    `${contextPath}/evaluation/course/${courseId}?${new URLSearchParams(
      params
    )}`,
    {
      next: { tags: [`course-evaluation-${courseId}`] },
    }
  );
  const res = await req.json();

  return { evaluations: res.data ?? null, pagination: res.pagination ?? null };
}

export async function assignEvaluationToCourse(payload, courseId) {
  try {
    const request = await fetchRequest(
      `${contextPath}/evaluation/course/${courseId}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    revalidateTag(`course-evaluation-${courseId}`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function assignDocumentToChapter(payload, courseId, chapterId) {
  try {
    const request = await fetchRequest(
      `${contextPath}/chapter/${chapterId}/documents`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    revalidateTag(`chapter-documents-${courseId}`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function assignVideoToDocument(payload) {
  try {
    const request = await fetchRequest(
      `${contextPath}/chapter/${payload.chapterId}/document/${payload.documentId}`,
      {
        method: "POST",
        body: JSON.stringify({ ids: [payload.videoId] }),
      }
    );
    revalidateTag(`chapter-documents-${payload.courseId}`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getChapterVideos(courseId, chapterId = "") {
  const req = await fetchRequest(
    `${contextPath}/chapter/course/${courseId}/videos?chapterId=${chapterId}`,
    {
      next: { tags: [`chapter-video-${courseId}`] },
    }
  );
  const res = await req.json();

  return res.data ?? [];
}

export async function getChapterDocuments(courseId, chapterId = "") {
  if (chapterId) {
    const req = await fetchRequest(
        `${contextPath}/chapter/course/${courseId}/documents?chapterId=${chapterId}`,
        {
          next: {tags: [`chapter-documents-${courseId}`]},
        }
    );
    const res = await req.json();

    return res.data ?? [];
  }
  return []
}

export async function deleteVideoFromChapter(chapterId, videoId) {
  const req = await fetchRequest(
    `${contextPath}/chapter/${chapterId}/video/${videoId}`,
    {
      method: "DELETE",
    }
  );
  revalidateTag(`chapter-video-${chapterId}`);
  return await req.json();
}

export async function deleteDocumentFromChapter(
  courseId,
  chapterId,
  documentId
) {
  const req = await fetchRequest(
    `${contextPath}/chapter/${chapterId}/document/${documentId}`,
    {
      method: "DELETE",
    }
  );
  revalidateTag(`chapter-documents-${courseId}`);
  return await req.json();
}

export async function get11Query(params) {
  const req = await fetchRequest(
    `${contextPath}/student-inquiry?${new URLSearchParams(params)}`,
    {
      next: { tags: [`queries`] },
    }
  );
  const res = await req.json();
  return { queries: res.data, pagination: res.pagination };
}

export async function get11QueryCategory() {
  const req = await fetchRequest(
    `/lms-content-curriculum/api/v1/public/inquiry/category`
  );
  const res = await req.json();
  return res.data;
}

export async function getSingle11query(id) {
  const req = await fetchRequest(`${contextPath}/student-inquiry/${id}/reply`);
  const res = await req.json();
  return res.data;
}

export async function deleteInquiries(form, url = "/student-inquiry") {
  try {
    const request = await fetchRequest(`${contextPath}${url}`, {
      method: "DELETE",
      body: JSON.stringify(form),
    });

    if (request && request.ok) {
      revalidateTag("course");
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function submitInquiryReply(payload, url) {
  try {
    const request = await fetchRequest(`${contextPath}${url}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    revalidateTag(`chapter-documents-${payload.courseId}`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCourseInquiry(params, id) {
  const req = await fetchRequest(
    `${contextPath}/enrolled-course/${id}/inquiries?${new URLSearchParams(
      params
    )}`
  );
  const res = await req.json();
  return { queries: res.data, pagination: res.pagination };
}

export async function getCourseSingleInquiry(id) {
  const req = await fetchRequest(
    `${contextPath}/enrolled-course/inquiry/${id}`
  );
  const res = await req.json();
  return res.data;
}

export async function deleteCourseInquirieswReply(url) {
  try {
    const request = await fetchRequest(`${contextPath}${url}`, {
      method: "DELETE",
      body: "",
    });

    if (request && request.ok) {
      revalidateTag("course");
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getStudentManagement(id, params) {
  const req = await fetchRequest(
    `${contextPath}/course/${id}/members/progression?${new URLSearchParams(
      params
    )}`
  );
  const res = await req.json();
  return { students: res.data, pagination: res.pagination };
}

export async function getStudentManagementSingle(id) {
  const req = await fetchRequest(
    `${contextPath}/course/member/${id}/progression`
  );
  const res = await req.json();
  return res.data;
}


export async function getFaqs(params) {
  const req = await fetchRequest(
      `/lms-content-curriculum/api/v1/public/faq?${new URLSearchParams(params)}`,
      {
        next: { tags: [`faqs`] },
      }
  );
  const res = await req.json();
  return { faqs: res.data, pagination: res.pagination };
}

export async function getFaqSingle(id) {
  const req = await fetchRequest(
      `/lms-content-curriculum/api/v1/public/faq/${id}`);
  const res = await req.json();
  return res.data
}

export async function createFaqs(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/faq`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    revalidateTag(`faqs`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateFaqs(payload, id) {
  try {
    const request = await fetchRequest(`${contextPath}/faq/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    revalidateTag(`faqs`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteFaqs(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/faq`, {
      method: "DELETE",
      body: JSON.stringify(payload),
    });

    if (request && request.ok) {
      revalidateTag("faqs");
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAllNotice(params) {
  const req = await fetchRequest(
      `${contextPath}/notice?${new URLSearchParams(params)}`,
      {
        next: { tags: [`notice`] },
      }
  );
  const res = await req.json();
  return { notice: res.data, pagination: res.pagination };
}



export async function getNoticeDetails(id) {
  try {
    const res = await fetchRequest(`${contextPath}/notice/${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Notice details not found", error);
    throw error;
  }
}

export async function createNotice(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/notice`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    revalidateTag(`notice`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function noticeFileUpload(payload) {
  try {
    const request = await fetchRequest(
        `${contextPath}/upload/curriculum-file?bucketParam=REPLY}`,
        {
          method: "POST",
          body: payload,
        }
    );

    const data = await request.text();
    console.log('data',data)
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateNotice(payload, id) {
  try {
    const request = await fetchRequest(`${contextPath}/notice/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    revalidateTag(`notice`);
    return await request.json();
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function deleteNotice(payload) {
  try {
    const request = await fetchRequest(`${contextPath}/notice`, {
      method: "DELETE",
      body: JSON.stringify(payload),
    });

    if (request && request.ok) {
      revalidateTag("notice");
      return request.json();
    } else {
      throw new Error("Something went wrong!.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}