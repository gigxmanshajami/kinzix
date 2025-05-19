// app/page.js or app/home/page.js
import Hero from './Hero';
import Service from './Service';
import Teams from './Teams';
import Project from './Project';
// import ContactUs from './ContactUs';
// import Conclusion from './Conclusion';
// import Footer from './Footer';
import { client } from '@/lib/sanity';
import Howework from './Howework';
import Works from './Works';
import DesignSubscription from './components/Helps';
import Testimonial from './components/Testimonial';

export const dynamic = 'force-dynamic'; // <- this is the key

const heroQuery = '*[_type == "Hero"][0]';
// const serviceQuery = '*[_type == "service"]';
const projectQuery = '*[_type == "project"]';
const teamsQuery = '*[_type == "teamSection"]';
const contactQuery = '*[_type == "contactUsSection"][0]';
const conclusionQuery = '*[_type == "conclusionSection"][0]';
const footerQuery = '*[_type == "footerSection"][0]';

const fetchData = async () => {
  try {
    const hero = await client.fetch(heroQuery);
    const projects = await client.fetch(projectQuery);
    const teams = await client.fetch(teamsQuery);
    const contactUs = await client.fetch(contactQuery);
    const conclusion = await client.fetch(conclusionQuery);
    const footer = await client.fetch(footerQuery);

    return {
      hero,
      projects,
      teams,
      contactUs,
      conclusion,
      footer,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      hero: null,
      projects: null,
      teams: null,
      contactUs: null,
      conclusion: null,
      footer: null,
    };
  }
};

export default async function Home() {
  const {
    hero,
    projects,
    teams,
    contactUs,
    conclusion,
    footer,
  } = await fetchData();

  return (
    <div className="scroll-smooth ">
      <section className='lg:px-[150px]'>
        <Hero data={hero} />
      </section>
      <section className='lg:px-[150px] relative backdrop-blur-[10px] z-10'>
        <Howework />
      </section>
      <section className='relative z-20'>
        <Works />
      </section>
      <section className='px-[150px] relative backdrop-blur-[10px] z-10'>
        <DesignSubscription />
      </section>
      <section className='relative z-20'>
        <Testimonial />
      </section>
    </div>
  );
}
