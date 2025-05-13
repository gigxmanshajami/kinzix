// app/page.js or app/home/page.js
import Hero from './Hero';
import Service from './Service';
import Teams from './Teams';
import Project from './Project';
// import ContactUs from './ContactUs';
// import Conclusion from './Conclusion';
// import Footer from './Footer';
import { client } from '@/lib/sanity';

const heroQuery = '*[_type == "Hero"][0]';
// const serviceQuery = '*[_type == "service"]';
const projectQuery = '*[_type == "project"]';
const teamsQuery = '*[_type == "teamSection"]';
const contactQuery = '*[_type == "contactUsSection"][0]';
const conclusionQuery = '*[_type == "conclusionSection"][0]';
const footerQuery = '*[_type == "footerSection"][0]';

const fetchData = async () => {
  try {
    // Fetch data for all sections
    const hero = await client.fetch(heroQuery);
    // const services = await client.fetch(serviceQuery);
    const projects = await client.fetch(projectQuery);
    const teams = await client.fetch(teamsQuery);
    const contactUs = await client.fetch(contactQuery);
    const conclusion = await client.fetch(conclusionQuery);
    const footer = await client.fetch(footerQuery);
    console.log({
      hero,
      // services,
      projects,
      teams,
      contactUs,
      conclusion,
      footer,
    })
    return {
      hero,
      // services,
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
      // services: null,
      projects: null,
      teams: null,
      contactUs: null,
      conclusion: null,
      footer: null,
    };
  }
};

// Server Component that fetches data and renders the page
export default async function Home() {
  const {
    hero,
    // services,
    projects,
    teams,
    contactUs,
    conclusion,
    footer,
  } = await fetchData();

  return (
    <div className="scroll-smooth">
      <section>
        <Hero data={hero} />
      </section>
      <section >
        <Service data={projects} />
      </section>
      <section>
        <Project data={projects} />
      </section>
      <section>
        <Teams data={teams} contactdt={contactUs} />
      </section>

    </div>
  );
}
