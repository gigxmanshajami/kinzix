'use client'
import NextNProgress from 'nextjs-progressbar';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { NavbarHome } from "./Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Footer from './Footer';

export default function ClientRoot({ children }) {
    useEffect(() => {
        AOS.init();
    }, []);

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
                <main className="flex-grow mt-[5em]"> {/* Adjust margin to offset fixed navbar */}
                    {children}
                </main>

                {/* Footer at the bottom */}
                <Footer />
            </div>
        </>
    );
}
