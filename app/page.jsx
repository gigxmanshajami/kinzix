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
      <section className="lg:px-[150px] h-screen">
        {hero ? <Hero data={hero} /> : <div>Loading Hero...</div>}
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
      <section className="lg:px-[150px] mt-[20em] h-screen flex items-center justify-center">
        <div className="w-full max-w-[1000px] h-auto rounded-[47px] bg-[#F3F3F3] grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative">

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
      </section>

    </div>
  );
}
