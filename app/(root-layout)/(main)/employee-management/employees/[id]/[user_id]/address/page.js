import LanguageWrapper
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/language/components/LanguageWrapper";
import AddressForm
    from "@/app/(root-layout)/(main)/employee-management/employees/[id]/[user_id]/address/components/AddressForm";
import {getAddress} from "@/utils/api/career/employeeApi";
import {getCountries} from "@/utils/api/career/commonAPI";
import LmsPageHeading from "@/components/common/LmsPageHeading";

export default async function Page({ params }) {
    const { id, user_id } = await params;

    const [address, countries] = await Promise.all([
        getAddress(user_id),
        getCountries()
    ]);

    return (
        <>
            <div className="flex flex-col">
                <LmsPageHeading title="Address"/>
                <AddressForm user_id={user_id} id={id} countries={countries} address={address} />
            </div>
        </>
    );
}
