"use client"

import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {Eye} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/common/table";
import {Button} from "@/components/common/button";

function VideoInvolvedHistoryShowModal({isOpen, setIsOpen, currentVideo}) {
    const getMembersNames = (customPermissions)=>{
        if (customPermissions.length === 0) return '';
        const memberNames = customPermissions.map(p => p.memberName).join(', ');

        return memberNames;
    }
    return (
        <Dialog size="w800" open={isOpen} onClose={() => setIsOpen(false)}>
            {currentVideo && currentVideo.involvedCourses && (
                <>
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
                                  </span>
                                <span> 권한:{" "}
                                    {currentVideo.permission === 'PRIVATE' ? "등록자" : (currentVideo.permission === 'PUBLIC' ? "전체" : "")}
                                    { currentVideo.permission === 'CUSTOM' &&
                                        <span> {getMembersNames(currentVideo.customPermissions)} </span>
                                    }
                                </span>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogBody className={`!mt-4`}>
                        <div className=" px-1 py-2">
                            <p className={`text-base pb-4`}>
                                Total
                                <span className={`font-bold text-themeColor`}>
                    {currentVideo.involvedCourses
                        ? currentVideo.involvedCourses.length
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
                                    {currentVideo.involvedCourses &&
                                    currentVideo.involvedCourses.length > 0 ? (
                                        currentVideo.involvedCourses.map((course, idx) => (
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
                </>
            )}
        </Dialog>
    );
}

export default VideoInvolvedHistoryShowModal;