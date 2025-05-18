import React from 'react'
import { AppleCardsCarouselDemo, MacbookScrollDemo, StickyScrollProject } from './components/Projectshowscroll'

const Works = ({rf}) => {
    const content = [
        {
            title: "Collaborative Editing",
            description:
                "Work in real time with your team. Share ideas, collaborate, and get more done efficiently.",
            content: (
                <div className="text-center">
                    <p className="text-xl font-semibold">🤝 Welcome Screen</p>
                </div>
            ),
        },
        {
            title: "Real-time Updates",
            description:
                "Track changes instantly with zero delays. Our platform keeps you always in sync.",
            content: (
                <div className="text-center">
                    <p className="text-xl font-semibold">🔄 Real-time Board</p>
                </div>
            ),
        },
        {
            title: "Version Control",
            description:
                "No more version conflicts. Always work on the latest update, worry-free.",
            content: (
                <div className="text-center">
                    <p className="text-xl font-semibold">📁 Version Panel</p>
                </div>
            ),
        },
    ];

    return (
        <div className='bg-[#fff] pt-[4em] pb-[4em] px-[150px]' ref={rf}>
            {/* heading */}
            <div className='flex items-center justify-center flex-col gap-3 '>
                <h1 className='text-[#111204] leading-[58px] tracking-[-2.64px] text-[48px] font-bold'>Our Beautiful Works</h1>
                <p className='text-[#11120480] w-[462px] h-[50px] text-center text-[18px] font-light leading-[25.2px] tracking-[0px]'>We help our clients grow their bottom-line with clear and professional websites.</p>
            </div>
            <div>
                <AppleCardsCarouselDemo />
            </div>
        </div>
    )
}

export default Works