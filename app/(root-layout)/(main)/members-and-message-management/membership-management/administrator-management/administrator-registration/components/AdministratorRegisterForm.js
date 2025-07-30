"use client";

import {Field} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {IoCloseOutline} from "react-icons/io5";
import React, {useCallback, useEffect, useState} from "react";
import { getMembersByRole, memberSearch, roleMembersSync} from "@/utils/api/memberManagementRequest";
import {LuMinus} from "react-icons/lu";
import {GoPlus} from "react-icons/go";
import {Button} from "@/components/common/button";
import Link from "next/link";
import {Checkbox} from "@/components/common/checkbox";
import {Info, Search} from "lucide-react";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

const AdministratorRegisterForm = ({roles}) => {
  const [selectedRoles, setSelectedRoles] = useState(roles[0]?.id || '');
  const [search, setSearch] = useState('');
  const [members, setMembers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchMembers, setSearchMembers] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false)
  const [searchSelectedList, setSearchSelectedList] = useState([]);

  const loadMembers = useCallback(async () => {
    return await getMembersByRole(selectedRoles);
  }, [selectedRoles]);

  useEffect(() => {
    setMembers([]);
    setSearchSelectedList([]);
    if (selectedRoles) {
      clearSearch()
      loadMembers().then((data) => {
        setMembers(data);
      });
    }
  }, [selectedRoles, loadMembers]);


  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleKeyPress = (e) =>{
    if (e.key === "Enter") {
      e.preventDefault();
      sendSearchRequest();
    }
  }
  const sendSearchRequest = async () => {
    setSearchStatus(true)
    try {
      const {members} = await memberSearch({search})
      setSearchMembers(members)
    } catch (e){

    }
  }
  const clearSearch = () => {
    setSearchStatus(false)
    setSearchMembers([])
    setSearch('')
  }

  const selectNewMembers = (member) => {
    let checkExists = searchSelectedList.find(item => item.kcUserId === member.kcUserId)
    if (checkExists === undefined){
      setSearchSelectedList((old) => ([...old, member]))
    } else {
      setSearchSelectedList(searchSelectedList.filter(item => item.kcUserId !== member.kcUserId))
    }
  }

  const addToMainList = async() => {
    await searchSelectedList.forEach(member =>{
      let checkExists = members.find(item => item.kcUserId === member.kcUserId)
      if (checkExists === undefined){
        setMembers((old) => ([...old, member]))
      }
    })
    setSearchStatus(false)
    setSearchMembers([])
    setSearch('')
  }
  const removeFromMemberMainList = (member) => {
    setMembers(members.filter(item => item.kcUserId !== member.kcUserId))

  }
  const updateRoleMembers = async () => {
    setLoader(true)
    const ids = members.map(item => {
      return item.kcUserId
    })
    let role = roles.find(item => item.id === selectedRoles)
    let form = {
      memberIds: ids,
      roleId: role?.id,
      roleName: role?.name
    }
    let response = await roleMembersSync(form)
    if (response.status === 'success'){
      setSearchSelectedList([])
      clearSearch()
      LmsToastMessage('업데이트.', 'Role has been updated successfully!', 'success')
    } else {
      LmsToastMessage('오류.', "문제가 발생했습니다.", 'error')
    }
    setLoader(false)
  }

  const handleOnChnage = (name, value) => {
      setSelectedRoles(value);
  }

  return (
      <>
        <div className="registration-form">
          <div className="form">
            <div className="custom-common-row">
              <div className="custom-common-left-col">
                <span className="common-label-style ">관리자 유형 </span>
                <span className="pl-3">
                  {/*<Image src={infoImg} className="ml-1" alt="info image"/>*/}
                  <Info size={20} className={`text-textSubColor rotate-180`} />
                </span>
              </div>
              <div className="right-col flex-1 py-[20px] px-4 pl-[20px]">
                <LmsStandardSelectInputV2
                    name={`memberRoles`}
                    fieldClass={`h-[190px] w-[270px]`}
                    value={selectedRoles || ''}
                    options={roles}
                    changeDataHandler={handleOnChnage} />
              </div>
            </div>

            <div className="custom-common-row">
              <div className="custom-common-left-col">
                <span className="common-label-style ">회원 선택</span>
              </div>
              <div className="right-col flex-1 py-[20px] px-4 pl-[20px]">
                <div className="search-member flex justify-between items-center">
                  <Field className="!pb-0 flex relative w-full ">
                    <Input name="full_name" className="w-full "
                           value={search}
                           onChange={handleChange}
                           onKeyDown={handleKeyPress}
                           placeholder="회원명 혹은 ID를 검색해주세요."/>
                    {search &&
                        <IoCloseOutline
                            onClick={clearSearch}
                            className="absolute right-[45px] top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl"/>
                    }
                    <span
                        onClick={sendSearchRequest}
                        className={`bg-white cursor-pointer z-10 absolute right-4 top-1/2 transform -translate-y-1/2`}>
                        {/*<img src="/images/search.png" alt="search"/>*/}
                      <Search  className={`text-placeholderColor`} />
                      </span>
                  </Field>
                  {searchSelectedList.length ?
                      <Button color="secondary"
                              onClick={addToMainList}
                              className={"!pl-0 !pr-0 !min-w-[100px] ml-2"}>
                        <GoPlus/> 추가
                      </Button>
                      :
                      ""
                  }
                </div>
              </div>
            </div>

            {/*<div className="flex items-stretch border-t border-commonBorderColor">*/}
            <div className="custom-common-row">
              <div className="custom-common-left-col">
                <span className="common-label-style ">관리자 </span>
              </div>
              <div className="right-col flex-1 py-[20px] px-4 pl-[20px] relative">
                <div className="flex flex-col">


                  <ul className="border border-borderColor mt-3 custom-scrollbar-w-6 h-[230px]">
                    {members && members.map((member) => (
                        <li key={`member_${member.kcUserId}`}
                            className="flex justify-between border-b border-borderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                          <div>
                            <span>{member.name} ({member.memberId})</span>
                            <span className="text-textSubColor">{member.email}</span>
                          </div>

                          <span className={'cursor-pointer'} onClick={() => removeFromMemberMainList(member)}><LuMinus/></span>
                        </li>
                    ))}
                  </ul>
                </div>
                {searchStatus &&
                    <div className="flex flex-col absolute bg-white   w-[97.5%] top-2">
                      <ul className="border border-borderColor   custom-scrollbar-w-6 h-[230px]">
                        {searchMembers && searchMembers.map((member) => (
                            <li key={`member_${member.kcUserId}`}
                                onClick={() => selectNewMembers(member)}
                                className={`flex border-b border-borderColor h-[52px] space-x-3 items-center py-[12px] px-[16px] cursor-pointer ${searchSelectedList.find(item => item.kcUserId === member.kcUserId) ? 'bg-gray-50' : ''}`}>
                              <Checkbox color="lmscheckbox"
                                        className={'pl-2'}
                                        name="discoverability"
                                        checked={searchSelectedList.find(item => item.kcUserId === member.kcUserId) ? true : false}
                                        value="default"/>
                              <span>{member.name} ({member.memberId})</span>
                              <span className="text-textSubColor">{member.email}</span>
                            </li>
                        ))}
                        {!searchMembers.length &&
                            <li
                                className="flex  h-[52px] space-x-3 items-center py-[12px] px-[16px] cursor-pointer">
                              <span className="text-textSubColor">No result found</span>
                            </li>
                        }
                      </ul>
                    </div>
                }
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-commonBorderColor py-6">
            <Link href={'/members-and-message-management/membership-management/administrator-management'}>
              <Button color="transparent" type="submit">
                취소
              </Button>
            </Link>
            <Button color="primary"
                    loading={loader}
                    disable={loader}
                    onClick={updateRoleMembers}>
              등록
            </Button>
          </div>
        </div>
      </>
  );
}

export default AdministratorRegisterForm;