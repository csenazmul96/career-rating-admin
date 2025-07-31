import {Button} from "@/components/common/button";
import {PlusIcon} from "lucide-react";
import Link from "next/link";

function EmployeeTableHeaderActions(props) {
    return (
        <>
            <Link href={"/employee-management/employees/create"}>
                <Button className={`h-[32px] rounded`} color="primaryMedium">
                    <span> <PlusIcon size={20} /></span>
                    Create Employee
                </Button>
            </Link>
        </>
    );
}

export default EmployeeTableHeaderActions;