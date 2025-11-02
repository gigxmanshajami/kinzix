'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Sparkles, Globe2, Code2, Calendar, User, Quote } from 'lucide-react';
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/imageUrl";
import { client } from '@/lib/sanity';
import { getCalApi } from "@calcom/embed-react";
import { Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveUpRight } from 'lucide-react';
import Hero from './Hero';
import Service from './Service';
import Calx from './components/cal';
import { FollowingPointerDemo } from './components/ProjectContainer';
import { DotPattern } from '@/components/ui/dot-pattern';

gsap.registerPlugin(ScrollTrigger);

export const dynamic = 'force-dynamic';

// Queries
const heroQuery = '*[_type == "Hero"][0]';
const projectQuery = `*[_type == "work_sec"][0]`;
const worksQuery = '*[_type == "cs_studies"][0]';
const designSubscriptionQuery = '*[_type == "working_process"][0]';
const testimonialQuery = `*[_type == "our_projects"][0]{..., founder->}`;
const blogQuery = `*[_type == "blog"] | order(publishedAt desc)[0...4]`;

const logos = ['/mx.png', '/jwr.png', '/astrexa.png', '/abh.png', '/rwd.png', '/xpdedge.png', '/hd-r.png'];

// Animated Background Glow Component
const AnimatedGlow = ({ position = "top-right", color = "#FE332F", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
      scale: [1, 1.2, 0.9, 1.3, 1],
      x: [0, 50, -30, 40, 0],
      y: [0, -40, 30, -20, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={cn(
      "absolute w-96 h-96 rounded-full blur-3xl pointer-events-none",
      position === "top-right" && "top-0 right-1/4",
      position === "bottom-left" && "bottom-0 left-1/4",
      position === "center" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      position === "top-left" && "top-20 left-20",
      position === "bottom-right" && "bottom-20 right-20"
    )}
    style={{
      background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
    }}
  />
);

// Gradient Text
const GradientText = ({ children, className = "" }) => (
  <span className={cn("bg-gradient-to-r from-[#FE332F] via-pink-500 to-purple-500 bg-clip-text text-transparent", className)}>
    {children}
  </span>
);

// Badge
const Badge = ({ children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="inline-flex items-center gap-2 bg-white/5 text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-xl"
  >
    {Icon && <Icon className="w-4 h-4 text-[#FE332F]" />}
    {children}
  </motion.div>
);

// Floating Card
const FloatingCard = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={cn("h-full", className)}
  >
    {children}
  </motion.div>
);

// Gradient Border Card
const GradientBorderCard = ({ children, className = "" }) => (
  <div className={cn("relative group", className)}>
    <div className="absolute -inset-px bg-gradient-to-r from-[#FE332F] via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
    <div className="relative bg-[#111111] rounded-2xl border border-white/10">
      {children}
    </div>
  </div>
);

// Section Header
const SectionHeader = ({ badge, title, titleHighlight, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-16 text-center font-sans"
  >
    {badge && <div className="mb-6"><Badge icon={Sparkles}>{badge}</Badge></div>}
    <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
      {title}{' '}
      {titleHighlight && <GradientText>{titleHighlight}</GradientText>}
    </h2>
    {description && (
      <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

// Logo Marquee
const LogoMarquee = ({ logos }) => (
  <div className="relative overflow-hidden bg-black/40 py-16 border-y border-white/5">
    <AnimatedGlow position="center" color="#9333ea" delay={2} />
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <p className="text-gray-400 font-medium">Trusted by Industry Leaders</p>
    </motion.div>
    <div className="relative flex">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 px-8"
      >
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 transition-all duration-300">
            <img src={logo} alt={`Partner ${idx}`} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

// Services Component
const ModernServices = ({ data }) => {
  const gridRef = useRef(null);
  const services = data?.listgridh || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', { y: 40, opacity: 0, scale: 0.98 }, {
        y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="py-20 relative">
      <AnimatedGlow position="top-left" color="#FE332F" delay={1} />
      <SectionHeader
        badge="WHAT WE DO"
        title="Our"
        titleHighlight="Services"
        description={data?.headingh || "Comprehensive solutions for your business needs"}
      />
      <div ref={gridRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={service._key || i} className="service-card group relative bg-[#111111] border border-white/10 rounded-2xl p-8 hover:bg-[#1a1a1a] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FE332F]/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex justify-between items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-lg bg-white/5">{service.text1}</span>{' '}
                    <span className="inline-block px-3 py-1 rounded-lg bg-white/5">{service.text2}</span>
                  </h3>
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FE332F] hover:text-pink-400 font-medium transition-colors group/link">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FE332F]/10 group-hover/link:bg-[#FE332F]/20 transition-colors">
                      <MoveUpRight className="w-5 h-5" />
                    </div>
                    <span>Learn more</span>
                  </a>
                </div>
                {service.box_image && (
                  <div className="w-32 lg:w-40 flex-shrink-0">
                    <img src={urlFor(service.box_image?.asset?._ref)} alt={service.text1} className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Section Component
const BlogSection = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="py-24 px-6 lg:px-32 bg-[#111111] relative">
      <AnimatedGlow position="bottom-right" color="#9333ea" delay={3} />
      <SectionHeader
        badge="INSIGHTS"
        title="Latest"
        titleHighlight="Blogs"
        description="Stay updated with our thoughts and industry insights"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, i) => (
          <FloatingCard key={blog._id} delay={i * 0.1}>
            <a href={`/resources/blogs/${blog.slug?.current}`} className="group block h-full">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden h-full hover:border-[#FE332F]/50 transition-all duration-300">
                {blog.mainImage && (
                  <div className="aspect-video overflow-hidden">
                    <img src={urlFor(blog.mainImage).url()} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#FE332F] transition-colors">{blog.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{blog.excerpt || blog.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[#FE332F] font-medium group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </FloatingCard>
        ))}
      </div>
    </section>
  );
};

// Main Component
export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const quote = "The best way to predict the future is to create it";
  const [hero, setHero] = useState([]);
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [designSubscription, setDesignSubscription] = useState([]);
  const [testimonial, setTestimonial] = useState(null);
  const [data, setData] = useState(null);
  const [industriesData, setIndustriesData] = useState(null);
  const [serviceData, setServiceData] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "industriesSection"][0]`).then(setIndustriesData).catch(console.error);
    client.fetch(`*[_type == "technologiesSection"][0]`).then(setData).catch(console.error);
    client.fetch(`*[_type == "services"]`).then(setServiceData).catch(console.error);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch(blogQuery);
        setBlogs(data);
      } catch (error) {
        console.error("Blog fetch error:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [heroData, projectData, worksData, designData] = await Promise.all([
          client.fetch(heroQuery), client.fetch(projectQuery),
          client.fetch(worksQuery), client.fetch(designSubscriptionQuery),
        ]);
        setHero(heroData);
        setProjects(projectData);
        setWorks(worksData.case_studies);
        setDesignSubscription(designData);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectData, allFounders] = await Promise.all([
          client.fetch(`*[_type == "our_projects"][0]`),
          client.fetch(`*[_type == "founder"]{_id, name, position, photo}`)
        ]);
        const projectsWithFounder = projectData.projectList?.map((proj) => {
          const founderRef = proj.founder?._ref;
          const matchedFounder = allFounders.find(f => f._id === founderRef);
          return { ...proj, founder: matchedFounder || null };
        });
        setTestimonial({ ...projectData, projectList: projectsWithFounder });
      } catch (err) {
        console.error("Error fetching project data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-hidden bg-black font-sans">
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
        {/* Magic UI Dot Pattern */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "absolute inset-0"
          )}
        />

        {/* Subtle Glowing Orbs - Behind everything */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#FE332F]/40 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-purple-600/40 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[450px] h-[450px] bg-pink-500/30 rounded-full blur-[120px]"
          />
        </div>

        {/* Bottom Fade to Black */}
        {/* Subtle Full-Height Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-10" />

        <Hero data={hero} />
      </section>
      <LogoMarquee logos={logos} />

      {/* SERVICES */}
      <section id="services" className="relative py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <ModernServices data={projects} />
      </section>

      {/* SERVICE STICKY SCROLL */}
      {serviceData.length > 0 && (
        <section className="relative bg-black">
          <Service data={serviceData} />
        </section>
      )}

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 lg:px-32 bg-gradient-to-b from-black to-[#111111] relative">
        <AnimatedGlow position="center" color="#FE332F" delay={2} />
        <SectionHeader badge="HOW WE WORK" title="Our" titleHighlight="Process" description="A systematic approach to deliver exceptional results" />
        <div className="max-w-4xl mx-auto space-y-4">
          {(designSubscription?.steps || []).map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <FloatingCard key={step._key} delay={index * 0.08}>
                <motion.div className={cn("border rounded-2xl overflow-hidden transition-all duration-300", isOpen ? "bg-gradient-to-r from-[#FE332F]/20 to-purple-500/20 border-[#FE332F]/50" : "bg-[#111111] border-white/10 hover:border-white/20")}>
                  <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full px-8 py-6 flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                      <span className={cn("text-4xl font-bold px-5 py-2 rounded-xl", isOpen ? "bg-white/10 text-white" : "bg-white/5 text-gray-400")}>{step.number}</span>
                      <span className="text-xl font-semibold text-left text-white">{step.title}</span>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className={cn("rounded-full p-2 border", isOpen ? "bg-[#FE332F] text-white border-[#FE332F]" : "border-white/20 text-gray-400")}>
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-8 pb-6 pt-2 border-t border-white/10 text-gray-300">{step.content}</div>
                  </motion.div>
                </motion.div>
              </FloatingCard>
            );
          })}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 px-6 lg:px-32 bg-black relative">
        <AnimatedGlow position="top-right" color="#9333ea" delay={1} />
        <SectionHeader badge="INDUSTRIES" title="Sectors We" titleHighlight="Serve" description="Tailored solutions across diverse industries" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(industriesData?.industries || []).map((item, i) => {
            const industry = item.industry || item;
            return (
              <FloatingCard key={i} delay={i * 0.08}>
                <GradientBorderCard>
                  <div className="p-8 hover:bg-[#1a1a1a] transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FE332F] to-purple-500 rounded-xl flex items-center justify-center mb-6">
                      <Globe2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry}</h3>
                  </div>
                </GradientBorderCard>
              </FloatingCard>
            );
          })}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="technologies" className="py-24 px-6 lg:px-32 bg-gradient-to-b from-[#0a0a0a] to-black relative">
        <AnimatedGlow position="bottom-left" color="#FE332F" delay={2} />
        <SectionHeader badge="TECH STACK" title="Technologies We" titleHighlight="Master" description="Building with cutting-edge tools and frameworks" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {(data?.technologies || []).map((item, i) => {
            const tech = item.tech || item;
            return (
              <FloatingCard key={i} delay={i * 0.02}>
                <div className="group p-4 bg-[#111111] border border-white/10 rounded-xl hover:bg-[#1a1a1a] hover:border-[#FE332F]/50 transition-all duration-300 text-center">
                  <Code2 className="w-8 h-8 text-[#FE332F] mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs font-semibold text-white">{tech}</h3>
                </div>
              </FloatingCard>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      {testimonial?.projectList?.length > 0 && (
        <section id="projects" className="py-24 px-6 lg:px-32 bg-black relative">
          <AnimatedGlow position="center" color="#9333ea" delay={1} />
          <SectionHeader badge="OUR WORK" title="Featured" titleHighlight="Projects" description="Success stories from our clients" />
          <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonial.projectList.map((person, i) => (
              <FloatingCard key={i} delay={i * 0.1}>
                <FollowingPointerDemo img={urlFor(person.image)} info={person} />
              </FloatingCard>
            ))}
          </div>
        </section>
      )}

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-24 px-6 lg:px-32 bg-gradient-to-b from-[#0a0a0a] to-black relative">
        <AnimatedGlow position="top-left" color="#FE332F" delay={3} />
        <SectionHeader badge="CASE STUDIES" title="Success" titleHighlight="Stories" description="Real results from real partnerships" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <FloatingCard key={work._key} delay={i * 0.1}>
              <div className="group h-full bg-[#111111] border border-white/10 rounded-2xl p-8 hover:bg-[#1a1a1a] hover:border-[#FE332F]/50 transition-all duration-300">
                <p className="text-gray-400 mb-6 line-clamp-4">{work.para}</p>
                <a href={work.cs_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FE332F] font-semibold group-hover:gap-4 transition-all">
                  Learn more <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* BLOG SECTION */}
      <BlogSection blogs={blogs} />

      {/* MEETING SCHEDULER */}
      <section className="py-24 px-6 lg:px-32 bg-black relative">
        <AnimatedGlow position="bottom-right" color="#9333ea" delay={2} />
        <SectionHeader badge="GET IN TOUCH" title="Let's" titleHighlight="Connect" description="Schedule a free consultation with our team" />
        <GradientBorderCard className="max-w-5xl mx-auto">
          <div className="bg-[#111111] rounded-2xl p-10 lg:p-12">
            <Calx />
          </div>
        </GradientBorderCard>
      </section>
      {/* shinny effect */}
      <section className="relative py-32 flex items-center justify-center px-6 bg-[#11111163] overflow-hidden">
        {/* Main Content */}
        <div className="relative w-full max-w-7xl">
          {/* Quote Text with Static Shiny Effect */}
          <div className="relative">
            <h1 className="text-4xl italic  md:text-6xl lg:text-7xl font-bold leading-tight text-center select-none bg-gradient-to-r from-gray-600 via-white to-gray-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              {quote}
            </h1>
          </div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-700"></div>
            <p className="text-gray-500 text-lg font-medium">Peter Drucker</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-700"></div>
          </motion.div>
        </div>

        <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
      </section>
    </div>
  );
}