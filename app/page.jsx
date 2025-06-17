'use client';

import { useEffect, useState } from 'react';
import Hero from './Hero';
import Service from './Service';
import Teams from './Teams';
import Project from './Project';
import { client } from '@/lib/sanity';
import Howework from './Howework';
import Works from './Works';
import DesignSubscription from './components/Helps';
import Testimonial from './components/Testimonial';
import Image from 'next/image';
import Img from '@/public/illcta.png';
// import Scrollsec from './Scrollsec';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export const dynamic = 'force-dynamic';

const heroQuery = '*[_type == "Hero"][0]';
const projectQuery = '*[_type == "work_sec"][0]';
const worksQuery = '*[_type == "worksCarousel"][0]';
const designSubscriptionQuery = '*[_type == "designSubscription"][0]';
const testimonialQuery = '*[_type == "testimonial"][0]';

export default function Home() {
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
      <section className="lg:px-[150px] h-screen" data-aos="zoom-in">
        {hero ? <Hero data={hero} /> : <div></div>}
      </section>
      <section className="relative mb-10 flex w-full flex-col items-center justify-center overflow-hidden  ">
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
      <section className="lg:px-[155px] h-screen " data-aos="zoom-in-up">
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
    </div >
  );
}
