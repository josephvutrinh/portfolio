/**
 * One-time helper to obtain a Spotify refresh token.
 *
 * 1. Create an app at https://developer.spotify.com/dashboard
 * 2. Add redirect URI: http://127.0.0.1:8888/callback
 * 3. Put SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env
 * 4. Run: node scripts/get-refresh-token.mjs
 * 5. Approve in the browser, copy the printed refresh token into .env
 */
import http from "node:http";
import { exec } from "node:child_process";
import { readFileSync } from "node:fs";

// Minimal .env loader (no dependency needed)
try {
    for (const line of readFileSync(".env", "utf8").split("\n")) {
        const match = line.match(/^\s*([\w]+)\s*=\s*(.*)\s*$/);
        if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
} catch {
    // no .env file; rely on exported env vars
}

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
if (!clientId || !clientSecret) {
    console.error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env");
    process.exit(1);
}

const redirectUri = "http://127.0.0.1:8888/callback";
const scopes = "user-read-recently-played user-top-read";

const authUrl =
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scopes,
        redirect_uri: redirectUri,
    });

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://127.0.0.1:8888");
    if (url.pathname !== "/callback") return res.end();

    const code = url.searchParams.get("code");
    if (!code) {
        res.end("No code returned. Check the terminal.");
        console.error("Spotify returned no code:", url.searchParams.get("error"));
        server.close();
        return;
    }

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
        }),
    });
    const data = await tokenRes.json();

    if (data.refresh_token) {
        res.end("Done! Check your terminal for the refresh token. You can close this tab.");
        console.log("\nAdd this to your .env (and Vercel env vars):\n");
        console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);
    } else {
        res.end("Token exchange failed. Check the terminal.");
        console.error("Token exchange failed:", data);
    }
    server.close();
});

server.listen(8888, () => {
    console.log("Opening Spotify authorization page...");
    console.log("If the browser does not open, visit:\n" + authUrl + "\n");
    exec(`open "${authUrl}"`);
});
