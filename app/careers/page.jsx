"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobOpenings = [
    {
        title: "Frontend Developer",
        location: "Remote",
        type: "Full-time",
        description: "Build responsive UIs with React, TailwindCSS, and modern JS frameworks.",
        requirements: ["3+ years of React experience", "Strong CSS skills", "Familiarity with REST APIs"],
        applyEnabled: true,
    },
    {
        title: "Backend Engineer",
        location: "Bangalore, India",
        type: "Full-time",
        description: "Develop scalable APIs, work with databases, and integrate third-party services.",
        requirements: ["Node.js & Express", "Database design (MongoDB/PostgreSQL)", "Microservices architecture"],
        applyEnabled: false,
    },
    {
        title: "Product Designer",
        location: "Remote",
        type: "Contract",
        description: "Design user flows, mockups, and prototypes for our client products.",
        requirements: ["Figma expertise", "UX research understanding", "Component-based design"],
        applyEnabled: true,
    },
];

export default function CareersPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at Kinzix</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Join a team that’s shaping the future of tech. Explore open roles and help build
                    smarter solutions with us.
                </p>
            </div>

            <div className="flex flex-col gap-8 max-w-[1000px] mx-auto">
                {jobOpenings.map((job, index) => (
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
                                    <p className="text-gray-600 mb-4 text-base">{job.description}</p>
                                    <ul className="mb-4 list-disc list-inside text-sm text-gray-700">
                                        {job.requirements.map((req, i) => (
                                            <li key={i}>{req}</li>
                                        ))}
                                    </ul>
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
