import { useEffect, useState } from "react";
import { FaCat } from "react-icons/fa";
import cat1 from "../assets/catphotos/cat1.jpeg";
import cat2 from "../assets/catphotos/cat2.jpeg";
import cat3 from "../assets/catphotos/cat3.jpeg";
import cat4 from "../assets/catphotos/cat4.jpeg";
import cat5 from "../assets/catphotos/cat5.jpeg";
import cat6 from "../assets/catphotos/cat6.jpeg";
import cat7 from "../assets/catphotos/cat7.jpeg";

// add more cat pics here
const CAT_PHOTOS = [
    { src: cat1 }, { src: cat2 }, { src: cat3 }, 
    { src: cat4 }, { src: cat5 }, { src: cat6 },
    { src: cat7 },
];

// each photo keeps its own tilt so nothing rotates when flipping
const TILTS = [0, 4, -3, 6, -5, 2, -6];

// any [data-cat-toggle] element opens/closes the stack; click outside or Escape closes it
// not a native popover: its top-layer backdrop makes iOS Safari paint a solid bar over the bottom toolbar
// open/close animation lives in index.css (#cat-photos)
const CatButton = () => {
    const [open, setOpen] = useState(false);
    const [top, setTop] = useState(0);
    const [leaving, setLeaving] = useState(null);
    const [drag, setDrag] = useState(null); // { sx, sy, x, y } while the top photo is held

    useEffect(() => {
        const onClick = (e) => {
            if (e.target.closest("[data-cat-toggle]")) setOpen((o) => !o);
            else if (!e.target.closest("#cat-photos")) setOpen(false);
        };
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("click", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("click", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    const advance = () => setTop((top + 1) % CAT_PHOTOS.length);

    // tap plays the flip; letting go of a drag drops the photo to the back and it slides home under the stack
    const release = () => {
        if (!drag) return;
        setDrag(null);
        if (Math.hypot(drag.x, drag.y) < 5) setLeaving(top);
        advance();
    };

    return (
        <>
            <button
                data-cat-toggle
                aria-expanded={open}
                aria-label="Earl and Gray"
                className="fixed bottom-4 right-4 z-20 p-3 rounded-full text-xl bg-button-bg-light dark:bg-button-bg-dark backdrop-blur-sm ring-1 ring-black/10 dark:ring-white/10 cursor-pointer hover:scale-110 [transition:background-color_.5s,scale_.25s]"
            >
                <FaCat />
            </button>
            <div
                id="cat-photos"
                className={`fixed bottom-20 right-4 z-20 w-44 sm:w-64 origin-bottom-right ${open ? "open" : ""}`}
            >
                {/* tap the top photo, or drag it anywhere and let go, to send it to the back */}
                <div
                    onPointerDown={(e) => {
                        e.currentTarget.setPointerCapture(e.pointerId);
                        setDrag({ sx: e.clientX, sy: e.clientY, x: 0, y: 0 });
                    }}
                    onPointerMove={(e) => drag && setDrag({ ...drag, x: e.clientX - drag.sx, y: e.clientY - drag.sy })}
                    onPointerUp={release}
                    onPointerCancel={() => setDrag(null)}
                    className="relative aspect-[4/5] cursor-pointer select-none touch-none"
                >
                    {CAT_PHOTOS.map(({ src }, i) => {
                        const pos = (i - top + CAT_PHOTOS.length) % CAT_PHOTOS.length;
                        return (
                            <img
                                key={src}
                                src={src}
                                alt="Earl and Gray"
                                draggable={false}
                                style={{
                                    "--tilt": `${TILTS[i % TILTS.length]}deg`,
                                    zIndex: CAT_PHOTOS.length - pos,
                                    translate: i === top && drag ? `${drag.x}px ${drag.y}px` : undefined,
                                    transition: drag ? "none" : undefined,
                                }}
                                onAnimationEnd={(e) => e.animationName === "cat-flip" && setLeaving(null)}
                                className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg ${i === leaving ? "flipping" : ""}`}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CatButton;
