"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity"; // make sure this file exports your configured sanity client
import { urlFor } from "@/lib/imageUrl"; // assuming you already have this setup
import Image from "next/image";
export const dynamic = "force-dynamic";

export default function AllBlogsPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const query = `*[_type == "blog"] | order(publishedAt desc)`;
                const data = await client.fetch(query);
                console.log(data);
                setBlogs(data);
            } catch (error) {
                console.error("Blog fetch error:", error);
            }
        };


        fetchBlogs();
    }, []);

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
                        {blog.mainImage ? (
                            <div className="w-full h-40 rounded-xl overflow-hidden mb-4 relative">
                                <Image
                                    src={urlFor(blog.mainImage.asset._ref).width(600).height(240).url()}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-40 rounded-xl bg-gray-200 mb-4" />
                        )}
                        <h3 className="text-xl font-semibold text-[#111] mb-2">{blog.title}</h3>
                        <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                        <Link
                            href={`/resources/blogs/${blog.slug.current}`}
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
