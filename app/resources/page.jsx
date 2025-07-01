"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
    {
        title: "5 Ways AI is Transforming Modern Business",
        description:
            "Explore how artificial intelligence is reshaping operations, customer experiences, and innovation strategies.",
        link: "/resources/ai-in-business",
    },
    {
        title: "Choosing the Right Tech Stack for Your App",
        description:
            "Frontend, backend, cloud — learn how we pick tools that ensure speed, flexibility, and long-term growth.",
        link: "/resources/tech-stack-guide",
    },
    {
        title: "The Future of Web3 Products",
        description:
            "Uncover how decentralized tech is shaping the next-gen applications and digital ownership.",
        link: "/resources/web3-future",
    },
];

const caseStudies = [
    {
        title: "How Kinzix Helped a Startup Scale to 10K Users",
        description:
            "A behind-the-scenes look at our journey building a scalable SaaS platform from the ground up.",
        link: "/resources/startup-scale",
    },
    {
        title: "Revamping UX for a Fintech Brand in 3 Weeks",
        description:
            "Discover how our design and development team rebuilt a secure, intuitive platform under a tight deadline.",
        link: "/resources/fintech-ux",
    },
];

const futureResources = [
    {
        title: "2025 Tech Trends Whitepaper",
        description:
            "An in-depth guide to what's coming in software, AI, automation, and product design.",
        link: "/resources/2025-tech-trends",
    },
    {
        title: "Kinzix Design System v1.0",
        description:
            "A downloadable UI toolkit and system used in all our modern client-facing apps.",
        link: "/resources/kinzix-design-system",
    },
];

export default function Resources() {
    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111] space-y-24">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Browse insights, case studies, and toolkits from Kinzix’s work across industries and technologies.
                </p>
            </div>

            {/* Blogs – Horizontal Scroll */}
            {/* Blogs – Horizontal Scroll */}
            {/* Blogs – Horizontal Scroll (Fixed Width + Padding) */}
            <section className="mb-20">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#111]">Blogs</h2>
                    <div className="h-[2px] w-16 bg-[#111] mt-2" />
                </div>

                <div className="w-full max-w-[1320px] mx-auto grid md:grid-cols-3 gap-8 px-0">
                    {blogs.slice(0, 3).map((item, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-200 rounded-2xl p-6 bg-white  hover:shadow-lg transition-all"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="w-full h-40 rounded-xl bg-gray-200 mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2 text-[#111]">{item.title}</h3>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            <Link
                                href={item.link}
                                className="text-[#0070f3] hover:underline text-sm font-medium"
                            >
                                Read more →
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Link href={"/resources/blogs"}>
                        <button className="px-8 py-2 mt-10 mb-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 cursor-pointer font-bold">
                            View More
                        </button>
                    </Link>
                </div>
            </section>



            {/* Case Studies – Grid with image + content */}
            <section>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Case Studies</h2>
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
                            <div className="w-full md:w-1/3 h-40 rounded-xl bg-gray-200 mb-4 md:mb-0"></div> {/* Image Placeholder */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-3">{item.description}</p>
                                <Link href={item.link} className="text-[#0070f3] hover:underline text-sm font-medium">
                                    Read case study →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    {/* <button className="px-8 py-2 mt-10 mb-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 cursor-pointer font-bold">
                        View More
                    </button> */}
                    <Link href={"/resources/casestudies"}>
                        <button className="px-6 py-2 mt-10 mb-10 bg-black text-white rounded-full font-bold transform hover:-translate-y-1 transition duration-400">
                            View More
                        </button>
                    </Link>
                </div>
            </section>

            {/* Whitepapers / Toolkits – Cards */}
            <section>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Whitepapers & Toolkits</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {futureResources.map((item, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="w-full h-40 rounded-xl bg-gray-200 mb-4"></div> {/* Image Placeholder */}
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            <Link href={item.link} className="text-[#0070f3] hover:underline text-sm font-medium">
                                View resource →
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Link href={"/resources/whitepapers"}>
                        <button className="px-8 py-2 mt-10 mb-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 cursor-pointer font-bold">
                            View More
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
