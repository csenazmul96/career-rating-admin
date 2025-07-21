"use client";

import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import { useSidebar } from "@/custom-hooks/useSidebar";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";

export default function EvaluationFilter({ queryParams, allParams }) {
  const [params, setParams] = useState(null);
  const pathname = usePathname();
  const { replace } = useRouter();

  const { isSidebarOpen } = useSidebar();
  useEffect(() => {
    const oldParams = new URLSearchParams(queryParams);
    if (oldParams) {
      setParams({
        page: oldParams && oldParams.get("page") ? oldParams.get("page") : 1,
        size: oldParams && oldParams.get("size") ? oldParams.get("size") : 5,
        search:
          oldParams && oldParams.get("search") ? oldParams.get("search") : "",
        startDate:
          oldParams && oldParams.get("startDate")
            ? oldParams.get("startDate")
            : "",
        endDate:
          oldParams && oldParams.get("endDate") ? oldParams.get("endDate") : "",
      });
    }
  }, [queryParams]);

  const handleOnChnage = (column, value) => {
    setParams((prev) => ({ ...prev, [column]: value }));
  };

  const sendSearchRequest = () => {
    const filteredData = Object.fromEntries(
      Object.entries(params).filter(
        ([key, value]) => value !== "" && value !== null
      )
    );
    replace(`${pathname}?${new URLSearchParams({ ...filteredData, page: 1 })}`);
  };

  const onKeyUpPressHandler = (name, e) => {
    if (e.key === "Enter") sendSearchRequest();
  };

  useEffect(() => {
    if (params && params.startDate && params.endDate) {
      sendSearchRequest();
    }
  }, [params && params.startDate, params && params.endDate]);



  const filterCriteria = [
    {label: '검색', paramsName: 'search'},
    {label: '수강기간', paramsName: 'startDate'}
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
    <FilterForm>
      <FilterFormWrapper
        label="등록일"
        className={`${isSidebarOpen ? "!w-3/5 " : ""}`}
      >
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
        <span className="w-[0px]"></span>
      </FilterFormWrapper>

      <div className="flex border-b border-borderColor" />

      <FilterFormWrapper label="검색" singleElement={true}>
        <div className={"w-auto flex-auto relative"}>
          <LmsSearchInput
            singleElement={true}
            fieldClass="w-full"
            name="search"
            changeDataHandler={handleOnChnage}
            onKeyUp={onKeyUpPressHandler}
            value={params ? params.search : ""}
            placeholder="평가명을 입력해주세요."
          />
        </div>
      </FilterFormWrapper>
      <LmsDatatableFilterSummary filterCriteria={finalFilteredParams?.filter(item=> item.value !== '') || []} />
    </FilterForm>
  );
}
