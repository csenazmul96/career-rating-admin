"use client";
import ContentTableHeaderActions from "@/app/(root-layout)/(content-layout)/components/ContentTableHeaderActions";
import { Button } from "@/components/common/button";
import LmsTable from "@/components/common/LmsTable";
import LmsTableHeaderActions from "@/components/common/LmsTableHeaderActions";
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
import VideoInvolvedHistoryShowModal
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/VideoInvolvedHistoryShowModal";
import ContentRegistantNameWithHover
    from "@/app/(root-layout)/(content-layout)/content-management/video-management/components/ContentRegistantNameWithHover";

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
              {document.permission === 'PRIVATE' ? "등록자" : (document.permission === 'PUBLIC' ? "전체" : "개별설정")}
          </>
      ),
    },
      {
          header: "등록자",
          accessor: "registrantName",
          cell: (_, document) => <> <ContentRegistantNameWithHover contentType={'document'} video={document} /> </>
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
        <LmsTableHeaderActions
            pagination={pagination}
            TableActions={<ContentTableHeaderActions />}
        />
        {documents && columns && (
            <LmsTable
                columns={columns}
                serialNo={true}
                data={documents}
                checkMark={true}
                rowLink={(row)=>`${"/content-management/document-management/details/" + row.id }`}
                pagination={pagination}
            />
        )}

          <VideoInvolvedHistoryShowModal currentVideo={document} isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
  );
};

export default DocumentContentTableWrapper;
