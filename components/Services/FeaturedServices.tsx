import React from "react";
import ServiceCards from "../ServiceCards/page";
import Image from "next/image";
import Link from "next/link";
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
  cardData: CardData[];
};

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ cardData }) => {
  return (
    <>
      <section
        className="relative py-[100px] bg-service-pattern bg-cover bg-no-repeat bg-center 
                before:content-[''] before:absolute before:top-[15%] before:left-0 before:w-[221px] before:h-[205px] 
                before:bg-[url('/images/Confettis.png')] before:bg-no-repeat before:bg-contain before:animate-float
                after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[202px] after:h-[188px] 
                after:bg-[url('/images/Confetti-up.png')] after:bg-no-repeat after:bg-right  after:bg-contain after:animate-float"
        style={{ height: "950px" }}
      >
        <div className="max-w-1296 mx-auto w-full">
          <div className="flex items-center justify-center w-full flex-col gap-5">
            {/* tags */}
            <div className="max-w-[157px] cursor-pointer min-h-[44px] flex items-center justify-center gap-3 rounded-full px-5 py-3 bg-transparent text-yellow-color border border-primary ">
              {/* Small circle */}
              {/* <div className="relative 
                            before:content-[''] before:absolute before:top-1/2 before:left-[-4px] before:w-5 before:h-5 before:-translate-y-1/2 before:rounded-full before:bg-[#ff8184]
                            after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-[14%]  after:-translate-y-1/2 after:w-4 after:h-4 after:rounded-full after:bg-[#050a37]">
                        </div> */}
              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="inline-block  bg-transparent rounded-full shadow-shadow-6"
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
              <span className="text-[18px] font-normal text-white leading-none text-center">
                Services
              </span>
            </div>
            {/* Title */}
            <h2 className="text-[65px] mt-[10px] font-bold text-white leading-none">
              <span className="text-yellow-color">Featured </span>
              <span>Services</span>
            </h2>
            {/* Description */}
            <p className="max-w-[969px] text-[18px] font-normal text-white leading-7 text-center">
              Festival City caters for all your festive occasion with a complete
              line up of sate of the art lighting, sound stage, LED, and
              effects. All for very reasonable prices.
            </p>
            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-10">
              {cardData.map((card) => (
                <ServiceCards
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <Link
                href="/partner"
                className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
