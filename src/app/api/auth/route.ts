import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const clientId =
    process.env.GITHUB_CLIENT_ID ||
    process.env.OAUTH_GITHUB_CLIENT_ID ||
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      {
        error: "Missing GITHUB_CLIENT_ID environment variable on Vercel.",
        message:
          "Please add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET to your Vercel Project Environment Variables.",
      },
      { status: 500 }
    );
  }

  const host = request.headers.get("host") || "www.iprcellglcmumbai.in";
  const protocol = host.includes("localhost") ? "http" : "https";
  const redirectUri = `${protocol}://${host}/api/callback`;

  const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
  githubAuthUrl.searchParams.set("client_id", clientId);
  githubAuthUrl.searchParams.set("redirect_uri", redirectUri);
  githubAuthUrl.searchParams.set("scope", "repo,user");
  githubAuthUrl.searchParams.set("allow_signup", "false");

  return NextResponse.redirect(githubAuthUrl.toString(), 302);
}
