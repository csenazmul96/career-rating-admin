import {getStudentManagementSingle} from "@/utils/api/curriculumManagement";
import {Heading} from "@/components/common/heading";
import FieldWrapper from "@/components/common/form/FieldWrapper";
import React from "react";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {Check, ChevronDownIcon, Menu} from "lucide-react";
import {Button} from "@/components/common/button";
import Link from "next/link";

export default async function Page({params}) {
    const {slug, id} = await params;
    const student = await getStudentManagementSingle(slug);

    return (
        <>
            {student?.courseMemberProgressionInfo &&
                <>
                    <Heading level={2}>
                        수강자 정보
                    </Heading>
                    <div className="flex flex-col pb-10">
                        <div className="flex flex-col">
                            <FieldWrapper label="이름" singleElement={true}>
                                <span className={`text-baseNormal`}>{student.courseMemberProgressionInfo.name}</span>
                            </FieldWrapper>
                            <FieldWrapper label="과정명" singleElement={true}>
                                <span className={`text-baseNormal`}>{student.courseMemberProgressionInfo.memberId}</span>
                            </FieldWrapper>
                            <FieldWrapper label="성적관리" singleElement={true}>
                                <div className={`text-baseNormal flex`}>
                                    <ul className={`flex gap-4  text-baseNormal items-center`}>
                                        <li>평균점수</li>
                                        <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                            <span className={`text-themeColor font-bold`}>{student.courseMemberProgressionInfo.averageScore ? student.courseMemberProgressionInfo.averageScore.toFixed(2): 0}</span>/100점

                                        </li>
                                        <li>평가 진행율</li>
                                        <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                            <span>{student.courseMemberProgressionInfo.evaluationProgressionRate}%</span>
                                            <span>(<span className={`text-themeColor font-bold`}>{student.courseMemberProgressionInfo.passedEvaluationCount}</span> /{student.courseMemberProgressionInfo.totalEvaluationCount})</span>
                                        </li>
                                    </ul>
                                    {student.courseMemberProgressionInfo.result === 'PASS' &&
                                        <Button color="primaryRoundedSmall" className={`!bg-transparent !text-themeColor ml-2`}> 통과 </Button>
                                    }
                                    {student.courseMemberProgressionInfo.result === 'FAIL' &&
                                        <Button color="transparentRoundedSmall" className={`!bg-transparent !text-placeholderColor ml-2`}> 통과 </Button>
                                    }
                                    {student.courseMemberProgressionInfo.result === 'N/A' &&
                                        <Button color="secondaryLightRoundedSmall" className={`!bg-transparent !text-placeholderColor ml-2`}> 미응시 </Button>
                                    }
                                </div>

                            </FieldWrapper>
                            <FieldWrapper label="진도율 (출석률)" singleElement={true} className={`border-b border-commonBorderColor`}>
                                <div className={`text-baseNormal`}>
                                    {student.courseMemberProgressionInfo.progressionRate || 0}%
                                    (
                                    <span className={`text-themeColor font-bold`}>{student.courseMemberProgressionInfo.completedLectureCount}</span>
                                    <span className={`text-textSubColor`}>/{student.courseMemberProgressionInfo.lectureCount}강</span>
                                    )
                                </div>

                            </FieldWrapper>
                        </div>
                    </div>
                </>
            }

            {student?.courseEvaluationProgressionInfo &&
                <>
                    <Heading level={2}>
                        진행 평가 확인
                    </Heading>
                    <div className="flex flex-col pb-16">
                        <ul className={`flex flex-col`}>
                            {student.courseEvaluationProgressionInfo.map((evaluation, index) => (
                                <li className={`flex items-center justify-between border-b border-t border-commonBorderColor px-5 py-4`} key={`evaluation-${index}`}>
                                    <div className="inner">
                                        <div className="flex gap-3">
                                            {evaluation.completionStatus === "COMPLETE" ?
                                                <Button color="primaryLightSmall">
                                                    응시완료
                                                </Button>
                                                :
                                                <Button color="secondaryLightSmall">
                                                    답안보기
                                                </Button>
                                            }
                                            <span className={`text-baseNormal`}>{evaluation.name}</span>
                                        </div>
                                    </div>
                                    <div className="inner flex gap-6">
                                        <ul className={`flex gap-4 text-textSubColor text-baseNormal items-center`}>
                                            <li>응시일</li>
                                            <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                                <span>{evaluation.participationDate}</span>
                                            </li>

                                            <li className={`relative before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2 before:h-3 before:w-[1px] before:bg-borderColor`}>
                                                <span>성적</span> <span>{evaluation.score}점 ({evaluation.correctAnswerCount}/{evaluation.questionCount})</span>
                                            </li>
                                        </ul>
                                        <Button color="secondaryMedium" className={`h-[40px]`}>
                                            답안보기
                                        </Button>
                                    </div>
                                </li>
                            ))
                            }

                        </ul>
                    </div>
                </>
            }

            {student?.chapterInfo &&
                <>
                    <Heading level={2}>
                        수강 강의 확인
                    </Heading>
                    <div className="w-full">
                        <div className="">
                            {student.chapterInfo.map((item, index) => (
                                <Disclosure as="div" className="border-t border-commonBorderColor" defaultOpen={true} key={index}>
                                    <DisclosureButton className="group px-5 py-4 flex w-full items-center justify-between bg-secondaryBgColor">
                                    <span className="text-baseNormal font-bold">
                                      {item.chapterName} ( <span className={`text-themeColor font-bold`}>{item.completedLectureCount}</span> /{item.totalLectureCount}강)
                                    </span>
                                        <ChevronDownIcon className="size-8 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                    </DisclosureButton>

                                    <DisclosurePanel >
                                        <div className="flex flex-col">
                                            <ul className={`flex flex-col`}>
                                                {item.lectureVideos.map((video, videoIndex) => (
                                                    <li className={`flex items-center justify-between border-b border-commonBorderColor px-5 py-4`} key={videoIndex}>
                                                        <div className="inner">
                                                            {video.lectureName}
                                                        </div>
                                                        <div className="inner flex gap-3">
                                                            {video.lectureCompletionStatus &&
                                                                <span>
                                                                <Button color={`primaryLightSmall`}>
                                                                    <Check className={`text-themeColor`} /> 수강완료
                                                                </Button>
                                                            </span>
                                                            }

                                                            <span>{video.currentPlaybackTime || '0.0.0'}
                                                                <span className={`text-textSubColor`}>/ {video.lecturePlaybackTime}</span>
                                                        </span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </div>
                    </div>
                </>
            }
            <div className="flex items-end justify-end pt-10">
                <Link  href={`/curriculum/course/details/${id}/student-management`} className={"flex relative isolate inline-flex items-center justify-center gap-x-2.5  font-normal  data-[disabled]:opacity-50 bg-transparent border border-borderColor rounded-[0]  min-w-[190px] px-4 h-[48px]  text-textSubColor  md:text-[19px] cursor-pointer cursor-default"} color="transparent">
                    <span><Menu/></span> <span className={`leading-[normal]`}>목록</span>
                </Link>
            </div>
        </>
    );
}
