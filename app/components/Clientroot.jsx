'use client'

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
            {/* <SmoothCursor /> */}
            <div className="lg:px-[91px] fixed z-[2000] bg-[#ffffff38] w-[100vw] h-fit top-0 " style={{
                backdropFilter: 'blur(10px)',
            }}>
                <NavbarHome />
            </div>
            {children}
            {/* <div className=' mt-20'> */}
            <Footer />
            {/* </div> */}
        </>
    );
}
