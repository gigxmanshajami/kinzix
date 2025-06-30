'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const logos = [
    '/logos/company1.png',
    '/logos/company2.png',
    '/logos/company3.png',
    '/logos/company4.png',
    '/logos/company5.png',
    '/logos/company6.png',
];

export const LogoMarquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const root = marqueeRef.current;
        if (!root) return;

        const scroll = () => {
            root.scrollLeft += 1;
            if (root.scrollLeft >= root.scrollWidth / 2) {
                root.scrollLeft = 0;
            }
        };

        const interval = setInterval(scroll, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden whitespace-nowrap relative w-full py-4 bg-white">
            <div
                ref={marqueeRef}
                className="flex gap-8 animate-none whitespace-nowrap w-max"
                style={{ willChange: 'transform' }}
            >
                {[...logos, ...logos].map((logo, i) => (
                    <Image
                        key={i}
                        src={logo}
                        alt={`Company ${i + 1}`}
                        width={100}
                        height={60}
                        className="object-contain h-14 w-auto"
                    />
                ))}
            </div>
        </div>
    );
};
