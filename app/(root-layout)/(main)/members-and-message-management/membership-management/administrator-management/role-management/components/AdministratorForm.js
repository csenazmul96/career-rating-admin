"use client"

import React, {useContext, useEffect, useState} from "react";
import { Field } from "@/components/common/fieldset";
import {Input} from "@/components/common/input";
import {Button} from "@/components/common/button";
import RoleFormPermissionSingleElement
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/RoleFormPermissionSingleElement";
import RoleFormPermissionGroupSingleElement
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/RoleFormPermissionGroupSingleElement";
import {createRole, updateRole} from "@/utils/api/administratorManagement";
import RoleContext from "@/store/RoleContext";
import {confirmAlert} from "react-confirm-alert";
import ConfirmPopup from "@/components/common/confirmAlert/ConfirmPopup";
import AllSelectedPermissionTags
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/AllSelectedPermissionTags";
import Image from "next/image";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

const AdministratorForm = ({groups, disable= false, selectedRole = null, grpSelectBtnText="초기화"}) => {

    const { editRole, setEditRole, setNewForm, newForm} = useContext(RoleContext)

    const [currentGrp, setCurrentGrp] = useState(null);
    const [allPermissions, setAllPermissions] = useState([]);

    // State to store form inputs
    const [formData, setFormData] = useState({
        name: "",
        permissions: [],
        groups: [],
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false)

    //Edit role form fillup
    useEffect(() => {
        if(editRole){
            setNewForm(false)
            fillEditRoleForm()
        }
    }, [editRole]);
    //Edit role form fillup
    useEffect(() => {
        if(selectedRole){
            setCurrentGrp(selectedRole)
            setFormData((prev) => ({
                permissions: selectedRole.permissions,
                groups:selectedRole
            }))
        }
    }, [selectedRole]);

    //get New role create button click
    useEffect(() => {
        if(newForm){
            setEditRole(null)
            formEmpty()
        }
    }, [newForm]);

    const fillEditRoleForm = ()=>{
        let parentGrop = []
        if(groups.length) {
            parentGrop = groups
                .filter(parent => editRole.permissions?.some(child => child.parentId === parent.id))
                .map(parent => parent.id);
        }
        setFormData({
            name: editRole.name,
            permissions: editRole.permissions,
            groups: parentGrop,
        })
    }

    // Handle text input changes
    const handleInputChange = (value, column) => {
        // if (value.length <= 12) {
            setFormData({...formData, [column]: value});

            setErrors((prevErrors) => {
                const newErrors = {...prevErrors};
                delete newErrors[column];
                return newErrors;
            });
        // }
    };

    // Handle checkbox changes
    const handleCheckboxChange = (option, column) => {
        const isSelected = formData[column].find(item => item.id === option.id)

        const updatedSelectedTypes = isSelected !== undefined
            ? formData[column].filter((type) => type.id !== option.id)
            : [...formData[column], option];

        setFormData({ ...formData, [column]: updatedSelectedTypes });
    };

    // select/unselect click handler
    const handleSelectAll = (column) => {
        if(column === 'groups'){
            let list = [];
            groups.forEach(grp => {
                list.push(...grp.permissions)
            })

            if(formData.groups.length === groups.length){
                list= []
            }

            setFormData({ ...formData, groups: list.length ? groups : [], permissions: list });
        }
        if(column === 'permissions'){
            let ids = currentGrp ? currentGrp.permissions.map(item =>{ return item.id}) : []
            const isAnyMatch = ids.some(id => formData.permissions.some(obj => obj.id === id));
            if(isAnyMatch){
                setFormData((old) =>({...old, permissions: formData.permissions.filter(item => !ids.includes(item.id))}))
            } else [
                setFormData((old) =>({...old, permissions: [...formData.permissions, ...currentGrp.permissions]}))
            ]
        }
    };

    // Generate all tags from all selected permissions
    useEffect(() => {
        if(formData.permissions.length){
            let newlist = []
            formData.permissions.forEach(permission => {
                let grp = groups.find(grp => grp.id === permission.groupId)
                if(grp){
                    let existsPermissions = formData.permissions.filter(permission => permission.groupId === grp.id)
                    if(existsPermissions.length === grp.permissions.length){
                        if(!newlist.find(obj => obj.groupId === grp.id && obj.id === 'all' ))
                            newlist.push({name: `${grp.name} 전체`, groupId: grp.id, id: 'all'})
                    } else {
                        newlist.push({
                            name: `${grp.name} > ${permission.name}`,
                            id: permission.id,
                            groupId: grp.id
                        })
                    }
                }
            })
            setAllPermissions(newlist)
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors.permissions;
                return newErrors;
            });
        } else {
            setAllPermissions([])
        }
    }, [formData.permissions]);


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
            if (editRole && editRole.id){//if role update
                const response = await updateRole({name: formData.name, permissions: formData.permissions, description: ""}, editRole.id)

                if (response.errors){
                    setErrors(formatErrors(response.errors))
                } else {
                    LmsToastMessage('업데이트.', 'Role has been updated', 'success')
                }
            } else {//new role create
                const response = await createRole({name: formData.name, permissions: formData.permissions})
                if (response.status === 500){
                    LmsToastMessage('생성됨.', '문제가 발생했습니다.', 'error')
                    setLoading(false)
                    return;
                }
                if (response.errors){
                    setErrors(formatErrors(response.errors))
                } else {
                    LmsToastMessage('생성됨.', 'New role has been created', 'success')
                    setCurrentGrp(response.data)
                    setEditRole(response.data)
                }
            }
            setLoading(false)
    };

    //check confirmation submin
    const checkConfirmation = async (e) =>{
        confirmAlert({
            title: editRole && editRole.id ? '관리자 유형 수정' : '새 관리자 유형 생성',
            message: editRole && editRole.id ? '관리자 유형을 수정하시겠습니까?' : "새 관리자 유형을 생성하시겠습니까?",
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
                        handleSubmit(e)
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

    // form empty
    const formEmpty = () => {
        setFormData({
            name: "",
            permissions: [],
            groups: [],
        })
    }

    //group label click handle
    const selectGroup = (group) => {
        setCurrentGrp(group)
    }

    //Group check mark click handler
    const hangleGroupClick = (group, value) => {
        setCurrentGrp(group)
        if(value) {
            let checkExists = formData.permissions.filter(obj => obj.groupId === group.id)
            if (checkExists.length) {
                let allPermissionExceptThisGroup = formData.permissions.filter(obj => obj.groupId !== group.id)
                setFormData((old) => ({...old, permissions: [...allPermissionExceptThisGroup, ...group.permissions]}))
            } else {
                setFormData((old) => ({...old, permissions: [...formData.permissions, ...group.permissions]}))
            }
        } else {
            let allPermissionExceptThisGroup = formData.permissions.filter(obj => obj.groupId !== group.id)
            setFormData((old) => ({...old, permissions: [...allPermissionExceptThisGroup]}))
        }

    }

    // each permission remove from tags item
    const removeTag = (option, type) => {
        if (type !== 'all'){
            handleCheckboxChange(option, 'permissions')
        } else {
            let formPermissions = formData.permissions.filter((obj) => obj.groupId !== option.groupId)
            setFormData((old) => ({...old, permissions: formPermissions}))
        }
    }

    // Permission reset button click handle
    const resetPermissions = () => {
        if (editRole && editRole.id) {//if role update
            fillEditRoleForm()
        } else {
            setFormData((old) => ({...old, permissions: []}))
        }
    }

    return (
        <div>
            {!disable &&
                <div className="flex items-stretch border-t border-b border-borderColor">
                    <div className="left-col pl-6 flex items-center w-[153px] bg-[#F8F8F8]">
                        <span> 관리자 유형명</span>
                    </div>
                    <div className="right-col flex-1 p-4">
                        <Field className="!pb-0 w-[270px]">
                            <Input name="name" invalid={ errors?.name &&  true}
                                   value={formData.name}
                                   disabled={disable}
                                   error={errors?.name}
                                   onChange={(e)=>handleInputChange(e.target.value, 'name')} placeholder="관리자 유형명을 입력해주세요."/>
                        </Field>

                    </div>
                </div>
            }
            <div className="flex items-stretch border-b border-b-borderColor">
                <div className="left-col pl-6 flex items-center w-[153px] bg-[#F8F8F8]">
                    <span className={`font-bold`}> 권한 설정</span>
                </div>
                <div className="right-col flex-1 p-4 pr-0">
                    <div className="flex border border-borderColor flex-col">
                        <div className="flex border-b border-b-borderColor">
                            <div className="flex flex-col w-[270px] border-r border-r-borderColor">
                                <div className="flex justify-between items-center border-b border-b-borderColor px-4 py-2">
                                    <span className={`text-black text-[13px]`}> 1차 메뉴</span>
                                    <Button disable={disable} type="button" onClick={()=>handleSelectAll('groups')} color="transparentSmall"
                                            className="min-w-[auto] h-[28px] text-center cursor-pointer">
                                        {formData.groups.length
                                            ? "모두 선택 취소"
                                            : grpSelectBtnText}
                                    </Button>
                                </div>
                                <div className="flex justify-between   custom-scrollbar h-[350px]">
                                    <ul className="w-full">
                                        {groups.length && groups.map((option, index) => (
                                            <RoleFormPermissionGroupSingleElement
                                                key={`grp${index}`}
                                                formData={formData}
                                                option={option}
                                                disable={disable}
                                                selectGroup={selectGroup}
                                                hangleGroupClick={hangleGroupClick}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div
                                    className={`flex justify-between items-center border-b border-b-borderColor py-2 px-4`}>
                                    <div className={'flex items-center justify-between h-[28px]'}>
                                        <span className={'outline-tableHeadColor text-black text-[13px]'}>2차 메뉴</span>
                                        {errors?.permissions &&
                                            <span className={'ml-3 text-dangerColor'}>{errors?.permissions}</span>}
                                    </div>
                                    {currentGrp &&
                                        <Button type="button" onClick={() => handleSelectAll('permissions')}
                                                color="transparentSmall"
                                                disable={disable}
                                                className=" min-w-[auto] h-[28px] !pl-2 !pr-2 text-center cursor-pointer !text-[13px]">
                                            {formData.permissions.length
                                                ? "모두 선택 취소"
                                                : "전체 선택"}
                                        </Button>
                                    }
                                </div>
                                <div className="flex justify-between   custom-scrollbar h-[350px]">

                                    <ul className="w-full">
                                        {currentGrp && currentGrp.permissions && currentGrp.permissions.map((option, index) => (
                                            <RoleFormPermissionSingleElement
                                                key={`permission_ ${index}`}
                                                formData={formData}
                                                disable={disable}
                                                handleCheckboxChange={handleCheckboxChange}
                                                option={option}/>
                                        ))}
                                        {!editRole && !currentGrp &&
                                            <div className={"relative justify-center flex items-center min-h-[300px]"}  >
                                                <div className={"w-max text-center flex gap-2 justify-center"}>
                                                    <Image
                                                        src="/icons/report.png"
                                                        className="m-auto mb-4"
                                                        width={24}
                                                        height={24}
                                                        alt=""
                                                    />
                                                    <span className={"text-placeholderColor"}>1차 메뉴를 클릭해주세요.</span>
                                                </div>
                                            </div>
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <AllSelectedPermissionTags disable={disable} removeTag={removeTag} allPermissions={allPermissions} resetPermissions={resetPermissions} />
                    </div>

                </div>
            </div>
            {!disable &&
                <div className="flex mt-10 items-end justify-end">
                    <Button color="primary"
                            disable={loading || disable}
                            loading={loading}
                            onClick={checkConfirmation}
                            className={'cursor-pointer'}>
                        등록
                    </Button>
                </div>
            }
        </div>
    )
};

export default AdministratorForm;