"use client";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MemberDetailsPageHeading = () => {
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams);
  const tab = queryParams.get("tab") || "member-information";
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (tab) {
      case "member-information":
        setTitle("회원 정보");
        break;
      case "course-details":
        setTitle("수강내역");
        break;
      case "signin-logs":
        setTitle("사이트 로그인 로그");
        break;
      default:
        setTitle("회원 정보");
    }
  }, [tab]);

  return (
    <LmsPageHeading title={title} headingClasses={"top-[10px] absolute"} />
  );
};

export default MemberDetailsPageHeading;
