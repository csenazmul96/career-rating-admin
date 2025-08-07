
import {Button} from "@/components/common/button";
import {PlusIcon} from "lucide-react";
import {getsEmployeeLanguage} from "@/utils/api/career/employeeLanguageApi";
import LanguageItem
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/language/components/LanguageItem";

export default async function Page({params}) {
    const {id, user_id} = await params;
    const languages = await getsEmployeeLanguage({user_id: user_id});

    return (
        <div className="dashboaed-stat flex flex-col">
            <div className="w-full flex justify-end">
                <Button color={"primaryLightRoundedSmall"} className={'!h-10  rounded-full'}><PlusIcon size={16} /> Create New </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {languages.map((language, index) => (
                    <LanguageItem language={language} key={`index-${index}`} id={id} user_id={user_id} />
                ))}
            </div>
        </div>
    );
}
