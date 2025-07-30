"use client";

import React from "react";
import { Button } from "@/components/common/button";
import { Download } from "lucide-react";
import { getExcellData } from "@/utils/api/memberManagementRequest";

const MemberStatisticsTableActions = ({ members, queryParams }) => {

    const handleDownloadExcel = async () => {
        if (!queryParams?.startDate || !queryParams?.endDate) {
            alert("시작일과 종료일을 선택해주세요.");
            return;
        }

        try {
            const { blob, fileName } = await getExcellData({
                startDate: queryParams.startDate,
                endDate: queryParams.endDate,
            });

            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = fileName || `statistics_${queryParams.startDate}_to_${queryParams.endDate}.xlsx`;
            document.body.appendChild(a); // required for Firefox
            a.click();
            a.remove();

            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
            alert("엑셀 다운로드 실패");
        }
    };



    return (
        <Button color="transparentMedium" onClick={handleDownloadExcel}>
            <span><Download /></span> <span>EXCEL 다운로드</span>
        </Button>
    );
};

export default MemberStatisticsTableActions;
