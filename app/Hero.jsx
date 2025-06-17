"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Button } from "@/components/ui/button"
import Service from "./Service";
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Blurbg from '@/public/Ellipse.png';
import Image from 'next/image';
import HeaderImage from '@/public/Illustration.png'
export default function Hero({ data }) {
    const text_first = data.Text_First;
    const text_middle = data.Text_mid;
    const text_last = data.Text_last;
    const description = data.hero_description;
    return (
        // <div className="relative flex-col  h-screen overflow-hidden flex items-center justify-center w-full">
        //     {/* <div className="absolute inset-0 max-w-[600px] max-h-[400px] mx-auto" style={{ pointerEvents: 'none' }}>
        //         {init && (
        //             <Particles
        //                 id="tsparticles"
        //                 particlesLoaded={particlesLoaded}
        //                 options={options}
        //             />
        //         )}
        //     </div> */}
        //     {/* Eclipse Image */}
        // <motion.img
        //     src={Blurbg.src}
        //     alt="Eclipse"
        //     className="absolute top-[23em] lg:top-[15em] bg-transparent pointer-events-none select-none"
        //     style={{
        //         backdropFilter: 'blur(36px)',
        //         width: '412px',
        //         height: '309px',
        //         // top: '15em',
        //         zIndex: -1,
        //     }}
        //     initial={{ scale: 2.8 }}
        //     animate={{ scale: [2.7, 2.9, 2.7] }}
        //     transition={{
        //         duration: 8,
        //         repeat: Infinity,
        //         ease: 'easeInOut',
        //     }}
        // />

        //     {/* Content */}
        //     <div className="relative  z-10 text-white text-center items-center flex flex-col pt-20 gap-10">
        //         <h1 className="text-[40px] sm:text-[32px] md:text-[60px] lg:text-[96px] font-bold pointer-events-none capitalize leading-12 lg:leading-[103px] lg:tracking-[-2.88px]">
        //             {text_first}  <br /> {text_middle}<span className="text-[#FF4B4B] italic">{text_last}</span>
        //         </h1>

        //         <motion.div
        //             className="absolute right-[7em] bottom-[22em] lg:top-[4em] lg:right-[-5em]"
        //             animate={{ y: [0, -2, -4, -6, -8, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 8, 6, 4, 2, 0] }}
        //             transition={{
        //                 duration: 8,
        //                 ease: 'linear',
        //                 repeat: Infinity,
        //             }}
        //         >
        //             <Image src={starBig} width={120} height={120} alt="Star" />
        //         </motion.div>

        //         <p className="lg:text-[18px] text-center lg:w-[522px] text-[#ffffff80] lg:h-[50px] w-[350px]">
        //             {description}
        //         </p>
        //         <div className="relative">
        //             <motion.div
        //                 className="absolute "
        //                 animate={{ y: [0, -2, -4, -6, -8, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 8, 6, 4, 2, 0] }}
        //                 transition={{
        //                     duration: 8,
        //                     ease: 'linear',
        //                     repeat: Infinity,
        //                 }}
        //             >
        //                 <Image src={starSm} width={15} height={15} className="relative left-[-3em] lg:left-[-17em] top-[-25px]" alt="Star" />
        //             </motion.div>
        //             <div className="flex flex-row gap-2.5">
        //                 <a href="https://cal.com/kinzix/30min?overlayCalendar=true" target="__blank">
        //                     <button className='bg-[#FF4B4B] text-black w-[149]  h-[56] text-center justify-center items-center font-semibold text-[15px] p-[17px] flex rounded-[8px] hover:scale-105 transition-all cursor-pointer '>
        //                         Book A Meeting
        //                     </button>
        //                 </a>
        //             </div>
        //             <motion.div
        //                 className="absolute "
        //                 animate={{ y: [0, -2, -4, -6, -8, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 8, 6, 4, 2, 0] }}
        //                 transition={{
        //                     duration: 8,
        //                     ease: 'linear',
        //                     repeat: Infinity,
        //                 }}
        //             >
        //                 <Image src={starMid} width={22} height={22} className="relative right-[-12em] lg:right-[17em] top-[-25px]" alt="Star" />
        //             </motion.div>
        //         </div>
        //     </div>
        // </div>
        <div>
            {/* content */}
            <div className="flex flex-row justify-between gap-2 mt-5">
                {/* header content */}
                <div className="flex flex-col w-[531px] h-[418px] gap-[35px]">
                    <h1 className="font-medium text-[60px] leading-[67px] text-black ">
                        Navigating the digital landscape for success
                    </h1>
                    <p className="leading-[28px] text-[#000000] w-[453px]">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                    {/* <button className="text-white bg-[#191A23] rounded-[14px] font-normal ">
                        Book a consultation
                    </button> */}
                    <button className="shadow-[0_0_0_3px_#000000_inset]  hover:bg-transparent border text-white hover:text-black border-black dark:border-white bg-[#191A23]   font-bold transform hover:-translate-y-1 transition duration-400 w-[264px] cursor-none h-[68px] px-[35px] py-[20px]   rounded-[14px]">
                        Book a consultation
                    </button>
                </div>
                {/* image container */}
                <div>
                    {/* <motion.img
                        src={HeaderImage.src}
                        alt="Eclipse"
                        // className="absolute top-[23em] lg:top-[15em] bg-transparent pointer-events-none select-none"
                        // style={{
                        //     backdropFilter: 'blur(36px)',
                        //     width: '412px',
                        //     height: '309px',
                        //     // top: '15em',
                        //     zIndex: -1,
                        // }}
                        className="w-[600.46px] h-[515px]"
                        initial={{ scale: 2.8 }}
                        animate={{ scale: [2.7, 2.9, 2.7] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    /> */}
                    {/* position: relative;
    top: 10em;
    width: 185px !important;
    right: 5em; */}
                    <motion.div
                        className="w-[185px] relative right-[8em] top-[10em]  "
                        initial={{ scale: 2.8 }}
                        animate={{ scale: [2.7, 2.9, 2.7] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}>
                        <Image alt='kinzix image' src={HeaderImage.src} width={600.46} height={515} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
