import { NextRequest, NextResponse } from "next/server"

export const config = {
    matcher: ['/admin/:path*', '/user/:path*']
}

export function middleware(request: NextRequest) {

    // if(request.nextUrl.pathname == '/admin/applications'){
    //     return NextResponse.redirect(new URL('/admin',request.nextUrl.origin))
    // }   
}
