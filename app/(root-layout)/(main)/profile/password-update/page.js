import LoggedInUserPasswordUpdate
    from "@/app/(root-layout)/(main)/profile/password-update/components/LoggedInUserPasswordUpdate";

export default async function Page() {
    return (
        <div className="registration-form">
            <div className="form">
                <LoggedInUserPasswordUpdate />
            </div>
        </div>
    );
}
