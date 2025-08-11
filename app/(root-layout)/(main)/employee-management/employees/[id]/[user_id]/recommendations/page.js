import {getRecommendations} from "@/utils/api/career/recommendationsAPI";
import RecommendationOuter
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/recommendations/components/RecommendationOuter";

export default async function Page({params}) {
    const {id, user_id} = await params;
    const recommendations = await getRecommendations({user_id})
    return (
        <>
            <div className="dashboaed-stat flex flex-col">
                <RecommendationOuter recommendations={recommendations} userId={user_id} id={id} />
            </div>
        </>
    );
}
