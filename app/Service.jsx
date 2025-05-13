'use client'
import React, { useEffect, useState } from 'react'
import PointerH from './components/Pointerh'
import WavyBg from './components/Wavybg'
import { StickyScroll } from "../components/ui/sticky-scroll-reveal"
import { Lamp } from './components/LampText'

const Service = ({ data }) => {
    const [content, setContent] = useState([])

    useEffect(() => {
        if (data && Array.isArray(data[0]?.items) && data[0].items.length > 0) {
            const serviceContent = data[0].items.map((item, index) => ({
                title: item.title,
                description: item.description,
                content: (
                    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-black">
                        {item.title || `Slide ${index + 1}`}
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
            {content.length > 0 && <StickyScroll content={content} />}
        </div>
    )
}

export default Service
