'use client'
import CurriculumCategorySidebar
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/components/category/CurriculumCategorySidebar";
import React, {useEffect, useState} from "react";
import {evaluationsWithoutPagination} from "@/utils/api/evaluationManagement";
import ToolTip from "@/components/common/ToolTip";
import Link from "next/link";
import {Button} from "@/components/common/button";
import LmsTable from "@/components/common/LmsTable";
import EvaluationQuestionFilter
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/details/[id]/course-evaluation/import/components/EvaluationQuestionFilter";
import {useRouter} from "next/navigation";
import {useDataTable} from "@/store/DataTableContext";
import {
    assignEvaluationToCourse
} from "@/utils/api/curriculumManagement";
import {FileInput, Menu} from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";

function EvaluationQuestionImport({groups, queryParams, allParams}) {
    const [evaluations, setEvaluations] =  useState([])
    const [pagination, setPagination] = useState(null)
    const evaluationGetRequest = async (params) =>{
        const {evaluations, pagination} = await evaluationsWithoutPagination(params);
        setEvaluations(evaluations)
        setPagination(pagination)
    }
    useEffect(()=>{
        const oldParams = new URLSearchParams(queryParams);
        let contentGroupId = oldParams.get('contentGroupId') || ''
        let contentSubGroupId = oldParams.get('contentSubGroupId') || ''
        let contentSubSubGroupId = oldParams.get('contentSubSubGroupId') || ''

        const params = {
            evaluationGroupId: contentGroupId,
            evaluationSubGroupId: contentSubGroupId,
            evaluationSubSubGroupId: contentSubSubGroupId,
            search: oldParams.get('search') || '',
            size: 100
        }
        evaluationGetRequest(params)
    }, [queryParams])

    let columns = [
        { header: '평가명', accessor: 'evaluationName'}
    ];
    const route = useRouter()
    const{selectedRow, setSelectedRows} = useDataTable()
    const [loader, setLoader] = useState(false)
    const importEvaluation = async() => {
        if (selectedRow.length) {
            setLoader(true)
            try {
                const response = await assignEvaluationToCourse( {ids: selectedRow}, allParams.id)

                if (response.status === "success") {
                    LmsToastMessage('성공.', 'Evaluation has been imported', 'success')
                    setSelectedRows([])
                    route.push(`/curriculum/course/details/${allParams.id}/course-evaluation`)
                } else {
                    if (response.errors) {
                        const errors = formatErrors(response.errors)
                        if (errors?.courseId)
                            LmsToastMessage('오류.', errors?.courseId, 'error')
                    } else {
                        LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
                    }

                }
            } catch (e){
                console.log(e.message)
            }
            setLoader(false)
        }
    }

    return (
        <div className="flex gap-6">
            <div className="flex flex-col w-[240px]">
                <CurriculumCategorySidebar groups={groups} headingText={'그룹선택'}/>
            </div>
            <div className="flex flex-col flex-1 gap-10 ">
                <div className="flex items-center justify-between w-full">
                    <div className="left flex gap-2 items-center">
                        <span className={`font-bold  text-[25px]`}>평가 문제 가져오기</span>
                        <ToolTip title={`평가 문제 가져오기`} content={'평가 원본은 ‘콘텐츠 관리’ >  ‘평가 관리\'에서 업로드 후, 목차에 추가 가능합니다.'}/>
                    </div>
                    <div className={"flex gap-4"}>
                        <Link href={`/curriculum/course/details/${allParams.id}/course-evaluation`}>
                            <Button color="transparentMedium" className={`h-[40px]`}>
                                <span>
                                    <Menu size={20} />
                                </span>
                                <span className={`leading-[normal]`}>목록</span>
                            </Button>
                        </Link>

                        <Button  disable={loader}
                                 loading={loader}
                                 onClick={importEvaluation}
                                 color={`${selectedRow.length ? "primaryMedium" : "secondaryLightMedium"}`}
                                 className={`h-[40px]`}>
                                <span>
                                    {selectedRow.length ?
                                        <FileInput size={20} className={`text-white`} />
                                        :
                                        <FileInput size={20} />
                                    }
                                </span>
                            <span>{selectedRow.length ? `${selectedRow.length }개` : ''} 평가문제 가져오기</span>
                        </Button>
                    </div>
                </div>
                <EvaluationQuestionFilter queryParams={queryParams}/>

                <div>
                    {pagination &&
                        <div className={`table-filter flex items-center pb-6`}>
                            <div className="flex items-center gap-2">
                                <div className="">Total</div>
                                <div
                                    className="text-themeColor font-bold">{pagination && pagination.total ? pagination.total : 0}건
                                </div>
                            </div>
                        </div>
                    }
                    <LmsTable
                        columns={columns}
                        data={evaluations}
                        checkMark={true}
                        emptyMessage={'해당 폴더에 평가가 없습니다. 평가를 등록해주세요.'}
                        showEmptyMessage={true}
                        pagination={pagination}/>
                </div>
            </div>


        </div>
    );
}

export default EvaluationQuestionImport;