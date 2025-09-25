'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: 1, label: 'About Us', href: '/about' },
    { id: 2, label: 'Our Services', href: '/services' },
    { id: 3, label: 'Our Equipments', href: '/equipments' },
    { id: 4, label: 'Our Events', href: '/events' },  
    { id: 5, label: 'Partners Directory', href: '/directory' },
    { id: 6, label: 'Contact Us', href: '/contact' },
    { id: 7, label: 'FAQs', href: '/faqs' },
    
  ];

  return (
    <>
      <header className="sticky top-0 z-[50] bg-secondary-700/30 backdrop-blur-sm mt-[-120px]">
        <div className="w-full">
          <div className="px-4 py-4 md:py-[22px] lg:py-3">
            <div className="max-w-1296 mx-auto w-full">
              <div className="w-full flex justify-between items-center gap-2 sm:gap-0">
                
                {/* Logo */}
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={224}
                    height={58}
                    loading="eager"
                    priority
                    className="w-[194px] h-[50px] lg:w-[224px] lg:h-[58px]"
                  />
                </Link>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div className="relative w-6 h-6"> {/* 24px = w-6 h-6 */}
                      <Image
                        src="/flags/en.png"
                        alt="flag"
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                    <div className="relative w-3 h-3"> {/* 12px × 12px */}
                      <Image
                        src="/icons/arrow-down.svg"
                        alt="arrow"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link href="/login" className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300">
                      Login
                    </Link>
                    <Link href="/register" className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300">
                      Register
                    </Link>
                  </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                  <Image
                    src="/icons/hamburger.svg"
                    alt="hamburger"
                    width={24}
                    height={24}
                    className="cursor-pointer h-6"
                    onClick={toggleSidebar}
                  />
                </div>
              </div>
              <div className='w-full flex justify-end items-center'>
                {/* Desktop Nav Links */}
                <nav className="hidden lg:flex items-center gap-6 py-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-white hover:text-yellow-color transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


