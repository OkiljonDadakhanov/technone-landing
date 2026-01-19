import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./src/i18n/routing";

const intlMiddleware = createMiddleware(routing);

// CSRF protection: Verify origin for POST requests
function verifyCsrf(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return false;
  }

  // Extract host from origin URL
  try {
    const originUrl = new URL(origin);
    const originHost = originUrl.host;

    // Allow same-origin requests
    return originHost === host;
  } catch {
    return false;
  }
}

export default function middleware(request: NextRequest) {
  // CSRF protection for POST requests
  if (request.method === "POST") {
    if (!verifyCsrf(request)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  // Browser language detection for first-time visitors
  const localeCookie = request.cookies.get("NEXT_LOCALE");

  if (!localeCookie) {
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim().substring(0, 2))
        .find((lang) => routing.locales.includes(lang as typeof routing.locales[number]));

      if (preferredLocale) {
        const response = intlMiddleware(request);
        response.cookies.set("NEXT_LOCALE", preferredLocale, {
          maxAge: 60 * 60 * 24 * 365, // 1 year
          path: "/",
        });
        return response;
      }
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
