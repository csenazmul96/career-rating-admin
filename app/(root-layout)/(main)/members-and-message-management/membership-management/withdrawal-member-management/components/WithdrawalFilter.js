"use client";

import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import { Button } from "@/components/common/button";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardDatePeriodPicker from "@/components/common/form/LmsStandardDatePeriodPicker";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import { getSpecificPreviousDate } from "@/utils/helpers/CommonHelper";
import { format } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";

const WithdrawalFilter = ({ queryParams }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [params, setParams] = useState(null);
  useEffect(() => {
    const oldParams = new URLSearchParams(queryParams);
    if (oldParams) {
      setParams({
        page: oldParams && oldParams.get("page") ? oldParams.get("page") : 1,
        size: oldParams && oldParams.get("size") ? oldParams.get("size") : 5,
        search:
          oldParams && oldParams.get("search") ? oldParams.get("search") : "",
        membershipType:
          oldParams && oldParams.get("membershipType")
            ? oldParams.get("membershipType")
            : "",
        startDate:
          oldParams && oldParams.get("startDate")
            ? oldParams.get("startDate")
            : "",
        endDate:
          oldParams && oldParams.get("endDate") ? oldParams.get("endDate") : "",
        dateType:
          oldParams && oldParams.get("dateType")
            ? oldParams.get("dateType")
            : "",
      });
    }
  }, [queryParams]);

  useEffect(() => {
    if (params && params.startDate && params.endDate) {
      let startDate = new Date(params.startDate);
      let endDate = new Date(params.endDate);
      if (endDate < startDate) {
        CommonToastMessage('오류.', '설정하신 날짜를 다시 확인해주세요', 'warning');
      }
    }
  }, [params]);

  const handleOnChnage = (column, value) => {
    setParams((prev) => ({ ...prev, [column]: value }));
  };

  const specificDateClick = (day) => {
    let date = getSpecificPreviousDate(day);
    setParams((prev) => ({ ...prev, startDate: date }));
    let today = new Date();
    today = format(today, "yyyy-MM-dd");
    setParams((prev) => ({ ...prev, startDate: date, endDate: today }));
  };

  const sendSearchRequest = () => {
    const filteredData = Object.fromEntries(
      Object.entries(params).filter(
        ([key, value]) => value !== "" && value !== null
      )
    );
    replace(`${pathname}?${new URLSearchParams({ ...filteredData, page: 1 })}`);
  };

  const onKeyUpHandle = (name, event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendSearchRequest();
    }
  }


  const dateTypes = [
    { id: "", name: "전체" },
    { id: "createdAt", name: "가입일" },
    { id: "deletionDate", name: "삭제일" },
  ];

  const memberTypes = [
    { id: "", name: "전체" },
    { id: "MEMBER", name: "탈퇴" },
    { id: "MANAGER", name: "삭제" },
  ];

  const filterCriteria = [
    {label: '검색', paramsName: 'search'},
    {label: '회원유형', paramsName: 'membershipType'},
    {label: '기간', paramsName: 'startDate'},
    {label: '일자', paramsName: 'dateType'}
  ];

  const finalFilteredParams = filterCriteria.map(item => {
    const { label, paramsName } = item;
    let value = '';
    if (params && params[paramsName]) {
      value = params[paramsName];
      if (paramsName === "startDate") {
        value = params.startDate && params.endDate
            ? `${params.startDate} ~ ${params.endDate}`
            : "";
      }
    }
    return {
      label,
      paramsName,
      value
    };
  });


  return (
    <>
      <FilterForm>
        <div className="flex">
          <FilterFormWrapper label="회원유형" className={"!pb-0"}>
            <LmsStandardRadioFieldGroup
              options={memberTypes}
              name="membershipType"
              value={params ? params.membershipType : ""}
              changeDataHandler={handleOnChnage}
            />
          </FilterFormWrapper>
        </div>
        <div className="flex border-b border-borderColor">
          <FilterFormWrapper label="일자">
            <LmsStandardRadioFieldGroup
              options={dateTypes}
              name="dateType"
              value={params?.dateType}
              changeDataHandler={handleOnChnage}
            />
          </FilterFormWrapper>
          <FilterFormWrapper label="기간" className={` `}>
            <LmsStandardDatePicker
              name={"startDate"}
              value={params?.startDate}
              placeholder={"YYYY-MM-DD"}
              changeDataHandler={handleOnChnage}
            />
            <span>-</span>
            <LmsStandardDatePicker
              name={"endDate"}
              value={params?.endDate}
              placeholder={"YYYY-MM-DD"}
              changeDataHandler={handleOnChnage}
            />
            <LmsStandardDatePeriodPicker
              params={params}
              specificDateClick={specificDateClick}
            />
          </FilterFormWrapper>
        </div>
        <FilterFormWrapper label="검색" singleElement={true}>
          <div className={"w-auto flex-auto relative"}>
            <LmsSearchInput
              singleElement={true}
              fieldClass="w-full"
              name="search"
              onKeyUp={onKeyUpHandle}
              value={params ? params.search : ""}
              placeholder="이름 또는 아이디를 검색해주세요."
              changeDataHandler={handleOnChnage}
            />
          </div>
          <Button type="button" onClick={sendSearchRequest} color="primary">
            검색
          </Button>
        </FilterFormWrapper>
        <LmsDatatableFilterSummary filterCriteria={finalFilteredParams?.filter(item=> item.value !== '') || []} />
      </FilterForm>
    </>
  );
};

export default WithdrawalFilter;
