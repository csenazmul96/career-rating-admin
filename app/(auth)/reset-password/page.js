
import AuthPageFooter from "@/app/(auth)/components/AuthPageFooter";
 import ResetPasswordForm from "@/app/(auth)/reset-password/components/ResetPasswordForm";

export default async function Page({searchParams}) {
    const searchParms = await searchParams

    return (
        <>
            <ResetPasswordForm searchParms={searchParms} />
            <AuthPageFooter />
        </>
    );
}
