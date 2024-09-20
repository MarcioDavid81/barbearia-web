import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
    const token = request.cookies.get("@barber.token")?.value;

    const signInURL = new URL("/login", request.url);

    const dashboardURL = new URL("/dashboard", request.url);

    if (!token) {

        if (request.nextUrl.pathname === "/login"){
            return NextResponse.next();
        }

        return NextResponse.redirect(signInURL);
    }

    if (request.nextUrl.pathname === "/login"){
        return NextResponse.redirect(dashboardURL);
    }

    if (request.nextUrl.pathname === "/register"){
        return NextResponse.redirect(dashboardURL);
    }

}

export const config = {
    matcher: ["/login", "/dashboard", "/profile", "/haircuts/:path*"],
}