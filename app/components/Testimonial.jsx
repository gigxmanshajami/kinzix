'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ import this
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sampleImg from '@/public/sample.png';

const testimonials = [
    {
        company: 'Gymstory',
        companyLogo: '/logo.png',
        title: 'Kinzix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!',
        feedback:
            "I recently hired Kinzix for a custom web development project and couldn't be happier with the results. The team brought my ideas to life with a website that truly stands out.",
        name: 'Diana Loreza',
        position: 'Director of GYMSTORY',
        image: sampleImg.src,
    },
    {
        company: 'Gymstory2',
        companyLogo: '/logo.png',
        title: 'Kinzix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!',
        feedback:
            "I recently hired Kinzix for a custom web development project and couldn't be happier with the results. The team brought my ideas to life with a website that truly stands out.",
        name: 'Diana Loreza',
        position: 'Director of GYMSTORY',
        image: '/person.png',
    },
];

export default function Testimonial() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1); // for future use (slide direction)

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 9000); // ← this is your current delay (6 seconds)
        return () => clearInterval(interval);
    }, []);
    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const t = testimonials[index];

    return (
        <section className="text-center py-16 bg-white">
            <p className="text-sm uppercase text-gray-500 mb-2">Testimonial</p>
            <h2 className="text-3xl font-bold mb-4 text-black">Customer is Our Top Priority</h2>
            <p className="text-gray-600 mb-10">We survey all of our clients, the results of which go directly to our CEO.</p>

            <div className="flex flex-row justify-between items-center">
                <button onClick={handlePrev} className="w-[50px] h-[50px]  ml-[60px] flex items-center justify-center m-2 bg-[black] p-2 rounded-full shadow hover:scale-105">
                    <ChevronLeft />
                </button>

                <div className="relative max-w-4xl mx-auto h-[485px] p-[93px] bg-[#F9F9F9] justify-evenly rounded-3xl shadow flex items-center gap-6 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-6"
                        >
                            <div className="flex-1 text-left">
                                <div className="mb-2 text-gray-500 font-medium">{t.company}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 w-[421px]">{t.title}</h3>
                                <p className="text-gray-700 mb-4 w-[407px]">{t.feedback}</p>
                                <p className="font-semibold text-black">{t.name}</p>
                                <p className="text-sm text-gray-600">{t.position}</p>
                            </div>

                            <img src={t.image} alt={t.name} className="w-[325px] h-[325px] rounded-full object-cover border-4 border-white shadow" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button onClick={handleNext} className="w-[50px] h-[50px]  mr-[60px] flex items-center justify-center m-2 bg-black p-2 rounded-full shadow hover:scale-105">
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}
