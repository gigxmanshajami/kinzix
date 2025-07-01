'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import kinzixImage from '@/public/kinzi-black.png';
import { Menu, ChevronDown, Lightbulb } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import { client } from '@/lib/sanity';

export const NavbarHome = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hidenav, setHidenav] = useState(false);
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    if (hidenav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [hidenav]);
  const setNav = () => {
    setHidenav(!hidenav);
  };

  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const data = await client.fetch('*[_type == "nav"]{menus}');
        const menus = data[0]?.menus || [];

        const mappedData = menus.map((item) => ({
          name: item.name,
          link: item.link || '#',
          subCategories: item.subCategories?.map((cat) => ({
            categoryHeading: cat.categoryHeading,
            color: cat.color,
            items: cat.items?.map((subItem) => ({
              name: subItem.name,
              link: subItem.link === 'null' ? '#' : subItem.link,
              icon:
                subItem.icon === 'Lightbulb' ? (
                  <Lightbulb color="#6b6b6b" size={27} strokeOpacity={0.8} />
                ) : null,
            })) || [],
          })) || [],
        }));

        setNavItems(mappedData);
      } catch (err) {
        console.error('Failed to fetch nav data:', err);
      }
    };

    fetchNavData();
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <div className="w-full">
      <div className="flex bg-[#fff]  lg:bg-transparent  !border-b-[#000] !border-b-[1px] lg:!border-b-0  h-[5em] flex-row justify-between lg:pl-[50px] pr-[45px] items-center px-[20px]">
        {/* Logo */}
        <div>
          <Image
            src={kinzixImage}
            alt="Kinzix"
            className="object-contain lg:w-[120px] lg:h-[120px]"
            width={120}
            height={120}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden">
          <Menu size={24} color="black" strokeWidth={3} onClick={setNav} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-row justify-between items-center gap-10">
          <ul className="flex flex-row gap-10 cursor-pointer">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-black hover:underline transition-all"
              >
                <a href={item.link} >{item.name}</a>
              </li>
            ))}
          </ul>
          <div>
            <button
              data-cal-namespace="30min"
              data-cal-link="kinzix/30min"
              data-cal-config='{"layout":"month_view","theme":"auto"}'
              className="w-[188px] h-[50px] hover:scale-125 cursor-pointer transition-all text-black items-center  border-[#191A23] border-[1.3px]"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {hidenav && (
        <div className={`items-baseline  gap-10 flex-col p-[28px] bg-white transform transition-transform duration-300  flex h-screen  ease-in-out ${hidenav ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <ul className="flex flex-col gap-5 cursor-pointer w-min h-fit items-baseline  text-[29px] justify-start underline relative font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="text-black hover:underline transition-all">
                <a href={item.link} onClick={() => setHidenav(false)}>{item.name}</a>
              </li>
            ))}
          </ul>
          <button
            data-cal-namespace="30min"
            data-cal-link="kinzix/30min"
            data-cal-config='{"layout":"month_view","theme":"auto"}'
            className="w-full h-[50px] hover:scale-125 cursor-pointer transition-all text-black items-center  border-[#191A23] border-[1.3px]"
          >
            Get in touch
          </button>
        </div>
      )}
    </div>
  );
};
