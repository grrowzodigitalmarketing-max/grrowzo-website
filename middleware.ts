import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const protectedRoutes = [
    "/revora/client/dashboard",
    "/revora/client/feedbacks",

    "/revora/admin/dashboard",
    "/revora/admin/feedbacks",
    "/revora/admin/payments",
    "/revora/admin/pending",
  ];

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/revora/login", req.url)
      // ya agar admin ke liye alag login page hai:
      // new URL("/revora/admin/login", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/revora/client/:path*",
    "/revora/admin/:path*",
  ],
};