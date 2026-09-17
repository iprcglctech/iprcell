import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");
  const errorDescription = request.nextUrl.searchParams.get("error_description");

  if (error || !code) {
    const errorMsg = errorDescription || error || "No authorization code provided by GitHub.";
    return new NextResponse(renderHtml("error", errorMsg), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const clientId =
    process.env.GITHUB_CLIENT_ID ||
    process.env.OAUTH_GITHUB_CLIENT_ID ||
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const clientSecret =
    process.env.GITHUB_CLIENT_SECRET ||
    process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse(
      renderHtml(
        "error",
        "Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET on Vercel environment variables."
      ),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }

  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error || !data.access_token) {
      return new NextResponse(
        renderHtml(
          "error",
          data.error_description || data.error || "Failed to obtain access token from GitHub."
        ),
        {
          status: 400,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }

    return new NextResponse(renderHtml("success", data.access_token), {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : "Internal Server Error during token exchange.";
    return new NextResponse(renderHtml("error", errMsg), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}

function renderHtml(status: "success" | "error", content: string) {
  if (status === "error") {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Authentication Error</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        background: #0f172a;
        color: #f8fafc;
      }
      .card {
        background: #1e293b;
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid #334155;
        max-width: 420px;
        text-align: center;
      }
      h2 { color: #f87171; margin-top: 0; }
      p { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Authorization Failed</h2>
      <p>${escapeHtml(content)}</p>
    </div>
    <script>
      (function() {
        var msg = "authorization:github:error:${escapeHtml(content)}";
        if (window.opener) {
          window.opener.postMessage(msg, "*");
        }
      })();
    </script>
  </body>
</html>`;
  }

  const tokenJson = JSON.stringify({ token: content, provider: "github" });

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Authorizing Sveltia CMS...</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        background: #0f172a;
        color: #f8fafc;
      }
      .card {
        background: #1e293b;
        padding: 2.5rem;
        border-radius: 12px;
        border: 1px solid #334155;
        text-align: center;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
      }
      h2 { color: #38bdf8; margin-top: 0; }
      p { color: #94a3b8; font-size: 0.95rem; }
      .spinner {
        width: 32px;
        height: 32px;
        border: 3px solid #334155;
        border-top-color: #38bdf8;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        margin: 1.5rem auto 0;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Authentication Complete</h2>
      <p>Returning to Sveltia CMS...</p>
      <div class="spinner"></div>
    </div>
    <script>
      (function() {
        var msg = "authorization:github:success:" + ${JSON.stringify(tokenJson)};

        function sendMessage() {
          if (window.opener) {
            window.opener.postMessage(msg, "*");
          }
        }

        function receiveMessage(e) {
          if (window.opener) {
            window.opener.postMessage(msg, e.origin || "*");
          }
          window.removeEventListener("message", receiveMessage, false);
          setTimeout(function() { window.close(); }, 300);
        }

        window.addEventListener("message", receiveMessage, false);
        if (window.opener) {
          window.opener.postMessage("authorizing:github", "*");
          sendMessage();
        }
        setTimeout(function() {
          sendMessage();
          setTimeout(function() { window.close(); }, 500);
        }, 800);
      })();
    </script>
  </body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
