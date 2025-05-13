"use client";
import React, { useEffect, useState } from "react";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Button } from "@/components/ui/button"
import Service from "./Service";

export default function Hero({ data }) {
    console.log(data.Text_First);
    const words = data.Text_First;
    const secText = data.Text_Second;
    const segments = [
        { text: "Not all vision needs noise"},
        { text: "Kinzix Infotech", style: "text-blue-500" },
        { text: "crafts clean bold products",  },
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
        <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden ">
            <MaskContainer
                revealText={
                    <div className="mx-auto   max-w-4xl text-center text-2xl font-bold text-slate-800 dark:text-white  leading-snug tracking-wide" >
                        {showStaticText ? (
                            <p className="dark:text-white font-bold text-slate-800  text-4xl  tracking-wide leading-[49.5px]">
                                {words}
                            </p>
                            // mx-auto top-2 relative leading-[40px]  max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white
                        ) : (
                            <TextGenerateEffect words={words} />
                        )}
                    </div>
                }
                className="h-[40rem] w-full rounded-md text-white dark:text-black"
            >

                <p className="font-bold text-4xl tracking-wide leading-[49.5px]">
                    {segments.map((segment, index) => (
                        <span key={index} className={segment.style}>
                            {segment.text}{" "}
                        </span>
                    ))}
                </p>
            </MaskContainer>

        </div>
    );
}
