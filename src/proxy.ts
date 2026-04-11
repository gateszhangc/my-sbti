import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const apexHost = "my-sbti.lol";
const wwwHost = `www.${apexHost}`;
const acmeChallengePath = "/.well-known/acme-challenge/";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith(acmeChallengePath)) {
    return NextResponse.next();
  }

  if (request.nextUrl.hostname !== wwwHost) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.hostname = apexHost;

  return NextResponse.redirect(redirectUrl, 308);
}
