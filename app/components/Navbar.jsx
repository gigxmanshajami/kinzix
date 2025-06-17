"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import kinzixImage from "@/public/kinzi-black.png";
import { Menu, ChevronDown, Lightbulb } from "lucide-react";
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
import { Label } from "@/components/ui/label";

export const NavbarHome = () => {
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
  const safeName = name || "No Name";
  const safeEmail = email || "No Email";
  const safeMessage = message || "No Message";

  const mailtoLink = `mailto:${emailms}?subject=${encodeURIComponent(
    `Message from ${safeName} (${safeEmail})`
  )}&body=${encodeURIComponent(safeMessage)}`;

  return (
    // <div className="w-full h-[4em] p-3 flex items-center bg-transparent fixed top-0 z-50 backdrop-blur-lg gap-80 justify-evenly">
    //   {/* logo */}
    // <Image
    //   src={kinzixImage}
    //   alt="Kinzix"
    //   className="object-contain lg:w-[120px] lg:h-[120px]"
    //   width={120}
    //   height={120}
    // />

    //   {/* desktop nav */}
    //   <div className="hidden lg:flex items-center gap-10">
    //     <ul className="relative flex items-center gap-[32px]">
    //       {navItems.map((item) => (
    //         <li key={item.name} className="relative">
    //           {/* label + chevron */}
    //           <div
    //             className="flex items-center gap-1 cursor-pointer z-50"
    //             onMouseEnter={() =>
    //               item.subCategories && item.subCategories.length > 0
    //                 ? setActiveDropdown(item.name)
    //                 : setActiveDropdown(null)
    //             }
    //           >
    //             <a href={item.link || "#"}>{item.name}</a>
    //             {item.subCategories && item.subCategories.length > 0 && (
    //               <ChevronDown
    //                 size={16}
    //                 className={`transition-transform ${
    //                   activeDropdown === item.name ? "rotate-180" : ""
    //                 }`}
    //               />
    //             )}
    //           </div>

    //           {/* full-screen dropdown */}
    //           {item.subCategories && activeDropdown === item.name && (
    //             <div
    //               className="fixed left-0 top-[4em] w-[100%] h-[calc(100vh-4em)] bg-transparent z-40 transition-all duration-200 backdrop-blur-lg"
    //               onMouseEnter={() => setActiveDropdown(item.name)}
    //               onMouseLeave={() => setActiveDropdown(null)}
    //             >
    //               <div className="w-full max-w-7xl bg-white mx-auto pl-30 pr-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    //                 {item.subCategories.map((category, idx) => (
    //                   <div key={idx}>
    //                     <h1
    //                       className="text-[18px] border-b border-b-[#c9c8c8] font-[500] uppercase pt-[2px]"
    //                       style={{ color: category.color || "#6b6b6b" }}
    //                     >
    //                       {category.categoryHeading}
    //                     </h1>
    //                     {category.items.map((sub) => (
    //                       <a
    //                         key={sub.name}
    //                         href={sub.link}
    //                         className="pt-2 pb-2 border-b border-b-[#c9c8c8] hover:bg-gray-100 flex transition text-lg font-medium text-[#6b6b6b] gap-2"
    //                       >
    //                         <span>{sub.icons}</span>
    //                         {sub.name}
    //                       </a>
    //                     ))}
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           )}
    //         </li>
    //       ))}
    //     </ul>

    //     {/* CTA */}
    //     <Dialog>
    //       <DialogTrigger asChild>
    //         <button className="bg-[#FF4B4B] text-black w-[120px] h-[50px] flex items-center justify-center font-semibold text-[15px] px-[17px] rounded-[8px] hover:scale-105 transition">
    //           Contact Us
    //         </button>
    //       </DialogTrigger>
    //       <DialogContent className="sm:max-w-[425px]">
    //         <DialogHeader>
    //           <DialogTitle>Contact Us</DialogTitle>
    //           <DialogDescription>
    //             Let’s Connect and Create Something Great.
    //           </DialogDescription>
    //         </DialogHeader>
    //         <div className="grid gap-4 py-4">
    //           <div className="grid grid-cols-4 items-center gap-4">
    //             <Label htmlFor="name" className="text-right">
    //               Name
    //             </Label>
    //             <Input
    //               id="name"
    //               value={name}
    //               onChange={(e) => setName(e.target.value)}
    //               className="col-span-3"
    //             />
    //           </div>
    //           <div className="grid grid-cols-4 items-center gap-4">
    //             <Label htmlFor="email" className="text-right">
    //               Email
    //             </Label>
    //             <Input
    //               id="email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               className="col-span-3"
    //             />
    //           </div>
    //           <div className="grid grid-cols-4 items-center gap-4">
    //             <Label htmlFor="message" className="text-right">
    //               Message
    //             </Label>
    //             <Textarea
    //               id="message"
    //               value={message}
    //               onChange={(e) => setMessage(e.target.value)}
    //               className="col-span-3"
    //             />
    //           </div>
    //         </div>
    //         <DialogFooter>
    //           <a href={mailtoLink} className="w-full">
    //             <button className="bg-white w-full text-black h-[50px] text-center justify-center items-center font-semibold text-[15px] p-[12px] flex rounded-[8px] hover:scale-105 transition-all cursor-pointer">
    //               Send Message
    //             </button>
    //           </a>
    //         </DialogFooter>
    //       </DialogContent>
    //     </Dialog>
    //   </div>

    //   {/* mobile burger */}
    //   <div className="lg:hidden">
    //     <Menu />
    //   </div>
    // </div>
    <div className="flex  flex-row justify-between pl-[50px]  snap-start  pr-[45px] items-center px-[20px]">
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
      <div className="flex flex-row justify-between items-center gap-10">
        <ul className="flex flex-row gap-10 cursor-pointer ">
          {/* {navItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))} */}
          <li className="text-black">
            About Us
          </li>
          <li className="text-black">
            About Us
          </li>
          <li className="text-black">
            About Us
          </li>
          <li className="text-black">
            About Us
          </li>
        </ul>
        {/* cta button */}


        {/* gap */}
        <div>
          <button className="w-[188px] h-[50px] text-black items-center rounded-[14px] border-[#191A23] border-[1.3]">
            Request a quote
          </button>
        </div>
      </div>
    </div>
  );
};
