import MainContentWrapper from "@/components/layoutwapper/MainContentWrapper";

export default async function RootLayout({ children }) {

    return (
        // <MainContentWrapper id="main-content" className="pt-[150px] pl-[308px] pb-[80px] pr-[48px] bg-[#F9F9F9] min-h-[calc(100dvh-54px)]">
        <MainContentWrapper classes={'bg-[#F9F9F9]'}>
            {children}
        </MainContentWrapper>
    );
}
