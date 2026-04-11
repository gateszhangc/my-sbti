import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const apexHost = "my-sbti.lol";
const wwwHost = `www.${apexHost}`;
const acmeChallengePath = "/.well-known/acme-challenge/";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith(acmeChallengePath)) {
    return NextResponse.next();
  }

  const forwardedHost =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.host;
  const requestHost = forwardedHost.split(":")[0]?.toLowerCase();

  if (requestHost !== wwwHost) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.hostname = apexHost;

  return NextResponse.redirect(redirectUrl, 308);
}
