'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import Bubble from '@/public/Bubble.png';

const testimonials = [
    {
        quote:
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        title: "Marketing Director at XYZ Corp",
    },
    {
        quote:
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "Jane Doe",
        title: "COO at Alpha Inc.",
    },
    {
        quote:
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "Michael Lee",
        title: "Head of Marketing at Gamma Co.",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const containerRef = useRef(null);

    const animate = () => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    };

    useEffect(() => {
        animate();
    }, [index]);

    useEffect(() => {
        if (!paused) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [paused]);

    const handleToggle = (next = true) => {
        setPaused(true);
        setIndex((prev) =>
            next ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="bg-[#191A23]  px-4 text-white rounded-[45px] h-[485px]">
            <div className="max-w-5xl mx-auto text-center">
                <div className="relative">
                    <div
                        ref={containerRef}
                        className="w-full max-w-3xl mx-auto bg-no-repeat bg-center bg-contain relative flex flex-col justify-center top-[20px] items-center text-center"
                        style={{
                            backgroundImage: `url(${Bubble.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            padding: '100px 60px 120px', // Adjust padding to match image shape
                        }}
                    >
                        <p className="text-lg leading-relaxed max-w-[480px] mx-auto">
                            “{testimonials[index].quote}”
                        </p>
                    </div>

                    <div className="mt-6 relative right-[-8em] text-left">
                        <p className="text-[#FF3D3D] font-semibold">{testimonials[index].name}</p>
                        <p className="text-gray-400 text-sm">{testimonials[index].title}</p>
                    </div>



                    {/* Dots */}
                    <div className="mt-[6px] flex justify-center gap-2 relative bottom-[20px]">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index
                                    ? "bg-[#FF3D3D]"
                                    : "bg-white opacity-20"
                                    }`}
                            />
                        ))}
                    </div>
                    {/* Arrows */}
                </div>
                {/* <button
                    onClick={() => handleToggle(false)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-white p-2"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={() => handleToggle(true)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-2"
                >
                    <ChevronRight size={28} />
                </button> */}
            </div>

        </div>
    );
}
