// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, Variants } from "framer-motion";
// import SwipperSlider from "../Swipper/page";

// interface ClientProps {
//   label?: string;
//   showLabel?: boolean;
//   title?: string;
//   subtitle?: string;
// }

// const Client: React.FC<ClientProps> = ({
//   showLabel = true,
//   title = "Client",
//   subtitle = "Testimonials",
//   label = "Testimonials",
// }) => {
//   // Animation variants
//   const fadeUp: Variants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const staggerParent: Variants = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   return (
//     <section className="relative w-full h-auto overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/videos/testimonials-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-[#040A1D] bg-opacity-90 z-0"></div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-1296 mx-auto w-full flex flex-col items-center justify-center gap-8 py-20 text-center cursor-pointer"
//         variants={staggerParent}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {/* Label */}
//         {showLabel && (
//           <motion.div
//             variants={fadeUp}
//             className="max-w-[200px] cursor-pointer min-h-[44px] flex items-center justify-center gap-3 rounded-full px-5 py-3 bg-transparent text-yellow-color border border-primary"
//           >
//             <div className="flex items-center justify-center">
//               <Link
//                 href="/"
//                 className="inline-block bg-transparent rounded-full shadow-shadow-6"
//               >
//                 <Image
//                   src="/gif/o-unscreen.gif"
//                   alt="handshakes"
//                   width={22}
//                   height={22}
//                   className="w-[22px] h-[22px]"
//                 />
//               </Link>
//             </div>
//             <span className="text-[18px] font-normal text-white leading-none">
//               {label}
//             </span>
//           </motion.div>
//         )}

//         {/* Title */}
//         <motion.h2
//           variants={fadeUp}
//           className="text-[65px] mt-[10px] font-bold text-white leading-none"
//         >
//           <span className="text-yellow-color">{title} </span>
//           <span className="whitespace-pre-line">{subtitle}</span>
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           variants={fadeUp}
//           className="max-w-[969px] text-[18px] font-normal text-white leading-7"
//         >
//           Festival City caters for all your festive occasion with a complete
//           line up of state of the art lighting, sound stage, LED, and effects.
//           All for very reasonable prices.
//         </motion.p>

//         {/* Swipper Slider */}
//         <motion.div variants={fadeUp} className="w-full mt-12">
//           <SwipperSlider />
//         </motion.div>

//         {/* Social Links */}
//         <motion.div variants={fadeUp} className="w-full mt-12">
//           <div className="max-w-1296 mx-auto w-full">
//             <motion.ul
//               className="grid grid-cols-8 gap-[30px]"
//               variants={staggerParent}
//             >
//               {[
//                 {
//                   name: "Whatsapp",
//                   href: "https://api.whatsapp.com/send/?phone=966537039235&type=phone_number&app_absent=0",
//                   icon: "/social-icon/whatsapp.svg",
//                 },
//                 { name: "Facebook", href: "https://facebook.com", icon: "/social-icon/facebook.svg" },
//                 { name: "Twitter", href: "https://twitter.com", icon: "/social-icon/twitter.svg" },
//                 { name: "Snapchat", href: "https://snapchat.com", icon: "/social-icon/snapchat.svg" },
//                 { name: "Linkedin", href: "https://linkedin.com", icon: "/social-icon/linkedin.svg" },
//                 { name: "Instagram", href: "https://instagram.com", icon: "/social-icon/instagram.svg" },
//                 { name: "TikTok", href: "https://tiktok.com", icon: "/social-icon/tiktok.svg" },
//                 { name: "Youtube", href: "https://youtube.com", icon: "/social-icon/you-tube.svg" },
//               ].map((item) => (
//                 <motion.li
//                   key={item.name}
//                   variants={fadeUp}
//                   className="border-white-default transition-all duration-300 opacity-20"
//                 >
//                   <a
//                     title={item.name}
//                     className="flex items-center justify-center text-white text-[15px] leading-[20px] gap-1.5 py-3.5 px-3 md:py-[22px] ltr:border-r rtl:border-l border-white border-opacity-20"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={item.href}
//                   >
//                     <span className="w-9 h-9 flex items-center justify-center">
//                       <Image
//                         alt={item.name}
//                         loading="lazy"
//                         width={34}
//                         height={34}
//                         className="shadow-shadow-5"
//                         src={item.icon}
//                       />
//                     </span>
//                     <span className="hidden md:inline-block">{item.name}</span>
//                   </a>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Client;



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import SwipperSlider from "../Swipper/page";

