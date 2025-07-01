"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const whitePapers = [
    {
        title: "2025 Tech Trends Whitepaper",
        description:
            "A complete breakdown of future trends in software, AI, and automation.",
        slug: "2025-tech-trends",
    },
    {
        title: "Kinzix Design System v1.0",
        description:
            "A downloadable UI toolkit and design framework used in our apps.",
        slug: "kinzix-design-system",
    },
    {
        title: "Kinzix Design System v1.0",
        description:
            "A downloadable UI toolkit and design framework used in our apps.",
        slug: "kinzix-design-system",
    },
    {
        title: "Kinzix Design System v1.0",
        description:
            "A downloadable UI toolkit and design framework used in our apps.",
        slug: "kinzix-design-system",
    },
    {
        title: "Kinzix Design System v1.0",
        description:
            "A downloadable UI toolkit and design framework used in our apps.",
        slug: "kinzix-design-system",
    },
    {
        title: "Kinzix Design System v1.0",
        description:
            "A downloadable UI toolkit and design framework used in our apps.",
        slug: "kinzix-design-system",
    },
];

export default function WhitepapersPage() {
    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Whitepapers & Toolkits</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Browse exclusive research, design systems, and technical resources created by Kinzix.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1320px] mx-auto">
                {whitePapers.map((item, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-6 bg-white  hover:shadow-lg transition-all"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="w-full h-40 rounded-xl bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold text-[#111] mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <Link
                            href={`/resources/${item.slug}`}
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