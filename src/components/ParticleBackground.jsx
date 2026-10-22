import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 150;
const CURSOR_SHIFT = 10;
const CURSOR_SOFTNESS = 150;

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let animationId;
        const mouse = { x: null, y: null };

        let particles = [];
        const createParticles = () => {
            particles = Array.from({ length: PARTICLE_COUNT }, () => {
                const angle = Math.random() * Math.PI * 2;
                const speed = 0.015 + Math.random() * 0.01;
                return {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    r: 0.4 + Math.random() * 0.8,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    baseAlpha: 0.2 + Math.random() * 0.5,
                    twinkle: Math.random() * Math.PI * 2,
                    twinkleSpeed: 0.005 + Math.random() * 0.015,
                    ox: 0,
                    oy: 0,
                };
            });
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

                    // each star leans toward the cursor; softness keeps stars near it from jumping
                    let tx = 0, ty = 0;
                    if (mouse.x !== null) {
                        const dx = mouse.x - p.x;
                        const dy = mouse.y - p.y;
                        const k = CURSOR_SHIFT / (Math.hypot(dx, dy) + CURSOR_SOFTNESS);
                        tx = dx * k;
                        ty = dy * k;
                    }
                    p.ox += (tx - p.ox) * 0.03;
                    p.oy += (ty - p.oy) * 0.03;
                }
                const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.twinkle));
                ctx.fillStyle = dark
                    ? `rgba(255, 255, 255, ${alpha})`
                    : `rgba(0, 0, 0, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x + p.ox, p.y + p.oy, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
            animationId = requestAnimationFrame(draw);
        };

        resize();
        createParticles();
        draw();
        const onMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMove);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
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
