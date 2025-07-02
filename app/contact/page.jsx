"use client";

import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "@/lib/sanity";

export const dynamic = "force-dynamic";

function Page() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await client.fetch(`*[_type == "contactPage"][0]`);
            setData(res);
        };
        fetchData();
    }, []);

    if (!data) return <div className="text-center py-20 text-gray-400">Loading...</div>;

    return (
        <div className="min-h-screen flex flex-col space-grotesk">
            {/* Contact Section */}
            <section className="flex flex-col lg:flex-row justify-between lg:px-[150px] px-10 md:px-20 py-16 gap-12 bg-[#e6eefe]">
                {/* Left */}
                <div className="flex-1 space-y-6 flex flex-col justify-center">
                    <h2 className="text-6xl font-bold text-gray-800">{data.pageTitle}</h2>
                    <p className="text-gray-600 text-md w-[62%]">
                        {data.introText}
                    </p>
                    <div className="space-y-2">
                        <p className="text-gray-800">{data.primaryEmail}</p>
                        <p className="text-gray-800">{data.phone}</p>
                        <a href={data.supportLink} className="text-blue-600 underline">Customer Support</a>
                    </div>

                    <div className="text-sm text-gray-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.infoBlocks?.map((block, i) => (
                            <div key={i}>
                                <strong className='text-[#000]'>{block.title}</strong>
                                <p>{block.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Form */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{data.formHeading}</h3>
                    <form className="space-y-4">
                        <div className="flex gap-4">
                            <input type="text" placeholder="First name" className="w-1/2 px-4 py-2 border rounded-md text-black" />
                            <input type="text" placeholder="Last name" className="w-1/2 px-4 py-2 border rounded-md text-black" />
                        </div>
                        <input type="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md text-black" />
                        <input type="tel" placeholder="Phone number" className="w-full px-4 py-2 border rounded-md text-black" />
                        <textarea placeholder="How can we help?" className="w-full px-4 py-2 border rounded-md text-black"></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                            By contacting us, you agree to our{" "}
                            <a href={data.termsUrl} className="underline text-black font-bold">Terms</a> and{" "}
                            <a href={data.privacyPolicyUrl} className="underline text-black font-bold">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </section>

            {/* Location Map + Info */}
            <section className="lg:px-[150px] px-10 md:px-20 py-16 bg-white grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <iframe
                        title="Kinzix Location"
                        src={data.googleMapEmbedUrl}
                        className="w-full h-[484px] rounded-xl border outline-none"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="space-y-4 flex justify-center flex-col">
                    <h4 className="text-xl text-black font-medium">{data.locationHeading}</h4>
                    <h2 className="text-4xl font-bold text-gray-800">{data.locationSubHeading}</h2>
                    <h3 className="text-xl font-medium text-gray-800">{data.locationName}</h3>

                    <div className="text-gray-600">
                        {data.locationDetails?.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="lg:px-[150px] px-10 md:px-20 py-16 bg-white grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left - Email Subscribe */}
                <div className="space-y-4">
                    <h4 className=" text-black text-2xl font-medium">FAQ</h4>
                    <h2 className="text-5xl font-bold text-black">{data.faqHeading}</h2>
                    <p className="text-gray-600 text-sm">{data.faqSubText}</p>
                    <div className="flex items-center gap-2">
                        <input
                            type="email"
                            placeholder={data.subscribeCTA}
                            className="px-4 py-4 border text-black outline-none border-gray-300 rounded-full text-sm w-full max-w-xs"
                        />
                        <button className="bg-blue-600 w-[10em] text-white px-4 py-4 rounded-full text-sm cursor-pointer transition-all hover:scale-110">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Right - Accordion */}
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full text-black transition-all"
                    >
                        {data.faqList?.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger><span className='text-2xl font-medium'>{item.question}</span></AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-black text-balance">
                                    <p>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}

export default Page;
