import {getContentDetails} from "@/utils/api/videoContentRequest";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import DocumentForm
    from "@/app/(root-layout)/(content-layout)/content-management/document-management/new-document/components/DocumentForm";
import {getRolesWiseMembers} from "@/utils/api/memberManagementRequest";

export default async function page({params}){
    const queryParams = await params
    const [document, roles] = await Promise.all([
        getContentDetails(`/document/content/${queryParams.id}`),
        getRolesWiseMembers()
    ])

    return (
        <>
            <LmsPageHeading title={"자료관리"} />
            {document && <DocumentForm roles={roles} document={document} />}
            {!document && <span>Not Found</span>}

        </>
    );
}