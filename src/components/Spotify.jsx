import { useState } from "react";
import { FiExternalLink, FiPlay } from "react-icons/fi";
import useSpotify from "../hooks/useSpotify";

const tabs = [
    { key: "recentlyPlayed", label: "Recently Played" },
    { key: "topTracks", label: "Top Tracks" },
];

const TrackRow = ({ track }) => (
    <a
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl bg-black/5 dark:bg-white/[0.03] hover:bg-black/10 dark:hover:bg-white/[0.07] p-2.5 transition-colors duration-200"
    >
        {track.image ? (
            <img src={track.image} alt="" className="w-11 h-11 rounded-lg object-cover shrink-0" />
        ) : (
            <div className="w-11 h-11 rounded-lg bg-black/10 dark:bg-white/[0.06] shrink-0"></div>
        )}
        <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-black dark:text-white truncate transition-colors duration-500">{track.name}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate transition-colors duration-500">{track.artists}</p>
        </div>
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 shrink-0">
            <FiPlay className="translate-x-[1px]" />
        </span>
    </a>
);

const SkeletonRow = () => (
    <div className="flex items-center gap-3 rounded-xl bg-black/5 dark:bg-white/[0.03] p-2.5 animate-pulse">
        <div className="w-11 h-11 rounded-lg bg-black/10 dark:bg-white/[0.06] shrink-0"></div>
        <div className="flex-1 space-y-2">
            <div className="h-3 w-2/3 rounded bg-black/10 dark:bg-white/[0.06]"></div>
            <div className="h-2.5 w-1/3 rounded bg-black/10 dark:bg-white/[0.06]"></div>
        </div>
    </div>
);

const Spotify = () => {
    const { data, loading, error } = useSpotify();
    const [activeTab, setActiveTab] = useState("recentlyPlayed");

    if (error) return null;

    const tracks = data?.[activeTab] ?? [];
    const featured = tracks[0];
    const rest = tracks.slice(1, 5);

    return (
        <div className="bg-white dark:bg-[#101010] rounded-2xl p-4 sm:p-5 shadow-lg ring-1 ring-black/10 dark:ring-white/10 text-black dark:text-white mx-auto w-full transition-colors duration-500">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-sm sm:text-base font-semibold">
                    {tabs.find((t) => t.key === activeTab)?.label}
                </h2>
                <div className="flex rounded-lg bg-black/5 dark:bg-white/[0.03] p-1 transition-colors duration-500">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-2.5 sm:px-3 py-1 rounded-md text-xs cursor-pointer transition-colors duration-200 ${
                                activeTab === tab.key
                                    ? "bg-black/10 text-black dark:bg-white/[0.09] dark:text-white"
                                    : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl bg-black/5 dark:bg-white/[0.03] aspect-square animate-pulse"></div>
                    <div className="flex flex-col gap-2.5">
                        <SkeletonRow />
                        <SkeletonRow />
                        <SkeletonRow />
                        <SkeletonRow />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Featured track */}
                    {featured && (
                        <a
                            href={featured.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col justify-end rounded-xl overflow-hidden bg-black/5 dark:bg-white/[0.03] min-h-56 sm:min-h-0"
                        >
                            {featured.image && (
                                <img
                                    src={featured.image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                                />
                            )}
                            <div className="relative bg-gradient-to-t from-black/80 to-transparent p-3.5 pt-10">
                                <p className="font-semibold text-white truncate">{featured.name}</p>
                                <p className="text-xs text-neutral-300 truncate mb-2">{featured.artists}</p>
                                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 group-hover:text-[#1DB954] transition-colors duration-200">
                                    <FiExternalLink /> Open on Spotify
                                </span>
                            </div>
                        </a>
                    )}
                    {/* Track list */}
                    <div className="flex flex-col gap-2.5">
                        {rest.map((track, i) => (
                            <TrackRow key={`${track.url}-${i}`} track={track} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Spotify;
