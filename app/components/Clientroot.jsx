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

        // position: fixed;
        // z-index: 2000;
        // background: #ffffffbf;
        // width: 100%;
        // /* height: 104px; */
        // top: 0;
        // backdrop-filter: blur(5px);
        <>
            {/* <SmoothCursor /> */}
            <div className="lg:px-[91px] fixed z-[2000] bg-[#ffffff38] w-[100vw] h-fit top-0 " style={{
                backdropFilter: 'blur(10px)',
            }}>
                <NavbarHome />
            </div>
            {children}
            <div className='lg:px-[50px] px-[16px] mt-20'>
                <Footer />
            </div>
        </>
    );
}
