"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/imageUrl";
import { Loader2 } from "lucide-react"; // Lucide spinner icon

export const dynamic = "force-dynamic";

export default function Resources() {
    const [blogs, setBlogs] = useState([]);
    const [caseStudies, setCaseStudies] = useState([]);
    const [whitepapers, setWhitepapers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const blogData = await client.fetch(`*[_type == "blog"] | order(publishedAt desc)[0...3] `);

                const caseStudyData = await client.fetch(`*[_type == "caseStudy"] | order(publishedAt desc)[0...3] `);

                const whitepaperData = await client.fetch(`*[_type == "whitepaper"] | order(publishedAt desc)[0...3]`);
                console.log(whitepaperData);
                setBlogs(blogData);
                setCaseStudies(caseStudyData);
                setWhitepapers(whitepaperData);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    const renderLoading = () => (
        <div className="flex justify-center items-center h-40">
            <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
        </div>
    );

    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111] space-y-24">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Browse insights, case studies, and toolkits from Kinzix’s work across industries and technologies.
                </p>
            </div>

            {/* Blogs */}
            <section className="mb-20">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#111]">Blogs</h2>
                    <div className="h-[2px] w-16 bg-[#111] mt-2" />
                </div>

                {loading ? renderLoading() : (
                    <div className="w-full max-w-[1320px] mx-auto grid md:grid-cols-3 gap-8 px-0">
                        {blogs.map((item, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-all"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img
                                    src={urlFor(item.mainImage).width(600).height(240).url()}
                                    alt={item.title}
                                    className="w-full h-40 object-cover rounded-xl mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2 text-[#111]">{item.title}</h3>
                                <p className="text-gray-600 mb-3">{item.description}</p>
                                <Link
                                    href={`/resources/blogs/${item.slug.current}`}
                                    className="text-[#0070f3] hover:underline text-sm font-medium"
                                >
                                    Read more →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-center">
                    <Link href={"/resources/blogs"}>
                        <button className="px-8 py-2 mt-10 mb-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold hover:shadow-xl transition">
                            View More
                        </button>
                    </Link>
                </div>
            </section>

            {/* Case Studies */}
            <section>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Case Studies</h2>
                {loading ? renderLoading() : (
                    <div className="grid gap-12">
                        {caseStudies.map((item, index) => (
                            <motion.div
                                key={index}
                                className="md:flex items-start gap-8 border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img
                                    src={urlFor(item.mainImage).width(400).height(160).url()}
                                    alt={item.title}
                                    className="w-full md:w-1/3 h-40 object-cover rounded-xl mb-4 md:mb-0"
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-3">{item.description}</p>
                                    <Link
                                        href={`/resources/casestudies/${item.slug.current}`}
                                        className="text-[#0070f3] hover:underline text-sm font-medium"
                                    >
                                        Read case study →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
                <div className="flex items-center justify-center">
                    <Link href={"/resources/casestudies"}>
                        <button className="px-6 py-2 mt-10 mb-10 bg-black text-white rounded-full font-bold hover:-translate-y-1 transition">
                            View More
                        </button>
                    </Link>
                </div>
            </section>

            {/* Whitepapers & Toolkits */}
            <section>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Whitepapers & Toolkits</h2>
                {loading ? renderLoading() : (
                    <div className="grid md:grid-cols-2 gap-8">
                        {whitepapers.map((item, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img
                                    src={urlFor(item.mainImage).width(600).height(240).url()}
                                    alt={item.title}
                                    className="w-full h-40 object-cover rounded-xl mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-3">{item.description}</p>
                                <Link
                                    href={`/resources/whitepapers/${item.slug.current}`}
                                    className="text-[#0070f3] hover:underline text-sm font-medium"
                                >
                                    View resource →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
                <div className="flex items-center justify-center">
                    <Link href={"/resources/whitepapers"}>
                        <button className="px-8 py-2 mt-10 mb-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold hover:shadow-xl transition">
                            View More
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
