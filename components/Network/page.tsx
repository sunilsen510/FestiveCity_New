"use client";

import React from 'react';
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Framer Motion Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Network: React.FC = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center gap-6'
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
        className="text-[65px] mt-[10px] font-bold text-white text-center leading-none"
      >
        <span className="text-yellow-color">Join Our</span> <span className="text-white">Network</span>
        <br />
        <span className="text-white">Directory</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="max-w-[969px] text-[18px] font-normal text-white leading-7 text-center mt-5"
      >
        We have created a free Partner Directory for all event services. This directory is available nationwide to be the ultimate platform for event planning and shopping. Any non-competing service provider is welcome to join the directory and post their specialty and work photos and videos for free. Join now!
      </motion.p>

      {/* CTA Button */}
      <motion.div
        variants={fadeUp}
        className="mt-16 text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link
          href="/partner"
          className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
        >
          Register as a Partner
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Network;
