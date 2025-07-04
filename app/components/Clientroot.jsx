'use client'
import NextNProgress from 'nextjs-progressbar';
import AOS from 'aos';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import 'aos/dist/aos.css';
import { NavbarHome } from "./Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Footer from './Footer';

export default function ClientRoot({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init();
    }, []);

    const isHome = pathname === '/';
    const mainMargin = isHome ? '' : 'mt-[5em]';

    return (
        <>
            {/* Optional: <SmoothCursor /> */}

            <div className="min-h-screen flex flex-col">
                {/* Sticky top navbar */}
                <div
                    className="lg:px-[91px] fixed z-[2000] bg-[#ffffff38] w-[100vw] h-fit top-0"
                    style={{ backdropFilter: 'blur(10px)' }}
                >
                    <NextNProgress color="#000" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
                    <NavbarHome />
                </div>

                {/* Page content area */}
                <main className={`flex-grow ${mainMargin}`}>
                    {children}
                </main>

                {/* Footer at the bottom */}
                <Footer />
            </div>
        </>
    );
}
