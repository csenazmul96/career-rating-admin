
import Link from "next/link";
import {Button} from "@/components/common/button";
import {FilePen} from "lucide-react";

function CompanyTableActions(props) {
    return (
        <Link href={"/company-management/companies/create"} className={`h-[32px]`}>
            <Button  color="primaryMedium">
                    <span>
                        <FilePen size={20} />
                    </span>
                <span>Register Company</span>
            </Button>
        </Link>
    );
}

export default CompanyTableActions;