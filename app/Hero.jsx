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
import { getCalApi } from "@calcom/embed-react";

import HeaderImage from '@/public/Illustration.png'
export default function Hero({ data }) {
    const text_first = data?.Text_First;
    // const text_middle = data.Text_mid;
    // const text_last = data.Text_last;
    const description = data?.hero_description;
    console.warn(data, 'from hero');
    return (
        <div>
            {/* content */}
            <div className="flex flex-row justify-between gap-2 mt-5 " >
                {/* header content */}
                <div className="flex flex-col w-[531px] h-[418px] gap-[35px]  items-center lg:items-baseline">
                    <h1 className="font-medium text-center lg:text-left lg:text-[60px] text-[55px] leading-[67px] text-black  underline w-fit">
                        {text_first}
                        {/* Navigating the digital landscape for success */}
                    </h1>
                    <p className="leading-[28px] text-[#000000] lg:w-[453px] text-center lg:text-left w-fit">
                        {/* Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation. */}
                        {description}
                    </p>
                    {/* <button className="text-white bg-[#191A23] rounded-[14px] font-normal ">
                        Book a consultation
                    </button> */}

                    <button
                        data-cal-namespace="30min"
                        data-cal-link="kinzix/30min"

                        data-cal-config='{"layout":"month_view","theme":"auto"}' className="w-[188px] h-[50px]  hover:scale-125 cursor-pointer transition-all text-black items-center rounded-[14px] border-[#191A23] border-[1.3]"
                        className="shadow-[0_0_0_3px_#000000_inset]  hover:bg-transparent border text-white hover:text-black border-black  bg-[#191A23]   font-bold transform hover:-translate-y-1 transition duration-400 w-[264px] cursor-none h-[68px] px-[35px] py-[20px]   rounded-[14px]">
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
                        className="w-[185px] relative right-[8em] top-[10em] lg:block hidden "
                        initial={{ scale: 2.8 }}
                        animate={{ scale: [2.7, 2.9, 2.7] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}>
                        <Image alt='kinzix image' className="lg:block hidden" src={HeaderImage.src} width={600.46} height={515} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
