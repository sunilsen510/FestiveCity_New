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
}) => {

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
            <div className="flex items-center justify-center w-full flex-col gap-5">
              {/* tags */}
              {showLabel && (
                <div className="max-w-[157px] cursor-pointer min-h-[44px] flex items-center justify-center gap-3 rounded-full px-5 py-3 bg-transparent text-yellow-color border border-primary">
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
                </div>
              )}

              {/* Title */}
              <h2 className="text-[65px] mt-[10px] font-bold text-white text-center leading-none">
                <span className="text-yellow-color">{title} </span>
                <span className="whitespace-pre-line">{subtitle}</span>
              </h2>

              {/* Description */}
              <p className="max-w-[969px] text-[18px] font-normal text-white leading-7 text-center">
                Festival City caters for all your festive occasion with a complete line up of sate of the art lighting, sound stage, LED, and effects. All for very reasonable prices.
              </p>

              {/* cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-10 cursor-pointer">
                {cardData &&
                  cardData.length > 0 &&
                  cardData.map((card) => (
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
        </div>
      )}
    </>
  );
};

export default FeaturedServices;
