import DocumentForm
    from "@/app/(root-layout)/(content-layout)/content-management/document-management/new-document/components/DocumentForm";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getRolesWiseMembers} from "@/utils/api/memberManagementRequest";

export default async function page() {
    const [roles] = await Promise.all([
        getRolesWiseMembers()
    ])
    return (
        <>
            <LmsPageHeading title={'자료등록'} />
            <DocumentForm roles={roles} />
        </>
    );
}