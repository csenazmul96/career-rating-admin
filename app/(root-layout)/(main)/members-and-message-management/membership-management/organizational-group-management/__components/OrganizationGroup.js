"use client"

import React, {useContext, useEffect, useRef, useState} from 'react';
import {Field} from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import ShortGroup from "./ShortGroup";
import GroupManagementActions from "./GroupManagementActions";
import OrganizationContext from "@/store/OrganizationContext";
import {searchList} from "@/utils/helpers/CommonHelper";
import {Search} from "lucide-react";

const OrganizationGroup = ({getAllGroupData}) => {
  const [groups, setGroups] = useState(getAllGroupData)
  const [addNewParentGroup, setAddNewParentGroup] = useState(false);
  const {currentOrganization, setCurrentOrganization} = useContext(OrganizationContext);

  useEffect(() => {
    if(getAllGroupData) {
      setGroups(getAllGroupData)
    }
  }, [getAllGroupData]);


  const [search, setSearch] = useState('')

  const onKeyUp = (value) => {
    setSearch(value)
    const lowerCaseQuery = value.toLowerCase();

    const newListItems = searchList(getAllGroupData, lowerCaseQuery);
    setGroups(newListItems)
  }
  const scrollRef = useRef(null);


  const scrollHandle = (type) => {
    if (type === 'top') {
      scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({top: 100, behavior: 'smooth'});
    }
  };


  return (
    <div className="w-[373px] flex flex-col justify-between bg-white border border-borderColor">

      <div className="flex flex-col ">
        <div className="flex w-full p-4 border-b border-b-borderColor">
          <form action="" className="w-full">
            <Field className="!pb-0 flex relative w-full ">
              <Input name="full_name"
                     className="w-full "
                     value={search}
                     onChange={(e)=>onKeyUp(e.target.value)}
                     placeholder="조직그룹을 검색해보세요."/>
              <span className={`bg-white cursor-pointer z-10 absolute right-4 top-1/2 transform -translate-y-1/2`}>
                <Search size={24} className={`text-placeholderColor`} />
              </span>
            </Field>
          </form>
        </div>

        <div className="shortable justify-between   custom-scrollbar h-[500px]" ref={scrollRef}>
          <ul>
            <li onClick={() => setCurrentOrganization({id: 'all', name: "전원"})}>
              <div
                  className="group flex items-center px-4 py-3 h-[42px] text-base cursor-pointer hover:bg-leftMenuHoverColor hover:text-themeColor">
                <div className="flex items-center gap-3 w-full">
                  <span className={`hover:text-themeColor, cursor-pointer ${currentOrganization?.id === 'all' ? 'text-themeColor' : '' }`}>전원</span>
                </div>
              </div>
            </li>
            <ShortGroup groups={groups} setGroups={setGroups} />
          </ul>
        </div>
      </div>

      <GroupManagementActions addNewParentGroup={addNewParentGroup} scrollHandle={scrollHandle} setAddNewParentGroup={setAddNewParentGroup} />
    </div>
  );
};

export default OrganizationGroup;