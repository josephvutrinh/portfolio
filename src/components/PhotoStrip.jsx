import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const STRIP_WIDTH = "44rem";
const CARD_WIDTH = "13rem";
const PHOTO_HEIGHT = "11rem";

const rotations = [-2.5, 1.5, -1.5, 2.5];

const PhotoStrip = ({ photos }) => {
    const [selected, setSelected] = useState(null);
    const isOpen = selected !== null;

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") setSelected(null);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <div
                style={{ width: `min(${STRIP_WIDTH}, 100vw)` }}
                className="relative left-1/2 -translate-x-1/2"
            >
                <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory py-6 px-4 sm:justify-center sm:overflow-visible">
                    {photos.map((photo, i) => (
                        <figure
                            key={i}
                            role="button"
                            tabIndex={0}
                            aria-label={`Enlarge photo: ${photo.alt}`}
                            onClick={() => setSelected(i)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setSelected(i);
                                }
                            }}
                            style={{ rotate: `${rotations[i % rotations.length]}deg`, width: CARD_WIDTH }}
                            className="shrink-0 snap-center rounded-2xl p-2.5 pb-3 cursor-pointer
                                bg-white dark:bg-[#181818] shadow-lg ring-1 ring-black/10 dark:ring-white/10
                                hover:[rotate:0deg] hover:scale-105 hover:shadow-xl
                                focus-visible:[rotate:0deg] focus-visible:scale-105 focus-visible:outline-none
                                focus-visible:ring-2 focus-visible:ring-black/40 dark:focus-visible:ring-white/40
                                [transition:background-color_.5s,rotate_.3s,scale_.3s,box-shadow_.3s]
                                animate-fade-up"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                style={{ height: PHOTO_HEIGHT }}
                                className="w-full object-cover rounded-xl"
                            />
                            <figcaption className="mt-2.5 px-1">
                                <p className="text-xs text-nav-light dark:text-nav-dark transition-colors duration-500">
                                    {photo.date}
                                </p>
                                <p className="text-sm mt-0.5">{photo.caption}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            {isOpen && createPortal(
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={photos[selected].alt}
                    onClick={() => setSelected(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8
                        bg-black/80 animate-fade-in"
                >
                    <figure
                        onClick={(e) => e.stopPropagation()}
                        className="relative flex flex-col max-h-full max-w-[min(90vw,60rem)]
                            rounded-2xl p-4 pb-5
                            bg-white dark:bg-[#181818] text-text-light dark:text-text-dark
                            shadow-2xl ring-1 ring-black/10 dark:ring-white/10
                            animate-pop-in"
                    >
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => setSelected(null)}
                            className="absolute -top-3 -right-3 h-9 w-9 rounded-full text-xl leading-none
                                bg-white dark:bg-[#181818] shadow-lg ring-1 ring-black/10 dark:ring-white/10
                                text-nav-light dark:text-nav-dark hover:text-text-light dark:hover:text-text-dark"
                        >
                            ×
                        </button>
                        <img
                            src={photos[selected].src}
                            alt={photos[selected].alt}
                            className="min-h-0 w-auto max-w-full flex-1 object-contain rounded-xl"
                        />
                        <figcaption className="mt-3 px-1 shrink-0">
                            <p className="text-xs text-nav-light dark:text-nav-dark">
                                {photos[selected].date}
                            </p>
                            <p className="text-base mt-0.5">{photos[selected].caption}</p>
                        </figcaption>
                    </figure>
                </div>,
                document.body
            )}
        </>
    );
};

export default PhotoStrip;
