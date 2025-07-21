"use client";

import ContentTableBreadCrumbs from "@/app/(root-layout)/(content-layout)/components/ContentTableBreadCrumbs";
import EvaluationTableActions from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/components/EvaluationTableActions";
import DataTable from "@/components/common/DataTable";
import TableHeaderCommonActions from "@/components/common/TableHeaderCommonActions";
import { Button } from "@/components/common/button";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import { deleteEvaluation } from "@/utils/api/evaluationManagement";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { confirmAlert } from "react-confirm-alert";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";

export default function EvaluationTableComponent({
  evaluations,
  pagination,
  parentGrpId = null,
}) {
  const deleteEvaluationItem = (e, id) => {
    e.stopPropagation();
    confirmAlert({
      title: "과정평가 삭제",
      message:
        "선택한 과정 평가를 삭제하시겠습니까? 등록된 과정에서도 평가가 삭제됩니다.",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          buttonLabel: "삭제",
          onClick: async () => {
            try {
              const request = await deleteEvaluation(id);

              if (request.status === "success") {
                CommonToastMessage('성공.', 'Evaluation has been deleted successfully.', 'success')
              }
            } catch (error) {
              console.error("Error in deleteEvaluation:", error);
            }
          },
        },
      ],
      customUI: ({ title, message, onClose, buttons }) => {
        return (
          <ConfirmPopup
            title={title}
            message={message}
            onClose={onClose}
            onConfirm={buttons}
          />
        );
      },
    });
  };

  let columns = [
    {
      header: "평가명",
      accessor: "evaluationName",
      cell: (_, evaluation) => {
        const breadcrumbData = {
          contentGroup: evaluation.evaluationGroupName
            ? { name: evaluation.evaluationGroupName }
            : "",
          contentSubGroup: evaluation.evaluationSubGroupName
            ? { name: evaluation.evaluationSubGroupName }
            : "",
          contentSubSubGroup: evaluation.evaluationSubSubGroupName
            ? { name: evaluation.evaluationSubSubGroupName }
            : "",
        };

        return (
          <div className={"space-y-2 flex flex-col"}>
            {evaluation.evaluationGroupName && !parentGrpId && (
              <ContentTableBreadCrumbs breadcrumbData={breadcrumbData} />
            )}
            <Link href={`/curriculum/evaluations/details/${evaluation.id}`}>
              {evaluation.evaluationName}
            </Link>
          </div>
        );
      },
    },
    {
      header: "사용내역",
      accessor: "usageHistory",
      cell: (_, evaluation) => (
        <Button color="transparentSmall">
          {evaluation.usageHistory ? evaluation.usageHistory : 0}건
        </Button>
      ),
    },
    { header: "등록자", accessor: "registrant" },
    {
      header: "",
      accessor: "usageHistory",
      cell: (_, evaluation) => (
        <Button
          color="transparentMedium"
          onClick={(e) => deleteEvaluationItem(e, evaluation.id)}
        >
          <span>
            <Trash2 size={20} />
          </span>
          <span>삭제</span>
        </Button>
      ),
    },
  ];

  return (
    <>
      <TableHeaderCommonActions
        pagination={pagination}
        TableActions={<EvaluationTableActions />}
        classes={"mt-8"}
      />
      {evaluations && columns && (
        <DataTable
          columns={columns}
          data={evaluations}
          serialNo={true}
          emptyMessage={"평가자료가 없습니다. 평가자료를 등록해주세요."}
          showEmptyMessage={true}
          rowLink={(evaluation) => `/curriculum/evaluations/details/${evaluation.id}`}
          pagination={pagination}
        />
      )}
    </>
  );
}
