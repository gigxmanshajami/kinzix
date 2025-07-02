"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/imageUrl";

export const dynamic = "force-dynamic";

export default function CaseStudyPage() {
    const [caseStudies, setCaseStudies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await client.fetch(`*[_type == "caseStudy"] | order(publishedAt desc) {
                    title,
                    "description": excerpt,
                    "slug": slug.current,
                    mainImage
                }`);
                setCaseStudies(data);
            } catch (err) {
                console.error("Failed to fetch case studies:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Dive into real-world success stories and how Kinzix solves complex business problems.
                </p>
            </div>

            <div className="flex flex-col gap-10 max-w-[1000px] mx-auto">
                {caseStudies.map((item, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-all"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        {item.mainImage ? (
                            <img
                                src={urlFor(item.mainImage).width(800).height(300).url()}
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                        ) : (
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-xl mb-4">
                                No image available
                            </div>
                        )}
                        <h3 className="text-2xl font-semibold text-[#111] mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-3 text-base">{item.description}</p>
                        <Link
                            href={`/resources/casestudies/${item.slug}`}
                            className="text-[#0070f3] hover:underline text-sm font-medium"
                        >
                            Read more →
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
