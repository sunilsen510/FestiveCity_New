import React from 'react'
import Link from "next/link";

const Network = () => {
  return (
    <>
        <div className=''>
            {/* Title */}
            <h2 className="text-[65px] mt-[10px] font-bold text-white text-center leading-none">
                <span className="text-yellow-color">Join Our</span> <span className="text-white">Network</span>
                <br />
                <span className="text-white">Directory</span>
            </h2>
            {/* Description */}
            <p className="max-w-[969px] text-[18px] font-normal text-white leading-7 text-center mt-5">
              We have created a free Partner Directory for all event services. This directory is available nationwide to be the ultimate platform for event planning and shopping. Any non-competing service provider is welcome to join the directory and post their specialty and work photos and videos for free. Join now!
            </p>

             {/* CTA Button */}
            <div className="mt-16 text-center">
              <Link
                href="/partner"
                className="bg-transparent text-yellow-color border border-primary hover:bg-yellow-linear hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
              >
                Register as a Partner
              </Link>
            </div>
        </div>
    </>
  )
}

export default Network;
