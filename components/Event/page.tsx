import React from 'react';
import Image from "next/image";
import Link from "next/link";
import FeaturedServices from '../Services/FeaturedServices';
import Network from '../Network/page';
import SwipperSlider from '../Swipper/page';

const cardData = [
  {
    id: 1,
    title: "Visual, Audio, Digital Design and Printing*, Photography and videography for event",
    subtitle: "Shinji",
    description:
      "Crafting Experiences, Creating Memories",
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


const Event = () => {
  return (
    <>
        <section className='relative bg-event-pattern bg-cover bg-no-repeat bg-center'>
            <div className="max-w-1296 mx-auto w-full">
                <div className="flex items-center justify-center w-full flex-col gap-5 ">
                    {/* Title */}
                    <h2 className="text-[65px] mt-[10px] font-bold text-white leading-none mb-[54px]">
                        <span className="text-yellow-color">Your Event, </span>
                        <span>Our Passion</span>
                    </h2>

                    <div className="flex items-center justify-center rounded-[60px] overflow-hidden">
                    <Link href="/" className="inline-block w-full">
                        <Image
                        src="/images/bg-event.png"
                        alt="Event"
                        width={1296}
                        height={576}
                        className="w-full h-auto object-cover rounded-[60px]"
                        />
                    </Link>
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

                <div className="flex items-center justify-center w-full flex-col gap-5 ">
                    <FeaturedServices
                        title="Trending"
                        subtitle="Partners"
                        description="Festival City caters for all your festive occasion with a complete line up of state of the art lighting, sound stage, LED, and effects. All for very reasonable prices."
                        cardData={cardData}
                        removeBg="bg-none"
                        label="Partners"
                        showDecorations={false}
                        
                    />
                </div>

                <div className="flex items-center justify-center w-full flex-col gap-5 pb-[100px] ">
                    <Network />
                </div>
                <div className="flex items-center justify-center w-full flex-col gap-5 pb-[100px] ">
                    <SwipperSlider />
                </div>
            </div>
        </section>
    </>
  )
}

export default Event;
