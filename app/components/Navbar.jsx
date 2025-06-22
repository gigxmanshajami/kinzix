"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import kinzixImage from "@/public/kinzi-black.png";
import { Menu, ChevronDown, Lightbulb, } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { client } from "@/lib/sanity";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { getCalApi } from "@calcom/embed-react";

export const NavbarHome = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [navItems, setNavItems] = useState([]);

  const emailms = "kinzixinnovation@gmail.com";

  // Correct query: fetch nav document(s) and get the menus array
  const navQuery = '*[_type == "nav"]{menus}';

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const data = await client.fetch(navQuery);
        // data is an array of nav docs, take the first one (assuming only one)
        const menus = data[0]?.menus || [];

        // Map menus to format for component
        const mappedData = menus.map((item) => ({
          name: item.name,
          link: item.link || "#",
          subCategories: item.subCategories?.map((cat) => ({
            categoryHeading: cat.categoryHeading,
            color: cat.color,
            items:
              cat.items?.map((subItem) => ({
                name: subItem.name,
                link: subItem.link === "null" ? "#" : subItem.link,
                icons:
                  subItem.icon === "Lightbulb" ? (
                    <Lightbulb
                      color="#6b6b6b"
                      size={27}
                      strokeOpacity={0.8}
                    />
                  ) : null,
              })) || [],
          })) || [],
        }));

        setNavItems(mappedData);
      } catch (error) {
        console.error("Error fetching nav data:", error);
      }
    };

    fetchNavData();
  }, []);
  const [hidenav, setHidenav] = useState(false);
  const setNav = () => {
    setHidenav(!hidenav);
  };

  const safeName = name || "No Name";
  const safeEmail = email || "No Email";
  const safeMessage = message || "No Message";

  const mailtoLink = `mailto:${emailms}?subject=${encodeURIComponent(
    `Message from ${safeName} (${safeEmail})`
  )}&body=${encodeURIComponent(safeMessage)}`;

  return (
    <div className=" w-[100%]" >
      {/* <div className="lg:px-[91px] fixed z-[2000] bg-[#ffffffbf] w-[100%] h-fit top-0 " style={{
                backdropFilter: 'blur(20px)',
            }}></div> */}
      <div className="flex bg-[#fff] lg:bg-transparent  border-b-[1px] lg:border-b-0   sticky top-0 h-[5em] flex-row justify-between lg:pl-[50px]  snap-start  pr-[45px] items-center px-[20px]" >
        {/* logo */}
        <div>
          <Image
            src={kinzixImage}
            alt="Kinzix"
            className="object-contain lg:w-[120px] lg:h-[120px]"
            width={120}
            height={120}
          />
        </div>
        {/* content */}
        <div className="block lg:hidden">
          <Menu size={24} color="black" strokeWidth={3} strokeOpacity={1} stroke="black" onClick={setNav} />
        </div>

        <div className=" flex-row justify-between items-center gap-10 hidden lg:flex">
          <ul className="flex flex-row gap-10 cursor-pointer ">
            {/* {navItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))} */}
            <li className="text-black hover:underline transition-all">
              Home
            </li>
            <li className="text-black hover:underline transition-all">
              Project
            </li>
            <li className="text-black hover:underline transition-all">
              Services
            </li>
            <li className="text-black hover:underline transition-all">
              About Us
            </li>
          </ul>
          {/* cta button */}


          {/* gap */}
          <div>
            <button data-cal-namespace="30min"
              data-cal-link="kinzix/30min"

              data-cal-config='{"layout":"month_view","theme":"auto"}' className="w-[188px] h-[50px]  hover:scale-125 cursor-pointer transition-all text-black items-center rounded-[14px] border-[#191A23] border-[1.3]">
              Book A Meeting
            </button>
          </div>
        </div>
      </div>
      {
        hidenav ? (
          <div className="items-center transition-all   justify-center flex h-screen">
            <ul className="flex flex-col gap-10 cursor-pointer w-min h-fit items-center text-center text-[46px] underline relative -top-[67px] font-medium">
              {/* {navItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))} */}
              <li className="text-black hover:underline transition-all">
                Home
              </li>
              <li className="text-black hover:underline transition-all">
                Project
              </li>
              <li className="text-black hover:underline transition-all">
                Services
              </li>
              <li className="text-black hover:underline transition-all">
                About Us
              </li>
            </ul>
          </div>
        ) : null
      }

    </div>
  );
};
