import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";
import {allPathList} from "@/utils/helpers/PathList";
import {jwtDecode} from "jwt-decode";

const pathList = allPathList()

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;

        const mainPath = '/' + pathname
            .split('/')
            .filter(segment => segment && !/^\d+$/.test(segment))
            .join('/');


        const route = pathList.find(obj => obj.path === mainPath);
        if (!route) {
            return NextResponse.next();
        }

        const token = req.nextauth.token;
        const decodedToken = jwtDecode(token.token);
        const permissions = decodedToken?.realm_access?.roles || [];


        // Check if the user has the required permissions
        const hasMatch = pathList.some(obj => obj.path === mainPath && Array.isArray(obj.permissions) && obj.permissions.some(permission => permissions.includes(permission)));

        if (!hasMatch && pathname !== "/unauthorized" && pathname !== "/") {
            // return NextResponse.redirect(new URL("/unauthorized", req.url));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    },
)

export const config = {
     matcher: ['/', '/((?!login|find-id-password|reset-password|forget-pass|js|images|logo-bg.png|\\.well-known).*)']
}