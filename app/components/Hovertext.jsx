"use client";

import { useEffect, useRef, useState } from "react";

export default function HoverText({ text }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;

            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const el = containerRef.current;
        if (el) el.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (el) el.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Spotlight glow effect */}
            <div
                className="absolute text-6xl md:text-8xl font-bold text-white pointer-events-none select-none w-full text-center"
                style={{
                    maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
                    WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
                }}
            >
                {text}
            </div>

            {/* Dimmed background text */}
            <h1 className="text-6xl md:text-8xl font-bold text-white opacity-20 pointer-events-none select-none text-center">
                {text}
            </h1>
        </div>
    );
}
