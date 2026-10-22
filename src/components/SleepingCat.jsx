import { useEffect, useState } from "react";

// G fur, g highlight, H forehead, S shading, K lines, W muzzle/paws/tail tip, P ears/nose
const ART = [
    "......................S............S.",
    "......................SS..........SS.",
    "......................SPS........SPS.",
    ".........SSSSSSSS.....SPPSSSSSSSSPPS.",
    "......SSSggggggggSSS..SPPHHHHHHHHPPS.",
    "....SSgggGGGGGGGGgggSSSHHHHHHHHHHHHS.",
    "...SggGGGGGGGGGGGGGGggSGGGGGGGGGGGGS.",
    "...SGGGGGGGGKKKKGGGGGSGGGGGGGGGGGGGGS",
    "..SGGGGGGGGGGGGGKGGGGSGGGGGGGGGGGGGGS",
    "..SGGGGGGGGGGGGGGKGGGSGKGGKGGGGKGGKGS",
    "..SGGGGGGGGGGGGGGKGGGSGGKKGGGGGGKKGGS",
    "..SGGGGGGGGGGGGGGKGGGSGGGGWWPPWWGGGGS",
    "..SGGGGGGGGGGGGGKGGGGSGGGGWKWWKWWGGGS",
    "..SGGGGGGGGGGGGKGGGGGGSGGGWWKKWWWGGS.",
    ".WGGGGGGGGGGGGGGGGGGGWWWWWWWWWWWWWWWW",
    "WWWSSSSSSSSSSSSSSSSSSWKWKWSSSSSSWKWKW",
];
// same cat with its eyes open, shown while being petted
const AWAKE = ART.map((row, y) => (y === 9 ? "..SGGGGGGGGGGGGGGKGGGSGGWKGGGGGGWKGGS" : row));
const HEART = [
    ".PP.PP.",
    "PPPPPPP",
    "PPPPPPP",
    ".PPPPP.",
    "..PPP..",
    "...P...",
];
const COLORS = { G: "#8e8e8e", g: "#a8a8a8", H: "#7e7e7e", S: "#5e5e5e", K: "#262626", W: "#d9d9d9", P: "#e3a3ad" };
const PX = 2;

const pixels = (art) =>
    art.flatMap((row, y) =>
        [...row].map((c, x) => c !== "." && <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={COLORS[c]} />)
    );

const PixelArt = ({ art, className }) => (
    <svg
        width={art[0].length * PX}
        height={art.length * PX}
        viewBox={`0 0 ${art[0].length} ${art.length}`}
        shapeRendering="crispEdges"
        className={className}
    >
        {pixels(art)}
    </svg>
);

const FLOATERS = [["left-[72px] -top-1 text-[9px]", 0], ["left-[80px] -top-4 text-xs", 1.5]];

// sleeps (z's) until petted; a pet wakes it with a heart, then it settles in to listen to music (notes)
const SleepingCat = () => {
    const [mode, setMode] = useState("sleep");
    const awake = mode === "awake";

    useEffect(() => {
        if (!awake) return;
        const timer = setTimeout(() => setMode("listen"), 2500);
        return () => clearTimeout(timer);
    }, [awake]);

    return (
        <div aria-hidden="true" className="absolute left-3 bottom-full -mb-1.5 z-10 pointer-events-none">
            <div onClick={() => setMode("awake")} className="pointer-events-auto cursor-pointer">
                <PixelArt art={awake ? AWAKE : ART} />
            </div>
            {awake ? (
                <PixelArt art={HEART} className="absolute left-[58px] -top-4 motion-safe:animate-zzz" />
            ) : (
                FLOATERS.map(([cls, delay], i) => (
                    <span
                        key={cls}
                        style={{ animationDelay: `${delay}s` }}
                        className={`absolute ${cls} font-bold text-nav-light dark:text-nav-dark motion-safe:animate-zzz`}
                    >
                        {mode === "listen" ? ["♪", "♫"][i] : "z"}
                    </span>
                ))
            )}
        </div>
    );
};

export default SleepingCat;
