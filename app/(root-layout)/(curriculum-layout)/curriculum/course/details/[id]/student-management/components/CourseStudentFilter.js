"use client";

import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";

function CourseStudentFilter({queryParams, id}) {
    const pathname = usePathname();
    const {replace} = useRouter();
    const [params, setParams] = useState(null)


    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)

        if (oldParams) {
            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                size: oldParams && oldParams.get('size') ? oldParams.get('size') : 5,
                progressRate: oldParams && oldParams.get('progressRate') ? oldParams.get('progressRate') : '',
                passFailStatus: oldParams && oldParams.get('passFailStatus') ? oldParams.get('passFailStatus') : '',
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
            })
        }
    }, [queryParams]);

    const handleOnChnage = (column, value) => {
        setParams((prev) => ({...prev, [column]: value}));
    }

    const handleOnKeyPress = (name, event) => {
        if (event.key === 'Enter') {
            sendSearchRequest()
        }
    }

    useEffect(()=>{
        sendSearchRequest()
    },[params && params.progressRate, params && params.passFailStatus])


    const sendSearchRequest = () => {
        if (params) {
            const filteredData = Object.fromEntries(
                Object.entries(params).filter(([key, value]) => value !== "" && value !== null)
            );
            replace(`${pathname}?${new URLSearchParams({...filteredData, page: 1})}`);
        }
    }


    const filterCriteria = [
        {label: '검색', paramsName: 'search'},
        {label: '진도율', paramsName: 'progressRate'},
        {label: '통과여부', paramsName: 'passFailStatus'},
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
                <div className="flex border-b border-commonBorderColor">
                    <FilterFormWrapper label="진도율" >
                        
                        <LmsStandardRadioFieldGroup
                            options={[{id: '', name: '전체'}, {id: "IN_PROGRESS", name: "완료"}, {id: "COMPLETE", name: "미완료"}]}
                            name="progressRate"
                            value={params ? params.progressRate : ''}
                            changeDataHandler={handleOnChnage} />
                    </FilterFormWrapper>

                    <FilterFormWrapper label="통과여부">
                        <LmsStandardRadioFieldGroup
                            options={[{id: '', name: '전체'}, {id: "PASS", name: "통과"}, {id: "FAIL", name: "미통과"}]}
                            name="passFailStatus"
                            value={params ? params.passFailStatus : ''}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>
                </div>
                <FilterFormWrapper label={`검색`} singleElement={true}>
                    <LmsSearchInput singleElement={true}
                                    name="search"
                                    value={params ? params.search : ''}
                                    onKeyUp={handleOnKeyPress}
                                    changeDataHandler={handleOnChnage}  />
                </FilterFormWrapper>
                <LmsDatatableFilterSummary filterCriteria={finalFilteredParams?.filter(item=> item.value !== '') || []} />
            </FilterForm>
        </>
    );
}

export default CourseStudentFilter;