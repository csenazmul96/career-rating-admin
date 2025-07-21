import ContentPageBreadcrumb from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageBreadcrumb";
import ContentPageFilter from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageFilter";
import VideoContentTableWrapper from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/VideoContentTableWrapper";
import { getContentList } from "@/utils/api/videoContentRequest";

export default async function page({ searchParams }) {
  const params = await searchParams;
  const [{ videos, pagination }] = await Promise.all([
    await getContentList(params, "/video/content"),
  ]);

  return (
    <div>
      <ContentPageBreadcrumb />
      <ContentPageFilter queryParams={params} />
      <div className="member-list-table pt-16">
        {videos && (
          <VideoContentTableWrapper videos={videos} pagination={pagination} />
        )}
      </div>
    </div>
  );
}
