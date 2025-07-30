"use client"
import React from "react";
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
import {Button} from "@/components/common/button";
import Link from "next/link";
import {FileInput} from "lucide-react";

function CourseEvaluationTable({documents, allParams, pagination}) {

    let columns = [
        { header: '평가명', accessor: 'evaluationName'},
        { header: '응시율', accessor: ''},
        { header: '성적 평균', accessor: ''},
    ];

    const ImportButton = () => {
        return <Link href={`/curriculum/course/details/${allParams.id}/course-evaluation/import`}>
            <Button color="transparentMedium">
                <span>
                    {/*<img src="/images/curriculum-management/li_file-input.png" alt=""/>*/}
                    <FileInput size={20} />
                </span>
                <span>평가문제 가져오기</span>
            </Button>
        </Link>
    };

    return (
        <div>
            <LmsTableHeaderActions pagination={pagination} TableActions={<ImportButton />} />
            <LmsTable
                columns={columns}
                data={documents}
                serialNo={true}
                pagination={pagination}
                emptyMessage={'공지사항이 없습니다. 새로운 공지를 등록해주세요.'}
                showEmptyMessage={true}
                checkMark={false} />
        </div>
    );
}

export default CourseEvaluationTable;