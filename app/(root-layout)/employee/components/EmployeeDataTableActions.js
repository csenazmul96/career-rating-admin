'use client'
import Link from "next/link";
import React, { useState} from "react";
import {Button} from "@/components/common/button";
import {useDataTable} from "@/store/DataTableContext";
import {Plus, Trash2} from "lucide-react";
import ConfirmPopup from "@/components/common/ConfirmPopup";

const EmployeeDataTableActions = () => {
    const{selectedRow, setSelectedRows} = useDataTable()

    const [isOpen, setIsOpen] = useState(false);


    const changedOrganization = (item) => {
        if(item) {
            confirmAlert({
                title: '조직그룹 변경',
                message: '조직그룹을 변경하시겠습니까?',
                buttons: [
                    {
                        label: '취소',
                        onClick: () => {
                            return false;
                        }
                    },
                    {
                        label: '확인',
                        onClick: () => {
                            memberGroupChangeRequestSend(item.id).then(res => {
                                if (res) {
                                    setSelectedRows([])
                                    setIsOpen(false)
                                    CommonToastMessage('성공.', 'Members group has been changed!', 'success')
                                } else {
                                    CommonToastMessage('오류.', "문제가 발생했습니다.", 'error')
                                }
                            })
                        }
                    }
                ],
                customUI: ({title, message, onClose, buttons}) => {
                    return (
                        <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons}/>
                    );
                }
            });
        }
    }


    return (
        <>
            <Link className={'flex items-center gap-1'} href={"/employee/new-employee"}>
                <Button className={'cursor-pointer border border-borderColor h-[32px] px-4 flex items-center gap-1'}>
                    <span><Plus  size={20} className={`text-textSubColor`} /> </span> <span>New Employee</span>
                </Button>
            </Link>
            <Button disable={!selectedRow.length} className={'cursor-pointer border border-borderColor h-[32px] px-4 flex items-center gap-1'}>
                <Trash2 size={20} className={`text-textSubColor`} />
            </Button>
        </>
    );
}

export default EmployeeDataTableActions