"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedServices from "../Services/FeaturedServices";
import Network from "../Network/page";
import { motion, Variants } from "framer-motion";

const cardData = [
  {
    id: 1,
    title:
      "Visual, Audio, Digital Design and Printing*, Photography and videography for event",
    subtitle: "Shinji",
    description: "Crafting Experiences, Creating Memories",
    image: "/images/partners1.jpg",
    link: "/en/services#test-9",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 2,
    title: "Coffee Booth and baristas, light snack and coffee catering",
    subtitle: "Bity Beans Coffee House",
    description:
      "We provide coffee booths any location with specialty or commercial coffee for..",
    image: "/images/partners2.jpg",
    link: "/en/services#test-10",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 3,
    title: "Coffee Booth and baristas, light snack and coffee catering",
    subtitle: "Bity Beans Coffee House",
    description:
      "We provide coffee booths any location with specialty or commercial coffee for..",
    image: "/images/partners3.jpg",
    link: "/en/services#test-11",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 4,
    title: "Coffee Booth and baristas, light snack and coffee catering",
    subtitle: "Bity Beans Coffee House",
    description:
      "We provide coffee booths any location with specialty or commercial coffee for..",
    image: "/images/service1.png",
    link: "/en/services#test-12",
    location: "Khobar (Al-Khobar)",
  },
];

// Framer Motion Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Event = () => {
  return (
    <>
      <section className="relative w-full h-auto overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/network-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#040A1D] bg-opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-1296 mx-auto w-full flex flex-col items-center justify-center gap-8 text-center">
          <motion.div
            className="flex items-center justify-center w-full flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Title */}
            <motion.h2
              variants={fadeUp}
              className="text-[65px] mt-[10px] font-bold text-white leading-none mb-[54px]"
            >
              <span className="text-yellow-color">Your Event, </span>
              <span>Our Passion</span>
            </motion.h2>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center rounded-[60px] overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}       // Zoom in slightly on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring effect
            >
              <Link href="/" className="inline-block w-full">
                <Image
                  src="/images/bg-event.png"
                  alt="Event"
                  width={1296}
                  height={576}
                  className="w-full h-auto object-cover rounded-[60px]"
                />
              </Link>
            </motion.div>


            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-16">
              <Link
                href="/partner"
                className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
              >
                Our Events
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center w-full flex-col gap-5"
          >
            <FeaturedServices
              title="Trending"
              subtitle="Partners"
              description="Festival City caters for all your festive occasion with a complete line up of state of the art lighting, sound stage, LED, and effects. All for very reasonable prices."
              cardData={cardData}
              removeBg="bg-none"
              label="Partners"
              showDecorations={false}
              showVideo={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Network Section */}
      <section className="relative w-full h-auto overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/network-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#040A1D] bg-opacity-50 z-0"></div>

        {/* Network Content */}
        <div className="relative z-10 max-w-1296 mx-auto w-full flex flex-col items-center justify-center gap-8 pb-20 px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Network />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Event;
