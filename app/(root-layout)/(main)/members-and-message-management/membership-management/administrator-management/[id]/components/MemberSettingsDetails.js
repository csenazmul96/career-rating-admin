'use client'
import AdministratorForm
    from "@/app/(root-layout)/(main)/members-and-message-management/membership-management/administrator-management/role-management/components/AdministratorForm";
import React, {useEffect, useState} from "react";

import FieldWrapper from "@/components/common/form/FieldWrapper";
import LmsStandardSelectInputV2 from "@/components/common/form/LmsStandardSelectInputV2";
import {getRolesById} from "@/utils/api/administratorManagement";
import {Button} from "@/components/common/button";
import {generateMemberForm} from "@/utils/helpers/CommonHelper";
import { singleMemberRoleUpdate} from "@/utils/api/memberManagementRequest";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import Link from "next/link";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";

const MemberSettingsDetails = ({groups, roles, member}) => {
    const [currentRole, setCurrentRole] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)
    const [form, setForm] = useState({
        id: member && member.memberRoles.length ? member.memberRoles[0].id : "",
        memberRoleId: member && member.memberRoles.length ? member.memberRoles[0].id : "",
        name:  member && member.memberRoles.length ? member.memberRoles[0].name : ""
    });
    const handleOnChnage = (column, value) => {
        setCurrentRole(roles.find(item => item.id === value))
        let role = roles.find(item => item.id === value)
        if(role) {
            setForm({
                id: role.id,
                memberRoleId: role.id,
                name: role.name
            })
        }
    }
    useEffect(()=>{
        if(member && member.memberRoles){
            let generatedForm = generateMemberForm(member)
            if (generatedForm){
                setForm((prev) =>({ ...prev, memberRoleId:member.memberRoles[0]?.id}))
            }

            getMemberRoleDetails(member.memberRoles[0]?.id)
        }
    }, [member])

    const getMemberRoleDetails = async (id) => {
        const role = await getRolesById(id)
        if(role){
            setCurrentRole(role)
        }
    }

    const checkConfirmation = async () => {
        setLoading(true)
        try {
            const response = await singleMemberRoleUpdate(form, member.id)

            if (response.errors) {
                setErrors(formatErrors(response.errors))
                LmsToastMessage('업데이트.', "문제가 발생했습니다.", 'error')
            } else {
                if (!form.id) {
                }
                LmsToastMessage('성공.', 'Member has been updated successfully.', 'success')
            }
            setLoading(false)
        } catch (e){
            setLoading(false)
            toast.error("문제가 발생했습니다.")
        }
        setLoading(false)
    }

    return(
        <>
            <FieldWrapper label="관리자">
                {member?.name}
            </FieldWrapper>
            <FieldWrapper label="조직">
                {member?.organizationGroupName}
            </FieldWrapper>
            {member &&
                <FieldWrapper label="관리자 유형">
                    <LmsStandardSelectInputV2
                        name={`memberRoles`}
                        initialText={'홈페이지 관리자'}
                        options={roles}
                        value={form.memberRoleId}
                        changeDataHandler={handleOnChnage}/>
                </FieldWrapper>
            }
            <AdministratorForm groups={groups} disable={true} selectedRole={currentRole}/>
            <div className="flex items-end justify-between pt-10 ">
                <Link href={'/members-and-message-management/membership-management/administrator-management'}>
                    <Button color="transparent"
                            className={'cursor-pointer'}>
                        취소
                    </Button>
                </Link>
                <Button color="primary"
                        disable={loading}
                        loading={loading}
                        onClick={checkConfirmation}
                        className={'cursor-pointer'}>
                    완료
                </Button>
            </div>
        </>
    );
}

export default MemberSettingsDetails