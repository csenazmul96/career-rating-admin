"use client"

import {Button} from "@/components/common/button";
import {GoPlus} from "react-icons/go";
import Image from "next/image";
import menuCollapse from "@/public/images/membership/member-collapse.png";
import React, {useContext} from "react";
import RoleContext from "@/store/RoleContext";

import {deleteRole} from "@/utils/api/administratorManagement";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import { useRouter } from 'next/navigation';
import {Trash2} from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";


const AdministratorList = ({roles}) => {
    const  handleDelete = async (id) => {
        confirmAlert({
            title: '관리자 유형 삭제',
            message: '관리자 유형을 삭제하시겠습니까?',
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
                      const response =  await deleteRole(id)
                        if(response.status === 'success'){
                            LmsToastMessage('성공.', '관리자 유형이 삭제 되었습니다.', 'success')
                        } else {
                            LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
                        }
                    }
                }
            ],
            customUI: ({ title, message, onClose , buttons}) => {
                return (
                    <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
                );
            }
        });

    }

    const {setEditRole, editRole, setNewForm} = useContext(RoleContext)

    const selectRole = (role) => {
        setNewForm(false)
        setEditRole(role)
    }
    const router = useRouter();

    const redirectPage = () => {
        confirmAlert({
            title: '관리자 목록으로 이동 설명',
            message: '관리자 목록으로 이동하시겠습니까?\n' +
                '작성중인 내용은 삭제 됩니다.',
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
                        router.push('/members-and-message-management/membership-management/administrator-management');
                    }
                }
            ],
            customUI: ({ title, message, onClose , buttons}) => {
                return (
                    <ConfirmPopup title={title} message={message} onClose={onClose} onConfirm={buttons} />
                );
            }
        });
    }

    return (
        <div className="w-[241px] flex flex-col justify-between bg-white">
            <div className="flex flex-col">
                <Button color="transparent" className="w-full !gap-x-1 mb-2 cursor-pointer text-center !text-[15px]" onClick={()=>setNewForm(true)}> <span><GoPlus/></span> 관리자 유형 생성</Button>
                <ul className="flex flex-col  gap-2 custom-scrollbar h-[500px]">
                    {roles.length && roles.map((item, index) => (
                        <li key={item.id} className={`
                        ${editRole && editRole.id === item.id ? 'bg-primaryLightColor text-themeColor' : ''} 
                        text-base cursor-pointer font-normal text-[#000] flex items-center justify-between h-[48px] p-3 pl-4 hover:bg-primaryLightColor hover:text-themeColor`}>
                            <span className={'cursor-pointer w-full'}  onClick={()=>selectRole(item)}>{item.name}</span>
                            <button onClick={(e)=> {handleDelete(item.id)}}>
                                <Trash2 size={24} className={`text-textSubColor`}/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="member-collapse-list">
                <Button color="transparent" className="w-full text-center cursor-pointer" onClick={redirectPage}> <span>
                    <Image src={menuCollapse} alt='menu collapse'/> </span> <span className="text-19px">목록</span>
                </Button>
            </div>

        </div>
    );
};

export default AdministratorList;