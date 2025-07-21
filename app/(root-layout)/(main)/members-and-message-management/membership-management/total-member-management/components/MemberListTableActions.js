'use client'
import Link from "next/link";
import React, { useState} from "react";
import {Button} from "@/components/common/button";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import {assignOrganizationToMembers} from "@/utils/api/memberManagementRequest";
import LmsOrganizationSingleSelect from "@/components/common/form/organizations/LmsOrganizationSingleSelect";
import {Dialog, DialogBody} from "@/components/common/dialog";
import {useDataTable} from "@/store/DataTableContext";
import {ListPlus, Plus, Users} from "lucide-react";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";
import {multipleEmployeeDelete} from "@/utils/api/admin/EmployeeAPI";

const MemberListTableActions = ({organizations}) => {
    const{selectedRow, setSelectedRows} = useDataTable()

    const [isOpen, setIsOpen] = useState(false);

    const memberGroupChangeBtnClick = () => {
        setIsOpen(true)
    }
    const changedOrganization = (item) => {
        if(item) {
            confirmAlert({
                title: 'Delete',
                message: 'Are you sure about this action?',
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
                          const response =  await multipleEmployeeDelete({ids:selectedRow})
                            if (response.status === 200) {

                            }
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

    const memberGroupChangeRequestSend = async (id) => {
        if (selectedRow.length) {
            return await assignOrganizationToMembers(id, selectedRow)
        }
    }

    return (
        <>
            <Button className={'cursor-pointer border border-borderColor h-[32px] px-4 flex items-center gap-1'}
                    onClick={memberGroupChangeBtnClick}
                    disable={!selectedRow.length ? true : false}
            >
                <span>
                    {/*<img src="/images/membership/users.png" alt=""/>*/}
                    <Users size={20} className={`text-textSubColor`} />
                </span> <span>조직그룹변경</span>
            </Button>
            <button className="border border-borderColor h-[32px] px-4 flex items-center gap-1">
                <Link className={'flex items-center gap-1'}
                      href={"/members-and-message-management/membership-management/total-member-management/member-upload"}>
                    <span>
                        {/*<img src="/images/membership/playlist_add.png" alt=""/>*/}
                        <ListPlus size={20} className={`text-textSubColor`} />
                    </span> <span>일괄등록</span>
                </Link>
            </button>
            <button className="border border-borderColor h-[32px] px-4 flex items-center gap-1">
                <Link className={'flex items-center gap-1'}
                      href={"/members-and-message-management/membership-management/total-member-management/member-registration"}>
                    <span>
                        {/*<img src="/images/membership/add.png" alt=""/>*/}
                        <Plus  size={20} className={`text-textSubColor`} />
                    </span> <span>등록</span>
                </Link>
            </button>

            {isOpen &&
                <>
                    <Dialog open={isOpen} onClose={setIsOpen} size={''}  className={'p-0 m-0 w-max flex justify-center'}>
                        <DialogBody>
                            <LmsOrganizationSingleSelect organizations={organizations?.organizations} callBack={changedOrganization}/>
                        </DialogBody>
                    </Dialog>
                </>
            }

        </>
    );
}

export default MemberListTableActions