'use client';

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import { Linkedin, Facebook, Github } from 'lucide-react';
import { urlFor } from '@/lib/imageUrl';
import Image from 'next/image';
import kinzixImage from '@/public/kinzi.png';

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
        <footer className="bg-[#121217] text-white px-6 md:px-20 pt-16 pb-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-12">
                {/* Company Overview */}
                <div>
                    <img
                        src={footerData.logo ? urlFor(footerData.logo).url() : kinzixImage}
                        alt="Kinzix Logo"
                        width={120}
                        height={50}
                        className="object-contain mb-4"
                    />
                    <p className="text-gray-300 text-sm leading-relaxed">
                        At Kinzix, we empower businesses with cutting-edge software, automation, and AI-driven solutions that boost efficiency and drive innovation.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        {navItems.map((menu, i) => (
                            <li key={i}>
                                <a href={menu.link || '#'} className="hover:underline">{menu.name}</a>
                            </li>
                        ))}
                        <li><a href="/careers" className="hover:underline">Careers</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>AI & ML Development</li>
                        <li>Cloud Application</li>
                        <li>Mobile Development</li>
                        <li>Custom Software</li>
                        <li><a href="/services" className="hover:underline">View More</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
                    <p className="text-sm text-gray-400 mb-2">Email: {footerData.email}</p>
                    <p className="text-sm text-gray-400 mb-2">Phone: {footerData.phone}</p>
                    <p className="text-sm text-gray-400 mb-2">Address: {footerData.address}</p>
                    <div className="flex space-x-3 mt-4">
                        {footerData.socials?.map((s, i) => {
                            const iconMap = {
                                linkedin: <Linkedin size={18} />,
                                facebook: <Facebook size={18} />,
                                github: <Github size={18} />,
                            };
                            return (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-all"
                                >
                                    {iconMap[s.platform.toLowerCase()] || s.platform}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                <p>{footerData.copyright}</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href={footerData.privacyPolicyUrl} className="hover:underline">Privacy Policy</a>
                    <a href="/terms" className="hover:underline">Terms</a>
                    <a href="/sitemap" className="hover:underline">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
