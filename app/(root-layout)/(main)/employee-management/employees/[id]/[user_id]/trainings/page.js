
import {getTrainings} from "@/utils/api/career/trainingsAPI";
import TrainingsOuter
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/trainings/components/TrainingsOuter";

export default async function Page({params}) {
    const {id, user_id} = await params;
    const trainings = await getTrainings({user_id})
    return (
        <>
            <div className="dashboaed-stat flex flex-col">
                <TrainingsOuter trainings={trainings} userId={user_id} id={id} />
            </div>
        </>
    );
}
