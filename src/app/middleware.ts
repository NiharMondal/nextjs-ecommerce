import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const authRoutes = ["/sign-in", "/sign-up"];

export async function middleware(request:NextRequest){
    const {pathname} = request.nextUrl;
    const accessToken  = cookies().get("accessToken")?.value;

    if(!accessToken){
        if(authRoutes.includes(pathname)){
            return NextResponse.next()
        }else{
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/dashboard/:path*","/account/:path*",],
};

