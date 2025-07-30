"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import { getSpecificPreviousDate } from "@/utils/helpers/CommonHelper";
import { format } from "date-fns";
import LmsStandardDatePeriodPicker from "@/components/common/form/LmsStandardDatePeriodPicker";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";

const MemberStatisticFilter = ({ queryParams }) => {
    const pathname = usePathname();
    const { replace } = useRouter();

    // Internal param state, and hasInitialized flag
    const [params, setParams] = useState(null);
    const hasInitialized = useRef(false);

    const [openPicker, setOpenPicker] = useState({
        startDate: false,
        endDate: false,
    });

    // 1. Initialize params from queryParams ON MOUNT ONLY
    useEffect(() => {
        if (!hasInitialized.current) {
            const oldParams = new URLSearchParams(queryParams);
            const initParams = {
                page: oldParams.get("page") || 1,
                size: oldParams.get("size") || 5,
                startDate: oldParams.get("startDate") || "",
                endDate: oldParams.get("endDate") || ""
            };
            setParams(initParams);
            hasInitialized.current = true;
        }
    }, [queryParams]);

    // 2. On FIRST mount (after params loaded), set last 7 days if not already set
    useEffect(() => {
        if (params && !params.startDate && !params.endDate) {
            specificDateClick(7);
        }
    }, [params]);

    // 3. Update url when params change (but not before they’re initialized)
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (!params) return;
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        // Filter out empty values
        const filteredData = Object.fromEntries(
            Object.entries(params).filter(([, value]) => value !== "" && value !== null)
        );
        replace(`${pathname}?${new URLSearchParams({ ...filteredData, page: 1 })}`);
    }, [params, pathname, replace]);

    // 4. Change handlers
    const handleOnChange = (column, value) => {
        const newParams = { ...params, [column]: value };

        const isStartValid = /^\d{4}-\d{2}-\d{2}$/.test(newParams.startDate);
        const isEndValid = /^\d{4}-\d{2}-\d{2}$/.test(newParams.endDate);

        setParams(newParams);

        if (isStartValid && isEndValid) {
            setOpenPicker({ startDate: false, endDate: false });
        }
    };

    function specificDateClick(day) {
        const date = getSpecificPreviousDate(day);
        const today = format(new Date(), "yyyy-MM-dd");
        setParams(prev => ({
            ...prev,
            startDate: date,
            endDate: today
        }));
        setOpenPicker({ startDate: false, endDate: false });
    }

    return (
        <FilterForm>
            <div className="flex">
                <FilterFormWrapper label="기간">
                    <LmsStandardDatePicker
                        name="startDate"
                        value={params?.startDate}
                        placeholder="YYYY-MM-DD"
                        selectedEndDate={params?.endDate}
                        selectedStartDate={params?.startDate}
                        changeDataHandler={handleOnChange}
                        key={`start-${params?.startDate}`}
                    />
                    <span>-</span>
                    <LmsStandardDatePicker
                        name="endDate"
                        value={params?.endDate}
                        selectedEndDate={params?.endDate}
                        selectedStartDate={params?.startDate}
                        placeholder="YYYY-MM-DD"
                        changeDataHandler={handleOnChange}
                        key={`end-${params?.endDate}`}
                    />
                    <LmsStandardDatePeriodPicker params={params} specificDateClick={specificDateClick} />
                </FilterFormWrapper>
            </div>
        </FilterForm>
    );
};

export default MemberStatisticFilter;
