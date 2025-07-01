"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Replace with actual DB/CMS data later
const blogs = [
    {
        title: "5 Ways AI is Transforming Modern Business",
        description: "Explore how artificial intelligence is reshaping business operations and customer experiences.",
        slug: "ai-in-business",
    },
    {
        title: "Choosing the Right Tech Stack for Your App",
        description: "Frontend, backend, cloud — how to pick the right tools for long-term growth.",
        slug: "tech-stack-guide",
    },
    {
        title: "The Future of Web3 Products",
        description: "Uncover how decentralized tech is shaping the next-gen digital landscape.",
        slug: "web3-future",
    },
    
    // Add more blog metadata...
];

export default function AllBlogsPage() {
    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blog Posts</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Discover all our latest insights, strategies, and tech breakdowns from Kinzix.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1320px] mx-auto">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-all"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="w-full h-40 rounded-xl bg-gray-200 mb-4" />
                        <h3 className="text-xl font-semibold text-[#111] mb-2">{blog.title}</h3>
                        <p className="text-gray-600 mb-3">{blog.description}</p>
                        <Link
                            href={`/resources/${blog.slug}`}
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
