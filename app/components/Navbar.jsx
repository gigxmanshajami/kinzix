'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import kinzixImage from '@/public/kinzix_white.png';
import { Menu, X } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import { client } from '@/lib/sanity';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const NavbarHome = () => {
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
    <nav
      style={{
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        backgroundColor: 'rrgb(0 0 0 / 9%)'
      }}
      className="w-full fixed right-0 left-0 top-0 border-b bg-black/10  border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src={kinzixImage}
              alt="Kinzix"
              className="w-28 h-auto object-contain transition-transform hover:scale-105"
              width={120}
              height={120}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-white font-semibold text-[15px] tracking-wide hover:text-[#FE332F] transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FE332F] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <button className="px-8 py-3 bg-white/5 text-white font-bold text-sm tracking-wide rounded-lg border border-white/20 hover:bg-[#FE332F] hover:border-[#FE332F] transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Get in touch
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={setNav}
            className="lg:hidden relative z-50 p-2 text-white hover:text-[#FE332F] transition-colors"
            aria-label="Toggle menu"
          >
            {hidenav ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {hidenav && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
          
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden "
          >
            <div className="flex flex-col  pt-28 px-8 pb-12  h-screen"
         >
              {/* Mobile Navigation Links */}
              <ul className="flex flex-col gap-6 mb-12">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      onClick={() => setHidenav(false)}
                      className="text-white text-3xl font-bold tracking-tight hover:text-[#FE332F] transition-colors duration-300 block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-auto"
              >
                <Link href="/contact" onClick={() => setHidenav(false)} className="block">
                  <button className="w-full py-4 bg-gradient-to-r from-[#FE332F] to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-[#FE332F]/50 transition-all duration-300 hover:scale-105">
                    Get in touch
                  </button>
                </Link>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-10 w-64 h-64 bg-[#FE332F]/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
              <div className="absolute bottom-32 left-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};