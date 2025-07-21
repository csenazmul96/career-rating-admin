import {getContentDetails} from "@/utils/api/videoContentRequest";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import DocumentsDetailsComponent
    from "@/app/(root-layout)/(content-layout)/content-management/document-management/details/[id]/components/DocumentsDetailsComponent";

export default async function page ({params}) {
    const queryParams = await params
    const [document] = await Promise.all([
        getContentDetails(`/document/content/${queryParams.id}`)
    ])

    return (
        <>
            <LmsPageHeading title={'자료관리'} />
            {document &&
            <DocumentsDetailsComponent document={document} />
            }
            {!document && <span>Not Found</span>}
        </>
    );
}