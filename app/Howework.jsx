import React from 'react'
import { Rocket } from 'lucide-react';
function RedArrowLine({ width, right, top }) {
    return (
        <div className="flex  l justify-center items-center relative top-[1.5em] right-[4em]  " style={{
            width: width,
            top: top,
            righht: right,
        }}>
            {/* Left Circle */}
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            {/* Line */}
            <div className="flex-grow h-0.5 bg-red-500 mx-1"></div>
            {/* Right Arrowhead */}
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-red-500"></div>
        </div>
    );
}

const Howework = ({ data }) => {
    return (
        <div className='flex items-center justify-around h-screen mt-[5em] pb-10 gap-[2em] w-full flex-col'>
            <div className='flex flex-col lg:flex-row items-center justify-center  gap-[3em]'>
                <div className='w-[453px] h-[174px]  flex-col items-center justify-center flex'>
                    <div>
                        <span className='text-[#FF0000] '>HOW WE WORK</span>
                        <h1 className='font-semibold text-[41px] mt-[12px] leading-[58px] trackgin-[-1.5%]'>{data.heading}</h1>
                    </div>
                </div>
                <div className='flex flex-col w-[450px]  gap-[2em] h-[174px] '>
                    <p className='text-[#FFFFFF80] leading-7 tracking-normal text-justify text-[24px] font-light'>
                        {/* Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits. */}
                        {data.headingh}
                    </p>
                    <a href={data.button_text_hurl} target='__blank' className='float-right'>
                        <button className=' bg-[#FF4B4B] text-black w-[149]  h-[56] text-center justify-center items-center font-medium text-[15px] p-[17px] flex rounded-[8px] hover:scale-105 transition-all cursor-pointer '>
                            {data.button_text_h}
                        </button>
                    </a>
                </div>
            </div>
            {data?.listgridh && data.listgridh.length > 0 && (
                <div className='flex lg:flex-row justify-evenly w-full'>
                    {data.listgridh.map((item, index) => (
                        <div key={item._key} className="w-[409px] h-[288px]">
                            <div>
                                <div className='flex align-center'>
                                    <div className='bg-[#FF4B4B] w-[60px] h-[60px] rounded-full p-2 flex items-center mr-20 mb-8 mt-20 justify-center'>
                                        <Rocket size={40} color='black' />
                                    </div>
                                    {/* Conditionally render RedArrowLine if it's not the last item */}
                                    {index < data.listgridh.length - 1 && (
                                        <RedArrowLine
                                            width={index === 0 ? '190px' : index === 1 ? '190px' : '160px'}
                                            top={'1.6em'}
                                            right={index === 0 ? '24em' : index === 1 ? '23.4em' : '23em'}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className='pr-10'>
                                <h1 className="text-[26px] font-medium">{item.grid_title}</h1>
                                <p className="font-light mt-3 w-[250px] text-[14px] text-[#FFFFFF80]">
                                    {item.grid_descripton}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Howework