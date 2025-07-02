"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

export default function CareersPage() {
    const [data, setData] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(`*[_type == "careerPage"][0]`);
            setData(result);
        };
        fetchData();
    }, []);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!data) return <div className="text-center py-20 text-gray-400">Loading...</div>;

    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.pageTitle}</h1>
                <p className="text-lg text-gray-600 max-w-2xl">{data.pageIntro}</p>
            </div>

            <div className="flex flex-col gap-8 max-w-[1000px] mx-auto">
                {data.jobs?.map((job, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-all"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div
                            className="cursor-pointer mb-2 flex flex-wrap justify-between items-center"
                            onClick={() => toggleIndex(index)}
                        >
                            <h3 className="text-2xl font-semibold text-[#111]">{job.title}</h3>
                            <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                {job.type} · {job.location}
                            </span>
                        </div>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden mt-4"
                                >
                                    <div className="text-gray-600 mb-4 text-base prose max-w-none">
                                        <PortableText value={job.content} />
                                    </div>

                                    <button
                                        disabled={!job.applyEnabled}
                                        className={`px-4 py-2 rounded-md text-white text-sm font-medium transition-all ${job.applyEnabled
                                                ? "bg-[#0070f3] hover:bg-[#005ecb]"
                                                : "bg-gray-300 cursor-not-allowed"
                                            }`}
                                    >
                                        {job.applyEnabled ? "Apply Now" : "Applications Closed"}
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
