"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Simulated DB fetch — replace with actual fetch from Sanity or backend
const mockContent = {
    "ai-in-business": {
        title: "5 Ways AI is Transforming Modern Business",
        thumbnail: "/thumbs/ai.jpg",
        content:
            "Artificial Intelligence (AI) is no longer a futuristic technology; it's reshaping how modern businesses operate across every industry...",
    },
    "startup-scale": {
        title: "How Kinzix Helped a Startup Scale to 10K Users",
        thumbnail: "/thumbs/startup.jpg",
        content:
            "We guided a fintech startup through a hyper-growth phase with smart backend architecture and lean design...",
    },
    "2025-tech-trends": {
        title: "2025 Tech Trends Whitepaper",
        thumbnail: "",
        content:
            "Our annual whitepaper highlights automation, edge AI, modular design systems, and more for the future of software in 2025...",
    },
};

export default function ResourcePreviewPage() {
    const { slug } = useParams();
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const content = mockContent[slug];
        setResource(content);
    }, [slug]);

    if (!resource) {
        return (
            <div className="w-full py-40 text-center text-gray-400 text-xl">Loading...</div>
        );
    }

    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="max-w-[900px] mx-auto">
                {resource.thumbnail ? (
                    <img
                        src={resource.thumbnail}
                        alt={resource.title}
                        className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                ) : (
                    <div className="w-full h-64 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-500 text-sm">
                        No image available
                    </div>
                )}

                <h1 className="text-3xl md:text-4xl font-bold mb-4">{resource.title}</h1>

                <article className="text-gray-700 leading-7 text-base">
                    {resource.content}
                </article>
            </div>
        </main>
    );
}