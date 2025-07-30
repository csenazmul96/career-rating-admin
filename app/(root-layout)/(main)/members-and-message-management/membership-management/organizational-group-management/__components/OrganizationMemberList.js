"use client";

import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Field} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {IoCloseOutline} from "react-icons/io5";
import {Button} from "@/components/common/button";
import OrganizationContext from "@/store/OrganizationContext";
import {assignOrganizationToMembers, getMembersByGroup} from "@/utils/api/memberManagementRequest";
import MemberTableComponent
  from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/organizational-group-management/__components/MemberTableComponent";
import {Dialog, DialogBody} from "@/components/common/dialog";
import LmsOrganizationSingleSelect from "@/components/common/form/organizations/LmsOrganizationSingleSelect";
import {Search} from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

const OrganizationMemberList = ({searchParams, organizations}) => {
  const organizationCtx = useContext(OrganizationContext);
  const currentOrganization = organizationCtx.currentOrganization;
  const [loading, setLoading] = useState(false)

  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilterMembers] = useState([]);

  const [pagination, setPagination] = useState(null)
  const [selectedIds, setSelectedIds] = useState([])
  const [search, setSearch] = useState('');

  const [isOrgSelectModalOpen, setIsOrgSelectModalOpen] = useState(false);

  const sendMemberRequest = useCallback(async () => {
    const {members, pagination} = await getMembersByGroup(currentOrganization.id, searchParams);

    setMembers(members);
    setFilterMembers(members);
    setPagination(pagination);
  }, [currentOrganization, searchParams]);

  useEffect(() => {
    setMembers([]);
    setFilterMembers([]);
    setSearch('');
    setSelectedIds([]);

    if (currentOrganization) {
      sendMemberRequest();
    }
  }, [currentOrganization, sendMemberRequest]);

  const searchMember = () => {
    const lowerCaseQuery = search.toLowerCase();

    const newList = members.filter(user =>
      user.name.toLowerCase().includes(lowerCaseQuery) ||
      user.email.toLowerCase().includes(lowerCaseQuery)
    );
    setFilterMembers(newList)
  }

  useEffect(() => {
    searchMember()
  }, [search]);

  const orgChangeModalOpenHandler = async () => {
    setIsOrgSelectModalOpen(true);
  }

  const orgChangeHandler = async (item) => {
    setLoading(true)
    if(item) {
      const response = await assignOrganizationToMembers(item.id, selectedIds.map(id => +id));
      if(response){
        LmsToastMessage('성공.', 'Update has been complete', 'success')
      } else {
        LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
      }
      setIsOrgSelectModalOpen(false)
    }
    setLoading(false)
  }

  const clearSearch = () => {
   setSearch('')
  }

  return (
    <>
      <div className="flex-1 bg-white border border-borderColor ">
        <div className="flex items-stretch justify-between border-b border-borderColor">
          <div className="left-col pl-6 flex items-center ">
            <p className="text-[19px] font-bold text-[#000000]"> {currentOrganization ? currentOrganization.name : '백엔드 담당'} </p>
            <span className="text-[15px] text-[#717171] font-normal pl-4">총 {members ? members.length : null}명 </span>
          </div>
          <div className="right-col p-4">
            <Field className="!pb-0 flex relative w-[270px] ">
              <Input name="full_name"
                     className="w-full "
                     value={search}
                     onChange={(e)=>setSearch(e.target.value)}
                     placeholder="조직원을 검색해보세요."/>
              {search &&
                  <IoCloseOutline
                      onClick={clearSearch}
                      className="absolute right-[45px] top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl"/>
              }
              <span className={`bg-white cursor-pointer z-10 absolute right-4 top-1/2 transform -translate-y-1/2`}>
                {/*<img*/}
                {/*  src="/images/search.png" alt="search"/>*/}
                <Search size={24} className={`text-placeholderColor`} />
              </span>
            </Field>
          </div>
        </div>

        <div className="table-organization custom-scrollbar h-[550px]">
          <MemberTableComponent members={filteredMembers}
                                setIds={setSelectedIds}
                                ids={selectedIds} />
        </div>
        {selectedIds.length > 0 &&
          <div className="flex w-full p-[11px] border-t border-borderColor">
            <Button color="transparent"
                    onClick={orgChangeModalOpenHandler}
                    className="min-w-[auto] px-4 h-[28px] cursor-pointer"> 조직 변경</Button>
          </div>
        }
      </div>


      {isOrgSelectModalOpen &&
          <>
            <Dialog open={isOrgSelectModalOpen} onClose={() => setIsOrgSelectModalOpen(!isOrgSelectModalOpen)} size={''} className={'p-0 m-0 w-max flex justify-center'}>
              <DialogBody>
                <LmsOrganizationSingleSelect organizations={organizations} callBack={orgChangeHandler}/>
              </DialogBody>
            </Dialog>
          </>
      }
    </>
  );
};

export default OrganizationMemberList;