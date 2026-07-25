import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 60;

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let animationId;

        let particles = [];
        const createParticles = () => {
            particles = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                r: 0.5 + Math.random(),
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                baseAlpha: 0.2 + Math.random() * 0.5,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: 0.005 + Math.random() * 0.015,
            }));
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const draw = () => {
            const dark = document.documentElement.classList.contains("dark");
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (const p of particles) {
                if (!reducedMotion) {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.twinkle += p.twinkleSpeed;
                    if (p.x < -5) p.x = window.innerWidth + 5;
                    if (p.x > window.innerWidth + 5) p.x = -5;
                    if (p.y < -5) p.y = window.innerHeight + 5;
                    if (p.y > window.innerHeight + 5) p.y = -5;
                }
                const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.twinkle));
                ctx.fillStyle = dark
                    ? `rgba(255, 255, 255, ${alpha})`
                    : `rgba(0, 0, 0, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
            animationId = requestAnimationFrame(draw);
        };

        resize();
        createParticles();
        draw();
        window.addEventListener("resize", resize);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none"
        />
    );
};

export default ParticleBackground;
