import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export const config = {
    matcher: ['/admin/:path*', '/user/:path*']
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
    if (['/user/login', '/user/register'].includes(request.nextUrl.pathname)) {
        if (request.cookies.has('userToken')) {
            return NextResponse.redirect(new URL('/user', request.nextUrl.origin))
        }
    } else if (request.nextUrl.pathname.startsWith('/user')) {
        if (!request.cookies.has('userToken')) {
            return NextResponse.redirect(new URL('/user/login', request.nextUrl.origin))
        }
    }

    // if(request.nextUrl.pathname == '/admin/applications'){
    //     return NextResponse.redirect(new URL('/admin',request.nextUrl.origin))
    // }   
}
