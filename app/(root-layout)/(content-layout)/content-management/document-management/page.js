import DocumentContentTableWrapper from "@/app/(root-layout)/(content-layout)/content-management/document-management/components/DocumentContentTableWrapper";
import ContentPageBreadcrumb from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageBreadcrumb";
import ContentPageFilter from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentPageFilter";
import { getContentDocumentList } from "@/utils/api/videoContentRequest";

export default async function page({ searchParams }) {
  const params = await searchParams;
  const [{ documents, pagination }] = await Promise.all([
    await getContentDocumentList(params, "/document/content"),
  ]);

  return (
    <div>
      <ContentPageBreadcrumb />
      <ContentPageFilter queryParams={params} />
      <div className="member-list-table pt-16">
        {documents && (
          <DocumentContentTableWrapper
            documents={documents}
            pagination={pagination}
          />
        )}
      </div>
    </div>
  );
}
