"use client";

import Image from "next/image";
import infoImg from "@/public/images/login-img.png";
import {Field} from "@/components/common/fieldset";
import {Select} from "@/components/common/select";
import {Input} from "@/components/common/input";
import React, {useCallback, useEffect, useState} from "react";
import {getMembersByRole} from "@/utils/api/memberManagementRequest";
import {Info} from "lucide-react";

const AdministratorRegisterForm = ({roles}) => {
    const [selectedRoles, setSelectedRoles] = useState(roles[0]?.id || '');
    const [search, setSearch] = useState('');
    const [members, setMembers] = useState([]);

    const filteredMembers = members.filter((member) => {
        return member.name.toLowerCase().includes(search.toLowerCase()) || member.email.toLowerCase().includes(search.toLowerCase());
    });


    const loadMembers = useCallback(async () => {
        return await getMembersByRole(selectedRoles);
    }, [selectedRoles]);

    useEffect(() => {
        setMembers([]);

        if (selectedRoles) {
            loadMembers().then((data) => {
                setMembers(data);
            });
        }
    }, [selectedRoles, loadMembers]);


    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="registration-form">
                <div className="form">
                    <div className="flex items-stretch border-t border-commonBorderColor">
                        <div className="left-col pl-6 flex items-center w-[153px] bg-tableHeadColor">
                            <span className="tableHeadColor flex items-center whitespace-nowrap font-bold">관리자 유형 <span
                                className="pl-3">
                                <Info size={20} className={`text-textSubColor rotate-180`} />
                            </span></span>
                        </div>
                        <div className="right-col flex-1 py-[20px] px-4 pl-[20px]">
                            <Field className="!pb-0 w-[270px]">
                                <Select onChange={(e) => setSelectedRoles(e.target.value)}>
                                    {roles && roles.map((role) => (
                                        <option key={`role_${role.id}`}
                                                value={role.id}>{role.name}</option>
                                    ))}
                                </Select>
                            </Field>
                        </div>
                    </div>

                    <div className="flex items-stretch border-t border-commonBorderColor">
                        <div className="left-col pl-6 flex items-center w-[153px] bg-tableHeadColor">
                            <span className="tableHeadColor whitespace-nowrap font-bold">회원 선택 </span>
                        </div>
                        <div className="right-col flex-1 py-[20px] px-4 pl-[20px]">
                            <div className="flex flex-col">

                                <div className="search-member">
                                    <Field className="!pb-0 flex relative w-full ">
                                        <Input name="full_name" className="w-full "
                                               value={search}
                                               onChange={handleChange}
                                               placeholder="Search for organizational groups."/>
                                        <span className={`bg-white cursor-pointer z-10 absolute right-4 top-1/2 transform -translate-y-1/2`}><img
                                            src="/images/search.png" alt="search"/></span>
                                    </Field>
                                </div>

                                <ul className="border border-borderColor mt-3 custom-scrollbar-w-6 h-[230px]">
                                    {filteredMembers.map((member) => (
                                        <li key={`member_${member.id}`}
                                            className="flex border-b border-borderColor h-[52px] space-x-3 items-center py-[12px] px-[16px]">
                                            <span>{member.name} ({member.memberId})</span>
                                            <span className="text-textSubColor">{member.email}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdministratorRegisterForm;