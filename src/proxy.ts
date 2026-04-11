import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const apexHost = "my-sbti.lol";
const wwwHost = `www.${apexHost}`;

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname !== wwwHost) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.hostname = apexHost;

  return NextResponse.redirect(redirectUrl, 308);
}
