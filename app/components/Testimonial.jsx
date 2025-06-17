'use cl ient';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { urlFor } from "@/lib/imageUrl";
export default function Testimonial({ data }) {
    const testimonials = data?.testimonials || [];
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 9000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };  

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const t = testimonials[index] || {};

    return (
        <section className="text-center py-16 bg-white">
            <p className="text-sm uppercase text-gray-500 mb-2">Testimonial</p>
            <h2 className="text-3xl font-bold mb-4 text-black">{data?.title_testi}</h2>
            <p className="text-gray-600 mb-10">{data?.desc_testi}</p>

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

                            <img
                                src={t.image ? urlFor(t.image).width(325).height(325).url() : '/sample.png'}
                                alt={t.name}
                                className="w-[325px] h-[325px] rounded-full object-cover border-4 border-white shadow"
                            />
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
