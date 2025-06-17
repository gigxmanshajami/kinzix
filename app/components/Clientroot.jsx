'use client'

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { NavbarHome } from "./Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function ClientRoot({ children }) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <SmoothCursor />
            <div className="lg:px-[91px]">
                <NavbarHome />
            </div>
            {children}
        </>
    );
}
