"use client";
import { Button } from "@/components/common/button";
import DataTable from "@/components/common/DataTable";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
import { getSituationKoreanText } from "@/utils/helpers/CommonHelper";

export default function CourseDetailsTable({ courses, pagination }) {
  const tableData = courses.map((course, idx) => ({
    ...course,
    index: idx + 1,
  }));

  const columns = [
    { header: "NO", accessor: "index" },
    { header: "회원번호", accessor: "memberId" },
    { header: "결제수단", accessor: "paymentMethod" },
    { header: "과정그룹", accessor: "courseGroup" },
    { header: "과정명", accessor: "courseName" },
    { header: "학습시작", accessor: "learningStartDate" },
    { header: "학습종료", accessor: "learningEndDate" },
    {
      header: "학습률",
      accessor: "learningRate",
      cell: (_, row) => <span>{row.learningRate}%</span>,
    },
    {
      header: "상태",
      accessor: "status",
      cell: (_, row) => (
        <Button
          color={`${
            row.status === "IN_PROGRESS"
              ? "primaryRoundedSmall"
              : row.status === "COMPLETE"
              ? "secondaryLightRoundedSmall"
              : ""
          }`}
        >
          {getSituationKoreanText(row.status)}
        </Button>
      ),
    },
  ];

  return (
    <>
      {pagination && (
        <TableHeaderCommonActions pagination={pagination} pageSize={10} />
      )}
      <DataTable
        columns={columns}
        data={tableData}
        pageSize={10}
        pagination={pagination ?? null}
      />
    </>
  );
}
