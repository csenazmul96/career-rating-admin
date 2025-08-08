"use client";
import LanguageItem
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/language/components/LanguageItem";
import {Button} from "@/components/common/button";
import {PlusIcon} from "lucide-react";
import {useState} from "react";
import LanguageFormModal
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/language/components/LanguageFormModal";

function LanguageWrapper({languages, employeeLanguages, id, user_id}) {
    const [open, setOpen] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const hangleCreateNewButtonClick = () => {
        setOpen(true);
        setEditItem(null);
    }
    return (
        <>
            <div className="w-full flex justify-end">
                <Button onClick={hangleCreateNewButtonClick} color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full'}><PlusIcon size={16} /> Create New </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {employeeLanguages.map((language, index) => (
                    <LanguageItem language={language} key={`index-${index}`} id={id} user_id={user_id} />
                ))}
            </div>
            <LanguageFormModal openForm={open}
                               setOpenForm={setOpen}
                               id={id}
                                languages={languages}
                               editItem={editItem}
                               user_id={user_id}/>
        </>
    );
}

export default LanguageWrapper;