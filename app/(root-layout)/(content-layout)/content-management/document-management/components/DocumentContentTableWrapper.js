"use client";
import ContentTableHeaderActions from "@/app/(root-layout)/(content-layout)/components/ContentTableHeaderActions";
import { Button } from "@/components/common/button";
import DataTable from "@/components/common/DataTable";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/table";
import Image from "next/image";
import Link from "next/link";
import arrow from "/public/images/content-management/chevron-right.png";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/common/dialog";

import { useState } from "react";

import ContentTableBreadCrumbs from "@/app/(root-layout)/(content-layout)/components/ContentTableBreadCrumbs";
import {Eye} from "lucide-react";

const DocumentContentTableWrapper = ({ documents, pagination }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [document, setDocument] = useState(null);

  const handleClickEvent = (e, doc) => {
    e.stopPropagation();
    setDocument(doc);
    setIsOpen(true);
  }


  let columns = [
    {
      header: "파일명",
      accessor: "title",
      cell: (_, document) => (
        <div className="flex gap-4">
          <div className="text-baseNormal flex flex-col gap-2">
            <ContentTableBreadCrumbs breadcrumbData={document} />
            <p className="whitespace-pre-line">{document.title}</p>
          </div>
        </div>
      ),
    },
    {
      header: "사용내역",
      accessor: "usageHistory",
      cell: (_, document) => (
        <>
          <button
            className="rounded-[2px] relative isolate inline-flex items-center justify-center gap-x-1  data-[disabled]:opacity-50 bg-transparent border border-borderColor text-textSubColor py-[0px] text-[13px] px-2 font-normal min-w-[auto] h-[24px] leading-19 cursor-pointer"
            type="button"
            onClick={(e) => handleClickEvent(e, document)}
          >
            <span
              className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
              aria-hidden="true"
            ></span>
            <span>{document.usageHistory}</span>
          </button>

        </>
      ),
    },
    {
      header: "사용권한",
      accessor: "registrant",
      cell: (_, document) => (
          <>
            {document.permission === "PUBLIC" && "전체"}
            {document.permission === "PRIVATE" && "나만보기"}
            {document.permission === "CUSTOM" &&
              <div>
                {document.customPermissions.length ? document.customPermissions[0].memberName : ''}
                <button
                    className=" relative isolate inline-flex items-center justify-center gap-x-1  data-[disabled]:opacity-50 bg-transparent border border-borderColor rounded text-textSubColor py-[0px] text-[13px] px-2 font-normal min-w-[auto] h-[24px] leading-19 cursor-pointer"
                    type="button"
                >
                 +{document.customPermissions.length - 1}
                </button>
              </div>
            }
          </>
      ),
    },
    {
      header: "등록자",
      accessor: "registrant",
      cell: (_, document) => (
        <>
          {document.role
            ? "(" + document.role + ") " + document.registrant
            : document.registrant}
        </>
      ),
    },
    { header: "등록일", accessor: "registrationDate" },
    {
      header: "",
      accessor: "action",
      cell: (_, document) => (
        <Button>
          <Link
            className={"flex cursor-pointer"}
            href={`${
              "/content-management/document-management/details/" + document.id
            }`}
          >
            <Image src={arrow} className="ml-1" alt="info image" />
          </Link>
        </Button>
      ),
    },
  ];

  return (
    <>
      <TableHeaderCommonActions
        pagination={pagination}
        TableActions={<ContentTableHeaderActions />}
      />
      {documents && columns && (
        <DataTable
          columns={columns}
          serialNo={true}
          data={documents}
          checkMark={true}
          rowLink={(row)=>`${"/content-management/document-management/details/" + row.id }`}
          pagination={pagination}
        />
      )}

      <Dialog
          size="w800"
          open={isOpen}
          onClose={() => setIsOpen(false)}
      >
        {document && document.involvedCourses && <>
        <DialogTitle>
          <div className="flex justify-between items-center">
            <div className="inner flex flex-col gap-1">
              <h2 className={`text-[19px]`}>콘텐츠 사용내역</h2>
              <p className={`text-textSubColor text-base font-normal`}>
                콘텐츠가 포함된 강의 내역입니다.
              </p>
            </div>
            <div className="inner self-end flex gap-2 text-textSubColor text-base font-normal">
                  <span>
                    <Eye size={24} />
                    {/*<img src="/images/content-management/li_eye.png" alt="" />*/}
                  </span>
              <span>
                    권한: {document.permission ? document.permission : "없음"}
                  </span>
            </div>
          </div>
        </DialogTitle>
        <DialogBody className={`!mt-4`}>
          <div className=" px-1 py-2">
            <p className={`text-base pb-4`}>
              Total
              <span className={`font-bold text-themeColor`}>
                    {document.involvedCourses
                        ? document.involvedCourses.length
                        : 0}
                건
                  </span>
            </p>
            <Table>
              <TableHead className="">
                <TableRow>
                  <TableHeader>NO</TableHeader>
                  <TableHeader>과정명</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {document.involvedCourses &&
                document.involvedCourses.length > 0 ? (
                    document.involvedCourses.map((course, idx) => (
                        <TableRow key={course.courseId || idx}>
                          <TableCell>
                            {(idx + 1).toString().padStart(2, "0")}
                          </TableCell>
                          <TableCell>{course.courseName}</TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                      <TableCell colSpan={2} className="text-center">
                        강의 내역이 없습니다.
                      </TableCell>
                    </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </DialogBody>
        <DialogActions>
          <Button
              color="primaryMedium"
              className={`h-[40px]`}
              onClick={() => setIsOpen(false)}
          >
            확인
          </Button>
        </DialogActions>
        </>}
      </Dialog>
    </>
  );
};

export default DocumentContentTableWrapper;
