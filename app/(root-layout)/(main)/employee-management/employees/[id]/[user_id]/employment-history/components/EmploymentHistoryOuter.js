"use client"

import EmploymentHistoryCard
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/employment-history/components/EmploymentHistoryCard";
import { ReactSortable } from "react-sortablejs";
import {sortEmploymentHistory} from "@/utils/api/career/employeementHistory";
import {LmsToastMessage} from "@/components/common/LmsToastMessage";
import {useState} from "react";
function EmploymentHistoryOuter({employmentHistory, userId, id}) {
    const [state, setState] = useState(employmentHistory);

    const sortNewList = async (list) => {
        const isSameOrder = list.every((item, idx) => item.id === state[idx]?.id);
        if (isSameOrder) return;

        setState(list);
        const response = await sortEmploymentHistory({ list });
        if (response && response.status === 200) {
            LmsToastMessage('Sort', 'Job has been sort successfully.', 'success');
        }
    }
    return (
        <ReactSortable list={state} setList={sortNewList} tag="tbody" className={"grid grid-cols-2 lg:grid-cols-4 gap-6 w-full"}>
            {state.map((job, index) => (
                <EmploymentHistoryCard key={`history-${index}`} job={job} userId={userId} id={id}/>
            ))}
        </ReactSortable>
    );
}

export default EmploymentHistoryOuter;