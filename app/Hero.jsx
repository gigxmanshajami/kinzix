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
            <div className="flex  mt-20 " >
                {/* header content */}
                <div className="flex flex-col w-full h-screen gap-[35px]  items-center ">
                    <h1 className="text-center  lg:text-[60px] text-[55px] leading-[67px] font-semibold text-black  w-fit">
                        {text_first}
                    </h1>
                    <p className="leading-[28px] text-[#000000] lg:w-[453px] text-center  w-fit">
                        {/* Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation. */}
                        {description}
                    </p>
                    {/* <button className="text-white bg-[#191A23] rounded-[14px] font-normal ">
                        Book a consultation
                    </button> */}

                    <button
                        data-cal-namespace="30min"
                        data-cal-link="kinzix/30min"

                        data-cal-config='{"layout":"month_view","theme":"auto"}'
                        className="shadow-[0_0_0_3px_#000000_inset]  hover:bg-transparent border text-white hover:text-black border-black  bg-[#191A23]   font-bold transform hover:-translate-y-1 transition duration-400 w-[264px] cursor-pointer h-[68px] px-[35px] py-[20px]   ">
                        Book a consultation
                    </button>
                </div>
                {/* image container */}
            </div>
        </div>
    );
}
