import React from 'react';
import FooterContent from "@/components/footer/FooterContent";

function AuthPageFooter(props) {
    return (
        <footer className={` pl-12 py-[16px] pr-[48px] footer border-t border-commonBorderColor`}>
            <FooterContent />
        </footer>
    );
}

export default AuthPageFooter;