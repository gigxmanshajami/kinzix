"use client";
import React, { useEffect, useState } from "react";
import { client } from '@/lib/sanity';
import { Separator } from "@/components/ui/separator"
import { motion } from 'framer-motion';
import { urlFor } from "@/lib/imageUrl";
import { ArrowUpRight, Star } from 'lucide-react';
import { Cover } from "@/components/ui/cover";
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

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
    const description = data?.hero_description;

    return (
        <div className="flex justify-center items-center w-full px-6">
            <div className="flex justify-center items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center flex-col w-full min-h-screen gap-8 pt-32 items-center max-w-5xl"
                >
                    <h1 className="text-center text-5xl lg:text-7xl lg:leading-tight leading-tight font-bold text-white tracking-tight">
                        {text_first}
                        <Cover className="text-5xl lg:text-7xl bg-gradient-to-r from-[#FE332F] via-pink-500 to-purple-500">
                            {texth}
                        </Cover>
                    </h1>

                    <p className="leading-relaxed text-gray-400 lg:w-[600px] text-center text-lg">
                        {description}
                    </p>
                    
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-row justify-between gap-5 items-center">
                            <div className="flex flex-row">
                                <AnimatedTooltip items={people} />
                            </div>
                            <Separator orientation="vertical" className="h-12 bg-white/20" />
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row w-fit bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i}
                                            color="#efca53" 
                                            fill="#efca53" 
                                            className="hover:scale-110 cursor-pointer transition-transform" 
                                            strokeWidth={0}  
                                            size={20}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-400 text-sm">Trusted By Founders</span>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        data-cal-namespace="30min"
                        data-cal-link="kinzix/30min"
                        data-cal-config='{"layout":"month_view","theme":"auto"}'
                        className="relative flex flex-row items-center justify-center gap-2 text-white font-bold rounded-xl px-8 py-4 bg-gradient-to-r from-[#FE332F] to-purple-600 hover:from-[#FE332F]/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg shadow-[#FE332F]/20"
                    >
                        Book a Meeting
                        <ArrowUpRight size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}