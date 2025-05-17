import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Infinity,
    Zap,
    Globe,
    Mail,
    Calendar,
    DollarSign,
    Puzzle,
    Search,
    GraduationCap
} from 'lucide-react';

const capabilities = [
    'Web design & UI', 'Social media visuals', 'Infographics', 'Design system',
    'Email design', 'Stationery', 'Icons', 'Packaging & merch', 'Signage',
    'Brochures', 'Logos & branding', 'Digital ads', 'Wireframes'
];

const benefits = [
    {
        title: 'On-demand requests',
        icon: <Infinity color='#FF4B4B' size={40} />,
        description: "Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1."
    },
    {
        title: 'Top-notch quality',
        icon: <Zap color='#FF4B4B' size={40} />,
        description: "High-end work from a dedicated team of senior designers that’s always available when you need it."
    },
    {
        title: 'Powered by - Webflow',
        icon: <Globe color='#FF4B4B' size={40} />,
        description: "We build every site on Webflow, making them dynamic, accessible, and easily scalable."
    },
    {
        title: 'Fast. Responsive. Reliable.',
        icon: <Mail color='#FF4B4B' size={40} />,
        description: "Get regular updates on your projects and can expect to receive your designs within 2-3 days."
    },
    {
        title: 'No Lock in contracts',
        icon: <Calendar color='#FF4B4B' size={40} />,
        description: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime."
    },
    {
        title: 'Great value for money',
        icon: <DollarSign color='#FF4B4B' size={40} />,
        description: "Get the power of a dedicated design team at a fraction of the cost of full-time employee."
    },
    {
        title: 'Customized for you',
        icon: <Puzzle color='#FF4B4B' size={40} />,
        description: "We design and build custom for you. We’re never starting from a template unless you want that."
    },
    {
        title: 'Creative paying',
        icon: <Search color='#FF4B4B' size={40} />,
        description: "We’re here when you need us and not on payroll when you don’t."
    },
    {
        title: 'Expert turnovers',
        icon: <GraduationCap color='#FF4B4B' size={40} />,
        description: "You’re getting 10+ years of design experience with every request. No hand-holding required."
    }
];
const DesignSubscription = () => {
    return (
        <div className="bg-transparent text-white px-6 py-12">
            <h2 className="text-center text-[#FF4B4B] uppercase">Our Capabilities</h2>
            <h1 className="text-4xl font-bold text-center my-4">We can help you with...</h1>
            <div className="flex flex-wrap justify-center gap-2 my-6">
                {capabilities.map((cap, index) => (
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
                    <h2 className="text-4xl font-bold my-4">The design subscription that connects you to your dream team</h2>
                </div>
                <div className="flex flex-col md:flex-col justify-center pt-1.5 gap-4 mt-5">
                    <p className="text-lg text-[#FFFFFF80] ">
                        A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director.
                        We partner with you to ensure that your design elevates your brand to new levels.
                    </p>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                        <Button className="bg-[#FF4B4B] hover:bg-red-600 w-full text-black cursor-pointer">See Pricing</Button>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-3  text-white">
                {benefits.map((benefit, index) => {
                    const total = benefits.length;
                    const itemsPerRow = 3;

                    const isLastInRow = (index + 1) % itemsPerRow === 0;
                    const isInLastRow = index >= total - (total % itemsPerRow || itemsPerRow);

                    return (
                        <div
                            key={index}
                            className={`pt-[43px] pb-[43px] pl-[20px] pr-[20px]
          ${!isLastInRow ? 'md:border-r md:border-r-[#ffffff12]' : ''} 
          ${!isInLastRow ? 'border-b border-b-[#ffffff12]' : ''}
        `}
                        >
                            <div className="text-3xl mb-5">{benefit.icon}</div>
                            <h4 className="font-medium text-[15px] mb-2">{index + 1}. {benefit.title}</h4>
                            <p className='font-light text-[16px]  leading-[23px] text-[#9593A4]'>{benefit.description}</p>
                        </div>
                    );
                })}
            </div>


        </div>
    );
};

export default DesignSubscription;
