'use client';
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import {Button} from "@/components/common/button";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import React, {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";

const MarketingTableFilter = ({queryParams}) => {
    const pathname = usePathname();
    const {replace} = useRouter();
    const oldParams = new URLSearchParams(queryParams);
    const [search, setSearch] = useState(oldParams.get('search') || '');

    const handleOnChange = (column, value) => {
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
                <LmsSearchInput placeholder={'파일이름 또는 태그를 입력해주세요.'}
                                value={search}
                                changeDataHandler={handleOnChange}
                                onKeyUp={enterPress}
                                singleElement={true} fieldClass="w-full"/>

                <Button type="button" color="primary" onClick={sendSearchRequest}>검색  </Button>
            </FilterFormWrapper>
        </FilterForm>
    );
}

export default MarketingTableFilter;