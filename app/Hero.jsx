"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Button } from "@/components/ui/button"
import { client } from '@/lib/sanity';
import { Separator } from "@/components/ui/separator"
import { SparklesCore } from "@/components/ui/sparkles";
import Service from "./Service";
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Blurbg from '@/public/Ellipse.png';
import Image from 'next/image';
import { urlFor } from "@/lib/imageUrl";
import { ArrowUpRight, Star } from 'lucide-react';
import { Cover } from "@/components/ui/cover";
import { getCalApi } from "@calcom/embed-react";
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import HeaderImage from '@/public/Illustration.png'
const initialPeople = [
    {
        id: 1,
        name: "Maneesh Birthwar",
        designation: "Co-Founder, Altezzasys",
        image: '/maneesh.jpg',
    },
    {
        id: 2,
        name: "Dr. Manjer Hassan",
        designation: "Director, Hamida Nursing Home",
        image:
            "/mjer.jpg",
    },
    {
        id: 3,
        name: "Tabish Saif",
        designation: "CEO, Maxi Insight",
        image:
            '/tbh.jpg',
    },

];

export default function Hero({ data }) {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        const fetchFounders = async () => {
            try {
                const founders = await client.fetch(
                    `*[_type == "founder"]{_id, name, position, photo,company}`
                );

                const formatted = founders.map((f, i) => ({
                    id: i + 1,
                    name: f.name,
                    designation: `${f.position}, ${f.company}`,
                    image: f.photo ? urlFor(f.photo).url() : "/placeholder.jpg",
                }));

                setPeople(formatted);
            } catch (err) {
                console.error("Error fetching founders:", err);
            }
        };

        fetchFounders();
    }, []);


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
                <div className="flex justify-center  flex-col w-full h-screen gap-[25px] pt-[5em] items-center ">
                    <h1 className="text-center  lg:text-6xl text-[55px] lg:leading-[86px] leading-[60px] font-semibold text-black  w-fit ">
                        {text_first}<Cover className={'text-5xl lg:text-6xl 2xl:text-8xl'}>{texth}</Cover>
                    </h1>

                    <p className="leading-[28px] text-[#000000] lg:w-[453px] text-center  w-fit">
                        {/* Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation. */}
                        {description}
                    </p>
                    <div className="flex flex-col items-center justify-center  w-full">
                        <div className="flex flex-row justify-between gap-5">
                            <div className="flex flex-row">
                                <AnimatedTooltip items={people} />
                            </div>
                            <div>
                                <Separator orientation="vertical" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex flex-row w-fit bg-black p-1 rounded-lg">
    
                                    <Star color="#efca53" fill="#efca53" stroke="#efca53" className="hover:scale-125 cursor-pointer transition-opacity ease-in-out delay-700 duration-700" strokeWidth={0}  size={25}/>
                                    <Star color="#efca53" fill="#efca53" stroke="#efca53" className="hover:scale-125 cursor-pointer transition-opacity ease-in-out delay-700 duration-700" strokeWidth={0}  size={25}/>
                                    <Star color="#efca53" fill="#efca53" stroke="#efca53" className="hover:scale-125 cursor-pointer transition-opacity ease-in-out delay-700 duration-700" strokeWidth={0}  size={25}/>
                                    <Star color="#efca53" fill="#efca53" stroke="#efca53" className="hover:scale-125 cursor-pointer transition-opacity ease-in-out delay-700 duration-700" strokeWidth={0} size={25} />
                                    <Star color="#efca53" fill="#efca53" stroke="#efca53" className="hover:scale-125 cursor-pointer transition-opacity ease-in-out delay-700 duration-700" strokeWidth={0}  size={25}/>
                                </div>
                                <div>
                                    <span className="text-[#4c4c4c] text-md">Trusted By Founders and Entrepreneurs</span>
                                </div>
                            </div>
                        </div>
                        {/* <span className="text-sm text-center mt-5 text-[#0505058c]"></span> */}
                    </div>
                    {/* <button className="text-white bg-[#191A23] rounded-[14px] font-normal ">
                        Book a consultation
                    </button> */}

                    <button
                        data-cal-namespace="30min"
                        data-cal-link="kinzix/30min"

                        data-cal-config='{"layout":"month_view","theme":"auto"}'
                        className="shadow-[0_0_0_3px_#000000_inset] flex flex-row  items-center justify-center hover:bg-transparent border text-white hover:text-black border-black rounded-lg uppercase gap-1.5  bg-[#191A23]   font-bold transform hover:-translate-y-1 transition duration-400 w-[264px] cursor-pointer h-[68px] px-[35px] py-[20px]   ">
                        Book a Meeting
                        <ArrowUpRight size={25} />
                    </button>
                </div>
                {/* image container */}
            </div>
        </div>
    );
}