"use client";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
import DataTable from "@/components/common/DataTable";
import {Button} from "@/components/common/button";
import Progress  from "@/components/common/ProgressBar";
import React from "react";
import Link from "next/link";

function StudentManagementTableWrapper({ students, pagination, allSearchParams, id }) {
    const columns = [
        { header: '이름', accessor: 'name' },
        { header: '아이디', accessor: 'memberId', cell: (_, student) => (
                <>
                    <Link href={`/curriculum/course/details/${id}/student-management/${student.studentCourseEnrollmentId}`}>
                        {student.memberId}
                    </Link>
                </>
            ) },

        {   header: '진도율(출석률)',
            accessor: 'progressionRate',
            cell: (_, student) => (
                <>
                    <div className={'flex gap-1'}>
                        <Progress value={student.progressionRate} />
                        <div className={`flex`}>
                            ({ <span className={`text-themeColor font-bold`}>{student.completedLectureCount}</span> } <span className={`text-textSubColor`}>/{student.lectureCount}강)</span>
                        </div>
                    </div>
                </>
            ),
        },

        {
            header: '성적관리',
            accessor: 'situation',
            cell: (_, student) => (
                <div className="flex gap-3">
                    <div className="left">
                        평균 <span className={`text-themeColor font-bold`}>{student.averageScore}</span>
                    </div>

                    {student.result === 'PASS' &&
                        <Button color="primaryRoundedSmall" className={`!bg-transparent !text-themeColor`}> 통과 </Button>
                    }
                    {student.result === 'FAIL' &&
                        <Button color="transparentRoundedSmall" className={`!bg-transparent !text-placeholderColor`}> 통과 </Button>
                    }
                    {student.result === 'N/A' &&
                        <Button color="secondaryLightRoundedSmall" className={`!bg-transparent !text-placeholderColor`}> 미응시 </Button>
                    }

                </div>
            ),
        },
    ];
    return (
        <>
            <div>
            {pagination && <TableHeaderCommonActions
                pagination={pagination}

            />}
            <DataTable
                columns={columns}
                data={students}
                serialNo={true}
                rowLink={(student) => `/curriculum/course/details/${id}/student-management/${student.studentCourseEnrollmentId}`}
                pagination={pagination??null}  />
            </div>
        </>
    );
}

export default StudentManagementTableWrapper;