import AdministratorRegisterForm from "./__components/AdministratorRegisterForm";
import {getRoles} from "@/utils/api/administratorManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";

const Page = async () => {
    const roles = await getRoles();

    return (
        <div className="flex flex-col membership-management">
            <LmsPageHeading title="관리자 등록"/>

            <AdministratorRegisterForm roles={roles} />
        </div>
    );
};

export default Page;