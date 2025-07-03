'use client';
import React, { useEffect, useRef } from 'react';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { urlFor } from "@/lib/imageUrl";

gsap.registerPlugin(ScrollTrigger);

const Howework = ({ data }) => {
    const gridRef = useRef(null);
    console.log(data, 'from services')

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

    const services = data?.listgridh || [];


    return (
        <div className="py-12 lg:px-10 px-[3px] ">
            {/* Header */}
            <div className=" mx-auto mb-10 flex lg:flex-row flex-col gap-10 px-[10px]" data-aos="zoom-in-up">
                <h2 className="text-white font-medium items-center flex text-center justify-center text-[40px] w-[178px] h-[51px] bg-[#FE332F]">
                    Services
                </h2>
                <p className="text-black lg:w-[580px] text-center text-[15px] lg:text-left h-[46px] w-fit hidden lg:block">
                    {data?.headingh}
                </p>
            </div>

            <div ref={gridRef} className="w-full flex justify-center  h-fit">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 px-[10px] ">
                    {services.map((service, i) => (
                        <div
                            key={service._key || i}
                            data-aos="zoom-out-up"
                            className="service-card border-[#191A23] border-[0.9px] border-b-[7px] border-solid  p-6   h-[255px] flex flex-row justify-between w-[-webkit-fill-available]"
                            style={{
                                backgroundColor: service?.bg || '#fff',
                                color: service?.text || '#000',
                            }}
                        >
                            <div className="flex flex-col justify-between p-[15px]">
                                <h3 className="text-xl font-semibold leading-tight mb-6">
                                    <span
                                        className="font-semibold text-[30px] px-2 py-0.5 rounded inline-block"
                                        style={{
                                            backgroundColor: service?.textbg || '#FE332F',
                                            color: service?.text || '#000',
                                        }}
                                    >
                                        {service.text1}
                                    </span>{' '}
                                    <span
                                        className="font-semibold text-[30px] px-2 py-0.5 rounded inline-block"
                                        style={{
                                            backgroundColor: service?.textbg || '#FE332F',
                                            color: service?.text || '#000',
                                        }}
                                    >
                                        {service.text2}
                                    </span>
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                                        <div
                                            className="w-[44px] h-[44px] flex items-center justify-center rounded-full hover:scale-125 cursor-none transition-all"
                                            style={{
                                                backgroundColor: service?.lbg || '#191A23',
                                            }}
                                        >
                                            <MoveUpRight color={service?.iconcolor || '#B9FF66'} strokeWidth={2.27} />
                                        </div>
                                    </a>
                                    <span
                                        className="text-sm font-medium"
                                        style={{
                                            color: service?.textcolor || '#000',
                                        }}
                                    >
                                        Learn more
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-xl items-center flex justify-center h-[-webkit-fill-available]">
                                <img
                                    alt="kinzix image"
                                    src={urlFor(service.box_image?.asset?._ref)}
                                    width={210}
                                    height={170}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Howework;
