import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import * as LucideIcons from 'lucide-react';
const DesignSubscription = ({ data }) => {
    return (
        <div className="bg-transparent text-white px-6 py-12">
            <h2 className="text-center text-[#FF4B4B] uppercase">Our Capabilities</h2>
            <h1 className="text-4xl font-bold text-center my-4">We can help you with...</h1>
            <div className="flex flex-wrap justify-center gap-2 my-6">

                {data.length > 0 && data.capabilities.map((cap, index) => (
                    <button key={index} className="bg-[#FF4B4B] hover:bg-red-600 text-black px-4 py-2 rounded-lg">
                        {cap}
                    </button>
                ))}
            </div>
            {/* <div className="text-center my-4">
                <span className="text-red-500 animate-spin">⏳</span> Load More
            </div> */}

            <section className="my-16 flex flex-row items-center justify-between gap-14">
                <div className='flex flex-col w-[188%]'>
                    <h3 className="text-red-500 text-sm font-semibold uppercase">Benefits</h3>
                    <h2 className="text-4xl font-bold my-4">{data.sectionTitle}</h2>
                </div>
                <div className="flex flex-col md:flex-col justify-center pt-1.5 gap-4 mt-5">
                    <p className="text-lg text-[#FFFFFF80] ">
                        {data.sectionDescription}
                    </p>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                        <Button className="bg-[#FF4B4B] hover:bg-red-600 w-full text-black cursor-pointer">See Pricing</Button>
                    </div>
                </div>
            </section>
            {data.benefits?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 text-white">
                    {data.benefits.map((benefit, index) => {
                        const total = data.benefits.length;
                        const itemsPerRow = 3;

                        const isLastInRow = (index + 1) % itemsPerRow === 0;
                        const isInLastRow = index >= total - (total % itemsPerRow || itemsPerRow);
                        const IconComponent = LucideIcons[benefit.icon?.replace(/<|\/>/g, '')] || LucideIcons.Zap;
                        return (
                            <div
                                key={index}
                                className={`pt-[43px] pb-[43px] pl-[20px] pr-[20px]
            ${!isLastInRow ? 'md:border-r md:border-r-[#ffffff12]' : ''} 
            ${!isInLastRow ? 'border-b border-b-[#ffffff12]' : ''}
          `}
                            >
                                <div className="text-3xl mb-5"><IconComponent size={benefit.iconSize || 40} color={benefit.iconColor || '#FF4B4B'} /></div>
                                <h4 className="font-medium text-[15px] mb-2">{index + 1}. {benefit.title}</h4>
                                <p className='font-light text-[16px] leading-[23px] text-[#9593A4]'>{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            )}


        </div>
    );
};

export default DesignSubscription;
