"use client";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import LmsTable from "@/components/common/LmsTable";
import React from "react";
import FaqTableActions from "@/app/(root-layout)/(main)/customer-service-center/faqs/components/FaqTableActions";

function FaqDataTable({pagination, inqueries}) {

    let columns = [
        { header: '카테고리', accessor: 'category'},
        { header: '제목', accessor: 'question'},
        { header: '작성자', accessor: 'registrant'},
        { header: '등록일', accessor: 'createdAt'},
    ];
    return (
        <>
            <LmsTableHeaderActions pagination={pagination} TableActions={<FaqTableActions url={"/student-inquiry"} />} classes={'mt-8'} />
            {inqueries && columns &&
                <LmsTable
                    columns={columns}
                    data={inqueries}
                    checkMark={true}
                    serialNo={true}
                    rowLink={(faq) => `/customer-service-center/faqs/${faq.id}`}
                    pagination={pagination} />
            }
        </>
    );
}

export default FaqDataTable;