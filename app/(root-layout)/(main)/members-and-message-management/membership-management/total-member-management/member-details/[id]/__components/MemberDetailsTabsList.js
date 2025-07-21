"use client";
import { Tab, TabList } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams} from "next/navigation";

const MemberDetailsTabsList = ({ member }) => {
  const pathName = usePathname();
  const params = useSearchParams()

  return (
    <>
      <TabList className="tab-list-controller">
        <Link
          href={`/members-and-message-management/membership-management/total-member-management/member-details/${member?.id}/member-information?${new URLSearchParams(params).toString()}`}
        >
          <Tab
            className={`tab-list-controller-btn ${
              pathName.includes("member-information")
                ? "border-themeColor font-bold text-textColor"
                : "border-0"
            }`}
          >
            회원정보
          </Tab>
        </Link>
        <Link
          href={`/members-and-message-management/membership-management/total-member-management/member-details/${member?.id}/course-details?memberId=${member?.kcUserId}&size=${params.get('size')? params.get('size') : 5}&page=${params.get('page')? params.get('page') : 1}`}
        >
          <Tab
            className={`tab-list-controller-btn ${
              pathName.includes("course-details")
                ? "border-themeColor font-bold text-textColor"
                : "border-0"
            }`}
          >
            수강내역
          </Tab>
        </Link>
        <Link
          href={`/members-and-message-management/membership-management/total-member-management/member-details/${member?.id}/signin-logs?${new URLSearchParams(params).toString()}`}
        >
          <Tab
            className={`tab-list-controller-btn ${
              pathName.includes("signin-logs")
                ? "border-themeColor font-bold text-textColor"
                : "border-0"
            }`}
          >
            사이트 로그인 로그
          </Tab>
        </Link>
      </TabList>
    </>
  );
};

export default MemberDetailsTabsList;
