import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];

const PUBLIC_ROUTES = [
  "/",
  "/gear",
  "/about",
  "/contact",
  "/payment/success",
  "/payment/cancel",
];

interface TokenPayload {
  role: "ADMIN" | "PROVIDER" | "CUSTOMER";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("accessToken")?.value;

  let role: string | null = null;

  if (token) {
    try {
      role = jwtDecode<TokenPayload>(token).role;
    } catch {
      role = null;
    }
  }

  if (pathname.startsWith("/dashboard/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/dashboard/provider") && role !== "PROVIDER") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/dashboard/customer") && role !== "CUSTOMER") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  /*
  -----------------------------
  Not logged in
  -----------------------------
  */

  if (!token && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  /*
  -----------------------------
  Already logged in
  -----------------------------
  */

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
