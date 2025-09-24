"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-[120px] bg-hero-pattern flex flex-col justify-center items-center min-h-[978px] bg-contain bg-center before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gray-900 before:bg-opacity-10 before:-z-[1]">
      <div className="max-w-1296 w-full  z-[2] text-center">
        {/* Cards */}
        <div className="flex items-center justify-center gap-10 mb-10">
          {/* Card 1 */}
          <div className="w-[232px] h-[177px] flex flex-col justify-center items-center rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-shadow-6 text-center">
            <Link
              href="/"
              className="inline-block p-1 bg-transparent rounded-full shadow-shadow-6 mb-2"
            >
              <Image
                src="/images/handshakes.png"
                alt="handshakes"
                width={49}
                height={49}
                className="w-[49px] h-[49px] "
              />
            </Link>
            <p className="text-white font-medium mb-2">Registered Partners</p>
            <span className="text-yellow-color font-bold text-[34px] leading-none">
              200K+
            </span>
          </div>

          {/* Card 2 */}
          <div className="w-[232px] h-[177px] flex flex-col justify-center items-center rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-shadow-6 text-center">
            <Link
              href="/"
              className="inline-block p-1 bg-transparent rounded-full shadow-shadow-6 mb-2"
            >
              <Image
                src="/images/calender.png"
                alt="handshakes"
                width={49}
                height={49}
                className="w-[49px] h-[49px]"
              />
            </Link>
            <p className="text-white font-medium mb-2">Our Events</p>
            <span className="text-yellow-color font-bold text-[34px] leading-none">
              90K+
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center w-full flex-col gap-5">
          {/* Title */}
          <h1 className="text-[65px] font-bold text-white leading-none">
            The Ultimate <br />
            <span className="text-yellow-color">Event</span> Experience in{" "}
            <span className="text-yellow-color">2025</span>
          </h1>
          {/* Description */}
          <p className="max-w-[969px] text-[18px] font-normal text-white leading-7 ">
            Your trusted partner for organizing conferences, events, occasions,
            and grand openings. We offer a full range of equipment for sale or
            rent—including LED screens, laser systems, staging, fog effects, and
            sky lighting. Based in Jeddah, we proudly serve all cities across
            Saudi Arabia.
          </p>
          {/* CTA Button */}
          <div className="flex gap-4 mt-10">
            <Link
              href="/partner"
              className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
            >
              Join as a Partner
            </Link>
          </div>
          {/* Discover Our Services */}
          <div className="max-w-[277px] max-h-[103px] mt-[60px]">
           <h3 className="text-[24px] text-yellow-color font-normal leading-none mb-1">Discover Our Services</h3>
           <Link
              href="/"
              className="inline-block"
            >
              <Image
                src="/images/downArrow.png"
                alt="handshakes"
                width={54}
                height={54}
                className="w-[54px] h-[54px]"
              />
            </Link>
          </div>
          {/* whats app icon */}
          <div className="relative w-full h-full">
            <Link
              href="/"
              className=" absolute bottom-8 right-8 z-[50]"
            >
              <Image
                src="/images/whatsapp.png"
                alt="handshakes"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
