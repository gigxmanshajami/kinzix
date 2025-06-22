'use client';

import { useEffect, useState } from 'react';
import Hero from './Hero';
import Service from './Service';
import Teams from './Teams';
import Project from './Project';
import { client } from '@/lib/sanity';
import Howework from './Howework';
// import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import Works from './Works';
import ms from '@/public/ms.png';
import { Rocket, MoveUpRight } from 'lucide-react';
import DesignSubscription from './components/Helps';
import Testimonial from './components/Testimonial';
import Image from 'next/image';
import Img from '@/public/illcta.png';
import mesh from '@/public/msh.svg';
import bgimage from '@/public/wave.svg';
// import Scrollsec from './Scrollsec';
import { Plus, Minus } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We dive deep into your industry, competitors, and audience to craft a custom digital strategy focused on driving measurable results.",
  },
  {
    number: "03",
    title: "Implementation",
    content:
      "Once the strategy is finalized, we begin execution — setting up campaigns, optimizing your website, and aligning all creative elements for launch.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We continuously track performance using analytics and real-time data, refining tactics to improve ROI and overall efficiency.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "You’ll receive detailed reports and insights on a regular basis, with full transparency and open lines of communication at every step.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    content:
      "We don’t stop at success. We constantly test, iterate, and evolve your campaigns to stay ahead of trends and ensure long-term growth.",
  },
];

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import TeamSection from './Teams';
import Calx from './components/cal';

export const dynamic = 'force-dynamic';

