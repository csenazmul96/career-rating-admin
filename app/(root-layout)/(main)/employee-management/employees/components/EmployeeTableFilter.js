"use client"

import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import { getSpecificPreviousDate} from "@/utils/helpers/CommonHelper";
import {format} from "date-fns";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardDatePeriodPicker from "@/components/common/form/LmsStandardDatePeriodPicker";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import FilterForm from "@/components/common/form/FilterForm";

const EmployeeTableFilter = ({queryParams}) => {
    const pathname = usePathname();
    const {replace} = useRouter();

    const [params, setParams] = useState(null)


    useEffect(() => {
        if(params && params.startDate && params.endDate){
            let startDate = new Date(params.startDate);
            let endDate = new Date(params.endDate);
            if (endDate < startDate) {
                LmsToastMessage('오류.', '설정하신 날짜를 다시 확인해주세요', 'warning');
            }
        }
    }, [params]);


    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)

        if (oldParams) {

            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                per_page: oldParams && oldParams.get('per_page') ? oldParams.get('per_page') : 10,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                average_rating: oldParams && oldParams.get('average_rating') ? oldParams.get('average_rating') : '',
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

    const specificDateClick = (day) => {
        let date = getSpecificPreviousDate(day)
        setParams((prev) => ({...prev, startDate: date}));
        let today = new Date()
        today = format(today, "yyyy-MM-dd")
        setParams((prev) => ({...prev, startDate: date, endDate: today}));
    }

    const ratings = [ {id: 1, name: 1}, {id: 2, name: 2}, {id: 3, name: 3} , {id: 4, name: 4} , {id: 5, name: 5}];

    const onKeyUpHandle = (name, event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendSearchRequest();
        }
    }

    const filterCriteria  = [
        {label: 'Rating', paramsName: 'average_rating'},
        {label: 'Search', paramsName: 'search'},
        {label: 'Date', paramsName: 'startDate'}
    ]

    const finallist = filterCriteria.map(item => {
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
                <div className="flex content-between justify-between">
                    <FilterFormWrapper label="Date" className={``}>
                        <LmsStandardDatePicker
                            name={'startDate'}
                            value={params?.startDate}
                            placeholder={'YYYY-MM-DD'}
                            selectedEndDate={params?.endDate}
                            selectedStartDate={params?.startDate}
                            changeDataHandler={handleOnChnage}
                        />

                        <span>-</span>
                        <LmsStandardDatePicker
                            name={'endDate'}
                            value={params?.endDate}
                            selectedEndDate={params?.endDate}
                            selectedStartDate={params?.startDate}
                            placeholder={'YYYY-MM-DD'}
                            changeDataHandler={handleOnChnage}
                        />
                        <LmsStandardDatePeriodPicker params={params} specificDateClick={specificDateClick} />
                    </FilterFormWrapper>
                    <FilterFormWrapper label={'Rating'} className={`content-end justify-end  `}  >
                        <LmsStandardSelectInputV2
                            name={`average_rating`}
                            initialText={'Select Rating'}
                            value={params && params.average_rating ? params.average_rating : ''}
                            options={ratings}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>
                </div>

                <FilterFormWrapper label="Search" singleElement={true}>
                    <div className={"w-auto flex-auto relative"}>
                        <LmsSearchInput singleElement={true}
                                        fieldClass="w-full"
                                        name="search"
                                        onKeyUp={onKeyUpHandle}
                                        value={params ? params.search : ''}
                                        placeholder="검색어를 검색해주세요."
                                        changeDataHandler={handleOnChnage}  />
                    </div>
                    <Button type="button" onClick={sendSearchRequest} color="primary">검색</Button>
                </FilterFormWrapper>
                <LmsDatatableFilterSummary filterCriteria={finallist?.filter(item=> item.value !== '') || []} />
            </FilterForm>

        </>
    );
}

export default EmployeeTableFilter