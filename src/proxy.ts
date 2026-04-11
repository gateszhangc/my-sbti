import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const apexHost = "my-sbti.lol";
const wwwHost = `www.${apexHost}`;
const acmeChallengePath = "/.well-known/acme-challenge/";
const localHosts = new Set(["localhost", "127.0.0.1"]);

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith(acmeChallengePath)) {
    return NextResponse.next();
  }

  const forwardedHost =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.host;
  const requestHost = forwardedHost.split(":")[0]?.toLowerCase();
  const forwardedProto = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase();
  const redirectUrl = request.nextUrl.clone();
  let shouldRedirect = false;

  if (requestHost === wwwHost) {
    redirectUrl.hostname = apexHost;
    shouldRedirect = true;
  }

  if (forwardedProto === "http" && requestHost && !localHosts.has(requestHost)) {
    redirectUrl.protocol = "https";
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    const redirectHost = requestHost === wwwHost ? apexHost : requestHost;
    if (redirectHost && !localHosts.has(redirectHost)) {
      redirectUrl.hostname = redirectHost;
      redirectUrl.port = "";
    }
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}
