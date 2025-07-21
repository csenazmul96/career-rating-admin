import 'react-confirm-alert/src/react-confirm-alert.css';
import MainContentWrapper from "@/components/layoutwapper/MainContentWrapper";

export default async function RootLayout({ children }) {
    return (
        <MainContentWrapper>
            {children}
        </MainContentWrapper>
    );
}
