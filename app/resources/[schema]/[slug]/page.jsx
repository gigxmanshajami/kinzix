"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/imageUrl";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Link from "next/link";
import { PortableText } from '@portabletext/react';

// Portable Text Components for proper formatting
const portableTextComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-12 leading-tight">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 mt-10 leading-tight">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8 leading-tight">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 mt-6">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#FE332F] pl-6 py-4 my-8 bg-white/5 rounded-r-lg italic text-gray-300">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic text-gray-200">{children}</em>
        ),
        code: ({ children }) => (
            <code className="bg-white/10 text-[#FE332F] px-2 py-1 rounded font-mono text-sm">
                {children}
            </code>
        ),
        link: ({ children, value }) => (
            <a
                href={value.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FE332F] hover:text-pink-400 underline transition-colors"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300 ml-4">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-300 ml-4">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="text-lg leading-relaxed">{children}</li>
        ),
        number: ({ children }) => (
            <li className="text-lg leading-relaxed">{children}</li>
        ),
    },
    types: {
        image: ({ value }) => (
            <div className="my-10">
                <img
                    src={urlFor(value).width(1200).url()}
                    alt={value.alt || "Content Image"}
                    className="rounded-2xl w-full object-cover border border-white/10"
                />
                {value.caption && (
                    <p className="text-center text-gray-500 text-sm mt-3 italic">
                        {value.caption}
                    </p>
                )}
            </div>
        ),
        code: ({ value }) => (
            <pre className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 overflow-x-auto my-8">
                <code className="text-gray-300 font-mono text-sm">
                    {value.code}
                </code>
            </pre>
        ),
    },
};

export default function ResourcePreviewPage() {
    const pathname = usePathname();
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const parts = pathname.split("/").filter(Boolean);
        const typeMap = {
            blogs: "blog",
            whitepapers: "whitepaper",
            casestudies: "caseStudy",
        };

        const contentType = typeMap[parts[1]];
        const slug = parts[2];

        if (!contentType || !slug) return;

        const fetchData = async () => {
            try {
                const query = `*[_type == "${contentType}" && slug.current == $slug][0]{
      ...,
      author->{
        ...
      }
    }`;

                const data = await client.fetch(query, { slug });
                setResource(data);
                console.log(data);

            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pathname]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#111111] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#FE332F] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400 text-xl">Loading...</p>
                </div>
            </div>
        );
    }

    if (!resource) {
        return (
            <div className="min-h-screen bg-[#111111] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Content Not Found</h1>
                    <Link href="/" className="text-[#FE332F] hover:text-pink-400 transition-colors">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#111111] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FE332F]/30 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Back Button */}
                <div className="max-w-5xl mx-auto px-6 pt-32 pb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </div>

                {/* Featured Image - Full Width Container */}
                {resource.mainImage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto px-6 mb-12"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a]">
                            <img
                                src={urlFor(resource.mainImage).width(1200).height(600).url()}
                                alt={resource.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                )}

                {/* Title & Meta Section */}
                <div className="max-w-5xl mx-auto px-6 pb-12">
                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        {resource.title}
                    </motion.h1>

                    {/* Excerpt */}
                    {resource.excerpt && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-400 leading-relaxed mb-8"
                        >
                            {resource.excerpt}
                        </motion.p>
                    )}

                    {/* Meta Info & Author Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10"
                    >
                        {/* Date & Reading Time */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            {resource.publishedAt && (
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(resource.publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            )}
                            {resource.readTime && (
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {resource.readTime} min read
                                </span>
                            )}
                        </div>

                        {/* Author Card */}
                        {resource.author && (
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
                                {resource.author.image ? (
                                    <img
                                        src={urlFor(resource.author.image).width(50).height(50).url()}
                                        alt={resource.author.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FE332F]"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FE332F] to-purple-500 flex items-center justify-center">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                )}
                                <div>
                                    <p className="text-white font-semibold">{resource.author.name}</p>
                                    {resource.author.bio && (
                                        <p className="text-gray-400 capitalize text-sm">{resource.author.bio}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Article Content - Same max-width as thumbnail */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-5xl mx-auto px-6 pb-32"
                >
                    {/* Content Container with Glass Effect */}
                    <div className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <PortableText
                                value={resource.content}
                                components={portableTextComponents}
                            />
                        </div>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}