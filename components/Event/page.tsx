import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Event = () => {
  return (
    <>
        <section className='relative bg-event-pattern bg-cover bg-no-repeat bg-center pb-[100px]'>
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
                    
                 </div>
            </div>
        </section>
    </>
  )
}

export default Event;
