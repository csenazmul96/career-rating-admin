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
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import LmsOrganizationSingleSelectV2 from "@/components/common/form/organizations/LmsOrganizationSingleSelectV2";

const MemberListTableActions = ({organizations}) => {
    const{selectedRow, setSelectedRows} = useDataTable()

    const [isOpen, setIsOpen] = useState(false);

    const memberGroupChangeBtnClick = () => {
        setIsOpen(true)
    }
    console.log(organizations)
    const changedOrganization = (item) => {
        console.log(item)
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
                                    LmsToastMessage('성공.', 'Members group has been changed!', 'success')
                                } else {
                                    LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
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
        } else {
            setIsOpen(false);
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
                        <DialogBody className={`!mt-0`}>
                            <LmsOrganizationSingleSelectV2  organizations={organizations?.organizations} callBack={changedOrganization}/>
                        </DialogBody>
                    </Dialog>
                </>
            }

        </>
    );
}

export default MemberListTableActions