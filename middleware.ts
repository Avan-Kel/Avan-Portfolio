// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;
  const pathname = req.nextUrl.pathname;

  console.log("Middleware running - auth:", auth, "path:", pathname);

  const isAdminPage = pathname.startsWith("/admin");
  const isLoginPage = pathname.startsWith("/login");

  // Block access to /admin when not authenticated
  if (isAdminPage && !auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If logged in, prevent returning to login page
  if (isLoginPage && auth) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/login"],
};

