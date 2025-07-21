"use client"

import {Field} from "@/components/common/fieldset";
import {Button} from "@/components/common/button";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import FilterFormWrapper from "@/components/common/form/FilterFormWrapper";
import FilterForm from "@/app/(root-layout)/(main)/design/components/experiment/FilterForm";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";

import LmsStandardRadioFieldGroup from "@/components/common/form/LmsStandardRadioFieldGroup";
import { getSpecificPreviousDate} from "@/utils/helpers/CommonHelper";
import LmsOrganizationMultipleSelect from "@/components/common/form/organizations/LmsOrganizationMultipleSelect";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";
import {format} from "date-fns";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import LmsStandardDatePeriodPicker from "@/components/common/form/LmsStandardDatePeriodPicker";
import {CommonToastMessage} from "@/components/common/CommonToastMessage";
import LmsDatatableFilterSummary from "@/components/common/LmsDatatableFilterSummary";
import LmsStandardDatePicker from "@/components/common/form/date-picker/LmsStandardDatePicker";

const MemberTableFilter = ({organizations, queryParams}) => {
    const pathname = usePathname();
    const {replace} = useRouter();
    const [showOrgGroup, setShowOrgGroup] = useState(false);
    const [selectedOrganizations, setSelectedOrganizations] = useState(false);

    const [params, setParams] = useState(null)


    useEffect(() => {
        if(params && params.startDate && params.endDate){
            let startDate = new Date(params.startDate);
            let endDate = new Date(params.endDate);
            if (endDate < startDate) {
                CommonToastMessage('오류.', '설정하신 날짜를 다시 확인해주세요', 'warning');
            }
        }
    }, [params]);


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
                membershipType: oldParams && oldParams.get('membershipType') ? oldParams.get('membershipType') : '',
                situation: oldParams && oldParams.get('situation') ? oldParams.get('situation') : '',
                organizationGroupIds: organizationGroupIds,
                startDate: oldParams && oldParams.get('startDate') ? oldParams.get('startDate') : '',
                endDate: oldParams && oldParams.get('endDate') ? oldParams.get('endDate') : '',
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

    const specificDateClick = (day) => {
        let date = getSpecificPreviousDate(day)
        setParams((prev) => ({...prev, startDate: date}));
        let today = new Date()
        today = format(today, "yyyy-MM-dd")
        setParams((prev) => ({...prev, startDate: date, endDate: today}));
    }

    const searchColumns = [ {id: 'name', name: '이름'}, {id: 'contactNumber', name: '연락처'}, {id: 'email', name: '이메일'}];
    const situations = [{id: '', name: '전체'}, {id: "Active", name: '정상'}, {id: 'Stop', name: "중지"},  {id: "InActive", name: '탈퇴'}];

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

    const filterCriteria  = [
        {label: '회원유형', paramsName: 'membershipType'},
        {label: '검색', paramsName: 'search'},
        {label: '상태', paramsName: 'situation'},
        {label: '조직그룹', paramsName: 'organizationGroupIds'},
        {label: '기간', paramsName: 'startDate'}
    ]

    const finallist = filterCriteria.map(item => {
        const { label, paramsName } = item;
        let value = '';
        if (params && params[paramsName]) {

            value = params[paramsName];

            if (paramsName === "organizationGroupIds") {
                value = Array.isArray(value) && value.length ? `${value.length}개 항목` : "";
            }

            if (paramsName === "startDate") {
                value = params.startDate && params.endDate
                    ? `${params.startDate} ~ ${params.endDate}`
                    : "";
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
                    <FilterFormWrapper label="회원유형" className={'!pb-0'}>
                        <LmsStandardRadioFieldGroup
                            options={[{id: '', name: '전체'}, {id: "MEMBER", name: "회원"}, {id: "MANAGER", name: "관리자"}]}
                            name="membershipType"
                            value={params ? params.membershipType : ''}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>
                    <FilterFormWrapper label="상태" className={'!pb-0'}>
                        <LmsStandardRadioFieldGroup
                            options={situations}
                            name="situation"
                            value={params ? params.situation : ''}
                            changeDataHandler={handleOnChnage}/>
                    </FilterFormWrapper>
                </div>
                <div className="flex">
                    <FilterFormWrapper label="조직그룹" className={`${showOrgGroup? '!pb-2' : ''}`}>
                        <div className={`  flex-[0_1_auto]`}>
                            <Field className={`!pb-0 w-[138px] `}>
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
                    <FilterFormWrapper label="기간" className={`${showOrgGroup? '!pb-2' : ''}`}>
                        <LmsStandardDatePicker
                            name={'startDate'}
                            value={params?.startDate}
                            placeholder={'YYYY-MM-DD'}
                            selectedEndDate={params?.endDate}
                            selectedStartDate={params?.startDate}
                            changeDataHandler={handleOnChnage}
                        />

                        <span>-</span>
                        <LmsStandardDatePicker
                            name={'endDate'}
                            value={params?.endDate}
                            selectedEndDate={params?.endDate}
                            selectedStartDate={params?.startDate}
                            placeholder={'YYYY-MM-DD'}
                            changeDataHandler={handleOnChnage}
                        />
                        <LmsStandardDatePeriodPicker params={params} specificDateClick={specificDateClick} />

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
                        <LmsSearchInput singleElement={true}
                                        fieldClass="w-full"
                                        name="search"
                                        onKeyUp={onKeyUpHandle}
                                        value={params ? params.search : ''}
                                        placeholder="검색어를 검색해주세요."
                                        changeDataHandler={handleOnChnage}  />
                    </div>
                    <Button type="button" onClick={sendSearchRequest} color="primary">검색</Button>
                </FilterFormWrapper>
                <LmsDatatableFilterSummary filterCriteria={finallist?.filter(item=> item.value !== '') || []} />
            </FilterForm>

        </>
    );
}

export default MemberTableFilter