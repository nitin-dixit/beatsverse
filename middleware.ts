import { NextRequest, NextResponse } from "next/server";

const protectedPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (protectedPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.get("BEATSVERSE_ACCESS_TOKEN");

    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
}
