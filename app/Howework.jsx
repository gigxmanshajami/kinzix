'use client';
import React from 'react'
import { Rocket, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import asset1image from '@/public/assetimg1.png';
import asset2image from '@/public/asset2.png';
import { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const services = [
    { text1: 'Search engine', text2: 'optimization', bg: 'bg-gray-100', text: 'text-black', img: asset1image.src, lbg: 'bg-[#191A23]', textbg: 'bg-[#FE332F]', iconcolor: "#B9FF66" },
    { text1: 'Pay-per-click', text2: 'advertising', bg: 'bg-[#FE332F]', text: 'text-black', textbg: 'bg-white', img: asset2image.src, lbg: 'bg-[#191A23]', iconcolor: "#B9FF66" },
    { text1: 'Social Media', text2: 'marketing', bg: 'bg-[#191A23]', text: 'text-black', textbg: 'bg-white', img: asset2image.src, lbg: 'bg-white', iconcolor: "#000000", textcolor: 'text-[#FFFFFF]', },
    { text1: 'Email', text2: 'marketing', bg: 'bg-[#F3F3F3]', text: 'text-black', textbg: 'bg-[#FE332F]', img: asset2image.src, lbg: 'bg-[#191A23]', iconcolor: "#B9FF66", textcolor: 'text-[#000]', },
    { text1: 'Content', text2: 'creation', bg: 'bg-[#FE332F]', text: 'text-black', textbg: 'bg-[#fff]', img: asset2image.src, lbg: 'bg-[#191A23]', iconcolor: "#B9FF66", textcolor: 'text-[#000]', },
    { text1: 'Analytics and', text2: 'tracking', bg: 'bg-[#191A23]', text: 'text-black', textbg: 'bg-[#FE332F]', img: asset2image.src, lbg: 'bg-white', iconcolor: "#000000", textcolor: 'text-[#FFFFFF]', },
];
const Howework = ({ data }) => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.service-card',
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    stagger: 0.15,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, gridRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="py-12 px-10 " >
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-10 flex flex-row  gap-10 items-center">
                <h2 className="text-white font-medium  rounded-[7px] items-center flex text-center justify-center text-[40px] w-[178px] h-[51px] bg-[#FE332F]">
                    Services
                </h2>
                <p className="text-black w-[580px] h-[46px]">
                    At our digital marketing agency, we offer a range of services <br />
                    to help businesses grow and succeed online. These services include:
                </p>
            </div>

            {/* Card Grid */}
            {/*     padding: calc(var(--spacing) * 6);
    width: 461px;
    height: 255px !important; */}
            <div ref={gridRef} className="w-full flex justify-center cursor-pointer pb-20 h-screen">
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-w-[1240px]">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`service-card ${service.bg} ${service.text} border-[#191A23] border-[0.9px] border-b-[7px] border-solid rounded-[45px] p-6 w-[461px] h-[255px] flex flex-row justify-between`}
                        >
                            <div className="flex flex-col justify-between p-[15px] ">
                                <h3 className="text-xl font-semibold leading-tight mb-6">
                                    <span className={`${service.textbg} ${service.text} font-semibold text-[30] px-2 py-0.5 rounded inline-block`}>
                                        {service.text1}
                                    </span>{' '}
                                    <span className={`${service.textbg} ${service.text} font-semibold text-[30] px-2 py-0.5 rounded inline-block`}>
                                        {service.text2}
                                    </span>
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <div className={`w-[44px] h-[44px] flex items-center justify-center rounded-full ${service.lbg}`}>
                                        <MoveUpRight color={service.iconcolor} strokeWidth={2.27} />
                                    </div>
                                    <span className={`text-sm font-medium ${service.textcolor}`}>Learn more</span>
                                </div>
                            </div>
                            <div className="rounded-xl items-center flex justify-center h-[-webkit-fill-available]">
                                <Image alt="kinzix image" src={service.img} width={210} height={170} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Howework