
'use client';

import React from "react";
import ServiceCards from "../ServiceCards/page";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import AnimatedText  from "../AnimatedText/page";
import AnimatedButton from "../AnimatedButton/page";


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
            relative pt-0 lg:py-[80px] sm:py-[90px] md:py-[100px] w-full h-auto overflow-hidden
            ${showBackground ? "" : ""} bg-cover bg-no-repeat bg-center
            ${removeBg}
            ${showDecorations ? 
              `before:content-[''] before:absolute before:top-[10%] sm:before:top-[15%] before:left-0 before:w-[150px] sm:before:w-[221px] before:h-[140px] sm:before:h-[205px] 
               before:bg-[url('/images/Confettis.png')] before:bg-no-repeat before:bg-contain before:animate-float before:z-50
               after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[150px] sm:after:w-[202px] after:h-[140px] sm:after:h-[188px] 
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

          <div className="relative z-10 max-w-1296 mx-auto w-full flex flex-col items-center justify-center gap-6 sm:gap-8 text-center px-4 lg:px-0">

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:gap-5 w-full pb-[45px] lg:pb-0 md:pb-0"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Label */}
              {showLabel && (
                <motion.div
                  variants={itemVariant}
                  className="max-w-[140px] sm:max-w-[157px] cursor-pointer min-h-[40px] sm:min-h-[44px] flex items-center justify-center gap-2 sm:gap-3 rounded-full px-4 sm:px-5 py-2 sm:py-3 bg-transparent text-yellow-color border border-primary text-sm sm:text-[18px]"
                >
                  <div className="flex items-center justify-center">
                    <Link href="/" className="inline-block bg-transparent rounded-full shadow-shadow-6">
                      <Image
                        src="/gif/o-unscreen.gif"
                        alt="handshakes"
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]"
                      />
                    </Link>
                  </div>
                  <span className="text-sm sm:text-[18px] font-normal text-white leading-none text-center">
                    {label}
                  </span>
                </motion.div>
              )}

              {/* Title */}
              {/* <motion.h2
                variants={titleVariant}
                className="text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] mt-3 font-bold text-white text-center leading-snug sm:leading-tight md:leading-none"
              >
                <span className="text-yellow-color">{title} </span>
                <span className="whitespace-pre-line">{subtitle}</span>
              </motion.h2> */}

              {/* Description */}
              {/* <motion.p
                variants={descriptionVariant}
                className="max-w-[90%] sm:max-w-[600px] md:max-w-[969px] text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white leading-6 sm:leading-7 text-center mt-2 sm:mt-4"
              >
                {description ?? "Festival City caters for all your festive occasion with a complete line up of state-of-the-art lighting, sound stage, LED, and effects. All for very reasonable prices."}
              </motion.p> */}

              {/* Title + Subtitle */}
            <motion.div variants={titleVariant} className="flex items-center justify-center text-center">
              <AnimatedText
                text={title as string} // cast to string if needed
                className="text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] font-bold text-yellow-color leading-snug sm:leading-tight md:leading-none"
              />

              <AnimatedText
                text={subtitle as string}
                className="text-[28px] sm:text-[40px] md:text-[55px] lg:text-[65px] font-bold text-white leading-snug sm:leading-tight md:leading-none"
              />
            </motion.div>

            {/* Description */}
            <motion.div variants={descriptionVariant} className="mt-2 sm:mt-4 text-center">
              <AnimatedText
                text={
                  description ??
                  "Festival City caters for all your festive occasion with a complete line up of state-of-the-art lighting, sound stage, LED, and effects. All for very reasonable prices."
                }
                className="max-w-[90%] sm:max-w-[600px] md:max-w-[969px] text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white leading-6 sm:leading-7 md:leading-7 mx-auto"
              />
            </motion.div>

              {/* Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 cursor-pointer w-full"
                variants={containerVariant}
              >
                {cardData &&
                  cardData.length > 0 &&
                  cardData.map((card) => (
                    <motion.div key={card.id} variants={itemVariant} className="w-full">
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
              <motion.div variants={itemVariant} className="mt-10 sm:mt-16">
                 <AnimatedButton href="/partner" className="mt-[40px] mb-[60px] bg-yellow-light-linear">View All</AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedServices;
