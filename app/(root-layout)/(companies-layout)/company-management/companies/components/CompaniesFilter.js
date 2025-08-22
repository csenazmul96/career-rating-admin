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
import {useCommonContext} from "@/store/CommonContext";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import FieldWrapper from "@/components/common/form/FieldWrapper";

const CompaniesFilter = ({queryParams}) => {
    const pathname = usePathname();
    const {replace} = useRouter();
    const {countries, industries} = useCommonContext()

    const [params, setParams] = useState(null)


    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)
        if (oldParams) {
            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                per_page: oldParams && oldParams.get('per_page') ? oldParams.get('per_page') : 10,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                country_code: oldParams && oldParams.get('country_code') ? oldParams.get('country_code') : '',
                industry: oldParams && oldParams.get('industry') ? oldParams.get('industry') : '',
                company_type: oldParams && oldParams.get('company_type') ? oldParams.get('company_type') : '',
            })
        }
    }, [queryParams]);

    const companyTypes = [
        { id: "", name: "All" },
        { id: "Private", name: "Private" },
        { id: "Govt", name: "Govt" },
    ]


    const handleOnChnage = (column, value) => {
        setParams((prev) => ({...prev, [column]: value}));
    }

    const sendSearchRequest = () => {
        const filteredData = Object.fromEntries(
            Object.entries(params).filter(([key, value]) => value !== "" && value !== null)
        );
        replace(`${pathname}?${new URLSearchParams({...filteredData, page: 1})}`);
    }


    const onKeyUpHandle = (name, event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendSearchRequest();
        }
    }

    const filterCriteria  = [
        {label: 'Country Code', paramsName: 'country_code'},
        {label: 'Search', paramsName: 'search'},
        {label: 'Company Type', paramsName: 'company_type'},
        {label: 'Industry', paramsName: 'industry'}
    ]

    const finallist = filterCriteria.map(item => {
        const { label, paramsName } = item;
        let value = '';
        if (params && params[paramsName]) {

            value = params[paramsName];

            if (paramsName === "industry") {
                value = industries.find(item => item.id === value)?.name || "";
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
                    <FilterFormWrapper label="Company Type">
                        <LmsStandardRadioFieldGroup
                            options={companyTypes}
                            name="company_type"
                            value={params && params.company_type ? params.company_type : ''}
                            changeDataHandler={handleOnChnage}
                        />
                    </FilterFormWrapper>
                    <FilterFormWrapper label={'Country'} className={``}  >
                        <LmsStandardSelectInputV2
                            name={`country_code`}
                            initialText={'Select Country'}
                            fieldClass={'h-[250px] w-[270px]'}
                            search={true}
                            value={params && params.country_code ? params.country_code : ''}
                            options={countries}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>
                    <FilterFormWrapper label={'Industry'} className={`justify-end`}  >
                        <LmsStandardSelectInputV2
                            name={`industry`}
                            initialText={'Select Industry'}
                            fieldClass={'h-[250px] w-[270px]'}
                            search={true}
                            value={params && params.industry ? params.industry : ''}
                            options={industries}
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

export default CompaniesFilter