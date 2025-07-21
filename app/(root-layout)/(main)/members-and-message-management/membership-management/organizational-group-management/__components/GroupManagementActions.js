"use client"

import React, {useContext, useEffect, useState} from 'react';
import {Button} from "@/components/common/button";
import Image from "next/image";
import plusImg from "@/public/images/membership/plus.png";
import editImg from "@/public/images/membership/edit.png";
import trashImg from "@/public/images/membership/trash-s.png";
import OrganizationContext from "@/store/OrganizationContext";
import {deleteOrganizationGroup} from "@/utils/api/organizationManagement";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import { MdDeselect } from "react-icons/md";
import OrganizationForm
  from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/organizational-group-management/__components/OrganizationForm";
import {ChevronDown, ChevronUp, Pencil, Plus, Trash2} from "lucide-react";

const GroupManagementActions = ({addNewParentGroup, setAddNewParentGroup, scrollHandle}) => {
  const orgCtx = useContext(OrganizationContext);
  const currentOrganization = orgCtx.currentOrganization;
  const setCurrentOrganization = orgCtx.setCurrentOrganization;

  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState('');

  useEffect(() => {
    if(addNewParentGroup){
      setCurrentOrganization(null)
      setIsOpen(true)
      setAction('create')
    }

  }, [addNewParentGroup]);

  const deleteCurrentOrganizationGroup = async () => {
    if (currentOrganization) {
      let titleMessage = `상위 조직 그룹 삭제`
      let bodyMessage = ``

      if (currentOrganization.parentOrganizationGroup !== null){
        titleMessage = '하위 조직 그룹 삭제'
        bodyMessage = `${currentOrganization.name} 조직 그룹을. \n 삭제하시겠습니까?`
      } else {
        bodyMessage = `${currentOrganization.subOrganizationGroupList && currentOrganization.subOrganizationGroupList.length ? '해당 조직을 삭제하면 하위 조직도 함께 삭제되며, 멤버가 포함된 조직을 삭제하면 ‘전체 조직’ 그룹으로 분류됩니다. 계속하시겠습니까?' : currentOrganization.name+' 조직 그룹을.' +
            '삭제하시겠습니까? '}`
      }

      confirmAlert({
        title: titleMessage,
        message: bodyMessage,
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
              await deleteOrganizationGroup(currentOrganization.id);
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
  }

  const handleActionsClick = (type) => {
    setAction(type)
    setIsOpen(true)
  }

  const closeForm = (status) => {
    setIsOpen(status)
    setAddNewParentGroup(status)
  }

  return (
      <div className="member-collapse-list p-3  border-t border-borderColor">
        <div className="flex items-center justify-between">
          <ul className="flex">
            <li  className="size-10 rounded-full bg-leftMenuHoverColor flex items-center justify-center">
              <Button onClick={() => handleActionsClick('create')} color="transparentSmall"
                      title={'추가'}
                      className="min-w-[auto] border-none cursor-pointer text-center !p-1"> <span>

                <Plus size={24} />
              </span>
              </Button>
            </li>
            {(currentOrganization && currentOrganization.id !== 'all') && (
                <>
                  <li className="size-10 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                    <Button color="transparentSmall"
                            title={'수정'}
                            onClick={() => handleActionsClick('edit')}
                            className="min-w-[auto] border-none cursor-pointer  text-center !p-1"> <span>
                                    {/*<Image src={editImg} alt='menu collapse'/> */}
                      <Pencil size={20} />
                    </span>
                    </Button>
                  </li>
                  <li  className="size-10 rounded-full bg-[#d1dbff] flex items-center justify-center">
                    <Button color="transparentSmall"
                            title="삭제"
                            onClick={deleteCurrentOrganizationGroup}
                            className="min-w-[auto] border-none cursor-pointer  text-center !p-1"> <span>

                                    {/*<Image src={trashImg} alt='menu collapse'/>*/}
                      <Trash2 size={20} />
                    </span>
                    </Button>
                  </li>
                </>
            )}

            {/*{currentOrganization &&*/}
            {/*  <li>*/}
            {/*    <Button color="transparentSmall"*/}
            {/*            title="선택치"*/}
            {/*            onClick={() => setCurrentOrganization(null)}*/}
            {/*            className="min-w-[auto] border-none cursor-pointer  text-center !p-1">*/}
            {/*      <MdDeselect />*/}
            {/*    </Button>*/}
            {/*  </li>*/}
            {/*}*/}
          </ul>
          <ul className={`flex`}>
            <li className="size-10 flex items-center justify-center">
              <Button  onClick={()=>scrollHandle('top')} color="transparentSmall"
                      title={'추가'}
                      className="min-w-[auto] border-none cursor-pointer text-center !p-1"> <span>
                <ChevronUp size={24}/>
              </span>
              </Button>
            </li>
            <li className="size-10 flex items-center justify-center">
              <Button  onClick={()=>scrollHandle('down')} color="transparentSmall"
                      title={'추가'}
                      className="min-w-[auto] border-none cursor-pointer text-center !p-1"> <span>
                <ChevronDown size={24}/>
              </span>
              </Button>
            </li>
          </ul>
        </div>

        <OrganizationForm
            setIsOpen={closeForm}
            action={action}
            isOpen={isOpen}/>
      </div>
  );
};

export default GroupManagementActions;