import React, {useEffect, useState} from 'react';
import {Dialog, DialogActions, DialogBody, DialogTitle} from "@/components/common/dialog";
import {Button} from "@/components/common/button";
import {getMembers} from "@/utils/api/memberManagementRequest";
import LmsSearchInput from "@/components/common/form/LmsSearchInput";
import CourseAccessMemberModelItem
    from "@/app/(root-layout)/(curriculum-layout)/curriculum/course/new-course/components/includes/CourseAccessMemberModelItem";

function CourseAccessPermissionMembersModal({open, setOpenModal, setSelectedMembers = [], selectedMembers}) {
    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getMemberList();
    }, []);

    useEffect(() => {
        setMemberTempList(selectedMembers)
    }, [selectedMembers]);

    const getMemberList = async () => {
        const {members} = await getMembers({membershipType: "MANAGER", size: 1000})
        setMembers(members)
    }

    const handleOnChnage = (column, value) => {
        setSearch(value);
    }

    const onKeyUpHandle = (name, event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    const [memberTempList, setMemberTempList] = useState([]);

    const handleCheckboxChange = (option, column) => {
        if (memberTempList.length && memberTempList.find((item) => item.id === option.id)) {
            setMemberTempList((old) => (old.filter((item) => item.id !== option.id)))
        } else {
            setMemberTempList((old) => ([...old, option]))
        }
    };

    const filteredMembers = members.filter(member => {
        if (!search) return true;
        const value = search.toLowerCase();
        return (
            (member.name && member.name.toLowerCase().includes(value)) ||
            (member.memberId && String(member.memberId).toLowerCase().includes(value))
        );
    });


    const memberHasBeenSelected = () => {
        setOpenModal(false)
        setSelectedMembers(memberTempList)
    }


    return (
        <Dialog size="w500"  className={'w-[500px]'} open={open} onClose={setOpenModal}>
            <DialogTitle>과정 담당자 추가</DialogTitle>
            <DialogBody>
                <div className={"w-auto flex-auto relative"}>
                    <LmsSearchInput singleElement={true}
                                    fieldClass="w-full"
                                    name="search"
                                    onKeyUp={onKeyUpHandle}
                                    value={search}
                                    placeholder="이름 또는 ID를 입력해주세요."
                                    changeDataHandler={handleOnChnage}  />
                </div>
                <div>
                    <div className="flex justify-between   custom-scrollbar h-[177px] overflow-y-auto border-t border-borderColor mt-3">
                        <ul className="w-full">
                            {filteredMembers.map((option, index) => (
                                <CourseAccessMemberModelItem
                                    key={`permission_ ${index}`}
                                    selectedMembers={memberTempList}
                                    handleCheckboxChange={handleCheckboxChange}
                                    option={option}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </DialogBody>
            <DialogActions className={'border-t border-borderColor !mt-0 pt-8'}>
                <Button color="transparentMedium" className={`h-[40px]`} onClick={() => setOpenModal(false)}>
                    취소
                </Button>
                <Button color="primaryMedium" className={`h-[40px]`} onClick={memberHasBeenSelected}>확인</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CourseAccessPermissionMembersModal;