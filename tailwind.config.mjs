/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {

        extend: {
            colors: {
                bodyBgColor: "#F9F9F9",
                secondaryBgColor: "#F8F8F8",
                themeColor: "#3058FF",
                borderColor: "#D8D8D8",
                tableBorderColor: "#E4E4E4",
                commonBorderColor: "#E4E4E4",
                textColor: "#1D1D1D",
                textSubColor: "#717171",
                inputColor: "#8E8E8E",
                placeholderColor: "#8E8E8E",
                subColor: "#64748B",
                leftMenuHoverColor: "#E6EEFF",
                primaryLightColor: "#F4F9FF",
                secondaryColor: "#555555",
                secondaryLightColor: "#F0F0F0",
                warningBgColor: "#FFF8E9",
                warningColor: "#98690A",
                dangerColor: "#FF0000",
                dangerDeppColor: "#D50136",
                dangerLightColor: "#FEECF0",
                tableHeadColor: "#d",
            },
            fontSize: {
                sm: '12px',
                '13': '13px',
                '14': '14px',
                base: '15px',
                baseNormal: '17px',
                medium: '19px',
                '25': '1.5625rem',
            },
            backgroundImage: {
                'login-img': "url('/images/logo-bg.png')",
            },
            boxShadow: {
                'card-shadow': '0px 0px 1px 0px rgba(0, 0, 0, 0.6)',
                'modalShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.1)',
                'dashboardShadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
                'notificatoindShadow': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            },
            lineHeight: {
                '40': '40px',
                '32': '32px',
                '24': '24px',
                '19': '19.5px',
                '15': '15px',

            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
            screens: {
                'lg': '1025px',
            },
        },
    },
    plugins: [
        function({ addComponents, theme }) {
            addComponents({
                '.gradient-border-rounded': {
                    position: 'relative',
                    borderRadius: theme('borderRadius.full'),
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: '0',
                        borderRadius: 'inherit',
                        padding: '1.67px',
                        background: 'linear-gradient(202.36deg, rgba(255, 255, 255, 0.2) 8.26%, rgba(255, 255, 255, 0) 85.43%)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'exclude',
                        zIndex: '-1',
                    },
                },
            });
        },
    ],
    darkMode: 'false',
};
