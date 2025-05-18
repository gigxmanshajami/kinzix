"use client";
import React, { useState } from "react";
import Image from "next/image";
import kinzixImage from "@/public/kinzi.png";
import { Menu, ChevronDown, Lightbulb } from "lucide-react";

export const NavbarHome = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  
  const navItems = [
    { name: "Process", link: "#process" },
    { name: "Benefits", link: "#benefits" },
    {
      name: "Services",
      subCategories: [
        {
          categoryHeading: "Consulting",
          color: "#e63946",
          items: [
            { name: "Web Development", link: "#web", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "App Development", link: "#app", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "App Development", link: "#app", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "Web Development", link: "#web", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "App Development", link: "#app", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },

          ]
        },
        {
          categoryHeading: "Automation",
          color: "#f4ac4e",
          items: [
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
          ]
        },
        {
          categoryHeading: "Automation",
          color: "#25dbc0",
          items: [
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
          ]
        },
        {
          categoryHeading: "Automation",
          color: "#74d67b",
          items: [
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
          ]
        },
        {
          categoryHeading: "Automation",
          color: "#36b5de",
          items: [
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },

          ]
        },
        {
          categoryHeading: "Automation",
          color: "#fa936b",
          items: [
            { name: "AI & Automation", link: "#ai", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
            { name: "RPA Bots", link: "#rpa", icons: <Lightbulb color='#6b6b6b' size={27} strokeOpacity={0.8} /> },
          ]
        },
      ]
    },
    { name: "PortFolio", link: "#portfolio" },
    { name: "FAQ", link: "#faq" },
  ];

  return (
    <div className="w-full h-[4em] p-3 flex items-center bg-transparent fixed top-0 z-50 backdrop-blur-lg gap-80 justify-evenly">
      {/* logo */}
      <Image
        src={kinzixImage}
        alt="Kinzix"
        className="object-contain lg:w-[120px] lg:h-[120px]"
        width={120}
        height={120}
      />

      {/* desktop nav */}
      <div className="hidden lg:flex items-center gap-10">
        <ul className="relative flex items-center gap-[32px]">
          {navItems.map((item) => (
            <li key={item.name} key={item.name} className="relative">
              {/* label + chevron */}
              <div
                className="flex items-center gap-1 cursor-pointer z-50"
                onMouseEnter={() =>
                  item.subCategories
                    ? setActiveDropdown(item.name)
                    : setActiveDropdown(null)
                }
              >
                <a href={item.link || "#"}>{item.name}</a>
                {item.subCategories && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                  />
                )}
              </div>

              {/* full-screen dropdown */}
              {item.subCategories && activeDropdown && item.name && (
                <div
                  className="fixed left-0 top-[4em] w-[100%] h-[calc(100vh-4em)] bg-transparent z-40 transition-all duration-200 backdrop-blur-lg"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  key={item.name}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="w-full max-w-7xl bg-white mx-auto pl-30 pr-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {item.subCategories.map((category, idx) => (
                      <div key={idx}>
                        <h1 className="text-[18px] border-b border-b-[#c9c8c8] font-[500]  uppercase pt-[2px] " style={{ color: category.color || "#6b6b6b", }}>
                          {category.categoryHeading}
                        </h1>
                        {category.items.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.link}
                            className="pt-2 pb-2 border-b border-b-[#c9c8c8] hover:bg-gray-100 flex transition text-lg font-medium text-[#6b6b6b] gap-2"
                          >
                            <span>{sub.icons}</span>{sub.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="bg-[#FF4B4B] text-black w-[120px] h-[50px] flex items-center justify-center font-semibold text-[15px] px-[17px] rounded-[8px] hover:scale-105 transition">
          Get Started
        </button>
      </div>

      {/* mobile burger */}
      <div className="lg:hidden">
        <Menu />
      </div>
    </div>
  );
};