const heroQuery = '*[_type == "Hero"][0]';
const projectQuery = '*[_type == "work_sec"][0]';
const worksQuery = '*[_type == "worksCarousel"][0]';
const designSubscriptionQuery = '*[_type == "designSubscription"][0]';
const testimonialQuery = '*[_type == "testimonial"][0]';

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hero, setHero] = useState(null);
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [designSubscription, setDesignSubscription] = useState([]);
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [heroData, projectData, worksData, designData, testimonialData] =
          await Promise.all([
            client.fetch(heroQuery),
            client.fetch(projectQuery),
            client.fetch(worksQuery),
            client.fetch(designSubscriptionQuery),
            client.fetch(testimonialQuery),
          ]);

        setHero(heroData);
        setProjects(projectData);
        setWorks(worksData);
        setDesignSubscription(designData);
        setTestimonial(testimonialData);
        console.log({
          heroData: heroData,
          projectData: projectData,
          worksData: worksData,
          designSubscriptionData: designData,
          testimonialData: testimonialData
        });
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchAll();

    const heroSub = client.listen(heroQuery).subscribe(() =>
      client.fetch(heroQuery).then(setHero)
    );
    const projectSub = client.listen(projectQuery).subscribe(() =>
      client.fetch(projectQuery).then(setProjects)
    );
    const worksSub = client.listen(worksQuery).subscribe(() =>
      client.fetch(worksQuery).then(setWorks)
    );
    const designSub = client.listen(designSubscriptionQuery).subscribe(() =>
      client.fetch(designSubscriptionQuery).then(setDesignSubscription)
    );
    const testimonialSub = client.listen(testimonialQuery).subscribe(() =>
      client.fetch(testimonialQuery).then(setTestimonial)
    );

    return () => {
      heroSub.unsubscribe();
      projectSub.unsubscribe();
      worksSub.unsubscribe();
      designSub.unsubscribe();
      testimonialSub.unsubscribe();
    };
  }, []);

  return (
    <div className=" space-grotesk ">

      <section className="lg:px-[150px] mt-[8em] lg:h-screen h-fit" data-aos="zoom-in" style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundRepeat: 'no-repeat',
      }}>
        {hero ? <Hero data={hero} /> : <div></div>}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div> */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-t from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-t from-background"></div> */}
      </section>
      <section className="relative mb-10 flex w-full flex-col items-center justify-center overflow-hidden  " >
        {/* <Scrollsec /> */}
        <VelocityScroll numRows={2} defaultVelocity={2} >Velocity Scroll</VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </section>
      <section className="lg:px-[114px] h-screen ">
        <Howework data={projects} />
      </section>
      {/* cta block */}
      <section className="lg:px-[150px] px-[10px]  lg:mt-[20em] mt-[62em] lg:h-screen h-fit flex items-center justify-center" >
        <div data-aos="zoom-in-up" className="w-full max-w-[1000px] h-auto rounded-[47px] bg-[#F3F3F3] grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative">

          {/* Content */}
          <div className="flex flex-col justify-center items-center gap-6 p-[20px] lg:items-baseline">
            <h3 className="font-medium text-[#000000] text-2xl">
              Let’s make things happen
            </h3>
            <p className="text-base text-[#333] lg:text-left text-center">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="shadow-[0_0_0_3px_#000000_inset] hover:bg-transparent border text-white hover:text-black border-black dark:border-white bg-[#191A23] font-bold transform hover:-translate-y-1 transition duration-400 w-[264px] h-[68px] px-[35px] py-[20px] rounded-[14px] cursor-none">
              Get your free proposal
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center absolute right-[7em] top-[-1em] hidden lg:block">
            <Image src={Img.src} width={313} height={337} alt="Star" />
          </div>

        </div>
      </section >
      {/* case studies */}
      <section className="lg:px-[155px] mt-10 px-[10px] h-fit" data-aos="zoom-in-up">
        {/* heading */}
        <div className="lg:max-w-6xl w-full justify-center mx-auto mb-10 flex flex-row  gap-10 items-center">
          <h2 className="text-white  w-fit  font-medium  rounded-[7px] items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
            Case Studies
          </h2>
  
        </div>
        {/* content */}
        <div data-aos="fade-up" className="w-full max-w-[1000px] p-6 bg-[#0F0F15] text-white rounded-[47px] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 overflow-hidden">

          {/* Card 1 */}
          <div data-aos="fade-up" className="p-8 flex flex-col justify-between gap-4">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a href="#" className="text-[#F94F4F] font-medium flex cursor-none items-center gap-2">
              Learn more <span className="text-xl">↗</span>
            </a>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up" className="p-8 flex flex-col justify-between gap-4">
            <p>
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <a href="#" className="text-[#F94F4F] font-medium  cursor-none flex items-center gap-2">
              Learn more <span className="text-xl">↗</span>
            </a>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up" className="p-8 flex flex-col justify-between gap-4">
            <p>
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>
            <a href="#" className="text-[#F94F4F] cursor-none font-medium flex items-center gap-2">
              Learn more <span className="text-xl">↗</span>
            </a>
          </div>

        </div>

      </section>
      {/* <section></section> */}
      <section className="lg:px-[150px] px-[10px] lg:h-screen  h-fit mt-20 " data-aos="zoom-in-up">
        <div className="lg:max-w-6xl w-full justify-center lg:justify-baseline mx-auto mb-10 flex lg:flex-row flex-col  gap-10 items-center">
          <h2 className="text-white font-medium rounded-[7px] flex items-center justify-center text-[40px] w-fit h-[51px] bg-[#FE332F] whitespace-nowrap px-1.5">
            Our Working Process
          </h2>

          <p className="text-black w-[580px] h-[46px] text-center lg:text-left text-2xl">
            Step-by-Step Guide to <br />
            Achieving Your Business Goals
          </p>
        </div>

        <div className="space-y-4  max-w-[1000px] lg:p-6">
          {processSteps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div data-aos="fade-up">
                <div
                  key={index}

                  className={`rounded-[20px]  border-t-[0.9px] border-b-[5px] border-x-[0.9px] border-solid border-[black] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#FE332F] text-white' : 'bg-[#F2F2F2] text-black'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex gap-4 items-center">
                      <span className="text-3xl font-bold">{step.number}</span>
                      <span className="text-lg font-medium">{step.title}</span>
                    </div>
                    <div
                      className={`rounded-[60px] border-[0.9px] border-solid border-black p-[3px] transition-colors duration-300 ${isOpen ? 'bg-[#fff] text-black' : 'bg-transparent text-black'
                        }`}
                    >
                      {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </div>
                  </button>

                  {isOpen && step.content && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/30 text-sm">
                      {step.content}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* project */}
      <section className=" lg:px-[150px] px-[10px] lg:h-screen h-fit lg:mt-70 mt-20 mb-90 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="max-w-6xl mx-auto mb-10 flex flex-row  gap-10 items-center justify-center lg:justify-baseline">
            <h2 className="text-white  w-fit  font-medium  rounded-[7px] items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
              Our projects
            </h2>
        
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "John Smith",
                role: "CEO and Founder",
                desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
                img: "https://framerusercontent.com/images/dDcewqo47ogdFFnnHpflBchPNCc.png?scale-down-to=1024",
              },
              {
                name: "Jane Doe",
                role: "Director of Operations",
                desc: "7+ years of experience in project management and team leadership. Strong communication skills",
                img: "https://framerusercontent.com/images/iNGKmJrUSas0ik37FzdISFentHU.png?scale-down-to=1024",
              },
              {
                name: "Michael Brown",
                role: "Senior SEO Specialist",
                desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
                img: "https://framerusercontent.com/images/zcaQm8uPAFrAZpATDCQ4j6ixQs.jpg",
              },
              {
                name: "Michael Brown",
                role: "Senior SEO Specialist",
                desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
                img: "https://framerusercontent.com/images/MpdHGfgLLPFhNJB07Cs4dxk7Y.jpg",
              },
              {
                name: "Michael Brown",
                role: "Senior SEO Specialist",
                desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
                img: "https://framerusercontent.com/images/KvYvjtOYlcp9y14M0HwCfzMOyA.jpg",
              },
              {
                name: "Michael Brown",
                role: "Senior SEO Specialist",
                desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
                img: "https://framerusercontent.com/images/iNGKmJrUSas0ik37FzdISFentHU.png?scale-down-to=1024",
              },
              // add more as needed
            ].map((person, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden bg-white text-black border-[1px] border-black border-b-[3px] transition-all duration-300"
                data-aos="zoom-in-up"
              >
                {/* Thumbnail */}
                {/* object-fit: cover;
    object-position: top; */}
                <img src={person.img} alt={person.name} className="w-full h-[200px] object-cover object-top" />

                {/* Info */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{person.name}</h3>
                      <p className="text-sm text-gray-500">{person.role}</p>
                    </div>
                    <div className={`w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#191A23]  hover:scale-125 cursor-pointer transition-all`}>
                      <MoveUpRight color={'#B9FF66'} strokeWidth={2.27} />
                    </div>
                  </div>
                  <hr className="my-3 border-t-[1px] border-gray-300" />
                  <p className="text-sm">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:px-[150px] h-screen mt-56 pb-[60px] " data-aos="zoom-in-up">
        {/* heading */}
        <div className="max-w-6xl mx-auto mb-10 flex flex-row  gap-10 items-center">
          <h2 className="text-white  w-fit  font-medium  rounded-[7px] items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
            Testimonials
          </h2>
          <p className="text-black w-[580px] h-[46px]">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>
        <Testimonial />
      </section>
      <section className="lg:px-[150px] h-screen mt-20" data-aos="zoom-in-up">
        <div className="max-w-6xl mx-auto mb-10 flex flex-row  gap-10 items-center">
          <h2 className="text-white font-medium rounded-[7px] flex items-center justify-center text-[40px] w-fit h-[51px] bg-[#FE332F] whitespace-nowrap px-1.5">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#f2f2f2] h-[98vh] rounded-[40px] p-8 lg:p-16">

          {/* Left Form */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-red-600 border-2 border-red-300" />
                <span className="text-sm font-medium text-black">Say Hi</span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-black rounded-xl px-4 py-3 outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-black rounded-xl px-4 py-3 outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full border border-black rounded-xl px-4 py-3 outline-none resize-none bg-white"
                />
              </div>

              <button className="w-full bg-[#18181B] text-white py-3 rounded-xl font-medium">
                Send Message
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-end">
            {/*     color: transparent;
    width: 290px;
    position: relative;
    right: -67px;
} */}
            <Image
              src={ms}
              alt="Illustration"
              className="rounded-[32px] object-cover h-96 lg:h-full relative rightp-[-67px]"
              width={290}
              height={290}
            />
          </div>

        </div>
      </section>
      {/* style={{
        backgroundImage: `url(${mesh.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }} */}
      <section className="relative lg:px-[150px] h-fit mt-30 overflow-hidden" data-aos="zoom-in-up" >


        {/* Heading */}
        <div className="relative max-w-6xl mx-auto mb-10 flex flex-row gap-10 items-center z-10" >
          <h2 className="text-white font-medium rounded-[7px] flex items-center justify-center text-[40px] w-fit h-[51px] bg-[#FE332F] whitespace-nowrap px-1.5">
            Or Schedule a meeting
          </h2>
          {/* <img
            src={mesh.src}
            // className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] z-0 pointer-events-none select-none"
            alt="Glow"
          /> */}
        </div>

        {/* Main Container */}
        <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between bg-[#f2f2f2] h-fit rounded-[40px] p-8 lg:p-8 z-10 border-[1px] border-black border-b-[6px]" >
          <Calx />
        </div>
      </section>
      {/* <section classNamesptool.py v4.8.1
Serial port COM6
Connecting......................................

A fatal error occurred: Failed to connect to ESP32: No serial data received.
For troubleshooting steps visit: https://docs.espressif.com/projects/esptool/en/latest/troubleshooting.html
Failed uploading: uploading error: exit status 2e="relative lg:px-[150px] h-fit mt-30 overflow-hidden" data-aos="zoom-in-up" >
        <div className="max-w-6xl mx-auto mb-10 flex flex-row  gap-10 items-center">
          <h2 className="text-white  w-fit  font-medium  rounded-[7px] items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
            We Work Globally
          </h2>
          <p className="text-black w-[580px] h-[46px]">
            No matter where you're located, our team ensures smooth collaboration and delivers high-quality software solutions to clients across the globe.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </section> */}
    </div >
  );
}
