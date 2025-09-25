"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-hero-pattern min-h-[854px] bg-contain bg-center grid place-items-center pt-[130px] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gray-900 before:bg-opacity-10 before:-z-[1]">
      <div className="max-w-[1296px] pt-[70px] w-full text-center z-[2]">
        {/* Cards */}
        <div className="inline-flex items-center justify-center gap-10 mb-10">
          {/* Card 1 */}
          <div className="w-[232px] h-[177px] flex flex-col justify-center items-center rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-shadow-6 text-center">
            <Link
              href="/"
              className="inline-block p-1 bg-transparent rounded-full shadow-shadow-6 mb-2"
            >
              <Image
                src="/gif/handshak.gif"
                alt="handshakes"
                width={49}
                height={49}
                className="w-[49px] h-[49px]"
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
                src="/gif/event.gif"
                alt="calender"
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

        {/* Title & Description */}
        <h1 className="text-[65px] font-bold text-white leading-none mb-5">
          The Ultimate <br />
          <span className="text-yellow-color">Event</span> Experience in{" "}
          <span className="text-yellow-color">2025</span>
        </h1>
        <p className="max-w-[969px] text-[18px] font-normal text-white leading-7 mx-auto mb-10">
          Your trusted partner for organizing conferences, events, occasions,
          and grand openings. We offer a full range of equipment for sale or
          rent—including LED screens, laser systems, staging, fog effects, and
          sky lighting. Based in Jeddah, we proudly serve all cities across
          Saudi Arabia.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Link
            href="/partner"
            className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
          >
            Join as a Partner
          </Link>
        </div>

        {/* Discover Our Services */}
        <div className="max-w-[277px] max-h-[103px] mx-auto ">
          <h3 className="text-[24px] text-yellow-color font-normal leading-none mb-1">
            Discover Our Services
          </h3>
          <Link href="/" className="inline-block">
            <Image
              src="/images/downArrow.png"
              alt="down arrow"
              width={54}
              height={54}
              className="w-[54px] h-[54px]"
            />
          </Link>
        </div>

        {/* WhatsApp Icon with Animated Rings */}
        <div className="relative w-full h-full">
          <Link href="/" className="absolute bottom-8 right-8 z-[50]">
            <div className="relative w-[82px] h-[82px] flex items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute w-[74px] h-[74px] rounded-full p-[4px] bg-[linear-gradient(90deg,rgba(251,192,21,1)_0%,rgba(230,114,37,1)_100%)] animate-ping opacity-50">
                <div className="w-full h-full bg-transparent rounded-full"></div>
              </div>

              {/* Inner Ring */}
              <div className="absolute w-[68px] h-[68px] rounded-full p-[3px] animate-pulse opacity-70">
                <div className="w-full h-full bg-transparent rounded-full"></div>
              </div>

              {/* WhatsApp Icon */}
              <Image
                src="/images/whatsApps.png"
                alt="whatsapp"
                width={82}
                height={82}
                className="w-[82px] h-[82px] z-10"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

