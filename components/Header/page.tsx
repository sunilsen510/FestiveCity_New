"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../AnimatedButton/page";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [selected, setSelected] = useState("en");

  const navLinks = [
    { id: 1, label: "About Us", href: "/about" },
    { id: 2, label: "Our Services", href: "/services" },
    { id: 3, label: "Our Equipments", href: "/equipments" },
    { id: 4, label: "Our Events", href: "/events" },
    { id: 5, label: "Partners Directory", href: "/directory" },
    { id: 6, label: "Contact Us", href: "/contact" },
    { id: 7, label: "FAQs", href: "/faqs" },
  ];

  const flags = [
    { code: "en", src: "/flags/en.png", label: "English" },
    { code: "fr", src: "/flags/en.png", label: "Français" },
    { code: "de", src: "/flags/en.png", label: "Deutsch" },
    { code: "in", src: "/flags/en.png", label: "हिंदी" },
    { code: "es", src: "/flags/en.png", label: "Español" },
  ];

  const selectedFlag = flags.find((f) => f.code === selected);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-[50] bg-secondary-700/30 backdrop-blur-sm">
        <div className="max-w-1296 mx-auto lg:px-0 md:px-4 px-2 py-4 md:py-[22px] lg:py-3 flex justify-between items-center w-full">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div>
                {/* Logo - Left */}
                <Link href="/" className="flex items-center">
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
              </div>
              {/* Desktop Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                {/* Language Dropdown */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setIsDropOpen(!isDropOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-transparent shadow-sm"
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src={selectedFlag?.src || "/flags/en.png"}
                        alt={selectedFlag?.label || "English"}
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                    <div
                      className={`relative w-3 h-3 transition-transform duration-300 ${
                        isDropOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <Image
                        src="/icons/arrow-down.svg"
                        alt="arrow"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute mt-2 z-50 w-36 bg-secondary-700 shadow-lg overflow-hidden origin-top text-yellow-color border border-primary px-2 py-2 rounded-lg transition-all duration-300 ${
                      isDropOpen
                        ? "max-h-60 opacity-100 scale-100"
                        : "max-h-0 opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <ul className="flex flex-col">
                      {flags.map((flag) => (
                        <li
                          key={flag.code}
                          onClick={() => {
                            setSelected(flag.code);
                            setIsDropOpen(false);
                          }}
                          className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-colors duration-200"
                        >
                          <div className="relative w-5 h-5">
                            <Image
                              src={flag.src}
                              alt={flag.label}
                              fill
                              className="object-contain"
                              sizes="20px"
                            />
                          </div>
                          <span className="text-sm">{flag.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex gap-4">
                  <AnimatedButton href="/login" className="bg-yellow-soft-linear">Login</AnimatedButton>
                  <AnimatedButton href="/register" className="bg-yellow-soft-linear">Register</AnimatedButton>
                </div>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center justify-end gap-6 mt-[14px]">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="relative text-white hover:text-yellow-color transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:rounded-[10px] after:bg-yellow-color after:transition-all after:duration-300 hover:after:w-[26px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Mobile Hamburger - Right */}
          <div className="lg:hidden relative z-[60]">
            <Image
              src="/icons/hamburger.svg"
              alt="hamburger"
              width={28}
              height={28}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`absolute top-0 left-0 w-[300px] h-full bg-secondary-700 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex flex-col gap-4 h-full">
            {/* Logo + Close */}
            <div className="flex items-center justify-between">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={180}
                height={58}
                className="w-[170px] h-[50px]"
              />
              <button
                onClick={toggleSidebar}
                className=" rounded-md hover:bg-secondary-600 transition"
              >
                <Image
                  src="/icons/close.svg"
                  alt="Close"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-4  overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-white hover:text-yellow-color transition-colors duration-300"
                  onClick={toggleSidebar}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar Footer: Language + Auth */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6">
                  <Image
                    src={selectedFlag?.src || "/flags/en.png"}
                    alt={selectedFlag?.label || "English"}
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
                <span className="text-white">{selectedFlag?.label}</span>
              </div>

              <Link
                href="/login"
                className="relative overflow-hidden px-4 py-2.5 rounded-lg text-yellow-color border border-primary bg-transparent transition-all duration-300 before:absolute before:inset-0 before:bg-yellow-linear before:translate-x-[-100%] before:transition-transform before:duration-300 before:shadow-lg hover:before:translate-x-0 hover:text-white"
                onClick={toggleSidebar}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="relative overflow-hidden px-4 py-2.5 rounded-lg text-yellow-color border border-primary bg-transparent transition-all duration-300 before:absolute before:inset-0 before:bg-yellow-linear before:translate-x-[-100%] before:transition-transform before:duration-300 before:shadow-lg hover:before:translate-x-0 hover:text-white"
                onClick={toggleSidebar}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
