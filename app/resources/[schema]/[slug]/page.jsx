"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/imageUrl";

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
                const query = `*[_type == "${contentType}" && slug.current == $slug][0] {
                    title,
                    excerpt,
                    mainImage,
                    content
                }`;
                const data = await client.fetch(query, { slug });
                setResource(data);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pathname]);

    if (loading || !resource) {
        return (
            <div className="w-full py-40 text-center text-gray-400 text-xl">
                Loading...
            </div>
        );
    }

    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="max-w-[900px] mx-auto">
                {resource.mainImage ? (
                    <img
                        src={urlFor(resource.mainImage).width(1000).height(400).url()}
                        alt={resource.title}
                        className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                ) : (
                    <div className="w-full h-64 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-500 text-sm">
                        No image available
                    </div>
                )}

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {resource.title}
                </h1>

                <article className="text-gray-700 leading-7 text-base space-y-4">
                    {resource.content?.map((block, index) => {
                        if (block._type === "block") {
                            return (
                                <p key={index}>
                                    {block.children.map((child) => child.text).join("")}
                                </p>
                            );
                        }
                        if (block._type === "image") {
                            return (
                                <img
                                    key={index}
                                    src={urlFor(block).width(800).url()}
                                    alt="Content Image"
                                    className="rounded-lg my-6"
                                />
                            );
                        }
                        return null;
                    })}
                </article>
            </div>
        </main>
    );
}
