"use client";

import React from "react";
import ServiceCards from "../ServiceCards/page";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type CardData = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

type FeaturedServicesProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  cardData?: CardData[];
  removeBg?: string;
  label?: string;
  showDecorations?: boolean;
  showLabel?: boolean;
  useSection?: boolean;
  showBackground?: boolean;
  showVideo?: boolean;
};

const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  title = "Featured",
  subtitle = "Services",
  cardData,
  removeBg = "",
  label = "Services",
  showDecorations = true,
  showLabel = true,
  useSection = true,
  showBackground = true,
  showVideo = true,
  description,
}) => {
  // Framer Motion Variants
  const containerVariant: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const descriptionVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <>
      {useSection && (
        <div
          className={`
            relative py-[100px] w-full h-auto overflow-hidden
            ${showBackground ? "" : ""} bg-cover bg-no-repeat bg-center
            ${removeBg}
            ${showDecorations ? 
              `before:content-[''] before:absolute before:top-[15%] before:left-0 before:w-[221px] before:h-[205px] 
               before:bg-[url('/images/Confettis.png')] before:bg-no-repeat before:bg-contain before:animate-float
               after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[202px] after:h-[188px] 
               after:bg-[url('/images/Confetti-up.png')] after:bg-no-repeat after:bg-right after:bg-contain after:animate-float`
              : ""
            }
          `}
        >
          {/* Background Video */}
          {showVideo && (
            <>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              >
                <source src="/videos/services-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-[#040A1D] bg-opacity-50 z-0"></div>
            </>
          )}

          <div className="relative z-10 max-w-1296 mx-auto w-full flex flex-col items-center justify-center gap-8 text-center">
            <motion.div
              className="flex items-center justify-center w-full flex-col gap-5"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Label */}
              {showLabel && (
                <motion.div
                  variants={itemVariant}
                  className="max-w-[157px] cursor-pointer min-h-[44px] flex items-center justify-center gap-3 rounded-full px-5 py-3 bg-transparent text-yellow-color border border-primary"
                >
                  <div className="flex items-center justify-center">
                    <Link href="/" className="inline-block bg-transparent rounded-full shadow-shadow-6">
                      <Image
                        src="/gif/o-unscreen.gif"
                        alt="handshakes"
                        width={22}
                        height={22}
                        className="w-[22px] h-[22px]"
                      />
                    </Link>
                  </div>
                  <span className="text-[18px] font-normal text-white leading-none text-center">
                    {label}
                  </span>
                </motion.div>
              )}

              {/* Title */}
              <motion.h2
                variants={titleVariant}
                className="text-[65px] mt-[10px] font-bold text-white text-center leading-none"
              >
                <span className="text-yellow-color">{title} </span>
                <span className="whitespace-pre-line">{subtitle}</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={descriptionVariant}
                className="max-w-[969px] text-[18px] font-normal text-white leading-7 text-center"
              >
                {description ?? "Festival City caters for all your festive occasion with a complete line up of sate of the art lighting, sound stage, LED, and effects. All for very reasonable prices."}
              </motion.p>

              {/* Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-10 cursor-pointer"
                variants={containerVariant}
              >
                {cardData &&
                  cardData.length > 0 &&
                  cardData.map((card) => (
                    <motion.div key={card.id} variants={itemVariant}>
                      <ServiceCards
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        link={card.link}
                      />
                    </motion.div>
                  ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariant} className="mt-16">
                <Link
                  href="/partner"
                  className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
                >
                  View All
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedServices;
