import {Button} from "@/components/common/button";
import Link from "next/link";
import React from "react";
import {Menu} from "lucide-react";

const MemberSignInLogsTableActions = () => {
    return <Link href={'/members-and-message-management/membership-management/total-member-management'}>
        <Button color="transparentMedium">
            <span>
                {/*<img src="/images/membership/menu-collapse-small.png" alt=""/>*/}
                <Menu size={16} />
            </span>
            <span>목록</span>
        </Button>
    </Link>
}

export default MemberSignInLogsTableActions