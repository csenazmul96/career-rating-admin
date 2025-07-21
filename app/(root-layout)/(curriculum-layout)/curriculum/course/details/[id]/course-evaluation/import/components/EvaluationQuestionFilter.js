'use client';
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import {Button} from "@/components/common/button";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import React, {useState} from "react";
import {usePathname, useRouter} from "next/navigation";

const EvaluationQuestionFilter = ({queryParams}) => {
    const pathname = usePathname();
    const {replace} = useRouter();
    const oldParams = new URLSearchParams(queryParams);
    const [search, setSearch] = useState(oldParams.get('search') || '');

    const handleOnChnage = (column, value) => {
        setSearch(value);
    }

    const sendSearchRequest = () => {
        replace(`${pathname}?${new URLSearchParams({search:search, page: 1})}`);
    }

    const enterPress = (column, e) => {
        if(e.key === 'Enter') {
            sendSearchRequest();
        }
    }

    return (
        <FilterForm>
            <FilterFormWrapper label="검색" singleElement={true} className="">
                <LmsSearchInput placeholder={'평가명을 검색해주세요.'}
                                value={search}
                                changeDataHandler={handleOnChnage}
                                onKeyUp={enterPress}
                                singleElement={true} fieldClass="w-full"/>
            </FilterFormWrapper>
        </FilterForm>
    );
}

export default EvaluationQuestionFilter;