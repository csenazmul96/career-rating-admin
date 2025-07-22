'use client'
import Link from "next/link";
import React, { useState} from "react";
import {Button} from "@/components/common/button";
import {useDataTable} from "@/store/DataTableContext";
import {Plus, Trash2} from "lucide-react";
import ConfirmPopup from "@/components/common/ConfirmPopup";
import {multipleEmployeeDelete} from "@/utils/api/admin/EmployeeAPI";
import {confirmAlert} from "react-confirm-alert";

const EmployeeDataTableActions = () => {
    const{selectedRow, setSelectedRows} = useDataTable()

    const [isOpen, setIsOpen] = useState(false);


    const deleteEmployee = (item) => {
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
                        onClick: async () => {
                          const response = await multipleEmployeeDelete({ids: selectedRow})
                            console.log(response)
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
            <Button disable={!selectedRow.length} onClick={deleteEmployee} className={'cursor-pointer border border-borderColor h-[32px] px-4 flex items-center gap-1'}>
                <Trash2 size={20} className={`text-textSubColor`} />
            </Button>
        </>
    );
}

export default EmployeeDataTableActions