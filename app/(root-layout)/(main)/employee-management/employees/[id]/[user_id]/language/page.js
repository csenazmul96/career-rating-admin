import {getsEmployeeLanguage} from "@/utils/api/career/employeeLanguageApi";
import LanguageWrapper
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/language/components/LanguageWrapper";
import {getLanguages} from "@/utils/api/career/commonAPI";

export default async function Page({params}) {
    const {id, user_id} = await params;
    const [languages, employeeLanguages] = await Promise.all([
        getLanguages(),
        getsEmployeeLanguage({user_id: user_id})
    ]);

    return (
        <div className="dashboaed-stat flex flex-col">
            <LanguageWrapper employeeLanguages={employeeLanguages} languages={languages} id={id} user_id={user_id}/>
        </div>
    );
}
