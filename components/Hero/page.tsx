"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  // Variants
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const titleVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

  const parentVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };


  return (
    <section className="relative bg-hero-pattern min-h-[854px] bg-contain bg-center grid place-items-center pt-[130px] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gray-900 before:bg-opacity-10 before:-z-[1]">
      <div className="max-w-[1296px] pt-[70px] w-full text-center z-[2]">

        {/* Cards */}
        <motion.div
          className="inline-flex items-center justify-center gap-10 mb-10"
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            className="w-[232px] h-[177px] flex flex-col justify-center items-center rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-shadow-6 text-center"
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
              />
            </Link>
            <p className="text-white font-medium mb-2">Registered Partners</p>
            <span className="text-yellow-color font-bold text-[34px] leading-none">
              200K+
            </span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariant}
            className="w-[232px] h-[177px] flex flex-col justify-center items-center rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-shadow-6 text-center"
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
              />
            </Link>
            <p className="text-white font-medium mb-2">Our Events</p>
            <span className="text-yellow-color font-bold text-[34px] leading-none">
              90K+
            </span>
          </motion.div>
        </motion.div>

        {/* Title & Description */}
        <motion.h1
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-[65px] font-bold text-white leading-none mb-5"
        >
          The Ultimate <br />
          <span className="text-yellow-color">Event</span> Experience in{" "}
          <span className="text-yellow-color">2025</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[969px] text-[18px] font-normal text-white leading-7 mx-auto mb-10"
        >
          Your trusted partner for organizing conferences, events, occasions,
          and grand openings. We offer a full range of equipment for sale or
          rent—including LED screens, laser systems, staging, fog effects, and
          sky lighting. Based in Jeddah, we proudly serve all cities across
          Saudi Arabia.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <Link
            href="/partner"
            className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
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
          <h3 className="text-[24px] text-yellow-color font-normal leading-none mb-1">
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
                className="w-[54px] h-[54px]"
              />
            </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
