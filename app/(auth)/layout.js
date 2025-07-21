import "../globals.css";
import {ToastContainer} from "react-toastify";

export default async function RootLayout({ children }) {
    return (

            <div className="login-page">
                {children}
                <ToastContainer />
            </div>
    );
}
