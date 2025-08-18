"use client"
import React, {useState} from 'react';
import {Button} from "@/components/common/button";
import {PlusIcon} from "lucide-react";
import { ReactSortable } from "react-sortablejs";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import TrainingsFormModal
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/trainings/components/TrainingsFormModal";
import {sortTrainings} from "@/utils/api/career/trainingsAPI";
import TrainingCard
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/trainings/components/TrainingCard";

function TrainingsOuter({ trainings, userId, id}) {
    const [state, setState] = useState(trainings);
    const [open, setOpen] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const hangleCreateNewButtonClick = () => {
        setOpen(true);
        setEditItem(null);
    }

    const hangleEditButtonClick = (editItem) => {
        setOpen(true);
        setEditItem(editItem);
    }

    const sortNewList = async (list) => {
        const isSameOrder = list.every((item, idx) => item.id === state[idx]?.id);
        if (isSameOrder) return;

        setState(list);
        const response = await sortTrainings({ list });
        if (response && response.status === 200) {
            LmsToastMessage('Sort', 'Trainings has been sort successfully.', 'success');
        }
    }

    return (
        <>
            <div className="w-full flex justify-end">
                <Button color={"primaryLightRoundedSmall"} onClick={hangleCreateNewButtonClick} className={'!h-10  rounded-full'}><PlusIcon size={16} /> Create New </Button>
            </div>
            {state.length === 0 ?
                <div className="flex flex-col">

                </div>
                :
                    <ReactSortable list={state} setList={sortNewList} tag="tbody" className={"grid grid-cols-2 lg:grid-cols-4 gap-6 w-full"}>
                    {state.map((training, index) => (
                        <TrainingCard key={`index${index}`} training={training} hangleCreateNewButtonClick={hangleEditButtonClick} />
                    ))}
                    </ReactSortable>
            }
            {open && <TrainingsFormModal user_id={userId} id={id} openForm={open} setOpenForm={setOpen} editItem={editItem} />}
        </>
    );
}

export default TrainingsOuter;