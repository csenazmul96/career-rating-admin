"use client"

import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";
import {Radio, RadioField, RadioGroup} from "@/components/common/radio";
import {Label} from "@/components/common/fieldset";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

const NoticeFilter = ({queryParams, categories}) => {
    const pathname = usePathname();
    const {replace} = useRouter();

    const [params, setParams] = useState({size:''})

    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)

        if (oldParams) {
            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                size: oldParams && oldParams.get('size') ? oldParams.get('size') : 5,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                searchField: oldParams && oldParams.get('searchField') ? oldParams.get('searchField') : '',
                noticeType: oldParams && oldParams.get('noticeType') ? oldParams.get('noticeType') : '',
                noticeCategory: oldParams && oldParams.get('noticeCategory') ? oldParams.get('noticeCategory') : '',
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

    const searchColumns = [{id: '', name: '선택'}, {id: 'question', name: '제목'}, {id: 'registrant', name: '작성자'}];

    const onkeyupHandle = (name, event) => {
        if (event.key === 'Enter') {
            sendSearchRequest()
        }
    }

    const filterCriteria  = [
        {label: '검색', paramsName: 'search'},
        {label: '검색 필드', paramsName: 'searchField'},
        {label: '카테고리', paramsName: 'noticeCategory'}
    ]

    const finallist = filterCriteria.map(item => {
        const { label, paramsName } = item;
        let value = '';
        if (params && params[paramsName]) {
            value = params[paramsName];
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
                <div className="flex  border-b border-borderColor">
                    <FilterFormWrapper label="카테고리" singleElement={true} className={` `}>
                        <LmsStandardSelectInputV2
                            name={`noticeCategory`}
                            optionLabel={'label'}
                            optionValue={'name'}
                            fieldClass={`h-[190px] w-full`}
                            initialText={'카테고리 선택'}
                            value={params?.noticeCategory || ''}
                            options={categories}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>
                    <FilterFormWrapper label="상태" className={' '}>
                        <LmsStandardRadioFieldGroup
                            name="noticeType"
                            options={[
                                { id: '', name: '전체' },
                                { id: 'GENERAL', name: '일반' },
                                { id: 'IMPORTANT', name: '중요' },
                            ]}
                            value={params?.noticeType || ""}
                            changeDataHandler={handleOnChnage}/>

                    </FilterFormWrapper>
                </div>


                <FilterFormWrapper label="검색" singleElement={true}>
                    <LmsStandardSelectInputV2
                        name={`searchField`}
                        value={params && params.searchField ? params.searchField : ''}
                        options={searchColumns}
                        changeDataHandler={handleOnChnage}/>

                    <div className={"w-auto flex-auto relative"}>
                        <LmsSearchInput
                            singleElement={true}
                            fieldClass="w-full"
                            name="search"
                            value={params ? params.search : ''}
                            onKeyUp={onkeyupHandle}
                            placeholder="검색어를 검색해주세요."
                            changeDataHandler={handleOnChnage}
                        />
                    </div>
                    <Button type="button" onClick={sendSearchRequest} color="primary">검색</Button>
                </FilterFormWrapper>
                <LmsDatatableFilterSummary filterCriteria={finallist?.filter(item=> item.value !== '') || []} />
            </FilterForm>
        </>
    );
}

export default NoticeFilter