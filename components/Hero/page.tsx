
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import AnimatedText from "../AnimatedText/page";

const Hero = () => {

  const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3, // each child animated with delay
    },
  },
};

  // Variants
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  // const titleVariant: Variants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  // };

  const parentVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  //  creating custom bubbles
  const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-pink-400",
  "bg-purple-400",
  "bg-cyan-400",
  "bg-orange-400",
];

  return (
    <>
    <section className="relative bg-hero-pattern min-h-[700px] md:min-h-[800px] lg:min-h-[854px] grid place-items-center lg:pt-[120px] md:pt-[130px] overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/network-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Pattern Overlay */}
      {/* <div className="absolute inset-0 bg-hero-pattern bg-contain bg-center opacity-90 z-[1]"></div> */}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-transparent bg-opacity-30 z-[2]"></div> */}
      
      {/* Custom Background Bubbles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(30)].map((_, i) => {
            // Random size between 10px - 40px
            const size = Math.floor(Math.random() * 30) + 10;

            // Random color from the list
            const color = colors[Math.floor(Math.random() * colors.length)];

            return (
              <motion.div
                key={i}
                className={`absolute bottom-0 rounded-full opacity-50 ${color}`}
                style={{
                  width: size,
                  height: size,
                  left: Math.random() * window.innerWidth, // random X position
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -900, opacity: 1 }}
                transition={{
                  duration: 5 + Math.random() * 5, // random speed
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: Math.random() * 5, // bubbles come at different times
                }}
              />
            );
          })}
        </div>
      

      <div className="max-w-[1296px] w-full text-center z-[2] px-4 lg:px-0">
        {/* Cards */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8 md:mb-10 flex-wrap sm:pt-20 pt-20 lg:pt-0"
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            className="w-full md:w-[232px] h-[177px] flex flex-col justify-center items-center rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-shadow-6 text-center"
          >
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
                unoptimized
              />
            </Link>
            <p className="text-white font-medium mb-2 text-sm sm:text-base">Registered Partners</p>
            <span className="text-yellow-color font-bold text-[28px] sm:text-[34px] leading-none">200K+</span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariant}
            className="w-full  md:w-[232px] h-[177px] flex flex-col justify-center items-center rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-shadow-6 text-center"
          >
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
                unoptimized
              />
            </Link>
            <p className="text-white font-medium mb-2 text-sm sm:text-base">Our Events</p>
            <span className="text-yellow-color font-bold text-[28px] sm:text-[34px] leading-none">90K+</span>
          </motion.div>
        </motion.div>

        {/* Title & Description */}
        {/* <motion.h1
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-[32px] sm:text-[42px] md:text-[55px] lg:text-[65px] font-bold text-white leading-snug md:leading-none mb-4 sm:mb-5"
        >
          The Ultimate <br />
          <span className="text-yellow-color">Event</span> Experience in{" "}
          <span className="text-yellow-color">2025</span>
        </motion.h1> */}


        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[90%] sm:max-w-[600px] md:max-w-[969px] text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white leading-6 sm:leading-7 md:leading-7 mx-auto mb-8 md:mb-10"
        >
          Your trusted partner for organizing conferences, events, occasions,
          and grand openings. We offer a full range of equipment for sale or
          rent—including LED screens, laser systems, staging, fog effects, and
          sky lighting. Based in Jeddah, we proudly serve all cities across
          Saudi Arabia.
        </motion.p> */}

      <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center"
    >
      <AnimatedText
        text="The Ultimate Event Experience in 2025"
        highlightWords={["Event", "2025"]}
        lineBreakIndices={[1]}
        className="text-[32px] sm:text-[42px] md:text-[55px] lg:text-[65px] font-bold text-white leading-snug md:leading-none mb-4 sm:mb-5"
      />

      <AnimatedText
        text="Your trusted partner for organizing conferences, events, occasions,
          and grand openings. We offer a full range of equipment for sale or
          rent—including LED screens, laser systems, staging, fog effects, and
          sky lighting. Based in Jeddah, we proudly serve all cities across
          Saudi Arabia."
        className="max-w-[90%] sm:max-w-[600px] md:max-w-[969px] text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white leading-6 sm:leading-7 md:leading-7 mx-auto mb-8 md:mb-10"
        lineBreakIndices={[]}
      />
    </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <Link
            href="/partner"
            className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg text-sm sm:text-base md:text-[16px] transition-all duration-300"
          >
            Join as a Partner
          </Link>
        </motion.div>

        {/* Discover Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[277px] max-h-[103px] mx-auto"
        >
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] text-yellow-color font-normal leading-none mb-1">
            Discover Our Services
          </h3>
          <motion.div
            className="cursor-pointer inline-block mt-0"
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              const featuredSection = document.getElementById("featured-services");
              if (featuredSection) {
                featuredSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/images/downArrow.png"
              alt="down arrow"
              width={54}
              height={54}
              className="w-[40px] sm:w-[50px] md:w-[54px] h-[40px] sm:h-[50px] md:h-[54px]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
    </>
  );
};

export default Hero;
