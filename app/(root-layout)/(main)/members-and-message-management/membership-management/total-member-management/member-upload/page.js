import {Heading} from "@/components/common/heading";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import BulkUploadForm
    from "@/app/(root-layout)/(main)/design/members-and-message-management-design/membership-management-design/total-member-management/bulk-registration/components/BulkUploadForm";
import {getOrganizationGroup} from "@/utils/api/organizationManagement";
import {getRoles} from "@/utils/api/administratorManagement";

export default async function page(){
    const [ roles, {organizations}] = await Promise.all([
        getRoles(),
        getOrganizationGroup()
    ])

    return (
        <>
            <div className="flex flex-col">
                <LmsPageHeading title={'회원 일괄 등록'} />

                <p className={`text-[#555555] pb-5 border-b border-commonBorderColor mb-5 pt-3`}>파일로 회원을 일괄 등록합니다.</p>
                <Heading level={2}>
                    <div className="flex items-center pt-4">
                        <span>회원 일괄 등록 방법</span>
                    </div>
                </Heading>
                <h3 className={`text-[19px] text-[#000] font-bold pt-7`}>1. 등록 파일 다운로드</h3>
                <p className={`text-[#555555] py-5 `}>먼저 사용자 등록 파일 UsersUpload.csv를 다운로드합니다. </p>

                <BulkUploadForm roles={roles} organizations={organizations} />

            </div>
        </>
    );
}