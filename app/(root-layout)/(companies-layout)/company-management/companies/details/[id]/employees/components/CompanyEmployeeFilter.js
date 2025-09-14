"use client"

import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";
import FilterForm from "@/components/common/form/FilterForm";
import MultiStageSingleSelect from "@/components/common/form/MultiStageSingleSelect";

const CompanyEmployeeFilter = ({queryParams, roles}) => {
    const pathname = usePathname();
    const {replace} = useRouter();

    const [params, setParams] = useState(null)

    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)
        if (oldParams) {
            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                per_page: oldParams && oldParams.get('per_page') ? oldParams.get('per_page') : 20,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                current_role_id: oldParams && oldParams.get('current_role_id') ? oldParams.get('current_role_id') : '',
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

    const onKeyUpHandle = (name, event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendSearchRequest();
        }
    }

    const filterCriteria  = [
        {label: 'Search', paramsName: 'search'},
        {label: 'Role', paramsName: 'current_role_id'}
    ]

    const finallist = filterCriteria.map(item => {
        const { label, paramsName } = item;
        let value = '';
        if (params && params[paramsName]) {

            value = params[paramsName];

            if (paramsName === "current_role_id") {
                value = roles.find(item => item.id === value)?.name || "";
            }
        }
        return {
            label,
            paramsName,
            value
        };
    });
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const receiveOrganizationFilter = (role) => {
        setParams(prevForm => ({
            ...prevForm,
            current_role_id: role.id
        }));
        setSelectedIndustry(role);
    };

    return (
        <>
            <FilterForm>
                <div className="flex content-between justify-between">
                    <FilterFormWrapper label={'Role'} className={`justify-start`}  >
                        <MultiStageSingleSelect dataList={roles}
                                                selected={selectedIndustry}
                                                setSelected={receiveOrganizationFilter}
                                                classes={'w-[270px]'} />
                    </FilterFormWrapper>
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
                        <Button type="button" onClick={sendSearchRequest} color="primary">Search</Button>
                    </FilterFormWrapper>

                </div>
                <LmsDatatableFilterSummary filterCriteria={finallist?.filter(item=> item.value !== '') || []} />
            </FilterForm>
        </>
    );
}

export default CompanyEmployeeFilter