import { useEffect, useState } from "react";

const useSpotify = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        fetch("/api/spotify")
            .then((res) => {
                if (!res.ok) throw new Error(`Spotify API returned ${res.status}`);
                return res.json();
            })
            .then((json) => {
                if (!cancelled) setData(json);
            })
            .catch((err) => {
                if (!cancelled) setError(err);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    return { data, loading, error };
};

export default useSpotify;
