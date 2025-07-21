"use client"

import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";

const InqueryFilter = ({queryParams, categories}) => {
    const pathname = usePathname();
    const {replace} = useRouter();

    const [params, setParams] = useState({size:''})

    useEffect(() => {
        if(queryParams){
            const oldParams = new URLSearchParams(queryParams)
        }
    }, [queryParams]);

    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)

        if (oldParams) {
            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                size: oldParams && oldParams.get('size') ? oldParams.get('size') : 5,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                situation: oldParams && oldParams.get('situation') ? oldParams.get('situation') : '',
                searchField: oldParams && oldParams.get('searchField') ? oldParams.get('searchField') : 'title',
                category: oldParams && oldParams.get('category') ? oldParams.get('category') : '',
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

    const searchColumns = [ {id: 'title', name: '제목'}, {id: 'createdBy', name: '작성자'}, {id: 'author', name: '작가'} ];

    const onkeyupHandle = (name, event) => {
      if (event.key === 'Enter') {
          sendSearchRequest()
      }
    }

    const filterCriteria  = [
        {label: '검색', paramsName: 'search'},
        {label: '상태', paramsName: 'situation'},
        {label: '카테고리', paramsName: 'category'}
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
                <div className="flex">
                    <FilterFormWrapper label="카테고리" singleElement={true}>
                        <LmsStandardSelectInputV2
                            name={`category`}
                            optionLabel={'label'}
                            fieldClass={`h-[190px] w-[270px]`}
                            optionValue={'name'}
                            initialText={'카테고리 선택'}
                            value={params && params.category ? params.category : ''}
                            options={categories}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>

                    <FilterFormWrapper label="상태" className={` `}>
                        <LmsStandardRadioFieldGroup
                            value={params.situation}
                            changeDataHandler={handleOnChnage}
                            options={[{id: '', name: '전체'}, {id: 'UNANSWERED', name: '대기중'}, {id: 'ANSWERED', name: '답변완료'}]}
                            name="situation"/>
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

export default InqueryFilter