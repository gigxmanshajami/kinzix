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
import starBig from '@/public/Star.png';
import starMid from '@/public/Star (1).png';
import starSm from '@/public/Star (2).png';
export default function Hero({ data }) {
    console.log(data.Text_First);
    const words = data.Text_First;
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const particlesLoaded = (container) => {
        console.log(container);
    };
    const options = useMemo(
        () => ({

            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FF4B4B",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );
    const secText = data.Text_Second;
    const segments = [
        { text: "Not all vision needs noise" },
        { text: "Kinzix Infotech", style: "text-blue-500" },
        { text: "crafts clean bold products", },
        { text: "that quietly move things forward", }
    ];
    const [showStaticText, setShowStaticText] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowStaticText(true);
        }, 5000); // Adjust duration based on how long the text animation takes

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="relative flex-col  h-screen overflow-hidden flex items-center justify-center w-full">
            <div className="absolute inset-0 max-w-[600px] max-h-[400px] mx-auto" style={{ pointerEvents: 'none' }}>
                {init && (
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                    />
                )}
            </div>
            {/* Eclipse Image */}
            <motion.img
                src={Blurbg.src}
                alt="Eclipse"
                className="absolute top-[23em] lg:top-[15em] bg-transparent pointer-events-none select-none"
                style={{
                    backdropFilter: 'blur(36px)',
                    width: '412px',
                    height: '309px',
                    // top: '15em',
                    zIndex: -1,
                }}
                initial={{ scale: 2.8 }}
                animate={{ scale: [2.7, 2.9, 2.7] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Content */}
            <div className="relative  z-10 text-white text-center items-center flex flex-col pt-20 gap-10">
                <h1 className="text-[40px] sm:text-[32px] md:text-[60px] lg:text-[96px] font-bold pointer-events-none capitalize leading-12 lg:leading-[103px] lg:tracking-[-2.88px]">
                    Bringing your <br /> Dream Into <span className="text-[#FF4B4B] italic">reality</span>
                </h1>

                <motion.div
                    className="absolute right-[7em] bottom-[22em] lg:top-[4em] lg:right-[-5em]"
                    animate={{ y: [0, -2, -4, -6, -8, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 8, 6, 4, 2, 0] }}
                    transition={{
                        duration: 8,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    <Image src={starBig} width={120} height={120} alt="Star" />
                </motion.div>

                <p className="lg:text-[18px] text-center lg:w-[522px] text-[#ffffff80] lg:h-[50px] w-[350px]">
                    We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.
                </p>
                <div className="relative">
                    <motion.div
                        className="absolute "
                        animate={{ y: [0, -2, -4, -6, -8, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 8, 6, 4, 2, 0] }}
                        transition={{
                            duration: 8,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >
                        <Image src={starSm} width={15} height={15} className="relative left-[-3em] lg:left-[-17em] top-[-25px]" alt="Star" />
                    </motion.div>
                    <div className="flex flex-row gap-2.5">
                        <a href="https://cal.com/kinzix/30min?overlayCalendar=true" target="__blank">
                            <button className='bg-[#FF4B4B] text-black w-[149]  h-[56] text-center justify-center items-center font-semibold text-[15px] p-[17px] flex rounded-[8px] hover:scale-105 transition-all cursor-pointer '>
                                Book A Meeting
                            </button>
                        </a>
                    </div>
                    <motion.div
                        className="absolute "
                        animate={{ y: [0, -2, -4, -6, -8, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 8, 6, 4, 2, 0] }}
                        transition={{
                            duration: 8,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >
                        <Image src={starMid} width={22} height={22} className="relative right-[-12em] lg:right-[17em] top-[-25px]" alt="Star" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
