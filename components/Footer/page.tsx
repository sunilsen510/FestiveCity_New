import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer>
      {/* Top Social Links */}
      <div className="px-4">
        <div className="max-w-1296 mx-auto w-full">
          <ul className="grid grid-cols-8">
            {/* Social Link Template */}
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
              { name: "Youtube", href: "https://youtube.com", icon: "/social-icon/youtube.svg" },
            ].map((item, idx) => (
             <li
      key={item.name}
      className={`border-t border-white border-opacity-20 ${idx === 0 ? "border-t-0" : ""}`} // pehle li ka border remove
    >
                <a
                  title={item.name}
                  className="flex items-center justify-center text-white text-[15px] leading-[20px] gap-1.5 py-3.5 md:py-[22px] ltr:border-r rtl:border-l border-white border-opacity-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    <Image
                      alt={item.name}
                      loading="lazy"
                      width={24}
                      height={24}
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

      {/* Middle Section */}
      <div className="bg-secondary-700 px-4 py-[70px]">
        <div className="max-w-1296 mx-auto w-full">
          <div className="flex flex-wrap -mx-[15px] text-white gap-y-[30px]">
            {/* About Column */}
            <div className="w-full lg:w-[430px] px-[15px]">
              <div className="lg:pr-[30px] lg:rtl:pr-0 lg:rtl:pl-[30px]">
                <Image alt="Logo" loading="lazy" width={224} height={58} src="/logo.svg" />
                <p className="text-gray-neutral-50 text-sm leading-[20px] my-[30px]">
                  Festival City is an event rentals and event management company based in Jeddah, KSA,
                  specializing in lighting, sound, stage setups, special effects, and full-scale event planning. 
                  We serve in you any location within KSA.
                </p>

                <div>
                  <span className="text-gray-neutral-50 text-sm leading-[20px] mb-2.5 block">
                    Follow us and get latest updates straight to your inbox
                  </span>
                  <form>
                    <div className="relative sm:max-w-[334px] lg:max-w-full">
                      <input
                        autoComplete="off"
                        className="bg-input-bg border border-primary-50 border-opacity-10 text-gray-neutral-300 w-full outline-none leading-[24px] py-2.5 px-4 rounded-lg placeholder-gray-neutral-300 ltr:pr-14 rtl:pl-14"
                        placeholder="Enter your email here"
                        type="text"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="absolute ltr:right-0 rtl:left-0 top-0 w-[44px] h-[44px] flex items-center justify-center"
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
            </div>

            {/* Links & Contact Column */}
            <div className="px-[15px] w-full lg:w-[calc(100%-430px)] flex flex-col md:flex-row gap-[30px]">
              {/* Links */}
              <div className="md:flex-1">
                <h6 className="mb-4 text-gray-neutral-300 uppercase text-sm font-bold">LINKS</h6>
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
                        className={`text-sm leading-[20px] ${link.primary ? "text-primary" : "text-gray-neutral-50 hover:text-primary"}`}
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="md:flex-1">
                <div className="flex flex-col space-y-[30px] max-w-[270px] lg:mx-auto">
                  {[
                    {
                      label: "Location",
                      icon: "/icons/map-2.svg",
                      links: [{ text: "KSA", href: "https://www.google.com/maps/search/?api=1&query=KSA" }],
                    },
                    {
                      label: "E-mail",
                      icon: "/icons/email.svg",
                      links: [
                        { text: "support@festivalcity.sa", href: "mailto:support@festivalcity.sa" },
                        { text: "admin@festivalcity.sa", href: "mailto:admin@festivalcity.sa" },
                      ],
                    },
                    {
                      label: "Contact",
                      icon: "/icons/phone.svg",
                      links: [{ text: "+966537039235", href: "tel:+966537039235" }],
                    },
                  ].map((section) => (
                    <div key={section.label}>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <Image alt={section.label} width={18} height={18} src={section.icon} />
                        <span className="text-gray-neutral-300 text-sm font-bold">{section.label}</span>
                      </div>
                      <div>
                        {section.links.map((link) => (
                          <a key={link.text} className="text-gray-neutral-300 text-sm leading-[20px] inline-block" href={link.href} target="_blank" rel="noopener noreferrer">
                            <div>{link.text}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Experience */}
              <div className="md:flex-1 p-[1px] gradient_border20 relative z-[1]">
                <div className="bg-secondary-700 rounded-[20px] px-5 pt-5 overflow-hidden">
                  <h5 className="text-xl leading-6 text-gray-neutral-50 font-bold mb-2.5">Share Your Experience</h5>
                  <p className="text-gray-neutral-50 text-sm leading-5 mb-5">
                    We would love to hear from you! Help us improve by sharing your feedback about our partners, events, or your overall experience.
                  </p>
                  <button className="bg-transparent text-primary leading-[22px] font-normal rounded-lg py-2.5 px-4 border border-primary hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:h-full before:w-0 before:bg-black before:opacity-5 before:transition-all before:duration-300 after:absolute after:top-0 after:right-1/2 after:h-full after:w-0 after:bg-black after:opacity-5 after:transition-all after:duration-300 hover:before:w-1/2 hover:before:-left-1/2 hover:before:opacity-10 hover:after:w-1/2 hover:after:-right-1/2 hover:after:opacity-10">
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-secondary-600 bg-secondary-700 px-4 py-5">
        <div className="max-w-1296 mx-auto w-full">
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-sm text-gray-neutral-50 uppercase font-normal order-1 sm:order-none w-full sm:w-auto text-center sm:text-left mt-2.5 sm:mt-0">
              © All Rights Reserved - 2025
            </p>
            <div className="flex items-center justify-center sm:justify-end space-x-[30px] rtl:space-x-reverse w-full sm:w-auto">
              <a className="text-base leading-[24px] hover:text-primary text-gray-neutral-50" href="/en/privacy-policy">
                Privacy Policy
              </a>
              <a className="text-base leading-[24px] hover:text-primary text-gray-neutral-50" href="/en/terms-of-use">
                Terms Of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
