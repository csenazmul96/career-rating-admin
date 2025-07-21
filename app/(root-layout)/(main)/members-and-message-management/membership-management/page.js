import AdministratorList from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/AdministratorList";
import AdministratorForm from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/AdministratorForm";
import LmsPageHeading from "@/components/common/LmsPageHeading";
export default async function MemberShipManagement() {

    return (
        <div className="flex flex-col membership-management">
            <LmsPageHeading title="관리자 유형 관리"/>
            <div className="grid ">
                <div className="flex bg-gray-100">
                    <AdministratorList />
                    <AdministratorForm/>
                </div>

            </div>
        </div>
    )
}