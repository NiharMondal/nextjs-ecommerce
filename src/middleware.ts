import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "./utils/decodeToken";
const authRoutes = ["/sign-in", "/sign-up"];
const roleBasedPrivateRoutes = {
	CUSTOMER: [/^\/account\/order/],
	ADMIN: [/^\/dashboard\/:path/],
};

type Role = keyof typeof roleBasedPrivateRoutes;

export async function middleware(request:NextRequest){
   
    const {pathname} = request.nextUrl;
    const accessToken  = cookies().get("accessToken")?.value;

	if(accessToken && pathname.includes("/cart")){
		return NextResponse.next()
	}
    if(!accessToken){
        if(authRoutes.includes(pathname)){
            return NextResponse.next()
        }else{
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }
    }
    let decodedData = null;

	if (accessToken) {
		decodedData = decodeToken(accessToken) as any;
	}

	const role = decodedData?.role;

	if (role && roleBasedPrivateRoutes[role as Role]) {
		const routes = roleBasedPrivateRoutes[role as Role];
		if (routes.some((route) => pathname.match(route))) {
			return NextResponse.next();
		}
	}

	return NextResponse.redirect(new URL("/sign-in", request.url));

}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/cart","/dashboard/:path*","/account/:path*"],
};

