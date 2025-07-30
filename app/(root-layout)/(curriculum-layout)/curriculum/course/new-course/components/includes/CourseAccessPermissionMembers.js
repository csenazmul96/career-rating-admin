import FieldWrapper from "@/components/common/form/FieldWrapper";
import {Button} from "@/components/common/button";
import {Plus, X} from "lucide-react";
import {useSession} from "next-auth/react";
import CourseAccessPermissionMembersModal
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseAccessPermissionMembersModal";
import { useState} from "react";

function CourseAccessPermissionMembers({form, setForm}) {
    const {data} = useSession();
    const [openModal, setOpenModal] =  useState(false);
    const [selectedMembers, setSelectedMembers] =  useState(form.courseAdmins && form.courseAdmins.length > 0 ? form.courseAdmins.filter((item) => item.memberId !== data?.username) : []);

    const setSelectedMemberList = (members) => {
        if (members && members.length > 0) {
            setSelectedMembers(members)
            setForm((old) => ({...old, courseAdminMemberIds: members.map((member) => member.memberId)}))
        }
    }
    const removeMember = (members) => {
        const filteredMmbers = selectedMembers.filter((member) => member.memberId !== members.memberId)
        setSelectedMembers(filteredMmbers)
        setForm((old) => ({...old, courseAdminMemberIds: filteredMmbers.map((member) => member.memberId)}))
    }


    return (
        <>
            <FieldWrapper label="과정 담당자" singleElement={true} required>
                <div className={'flex   gap-3'}>
                    <div className={'flex gap-3'}>
                        <span>김철수 ({data?.username})</span>
                        <Button color="transparentSmall" onClick={()=>setOpenModal(!openModal)} className={'rounded-full h-[28px] w-[28px] !p-0'}>
                            <Plus size={16} />
                        </Button>
                    </div>
                    <div className={'flex gap-3 content-start'}>
                        {selectedMembers.map((member, index) => (
                            <Button key={`member-key${index}`} color="transparentSmall" className={'rounded-full h-[32px] gap-2'}>
                                <span>{member.name} ({member.memberId})</span> <span onClick={()=>removeMember(member)}><X size={12} /> </span>
                            </Button>
                        ))}
                    </div>
                </div>
            </FieldWrapper>
            <CourseAccessPermissionMembersModal open={openModal}
                                                setOpenModal={setOpenModal}
                                                selectedMembers={selectedMembers}
                                                setSelectedMembers={setSelectedMemberList} />
        </>
    );
}

export default CourseAccessPermissionMembers;