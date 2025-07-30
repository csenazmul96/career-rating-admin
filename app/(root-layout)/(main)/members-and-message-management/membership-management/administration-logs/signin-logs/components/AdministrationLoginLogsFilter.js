"use client"
import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsStandardInputField from "@/components/common/form/LmsStandardInputField";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import { getSpecificPreviousDate} from "@/utils/helpers/CommonHelper";
import {format} from "date-fns";
import LmsStandardDatePeriodPicker from "@/components/common/form/LmsStandardDatePeriodPicker";
import {Search} from "lucide-react";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";

const AdminstrationLoginLogsFilter = ({queryParams}) => {
    const pathname = usePathname();
    const {replace} = useRouter();

    const [params, setParams] = useState(null)

    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)

        if (oldParams) {
            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                size: oldParams && oldParams.get('size') ? oldParams.get('size') : 5,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                membershipType: oldParams && oldParams.get('membershipType') ? oldParams.get('membershipType') : '',
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


    const filterCriteria = [
        {label: '검색', paramsName: 'search'},
        {label: '회원유형', paramsName: 'membershipType'},
        {label: '기간', paramsName: 'startDate'}
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

    const onKeyUpHandle = (name, event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendSearchRequest();
        }
    }

    return (
        <FilterForm>
            <div className="flex border-b border-b-borderColor">
                <FilterFormWrapper label="회원유형" className={'!py-0'}>
                    <LmsStandardRadioFieldGroup
                        options={[{id: '', name: '모두'}, {id: "MEMBER", name: "회원"}, {id: "MANAGER", name: "관리자"}]}
                        name="membershipType"
                        value={params ? params.membershipType : ''}
                        changeDataHandler={handleOnChnage}/>
                </FilterFormWrapper>
                <FilterFormWrapper label="기간">
                    <LmsStandardDatePicker
                        name={'startDate'}
                        selectedEndDate={params?.endDate}
                        selectedStartDate={params?.startDate}
                        value={params?.startDate}
                        placeholder={'YYYY-MM-DD'}
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
            </div>

            <FilterFormWrapper label="검색" singleElement={true}>
                <div className={"w-auto flex-auto relative"}>
                    <LmsSearchInput
                        singleElement={true}
                        fieldClass="w-full"
                        name="search"
                        onKeyUp={onKeyUpHandle}
                        value={params ? params.search : ""}
                        placeholder="찾으시는 회원 정보를 입력해주세요."
                        changeDataHandler={handleOnChnage}
                    />
                </div>
                <Button type="button" onClick={sendSearchRequest} color="primary">검색</Button>
            </FilterFormWrapper>

            <LmsDatatableFilterSummary filterCriteria={finalFilteredParams?.filter(item=> item.value !== '') || []} />
        </FilterForm>
    );
}

export default AdminstrationLoginLogsFilter