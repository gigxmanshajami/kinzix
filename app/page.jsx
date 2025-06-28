'use client';

import { useEffect, useState } from 'react';
import Hero from './Hero';
import Service from './Service';
import Teams from './Teams';
import { urlFor } from "@/lib/imageUrl";
import Project from './Project';
import { client } from '@/lib/sanity';
import Howework from './Howework';
// import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import Works from './Works';
import { getCalApi } from "@calcom/embed-react";
import ms from '@/public/ms.png';
import { Rocket, MoveUpRight } from 'lucide-react';
import DesignSubscription from './components/Helps';
import Testimonial from './components/Testimonial';
import Image from 'next/image';
import Img from '@/public/illcta.png';
import mesh from '@/public/msh.svg';
import bgimage from '@/public/pd.png';
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
const worksQuery = '*[_type == "cs_studies"][0]';
const designSubscriptionQuery = '*[_type == "working_process"][0]';
const testimonialQuery = '*[_type == "our_projects"][0]';

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hero, setHero] = useState([]);
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:info@kinzix.com?subject=${encodeURIComponent(
    `Message from ${name || "No Name"} (${email || "No Email"})`
  )}&body=${encodeURIComponent(message || "No message")}`;

  const [designSubscription, setDesignSubscription] = useState([]);
  const [testimonial, setTestimonial] = useState(null);
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
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
        setWorks(worksData.case_studies);
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
  useEffect(() => {
    console.log(testimonial, 'ds')
  }, [testimonial])

  const steps = designSubscription?.steps || [];
  return (
    // object-position: center;
    // object-fit: contain;
    // position: absolute;
    // width: 200px;
    // top: 80px;
    // /* left: 5px; */
    // right: 106px;
    // transform: scale(3);
    // backdrop-filter: blur(10px);
    // z-index: -1;
    // filter: blur(36px);
    <>
      {/* object-position: center;
    object-fit: contain;
    position: absolute;
    width: 900px;
    top: 6px;
    backdrop-filter: blur(1px);
    z-index: -1; */}
      <section id="home" className="lg:px-[150px] px-[16px] mb-48 lg:mb-0 mt-[8em] lg:h-screen h-fit relative flex justify-center" data-aos="zoom-in" >
        <img
          data-aos="zoom-in-up"
          src={bgimage.src}
          className="absolute top-[100px] lg:top-[-124px] scale-[3] lg:scale-100 w-[200px] lg:w-[900px] right-[120px!important] lg:right-0 "
          style={{
            objectPosition: 'center',
            objectFit: 'contain',
            backdropFilter: 'blur(10px)',
            zIndex: -1,
            filter: 'blur(36px)',
          }}
        />
        <Hero data={hero} />
      </section>

      <section id="services" className="lg:px-[114px] h-fit bg-[#dcbbfe] ">
        <Howework data={projects} />
      </section>

      <section id="oup" className="lg:px-[150px] px-[16px] lg:h-screen h-fit mt-20" data-aos="zoom-in-up">
        <div className="lg:max-w-6xl w-full justify-center lg:justify-baseline mx-auto mb-10 flex lg:flex-row flex-col gap-10 items-center">
          <h2 className="text-white font-medium  flex items-center justify-center text-4xl lg:text-[40px] w-fit h-[51px] bg-[#FE332F] whitespace-nowrap px-1.5">
            {designSubscription?.mainHeading || "Our Working Process"}
          </h2>
          <p className="text-black w-fit lg:w-[580px] h-[46px] text-center lg:text-left text-2xl hidden lg:block">
            {designSubscription?.subHeading || "Step-by-Step Guide to Achieving Your Business Goals"}
          </p>
        </div>

        <div className="space-y-4 max-w-[1000px]">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={step._key} data-aos="fade-up">
                <div
                  className={` border-t-[0.9px] border-b-[5px] border-x-[0.9px] border-solid border-[black] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#FE332F] text-white' : 'bg-[#F2F2F2] text-black'
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
                      className={` border-[0.9px] border-solid border-black p-[3px] transition-colors duration-300 ${isOpen ? 'bg-[#fff] text-black' : 'bg-transparent text-black'
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
      {/* ind */}
      <section className="w-full py-o mt-[116px] pb-[4em] pt-[0.1px] md:px-12 lg:px-[150px] px-[16px]  bg-[#e3e3e3]">
        <div className="max-w-7xl mx-20 mx-auto grid mt-20 grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-gray-500 uppercase">Custom</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Tailored Software Solutions for Every Business Need
            </h2>
            <p className="mt-4 text-gray-600">
              At Kinzix, we specialize in creating custom software solutions designed specifically for your unique challenges.
              Our expert team collaborates closely with you to ensure your vision becomes a reality.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-gray-100 text-gray-700">
                  📦
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Innovative Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Experience cutting-edge technology that drives efficiency and growth for your business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-gray-100 text-gray-700">
                  👨‍💻
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Expert Team</h4>
                  <p className="text-gray-600 text-sm">
                    Our skilled developers are dedicated to delivering exceptional results tailored to your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-6 py-2 bg-black text-white hover:bg-gray-800">
                Learn More
              </button>
              <button className="px-6 py-2 border border-black text-black  hover:bg-gray-100">
                Sign Up
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-64 md:h-80 bg-gray-100 flex items-center justify-center rounded-md">
            <span className="text-gray-400 text-sm">Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* <section></section> */}

      {/* project */}
      {testimonial?.projectList?.length > 0 && (
        <section style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: '600px',
          backgroundPosition: 'center',
          backgroundRepeat: 'space',
        }} id='projects' className="lg:px-[150px] px-[16px] lg:h-screen h-fit lg:mt-30 mt-20 text-white">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <div className="max-w-6xl mx-auto mb-10 flex flex-row gap-10 items-center justify-center lg:justify-baseline">
              <h2 className="text-white w-fit font-medium items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
                {testimonial.mainHeading || "Our Projects"}
              </h2>
            </div>

            {/* Team Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {testimonial.projectList.map((person, i) => (
                <div
                  key={person._key || i}
                  className=" overflow-hidden bg-white text-black border-[1px] border-black border-b-[3px] transition-all duration-300"
                  data-aos="zoom-in-up"
                >
                  {/* Thumbnail */}
                  <img
                    src={urlFor(person.image?.asset?._ref)}
                    alt={person.name}
                    className="w-full h-[200px] object-cover object-top"
                  />

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{person.name}</h3>
                      </div>
                      <a href={person.pr_url} target="_blank" rel="noopener noreferrer">
                        <div className="w-[40px] h-[40px] flex items-center justify-center  bg-[#191A23] hover:scale-125 cursor-pointer transition-all">
                          <MoveUpRight color="#B9FF66" strokeWidth={2.27} />
                        </div>
                      </a>
                    </div>
                    <hr className="my-3 border-t-[1px] border-gray-300" />
                    <p className="text-sm">{person.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* case studies */}
      <section style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundSize: '600px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} id="cs" className="lg:px-[155px] mt-[5em] px-[16px] h-fit" data-aos="zoom-in-up">
        {/* heading */}
        <div className="lg:max-w-6xl w-full justify-center mx-auto mb-10 flex flex-row gap-10 items-center">
          <h2 className="text-white w-fit font-medium  items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
            Case Studies
          </h2>
        </div>

        {/* content */}
        <div
          data-aos="fade-up"
          className="w-full max-w-[1000px] p-6 bg-[#0F0F15] text-white  grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 overflow-hidden"
        >
          {works.length > 0 ? (
            works.map((work) => (
              <div key={work._key} data-aos="fade-up" className="p-8 flex flex-col justify-between gap-4">
                <p>{work.para}</p>
                <a
                  href={work.cs_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F94F4F] font-medium cursor-none flex items-center gap-2"
                >
                  Learn more <span className="text-xl">↗</span>
                </a>
              </div>
            ))
          ) : (
            <div className="p-8 col-span-3 text-center opacity-50">Loading case studies...</div>
          )}
        </div>
      </section>
      <section className="lg:px-[150px] hidden h-screen mt-20 px-[16px] pb-[60px]  lg:mt-90" data-aos="zoom-in-up">
        {/* heading */}
        <div className="max-w-6xl mx-auto mb-10 flex lg:flex-row flex-col  gap-10 items-center">
          <h2 className="text-white  w-fit  font-medium  rounded-[7px] items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
            Testimonials
          </h2>
          <p className="text-black lg:w-[580px] w-fit text-center lg:text-left h-[46px]">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>
        <Testimonial />
      </section>


      {/* style={{
        backgroundImage: `url(${mesh.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }} */}
      <section style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundSize: '600px',
        backgroundPosition: 'center',
        backgroundRepeat: 'space',
      }} className="relative lg:px-[150px] px-[16px] mt-10  h-fit lg:mt-30 overflow-hidden bg-[#f1f1f1] pt-[20px] " data-aos="zoom-in-up" >


        {/* Heading */}
        <div className="relative max-w-6xl mx-auto mb-10 flex flex-row gap-10 items-center z-10 justify-center lg:justify-baseline" >
          <h2 className="text-white font-medium  flex items-center justify-center lg:text-[40px] w-fit h-[51px] bg-[#FE332F] whitespace-nowrap px-1.5 text-3xl ">
            Schedule a meeting
          </h2>
          {/* <img
            src={mesh.src}
            // className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] z-0 pointer-events-none select-none"
            alt="Glow"
          /> */}
        </div>

        {/* Main Container */}
        <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between bg-[#f2f2f2] h-fit  rounded-t-2xl p-8 lg:p-8 z-10 border-[1px] border-black " >
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
    </>
  );
}
