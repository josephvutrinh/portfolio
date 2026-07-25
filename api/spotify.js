const CACHE_TTL_MS = 5 * 60 * 1000;
let cache = { data: null, timestamp: 0 };

const trimTrack = (track) => ({
    name: track.name,
    artists: track.artists.map((a) => a.name).join(", "),
    image: track.album?.images?.[1]?.url ?? track.album?.images?.[0]?.url ?? null,
    url: track.external_urls?.spotify ?? null,
});

const getAccessToken = async () => {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " +
                Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64"),
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    });
    if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);
    const data = await res.json();
    return data.access_token;
};

const fetchSpotify = async (path, token) => {
    const res = await fetch(`https://api.spotify.com/v1${path}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error(`Spotify request ${path} failed: ${res.status}`);
    return res.json();
};

export default async function handler(req, res) {
    try {
        if (Date.now() - cache.timestamp < CACHE_TTL_MS && cache.data) {
            res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
            return res.status(200).json(cache.data);
        }

        const token = await getAccessToken();
        const [recent, top] = await Promise.all([
            fetchSpotify("/me/player/recently-played?limit=50", token),
            fetchSpotify("/me/top/tracks?limit=5&time_range=short_term", token),
        ]);

        // Recently played can repeat the same track; keep first occurrence only
        const seen = new Set();
        const recentlyPlayed = recent.items
            .map((item) => trimTrack(item.track))
            .filter((track) => {
                if (seen.has(track.url)) return false;
                seen.add(track.url);
                return true;
            })
            .slice(0, 5);

        const data = {
            recentlyPlayed,
            topTracks: top.items.map(trimTrack),
        };

        cache = { data, timestamp: Date.now() };
        res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
        return res.status(200).json(data);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch Spotify data" });
    }
}
