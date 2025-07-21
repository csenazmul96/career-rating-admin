import AdministratorRegisterForm from "./components/AdministratorRegisterForm";
import {getRoles} from "@/utils/api/administratorManagement";
import LmsPageHeading from "@/components/common/LmsPageHeading";

const Page = async () => {
    const roles = await getRoles();

    return (
        <div className="flex flex-col membership-management">
            <LmsPageHeading title="관리자 등록" tooltip={'생성한 관리자 유형에 회원을 검색하여 지정할 수 있습니다.'}/>

            <AdministratorRegisterForm roles={roles} />
        </div>
    );
};

export default Page;