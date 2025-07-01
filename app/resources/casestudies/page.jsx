// case-studies/page.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
    {
        title: "How Kinzix Helped a Startup Scale to 10K Users",
        description:
            "A behind-the-scenes look at building a scalable SaaS platform from scratch.",
        slug: "startup-scale",
        thumbnail: "",
    },
    {
        title: "Revamping UX for a Fintech Brand in 3 Weeks",
        description:
            "How we delivered a full UX redesign and build under tight deadlines.",
        slug: "fintech-ux",
        thumbnail: "",
    },
    {
        title: "Improving Accessibility for a Global Education App",
        description:
            "Designing inclusive features and improving global reach across devices.",
        slug: "education-accessibility",
        thumbnail: "",
    },
    {
        title: "Modernizing Legacy Infrastructure for a Bank",
        description:
            "We transformed slow backend systems into scalable, modern microservices.",
        slug: "legacy-to-modern",
        thumbnail: "",
    },
    {
        title: "Building a Real-time Dashboard for IoT Devices",
        description:
            "Live data visualization and alert systems for thousands of connected sensors.",
        slug: "iot-dashboard",
        thumbnail: "",
    },
];

export default function CaseStudyPage() {
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
                        {item.thumbnail ? (
                            <img
                                src={item.thumbnail}
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