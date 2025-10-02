"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Footer = () => {
  // Animation Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerParent: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <footer>
        {/* Middle Section */}
        <div className="bg-[#020619] px-4 lg:py-[70px] py-0">
          <div className="max-w-1296 mx-auto w-full">
            <motion.div
              className="flex flex-wrap -mx-[15px] text-white gap-y-[30px]"
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* About Column */}
              <motion.div
                variants={fadeLeft}
                className="w-full lg:w-[430px] px-[15px]"
              >
                <div className="lg:pr-[30px] lg:rtl:pr-0 lg:rtl:pl-[30px]">
                  <Image
                    alt="Logo"
                    loading="lazy"
                    width={224}
                    height={58}
                    src="/logo.svg"
                  />
                  <p className="text-gray-neutral-50 text-sm leading-[20px] my-[30px]">
                    Festival City is an event rentals and event management
                    company based in Jeddah, KSA, specializing in lighting,
                    sound, stage setups, special effects, and full-scale event
                    planning. We serve in you any location within KSA.
                  </p>

                  <div>
                    <span className="text-gray-neutral-50 text-sm leading-[20px] mb-2.5 block">
                      Follow us and get latest updates straight to your inbox
                    </span>
                    <form>
                      <div className="relative sm:max-w-[334px] lg:max-w-full">
                        <input
                          autoComplete="off"
                          className="bg-transparent border border-primary-50 text-gray-neutral-300 w-full outline-none leading-[24px] py-2.5 px-4 rounded-lg placeholder-gray-neutral-300 ltr:pr-14 rtl:pl-14"
                          placeholder="Enter your email here"
                          type="text"
                          name="email"
                        />
                        <button
                          type="submit"
                          className="absolute top-0 right-0 w-[44px] h-[44px] flex items-center justify-center"
                        >
                          <Image
                            alt="Right Arrow"
                            loading="eager"
                            width={24}
                            height={24}
                            className="rtl:rotate-180"
                            src="/icons/arrow-right.svg"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Links & Contact Column */}
              <div className="px-[15px] w-full lg:w-[calc(100%-430px)] flex flex-col md:flex-row gap-[30px]">
                {/* Links */}
                <motion.div variants={fadeUp} className="md:flex-1">
                  <h6 className="mb-4 text-gray-neutral-300 uppercase text-sm font-bold">
                    LINKS
                  </h6>
                  <ul className="space-y-2.5">
                    {[
                      { name: "Home", href: "/en", primary: true },
                      { name: "About Us", href: "/en/about" },
                      { name: "Our Services", href: "/en/services" },
                      { name: "Our Equipment", href: "/en/our-equipment" },
                      { name: "Our Events", href: "/en/our-events" },
                      { name: "Partners Directory", href: "/en/partners-directory" },
                      { name: "Contact Us", href: "/en/contact" },
                      { name: "FAQs", href: "/en/faqs" },
                      { name: "Legal", href: "/en/legal" },
                    ].map((link) => (
                      <li key={link.name}>
                        <a
                          className={`text-sm leading-[20px] ${
                            link.primary
                              ? "text-yellow-color"
                              : "text-gray-neutral-50 hover:text-yellow-color"
                          }`}
                          href={link.href}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={fadeUp} className="md:flex-1">
                  <div className="flex flex-col space-y-[30px] max-w-[270px] lg:mx-auto">
                    {[
                      {
                        label: "Location",
                        icon: "/icons/ylocation.svg",
                        links: [
                          {
                            text: "KSA - Jeddah - Faisaliyah District",
                            href: "https://www.google.com/maps/search/?api=1&query=KSA",
                          },
                        ],
                      },
                      {
                        label: "E-mail",
                        icon: "/icons/yemail.svg",
                        links: [
                          {
                            text: "support@festivalcity.sa",
                            href: "mailto:support@festivalcity.sa",
                          },
                          {
                            text: "admin@festivalcity.sa",
                            href: "mailto:admin@festivalcity.sa",
                          },
                        ],
                      },
                      {
                        label: "Contact",
                        icon: "/icons/yphone.svg",
                        links: [
                          { text: "+966537039235", href: "tel:+966537039235" },
                        ],
                      },
                    ].map((section) => (
                      <div key={section.label}>
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <Image
                            alt={section.label}
                            width={18}
                            height={18}
                            src={section.icon}
                            className="cursor-pointer"
                          />
                          <span className="text-gray-neutral-300 text-sm font-bold">
                            {section.label}
                          </span>
                        </div>
                        <div>
                          {section.links.map((link) => (
                            <a
                              key={link.text}
                              className="text-gray-neutral-300 text-sm leading-[20px] inline-block"
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div>{link.text}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Share Experience */}
                <motion.div
                  variants={fadeUp}
                  className="md:flex-1 p-[1px] border-primary hover:bg-transparent relative z-[1]  border rounded-[20px]"
                >
                  <div className="bg-secondary-700 rounded-[20px] px-5 pt-5 overflow-hidden">
                    <h5 className="text-xl leading-6 text-gray-neutral-50 font-bold mb-2.5">
                      Share Your Experience
                    </h5>
                    <p className="text-gray-neutral-50 text-sm leading-5 mb-5">
                      We would love to hear from you! Help us improve by sharing
                      your feedback about our partners, events, or your overall
                      experience.
                    </p>
                    <button className="bg-transparent text-yellow-color leading-[22px] font-normal rounded-lg py-2.5 px-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden">
                      Write a Review
                    </button>
                  </div>
                  <div>
                    <Image
                      alt="Image"
                      loading="eager"
                      width={222}
                      height={162}
                      className="w-full h-auto rounded-b-[20px]"
                      src="/images/reviewImage.png"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-secondary-600 bg-[#020619] px-4 py-5"
        >
          <div className="max-w-1296 mx-auto w-full">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-sm text-gray-neutral-50 uppercase font-normal order-1 sm:order-none w-full sm:w-auto text-center sm:text-left mt-2.5 sm:mt-0">
                © All Rights Reserved - 2025
              </p>
              <div className="flex items-center justify-center sm:justify-end space-x-[30px] rtl:space-x-reverse w-full sm:w-auto">
                <a
                  className="text-base leading-[24px] hover:text-primary text-gray-neutral-50"
                  href="/en/privacy-policy"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-base leading-[24px] hover:text-primary text-gray-neutral-50"
                  href="/en/terms-of-use"
                >
                  Terms Of Service
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>

      {/* WhatsApp Icon with Motion */}
      <div className="relative w-full h-full hidden lg:block">
        <Link href="/" className="bottom-[64px] right-[64px] z-[50] fixed">
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
    </>
  );
};

export default Footer;
