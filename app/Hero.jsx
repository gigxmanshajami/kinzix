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
import { Cover } from "@/components/ui/cover";
import { getCalApi } from "@calcom/embed-react";
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import HeaderImage from '@/public/Illustration.png'
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];

export default function Hero({ data }) {
    const text_first = data?.Text_First;
    const texth = data?.Text_mid;
    // const text_last = data.Text_last;
    const description = data?.hero_description;
    console.warn(data, 'from hero');
    return (
        <div className="flex justify-center  items-center ">
            {/* content */}
            <div className="flex justify-center items-center" >
                {/* header content */}
                <div className="flex justify-center  flex-col w-full h-screen gap-[35px]  items-center ">
                    <h1 className="text-center  lg:text-7xl text-[55px] lg:leading-[86px] leading-[60px] font-semibold text-black  w-fit">
                        {text_first}<Cover className={'text-5xl lg:text-7xl'}>{texth}</Cover>
                    </h1>

                    <p className="leading-[28px] text-[#000000] lg:w-[453px] text-center  w-fit">
                        {/* Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation. */}
                        {description}
                    </p>
                    <div className="flex flex-row items-center justify-center  w-full">
                        <AnimatedTooltip items={people} />
                    </div>
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