import EvaluationFilter from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/components/EvaluationFilter";
import EvaluationTableComponent from "@/app/(root-layout)/(curriculum-layout)/curriculum/evaluations/components/EvaluationTableComponent";
import LmsPageHeading from "@/components/common/LmsPageHeading";
import { getEvaluations } from "@/utils/api/evaluationManagement";

export default async function Page({ searchParams, params }) {
  const queryParams = await searchParams;
  const allParams = await params;
  const { evaluations, pagination } = await getEvaluations(queryParams);
  return (
    <>
      <LmsPageHeading
        title="평가 관리"
        tooltip={
          "과정에 대한 평가를 등록할 수 있습니다. 수강자 홈페이지에서 회원들이 테스트를 진행할 수 있습니다."
        }
        tooltipTitle={"평가 관리"}
      />
      <EvaluationFilter queryParams={queryParams} allParams={allParams} />
      <EvaluationTableComponent
        queryParams={queryParams}
        evaluations={evaluations}
        pagination={pagination}
      />
    </>
  );
}
