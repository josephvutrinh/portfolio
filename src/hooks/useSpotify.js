import { useCallback, useEffect, useRef, useState } from "react";

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

const useSpotify = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cancelledRef = useRef(false);
    const lastFetchRef = useRef(0);

    const load = useCallback(async () => {
        lastFetchRef.current = Date.now();
        try {
            const res = await fetch("/api/spotify", { cache: "no-store" });
            if (!res.ok) throw new Error(`Spotify API returned ${res.status}`);
            const json = await res.json();
            if (cancelledRef.current) return;
            setData(json);
            setError(null);
        } catch (err) {
            if (!cancelledRef.current) setError(err);
        } finally {
            if (!cancelledRef.current) setLoading(false);
        }
    }, []);

    useEffect(() => {
        cancelledRef.current = false;
        load();

        const interval = setInterval(load, REFRESH_INTERVAL_MS);
        
        const onVisibility = () => {
            if (document.visibilityState !== "visible") return;
            if (Date.now() - lastFetchRef.current >= REFRESH_INTERVAL_MS) load();
        };
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            cancelledRef.current = true;
            clearInterval(interval);
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, [load]);

    return { data, loading, error };
};

export default useSpotify;
