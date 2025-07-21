"use client"

import {Field} from "@/components/common/fieldset";
import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import LmsOrganizationMultipleSelect from "@/components/common/form/organizations/LmsOrganizationMultipleSelect";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";

const AdministratorTableFilter = ({organizations, queryParams, roles}) => {
    const pathname = usePathname();
    const {replace} = useRouter();
    const [showOrgGroup, setShowOrgGroup] = useState(false);
    const [selectedOrganizations, setSelectedOrganizations] = useState(false);

    const [params, setParams] = useState(null)

    useEffect(() => {
        if(queryParams){
            const oldParams = new URLSearchParams(queryParams)
        }
    }, [queryParams]);

    useEffect(() => {
        const oldParams = new URLSearchParams(queryParams)

        if (oldParams) {
            let organizationGroupIds = oldParams && oldParams.get('organizationGroupIds') ? oldParams.get('organizationGroupIds').split(',') : []

            if (organizationGroupIds && organizations){
                let oldGroups = []
                let oldPermissions = []
                organizationGroupIds.forEach(id =>{
                    let grp = organizations.organizations.find(item=>item.id === +id)
                    if (grp){
                        oldGroups.push(grp)
                        if (grp.subOrganizationGroupList){
                            grp.subOrganizationGroupList.forEach(child => {
                                if(organizationGroupIds.includes(""+child.id)){
                                    oldPermissions.push(child)
                                }
                            })

                        }
                    }
                })
                setSelectedOrganizations({
                    groups: oldGroups,
                    permissions: oldPermissions
                })
            }

            if(!organizationGroupIds.length){
                setShowOrgGroup(false)
                setSelectedOrganizations({
                    groups: [],
                    permissions: []
                })
            }

            setParams({
                page: oldParams && oldParams.get('page') ? oldParams.get('page') : 1,
                size: oldParams && oldParams.get('size') ? oldParams.get('size') : 5,
                search: oldParams && oldParams.get('search') ? oldParams.get('search') : '',
                searchColumn: oldParams && oldParams.get('searchColumn') ? oldParams.get('searchColumn') : '',
                rolePermissionId: oldParams && oldParams.get('rolePermissionId') ? oldParams.get('rolePermissionId') : '',
                organizationGroupIds: organizationGroupIds,
            })
        }
    }, [queryParams]);


    const handleOnChnage = (column, value) => {
        setParams((prev) => ({...prev, [column]: value}));
    }

    const changeDataHandler = (e) => {
        e.preventDefault()
        setShowOrgGroup(!showOrgGroup)
    }



    const sendSearchRequest = () => {
        const filteredData = Object.fromEntries(
            Object.entries(params).filter(([key, value]) => value !== "" && value !== null)
        );
        replace(`${pathname}?${new URLSearchParams({...filteredData, page: 1})}`);
    }

    const searchColumns = [ {id: 'name', name: '이름'}, {id: 'contactNumber', name: '연락처'}, {id: 'email', name: '이메일'}];

    const receiveOrganizationFilter = (data) => {
        let parentsId = data.groups ? data.groups.map(item =>{
            return item.id
        }) : []

        let childIds = data.permissions ? data.permissions.map(item =>{
            return item.id
        }) : []

        setParams(prev => ({
            ...prev,
            organizationGroupIds: [...childIds, ...parentsId]
        }))
    }

    const onKeyUpHandle = (name, event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendSearchRequest();
        }
    }

    const filterCriteria = [
        {label: '검색', paramsName: 'search'},
        {label: '조직그룹', paramsName: 'organizationGroupIds'},
        {label: '관리자 유형', paramsName: 'rolePermissionId'}
    ];

    const finalFilteredParams = filterCriteria.map(item => {
        const { label, paramsName } = item;
        let value = '';
        if (params && params[paramsName]) {
            value = params[paramsName];
            if (paramsName === "organizationGroupIds") {
                value = Array.isArray(value) && value.length ? `${value.length}개 항목` : "";
            }
            if (paramsName === "rolePermissionId") {
                value = roles.find(item=> item.id === value)?.name || '';
            }
        }
        return {
            label,
            paramsName,
            value
        };
    });

    return (
        <>
            <FilterForm>
                <div className="flex">
                    <FilterFormWrapper label="관리자 유형" singleElement={true}>
                        <LmsStandardSelectInputV2
                            name={`rolePermissionId`}
                            initialText={'관리자 유형 선택'}
                            value={params && params.rolePermissionId ? params.rolePermissionId : ''}
                            options={roles}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>
                    <FilterFormWrapper label="조직그룹" className={` `}>
                        <div className={`  flex-[0_1_auto]`}>
                            <Field className={`!pb-0 w-[270px] `}>
                                <div onClick={changeDataHandler}
                                     className={'flex justify-between bg-white h-[48px] relative py-[3px] px-[15px] border cursor-pointer border-borderColor'}>
                                    <span className={'pt-[10px] pl-0 '}>
                                        {params && params.organizationGroupIds.length ? params.organizationGroupIds.length + '개 그룹 선택' : '그룹 선택'}

                                    </span>
                                    {!showOrgGroup ?
                                        <>
                                            <span className={'pt-[12px] pr-0 '}><SlArrowDown/></span>

                                        </> :
                                        <>
                                            <span className={'pt-[12px] pr-0 '}><SlArrowUp /></span>
                                        </>
                                    }
                                </div>
                            </Field>
                        </div>
                    </FilterFormWrapper>

                </div>

                <div className="flex border-b border-borderColor">
                    {organizations && showOrgGroup &&
                        <div className={`flex items-center gap-5 w-full mb-4`}>
                            <div className="flex items-center min-w-[100px] self-stretch"></div>
                            <div className={`flex items-center gap-5 w-full`}>
                                <LmsOrganizationMultipleSelect groups={organizations?.organizations}
                                                               callBack={receiveOrganizationFilter}
                                                               selectedGroups={selectedOrganizations}

                                />
                            </div>
                        </div>
                    }
                </div>


                <FilterFormWrapper label="검색" singleElement={true}>
                    <LmsStandardSelectInputV2
                        name={`searchColumn`}
                        initialText={'전체'}
                        value={params && params.searchColumn ? params.searchColumn : ''}
                        options={searchColumns}
                        changeDataHandler={handleOnChnage}/>

                    <div className={"w-auto flex-auto relative"}>
                        <LmsSearchInput
                            singleElement={true}
                            fieldClass="w-full"
                            name="search"
                            value={params ? params.search : ''}
                            onKeyUp={onKeyUpHandle}
                            placeholder="검색어를 검색해주세요."
                            changeDataHandler={handleOnChnage}
                        />
                    </div>
                    <Button type="button" onClick={sendSearchRequest} color="primary">검색</Button>
                </FilterFormWrapper>
                <LmsDatatableFilterSummary filterCriteria={finalFilteredParams?.filter(item=> item.value !== '') || []} />
            </FilterForm>
        </>
    );
}

export default AdministratorTableFilter