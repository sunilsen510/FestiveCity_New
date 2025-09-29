import React from "react";
import Image from "next/image";
import Link from "next/link";
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

      {/* Overlay (Optional: Dark overlay for better readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#040A1D] bg-opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-1296 mx-auto w-full flex flex-col items-center justify-center gap-8 py-20 text-center cursor-pointer">
        {/* tags */}
        {showLabel && (
          <div className="max-w-[200px] cursor-pointer min-h-[44px] flex items-center justify-center gap-3 rounded-full px-5 py-3 bg-transparent text-yellow-color border border-primary">
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
            {/* Label */}
            <span className="text-[18px] font-normal text-white leading-none">
              {label}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="text-[65px] mt-[10px] font-bold text-white leading-none">
          <span className="text-yellow-color">{title} </span>
          <span className="whitespace-pre-line">{subtitle}</span>
        </h2>

        {/* Description */}
        <p className="max-w-[969px] text-[18px] font-normal text-white leading-7">
          Festival City caters for all your festive occasion with a complete
          line up of state of the art lighting, sound stage, LED, and effects.
          All for very reasonable prices.
        </p>

        {/* Swipper Slider */}
        <div className="w-full mt-12">
          <SwipperSlider />
        </div>

        {/* Top Social Links */}
        <div className="w-full mt-12">
          <div className="max-w-1296 mx-auto w-full">
            <ul className="grid grid-cols-8 gap-[30px]">
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
              ].map((item, idx) => (
                <li
                  key={item.name}
                  className={`border border-white border-opacity-20 rounded-[10px] hover:bg-yellow/10 hover:border-yellow hover:shadow-md transition-all duration-300  ${
                    idx === 0 ? "border-t" : ""
                  }`}
                >
                  <a
                    title={item.name}
                    className="flex items-center justify-center text-white text-[15px] leading-[20px] gap-1.5 py-3.5 px-3 md:py-[22px] ltr:border-r rtl:border-l border-white border-opacity-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.href}
                  >
                    <span className="w-9 h-9 flex items-center justify-center">
                      <Image
                        alt={item.name}
                        loading="lazy"
                        width={34}
                        height={34}
                        className="shadow-shadow-5"
                        src={item.icon}
                      />
                    </span>
                    <span className="hidden md:inline-block">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
