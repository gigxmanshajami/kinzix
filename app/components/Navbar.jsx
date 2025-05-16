"use client";

import React from 'react';
import Image from 'next/image';
import kinzixImage from '@/public/kinzi.png';
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Menu } from 'lucide-react';
import color from '@/lib/theme';
const NavbarHome = () => {
    const navItems = [
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='w-full h-[4em] p-3 items-center flex flex-row bg-transparent z-50 backdrop-blur-lg  justify-evenly gap-80  fixed top-0'>
            {/* logo */}
            <div>
                <Image src={kinzixImage} alt='Kinzix' className='lg:w-[120] lg:h-[120] object-contain ' width={120} height={120} />
            </div>

            {/* right nav */}
            <div className=' items-center gap-10 hidden  lg:flex' >
                <div>
                    <ul className='flex justify-between items-center  align-middle gap-[32px]'>
                        <li>Process</li>
                        <li>Benefits</li>
                        <li>Services</li>
                        <li>PortFolio</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <button className='bg-[#FF4B4B] text-black w-[120]  h-[50] text-center justify-center items-center font-semibold text-[15px] p-[17px] flex rounded-[8px] hover:scale-105 transition-all cursor-pointer '>
                        Get Started
                    </button>
                </div>
            </div>
            <div className='lg:hidden'>
                <Menu />
            </div>
        </div>
    );
};
// const DummyContent = () => {
//     return (
//         <div className="container mx-auto p-8 pt-24">
//             <h1 className="mb-4 text-center text-3xl font-bold">
//                 Check the navbar at the top of the container
//             </h1>
//             <p className="mb-10 text-center text-sm text-zinc-500">
//                 For demo purpose we have kept the position as{" "}
//                 <span className="font-medium">Sticky</span>. Keep in mind that this
//                 component is <span className="font-medium">fixed</span> and will not
//                 move when scrolling.
//             </p>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//                 {[
//                     {
//                         id: 1,
//                         title: "The",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 2,
//                         title: "First",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 3,
//                         title: "Rule",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 4,
//                         title: "Of",
//                         width: "md:col-span-3",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 5,
//                         title: "F",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 6,
//                         title: "Club",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 7,
//                         title: "Is",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 8,
//                         title: "You",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 9,
//                         title: "Do NOT TALK about",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 10,
//                         title: "F Club",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                 ].map((box) => (
//                     <div
//                         key={box.id}
//                         className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//                     >
//                         <h2 className="text-xl font-medium">{box.title}</h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
export default NavbarHome;
