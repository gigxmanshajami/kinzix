"use client";

import React from 'react';
import Image from 'next/image';
import kinzixImage from '../kinzix.png';
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
        // <nav className="sticky top-0 w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800 backdrop-blur-lg bg-white/30 dark:bg-black/30 flex z-20">
        //     <div className="flex items-center gap-2">
        //         {/* <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" /> */}
        //         <Image src={kinzixImage} alt="Kinzix" width={120} height={120} />
        //         {/* <h1 className="text-base font-bold md:text-2xl">kinzix.com</h1> */}
        //     </div>
        //     <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        //         Login
        //     </button>
        // </nav>
        <div className=" w-full sticky top-0 z-[2000]">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="secondary">Login</NavbarButton>
                        <NavbarButton variant="primary">Book a call</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            {/* <DummyContent /> */}

            {/* Navbar */}
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
