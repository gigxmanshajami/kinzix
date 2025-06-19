'use client';

import { useEffect, useState } from 'react';
import Hero from './Hero';
import Service from './Service';
import Teams from './Teams';
import Project from './Project';
import { client } from '@/lib/sanity';
import Howework from './Howework';
import Works from './Works';
import ms from '@/public/ms.png';
import DesignSubscription from './components/Helps';
import Testimonial from './components/Testimonial';
import Image from 'next/image';
import Img from '@/public/illcta.png';
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

      <section className="lg:px-[150px] mt-[8em] h-screen" data-aos="zoom-in" style={{
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
        <VelocityScroll numRows={2} defaultVelocity={2} className='text-sm'>Velocity Scroll</VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </section>
      <section className="lg:px-[114px] h-screen ">
        <Howework data={projects} />
      </section>
      {/* cta block */}
      <section className="lg:px-[150px] mt-[20em] h-screen flex items-center justify-center" >
        <div data-aos="zoom-in-up" className="w-full max-w-[1000px] h-auto rounded-[47px] bg-[#F3F3F3] grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative">

          {/* Content */}
          <div className="flex flex-col justify-center gap-6 p-[20px]">
            <h3 className="font-medium text-[#000000] text-2xl">
              Let’s make things happen
            </h3>
            <p className="text-base text-[#333]">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="shadow-[0_0_0_3px_#000000_inset] hover:bg-transparent border text-white hover:text-black border-black dark:border-white bg-[#191A23] font-bold transform hover:-translate-y-1 transition duration-400 w-[264px] h-[68px] px-[35px] py-[20px] rounded-[14px] cursor-none">
              Get your free proposal
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center absolute right-[7em] top-[-1em]">
            <Image src={Img.src} width={313} height={337} alt="Star" />
          </div>

        </div>
      </section >
      {/* case studies */}
      <section className="lg:px-[155px] h-fit" data-aos="zoom-in-up">
        {/* heading */}
        <div className="max-w-6xl mx-auto mb-10 flex flex-row  gap-10 items-center">
          <h2 className="text-white  w-fit  font-medium  rounded-[7px] items-center flex text-center justify-center text-[40px] px-1.5 h-[51px] bg-[#FE332F]">
            Case Studies
          </h2>
          <p className="text-black w-[580px] h-[46px]">
            {/* At our digital marketing agency, we offer a range of services <br />
            to help businesses grow and succeed online. These services include: */}
          </p>
        </div>
        {/* content */}
        <div className="w-full max-w-[1000px] p-6 bg-[#0F0F15] text-white rounded-[47px] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 overflow-hidden">

          {/* Card 1 */}
          <div className="p-8 flex flex-col justify-between gap-4">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a href="#" className="text-[#F94F4F] font-medium flex cursor-none items-center gap-2">
              Learn more <span className="text-xl">↗</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="p-8 flex flex-col justify-between gap-4">
            <p>
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <a href="#" className="text-[#F94F4F] font-medium  cursor-none flex items-center gap-2">
              Learn more <span className="text-xl">↗</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="p-8 flex flex-col justify-between gap-4">
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
      <section className="lg:px-[150px] h-screen mt-20 " data-aos="zoom-in-up">
        <div className="max-w-6xl mx-auto mb-10 flex flex-row  gap-10 items-center">
          <h2 className="text-white font-medium rounded-[7px] flex items-center justify-center text-[40px] w-fit h-[51px] bg-[#FE332F] whitespace-nowrap px-1.5">
            Our Working Process
          </h2>

          <p className="text-black w-[580px] h-[46px]">
            Step-by-Step Guide to <br />
            Achieving Your Business Goals
          </p>
        </div>

        <div className="space-y-4  max-w-[1000px] p-6">
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
    </div >
  );
}
