"use client";
import AnnouncementTableActions from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/announcement/component/AnnouncementTableActions";
import DataTable from "@/components/common/DataTable";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
import Link from "next/link";

function AnnouncementTableWrapper({ announcements, id, pagination }) {
  const tableData = announcements.map((announcement, idx) => ({
    ...announcement,
    index: idx + 1,
  }));

  let columns = [
    { header: "NO", accessor: "index" },
    {
      header: "제목",
      accessor: "title",
      tdClass: "text-center",
      thClass: "text-center",
      cell: (_, course) => (
        <Link
          href={`/curriculum/course/details/${id}/announcement/view/${course.id}`}
        >
          {course.title}{" "}
        </Link>
      ),
    },
    { header: "등록자", accessor: "registrant" },
    {
      header: "등록일",
      accessor: "registrationDate",
    },
  ];

  return (
    <div>
      <TableHeaderCommonActions
        pagination={pagination}
        TableActions={<AnnouncementTableActions id={id} />}
      />
      {tableData && columns && (
        <DataTable
          columns={columns}
          pagination={pagination}
          data={tableData}
          rowLink={(course)=> `/curriculum/course/details/${id}/announcement/view/${course.id}`}
          emptyMessage={"공지사항이 없습니다. 새로운 공지를 등록해주세요."}
          showEmptyMessage={true}
          checkMark={true}
        />
      )}
    </div>
  );
}

export default AnnouncementTableWrapper;
