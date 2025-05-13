'use client'
import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
// import 
import image from '@/public/kzfo.png';
import Image from 'next/image';
import GlowingBackground from "./Glowing";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { client } from "@/lib/sanity";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const conclusionQuery = '*[_type == "conclusionSection"][0]';
    const footerQuery = '*[_type == "footerSection"][0]';
    const [text, setText] = useState('');
    const fetchData = async () => {
        try {
            // Fetch data for all sections

            const conclusion = await client.fetch(conclusionQuery);
            const footer = await client.fetch(footerQuery);
            console.log({
                conclusion,
                footer,
            })
            setText(
                conclusion.mainHeading
            );
            return {
                conclusion,
                footer,
            };
        } catch (error) {
            console.error("Error fetching data:", error);
            return {
                hero: null,
                // services: null,
                projects: null,
                teams: null,
                contactUs: null,
                conclusion: null,
                footer: null,
            };
        }
    };


    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            setSuccess(false);
            return;
        }
        setError("");
        setSuccess(true);
        setEmail("");
    };
    useEffect(async () => {
        fetchData();
    }, [])
    return (
        <>
            <div style={{
                bottom: "0",
                position: "relative",
                zIndex: "50",
                // top: "100%",
                top: '16%',
                boxShadow: 'none',
            }}>
                {/* Top CTA Section */}
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                            {text}
                        </p>
                    </div>
                </BackgroundGradientAnimation>
            </div>

            <footer className="bg-gray-50"
                style={{
                    bottom: '0',
                    position: 'relative',
                    zIndex: '50',
                    background: '#ffffff00',
                    backdropFilter: 'blur(10px)',
                    // top: '100%',
                    marginTop: '5em',
                }}
            >
                {/* Main Footer Section */}
                < div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Company Info */}
                        <div>
                            {/* <img
                            src="https://images.unsplash.com/photo-1614680376739-414d95ff43df"
                            alt="Company Logo"
                            className="h-12 w-auto mb-6"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/150x50?text=Logo";
                            }}
                        /> */}
                            <Image src={image} alt="kinzix" />
                            <p className="text-gray-600 mb-8">
                                We are dedicated to delivering innovative solutions that empower businesses to thrive in the digital age.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300" aria-label="Facebook">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" aria-label="Twitter">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-300" aria-label="LinkedIn">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-300" aria-label="Instagram">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3" />
                                    <p className="text-gray-600">123 Business Avenue, Suite 100<br />New York, NY 10001</p>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-gray-400 mr-3" />
                                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">+1 (234) 567-890</a>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-gray-400 mr-3" />
                                    <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600">contact@example.com</a>
                                </div>
                                <div className="flex items-start">
                                    <FaClock className="text-gray-400 mt-1 mr-3" />
                                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Subscribe Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6">Subscribe to Our Newsletter</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        aria-label="Email subscription"
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                    {success && <p className="text-green-500 text-sm mt-1">Thank you for subscribing!</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Subscribe Now
                                </button>
                                <p className="text-xs text-gray-500 mt-2">
                                    By subscribing, you agree to our{" "}
                                    <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div >

                {/* Bottom Copyright Section */}
                < div style={{
                    borderTopWidth: 0.2,
                    borderColor: "#ffffff24",
                }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} Kinzix InfoTech. All rights reserved.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-sm text-gray-500 hover:text-blue-600 underline">Privacy Policy</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-blue-600 underline">Terms of Service</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-blue-600 underline">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div >
            </footer >
        </>
    );
};

export default Footer;