interface ClientProps {
  label?: string;
  showLabel?: boolean;
  title?: string;
  subtitle?: string;
}

const Client: React.FC<ClientProps> = ({
  showLabel = true,
  title = "Client",
  subtitle = "Testimonials",
  label = "Testimonials",
}) => {
  // Animation variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerParent: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="relative w-full h-auto overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/testimonials-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#040A1D] bg-opacity-90 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-full sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1296px] mx-auto w-full flex flex-col items-center justify-center gap-6 md:py-16 py-[45px] text-center cursor-pointer px-4 sm:px-6 lg:px-0"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Label */}
        {showLabel && (
          <motion.div
            variants={fadeUp}
            className="min-h-[44px] max-w-[200px] flex items-center justify-center gap-3 rounded-full px-4 sm:px-5 py-2 sm:py-3 bg-transparent text-yellow-color border border-primary mx-auto"
          >
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="inline-block bg-transparent rounded-full shadow-shadow-6"
              >
                <Image
                  src="/gif/o-unscreen.gif"
                  alt="handshakes"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
                />
              </Link>
            </div>
            <span className="text-[14px] sm:text-[16px] font-normal text-white leading-none">
              {label}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] mt-4 sm:mt-6 font-bold text-white leading-snug sm:leading-tight md:leading-tight"
        >
          <span className="text-yellow-color">{title} </span>
          <span className="whitespace-pre-line">{subtitle}</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-full sm:max-w-[550px] md:max-w-[800px] lg:max-w-[969px] text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white leading-6 sm:leading-7 md:leading-7 mt-0 sm:mt-0"
        >
          Festival City caters for all your festive occasion with a complete
          line up of state of the art lighting, sound stage, LED, and effects.
          All for very reasonable prices.
        </motion.p>

        {/* Swipper Slider */}
        <motion.div variants={fadeUp} className="w-full mt-10 sm:mt-12 md:mt-16">
          <SwipperSlider />
        </motion.div>
        
        {/* Social Links */}
        <motion.div variants={fadeUp} className="w-full md:mt-0 mt-0 lg:mt-[70px]">
          <div className="max-w-1296 mx-auto w-full px-4 lg:px-0">
            <motion.ul
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-2 md:gap-8"
              variants={staggerParent}
            >
              {[
                {
                  name: "Whatsapp",
                  href: "https://api.whatsapp.com/send/?phone=966537039235&type=phone_number&app_absent=0",
                  icon: "/social-icon/whatsapp.svg",
                },
                { name: "Facebook", href: "https://facebook.com", icon: "/social-icon/facebook.svg" },
                { name: "Twitter", href: "https://twitter.com", icon: "/social-icon/twitter.svg" },
                { name: "Snapchat", href: "https://snapchat.com", icon: "/social-icon/snapchat.svg" },
                { name: "Linkedin", href: "https://linkedin.com", icon: "/social-icon/linkedin.svg" },
                { name: "Instagram", href: "https://instagram.com", icon: "/social-icon/instagram.svg" },
                { name: "TikTok", href: "https://tiktok.com", icon: "/social-icon/tiktok.svg" },
                { name: "Youtube", href: "https://youtube.com", icon: "/social-icon/you-tube.svg" },
              ].map((item) => (
                <motion.li
                  key={item.name}
                  variants={fadeUp}
                  className="border-white-default relative transition-all duration-300 opacity-20 li-diamond"
                >
                  <a
                    title={item.name}
                    className="flex items-center justify-center flex-col text-white text-[15px] leading-[20px] gap-1.5 py-3 px-3 md:py-[16px] border-white border-opacity-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.href}
                  >
                    <span className="w-8 h-8 sm:w-9 sm:h-9 min-w-[32px] min-h-[32px]">
                      <Image
                        alt={item.name}
                        loading="lazy"
                        width={34}
                        height={34}
                        className="w-full h-full object-contain shadow-shadow-5"
                        src={item.icon}
                      />
                    </span>
                    <span className=" md:inline-block">{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Client;
