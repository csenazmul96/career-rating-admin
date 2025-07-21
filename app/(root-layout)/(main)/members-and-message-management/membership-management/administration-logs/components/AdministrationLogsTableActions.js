"use client"

import React, {useEffect, useState} from 'react';
import {Button} from "@/components/common/button";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const AdministrationLogsTableActions = ({logsdata,pagination}) => {
    const [searchStatus, setSearchStatus] = useState(false);

    const searchParams = useSearchParams();

    const oldParams = new URLSearchParams(searchParams)
    const [params, setParams] = useState({
        page:oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
        size:oldParams && oldParams.get('size') ? oldParams.get('size') : 5,
    })

    const {replace} = useRouter();
    const pathname = usePathname();

    const handleOnChange = (column, value) =>{
        setParams((prev) => ({...prev, size: value}));
        setSearchStatus(true)
    }


    useEffect(() => {
        sendSearchRequest()
    }, [params]);

    const sendSearchRequest = () => {
        if(searchStatus) {
            const filteredData = Object.fromEntries(
                Object.entries(params).filter(([key, value]) => value !== "" && value !== null)
            );
            replace(`${pathname}?${new URLSearchParams(filteredData)}`);
        }
    }
    return (
        <div className="table-filter flex items-center pb-6">
            <div className="flex items-center gap-2">
                <div className="">Total</div>
                <div className="text-themeColor font-bold">{ pagination?.total}건</div>
                <div className="">
                    <LmsStandardSelectInputV2
                        name={`size`}
                        size={'small'}
                        fieldClass={'w-[87px]'}
                        value={params.size}
                        options={[{id: 5, name: "5"}, {id: 25, name: "25"},{id: 50, name: "50"},{id: 100, name: "100"}]}
                        changeDataHandler={handleOnChange}/>
                </div>
                <div>건 씩보기</div>
            </div>

        </div>
    );
};

export default AdministrationLogsTableActions;