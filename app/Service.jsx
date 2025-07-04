
'use client'
import React, { useEffect, useState } from 'react'
import PointerH from './components/Pointerh'
import WavyBg from './components/Wavybg'
import { StickyScroll } from "../components/ui/sticky-scroll-reveal"
import { Lamp } from './components/LampText'
import { urlFor } from '@/lib/imageUrl'

const Service = ({ data }) => {
    const [content, setContent] = useState([])
    console.log('service', data);
    useEffect(() => {
        if (data && Array.isArray(data[0]?.items) && data[0].items.length > 0) {
            const serviceContent = data[0].items.map((item, index) => ({
                // title: item.title,
                // description: item.description,
                // content: (
                //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-black">
                //         <img src={urlFor(item.Mockup_Image.asset._ref)}/>
                //     </div>
                // ),
                title: item.title,
                // description: item.description,
                value: item.description,
                content: (
                    <div
                        className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                        <p>{item.title}</p>
                        <img
                            src={urlFor(item.Mockup_Image.asset._ref)}
                            alt={urlFor(item.Mockup_Image.asset._ref)}
                            width="1000"
                            height="1000"
                            className="object-contain object-center h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />

                    </div>
                ),
            }))
            setContent(serviceContent)
        } else {
            console.error("No items in data or invalid data structure")
        }
    }, [data])

    return (
        <div className="w-full">
            {data?.[0]?.heading && (
                <PointerH textdef={data[0].heading} textanim={data[0].headingh} />
            )}
            {content.length > 0 && <StickyScroll tabs={content} />}
        </div>
    )
}

export default Service
