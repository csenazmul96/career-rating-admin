"use client";

import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import React, {useEffect, useState} from "react";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import {Button} from "@/components/common/button";
import {getSpecificPreviousDate} from "@/utils/helpers/CommonHelper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardDatePeriodPicker from "@/components/common/form/LmsStandardDatePeriodPicker";
import {format} from "date-fns";
import {usePathname, useRouter} from "next/navigation";
import {useSidebar} from "@/custom-hooks/useSidebar";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";

export default function CourseFilter({queryParams}) {
    const [params, setParams] = useState(null)
    const pathname = usePathname();
    const {replace} = useRouter();

    const specificDateClick = (day) => {
        let date = getSpecificPreviousDate(day)
        setParams((prev) => ({...prev, startDate: date}));
        let today = new Date()
        today = format(today, "yyyy-MM-dd")
        setParams((prev) => ({...prev, startDate: date, endDate: today}));
    }
    const { isSidebarOpen }  = useSidebar();
    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)
        if (oldParams) {
            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                size: oldParams && oldParams.get('size') ? oldParams.get('size') : 5,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                division: oldParams && oldParams.get('division') ? oldParams.get('division') : '',
                exposer: oldParams && oldParams.get('exposer') ? oldParams.get('exposer') : '',
                situation: oldParams && oldParams.get('situation') ? oldParams.get('situation') : '',
                searchField: oldParams && oldParams.get('searchField') ? oldParams.get('searchField') : 'category',
                startDate: oldParams && oldParams.get('startDate') ? oldParams.get('startDate') : '',
                endDate: oldParams && oldParams.get('endDate') ? oldParams.get('endDate') : '',
            })
        }
    }, [queryParams]);

    const handleOnChnage = (column, value) => {
        setParams((prev) => ({...prev, [column]: value}));
    }

    const sendSearchRequest = () => {
        const filteredData = Object.fromEntries(
            Object.entries(params).filter(([key, value]) => value !== "" && value !== null)
        );
        replace(`${pathname}?${new URLSearchParams({...filteredData, page: 1})}`);
    }

    const onKeyUpPressHandler = (name, e) => {
      if (e.key === 'Enter')
          sendSearchRequest()
    }

    const filterCriteria = [
        {label: '검색', paramsName: 'search'},
        {label: '구분', paramsName: 'division'},
        {label: '수강기간', paramsName: 'startDate'},
        {label: '상태', paramsName: 'situation'},
        {label: '노출', paramsName: 'exposer'}
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
            <div className="flex">
                <FilterFormWrapper label="구분" className={`!pb-0 ${isSidebarOpen ? '!w-2/5' : ''}`}>
                    <LmsStandardRadioFieldGroup
                        options={[{id: '', name: '전체'}, {id: "regular", name: "정규"}, {id: "constant", name: "상시"}]}
                        value={params ? params.division : ''}
                        changeDataHandler={handleOnChnage}
                        name="division"/>
                </FilterFormWrapper>
                <FilterFormWrapper label="수강기간" className={`!pb-0  ${isSidebarOpen ? '!w-3/5 ' : ''}`}>
                    <LmsStandardDatePicker
                        name={'startDate'}
                        value={params?.startDate}
                        placeholder={'YYYY-MM-DD'}
                        changeDataHandler={handleOnChnage}
                    />
                    <span>-</span>
                    <LmsStandardDatePicker
                        name={'endDate'}
                        value={params?.endDate}
                        placeholder={'YYYY-MM-DD'}
                        changeDataHandler={handleOnChnage}
                    />
                    <span className="w-[0px]"></span>

                    <LmsStandardDatePeriodPicker params={params} specificDateClick={specificDateClick} />
                </FilterFormWrapper>
            </div>

            <div className="flex">
                <FilterFormWrapper label="상태" className={` ${isSidebarOpen ? '!w-2/5' : ''}`}>
                    <LmsStandardRadioFieldGroup
                        options={[{id: '', name: '전체'}, {id: "IN-PROGRESS", name: "진행"}, {id: "END", name: "종료"}]}
                        value={params ? params.situation : ''}
                        changeDataHandler={handleOnChnage}
                        name="situation"/>
                </FilterFormWrapper>

                <FilterFormWrapper label="노출" className={` ${isSidebarOpen ? '!w-3/5' : ''}`}>
                    <LmsStandardRadioFieldGroup
                        options={[{id: '', name: '전체'}, {id: "SHOW", name: "보임"}, {id: "HIDE", name: "숨김"}]}
                        value={params ? params.exposer : ''}
                        changeDataHandler={handleOnChnage}
                        name="exposer"/>
                </FilterFormWrapper>
            </div>

            <div className="flex border-b border-borderColor" />

            <FilterFormWrapper label="검색" singleElement={true}>
                <LmsStandardSelectInputV2
                    name={`searchField`}
                    options={[{id: "category", name: "카테고리"}, {id: "title", name: "제목"}]}
                    changeDataHandler={handleOnChnage}
                    value={params && params.searchField} />

                <div className={"w-auto flex-auto relative"}>
                    <LmsSearchInput singleElement={true}
                                    fieldClass="w-full"
                                    name="search"
                                    changeDataHandler={handleOnChnage}
                                    onKeyUp={onKeyUpPressHandler}
                                    value={params ? params.search : ''}
                                    placeholder="검색어를 검색해주세요." />
                </div>
                <Button type="button" color="primary" onClick={sendSearchRequest}>검색</Button>
            </FilterFormWrapper>

            <LmsDatatableFilterSummary filterCriteria={finalFilteredParams?.filter(item=> item.value !== '') || []} />
        </FilterForm>
    );
}