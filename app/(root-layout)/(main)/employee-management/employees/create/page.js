import LmsPageHeading from "@/components/common/LmsPageHeading";
import EmployeeForm from "@/app/(root-layout)/(main)/employee-management/employees/create/components/EmployeeForm";

export default async function Page() {
    return (
        <>
            <div className="flex flex-col member-registration">
                <LmsPageHeading title="Employee Registration."/>
                <EmployeeForm />
            </div>
        </>
    );
}
