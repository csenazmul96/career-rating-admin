import LmsPageHeading from "@/components/common/LmsPageHeading";
import {getCompanies} from "@/utils/api/career/companiesAPI";

export default async function Page({params, searchParams}) {
    const searchParamsAll = await searchParams
    const {id} = await params
    const parentId = id && id.length ? id[0] : ''
    const secondId = id && id.length > 1 ? id[1] : ''
    const thirdId = id && id.length > 2 ? id[2] : ''

    const {companies, pagination} = await getCompanies({...searchParamsAll, parentId, secondId, thirdId})
    return (
        <>
            <>
                <LmsPageHeading title="과정 관리" />
                <div className="flex flex-col">
                </div>
            </>
        </>
    );
}
