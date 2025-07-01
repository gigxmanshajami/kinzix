'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/lib/sanity';
import kinzixImage from '@/public/kinzi.png';
import { Linkedin, Facebook, Github } from 'lucide-react';
import { urlFor } from '@/lib/imageUrl'; // helper for Sanity image URLs

const Footer = () => {
    const [footerData, setFooterData] = useState(null);
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [footerRes, navRes] = await Promise.all([
                    client.fetch(`*[_type == "footer"][0]`),
                    client.fetch(`*[_type == "nav"][0].menus`)
                ]);
                setFooterData(footerRes);
                setNavItems(navRes || []);
            } catch (error) {
                console.error('Footer fetch error:', error);
            }
        };

        fetchData();
    }, []);

    if (!footerData) return null;

    return (
        <footer className="bg-[#121217] text-white px-6 md:px-20 pt-16 pb-8  bottom-0">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 items-center justify-center">
                {/* Left Section */}
                <div className="space-y-4 flex flex-col items-center justify-center lg:items-start">
                    <img
                        src={footerData.logo ? urlFor(footerData.logo).url() : kinzixImage}
                        alt="Kinzix"
                        width={112}
                        height={50}
                        className="object-contain"
                    />

                    <h2 className="text-white font-medium bg-[#FE332F] text-[20px] px-1.5 rounded-[7px]">
                        {footerData.contactHeading}
                    </h2>

                    <div className="text-sm text-gray-300 text-center lg:text-left space-y-1">
                        <p>Email: {footerData.email}</p>
                        <p>Phone: {footerData.phone}</p>
                        <p>Address: {footerData.address}</p>
                    </div>
                </div>

                {/* Nav links from navbar */}
                <div className="flex flex-wrap gap-6 text-sm font-medium items-center justify-center lg:items-start">
                    {navItems.map((menu, i) => (
                        <a key={i} href={menu.link || '#'} className="hover:underline capitalize">
                            {menu.name}
                        </a>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                    {footerData.socials?.map((s, i) => {
                        const iconMap = {
                            linkedin: <Linkedin size={20} />,
                            facebook: <Facebook size={20} />,
                            github: <Github size={20} />
                        };

                        return (
                            <a
                                key={i}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 hover:scale-125 bg-white text-black rounded-full flex items-center justify-center transition-all"
                            >
                                {iconMap[s.platform.toLowerCase()] || s.platform}
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Subscribe
            <div className="bg-[#1E1E24] rounded-xl p-6 mt-10 flex flex-col md:flex-row gap-4 items-center justify-between">
                <input
                    type="email"
                    placeholder={footerData.subscribePlaceholder}
                    className="w-full md:w-auto px-4 py-3 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none"
                />
                <button className="bg-[#FF3D3D] text-white px-6 py-3 rounded-lg font-medium">
                    {footerData.subscribeButtonText}
                </button>
            </div> */}

            {/* Bottom Line */}
            <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>{footerData.copyright}</p>
                <a href={footerData.privacyPolicyUrl} className="hover:underline">
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
