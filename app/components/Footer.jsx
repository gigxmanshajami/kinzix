import Image from 'next/image';
import { Linkedin, Facebook, Github, Instagram } from 'lucide-react';
import kinzixImage from "@/public/kinzi.png";
const Footer = () => {
    return (
        <footer data-aos="zoom-in-up" className="bg-[#121217] text-white px-6 md:px-20 pt-16 pb-8 rounded-t-3xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 items-center justify-center lg:items-normal lg:justify-between">

                {/* Left Section */}
                <div className="space-y-4 flex flex-col items-center justify-center lg:items-baseline lg:justify-baseline">
                    {/* <h1 className="text-2xl font-bold"> 
                    
                    </h1> */}
                    <img
                        src={kinzixImage.src}
                        alt="Kinzix"
                        className="object-contain h-fit w-[112px]"
                    // width={112}

                    />
                    <div className="max-w-6xl mb-10 mt-10 flex flex-row  gap-10 items-center">
                        <h2 className="text-white font-medium rounded-[7px] flex items-center justify-center text-[20px] w-fit h-fit bg-[#FE332F] whitespace-nowrap px-1.5">
                            Contact Us
                        </h2>
                    </div>
                    <div className="text-sm text-gray-300 items-center justify-center text-center lg:items-baseline lg:justify-baseline lg:text-left space-y-1">
                        <p>Email: info@kinzix.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>
                            Address: 1234 Main St<br />
                            Moonstone City, Stardust State 12345
                        </p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap gap-6 text-sm font-medium items-center justify-center lg:items-baseline lg:justify-baseline">
                    <a href="#" className="hover:underline">About us</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Use Cases</a>
                    <a href="#" className="hover:underline">Pricing</a>
                    <a href="#" className="hover:underline">Blog</a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                    <div className="w-8 h-8  hover:scale-125 cursor-pointer transition-all bg-white rounded-full flex items-center justify-center text-black font-bold"><Linkedin stroke='#000' fill='#000' size={20} strokeOpacity={2}   color='#000' /></div>
                    <div className="w-8 h-8 hover:scale-125 cursor-pointer transition-all bg-white rounded-full flex items-center justify-center text-black font-bold"><Facebook stroke='#000' fill='#000' size={20}  strokeOpacity={2}  color='#000' /></div>
                    <div className="w-8 h-8 hover:scale-125 cursor-pointer transition-all bg-white rounded-full flex items-center justify-center text-black font-bold"><Github stroke='#000' fill='#000' size={20}  strokeOpacity={2}  color='#000' /></div>
                    {/* <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold"><Instagram stroke='#000'   size={20} strokeWidth={3} strokeOpacity={4}  color='#000' /></div> */}
                </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-[#1E1E24] rounded-xl p-6 mt-10 flex flex-col md:flex-row gap-4 items-center justify-between">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full md:w-auto px-4 py-3 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none"
                />
                <button className="bg-[#FF3D3D] text-white px-6 py-3 rounded-lg font-medium">
                    Subscribe to news
                </button>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>© 2025 Kinzix.com. All Rights Reserved.</p>
                <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
