"use client";

import {Button} from "@/components/common/button";
import {RotateCw, X, ChevronRight} from "lucide-react";
import React from "react";
import { usePathname, useRouter, useSearchParams} from "next/navigation";

function LmsDatatableFilterSummary({filterCriteria}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleReset = () => {
        replace(`${pathname}`);
    }

    const removeFilter = (key) => {
        const params = Object.fromEntries(searchParams.entries());
        if (key === 'startDate') {
            delete params['endDate'];
        }

        delete params[key];
        replace(`${pathname}?${new URLSearchParams({...params, page: 1})}`);
    }

    return (
        <div className="flex border border-borderColor flex-col bg-white rounded-[4px] mb-4 min-h-12">
            <div className="flex px-4 py-3">
                <div className="flex items-center justify-between w-full min-h-6">
                    <div className=" flex items-center space-x-3">
                        <span className={`flex gap-1`}> <span className={"common-label-style text-13 font-bold"}>적용 필터</span> <span className={"text-themeColor text-13 font-bold"}>{filterCriteria.length}</span>  </span>
                        <span className={"text-placeholderColor bg-borderColor flex w-[1px] h-[15px]"}></span>
                        {filterCriteria && filterCriteria.length > 0 ?
                            <>
                                {filterCriteria && filterCriteria.map((criteria, index) => (
                                    <Button
                                        onClick={() => removeFilter(criteria.paramsName)}
                                        color="transparentRoundedSmall" key={'tag' + index} className={'cursor-pointer !font-bold'}>
                                        {criteria.label} <ChevronRight size={13} /> {criteria.value}
                                        <span><X size={13}/></span>
                                    </Button>
                                ))}
                            </>
                            :
                            <span>적용된 필터가 없습니다.</span>
                        }
                    </div>

                    <div className="flex">
                        {filterCriteria && filterCriteria.length > 0 &&
                            <Button color="transparentSmall" onClick={handleReset} className="min-w-[auto] !font-bold border-none w-[80px] whitespace-nowrap !gap-2 h-[24px] !pl-3 !pr-3 cursor-pointer !text-[13px]">
                                <span> <RotateCw size={16} /> </span>  초기화
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LmsDatatableFilterSummary;