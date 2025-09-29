import React from 'react';
import Image from "next/image";


type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <>
      <div className="relative mob-shadow-peach-custom sm:hover:shadow-peach-custom rounded-3xl rounded-br-[250px] sm:rounded-br-[180px]">
      <div className="mask-image gradient_border_mask p-[1px] rounded-[20px] group relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={302}
          height={372}
          className="w-full object-cover min-h-[372px] rounded-[20px] ser_main_img"
          priority
        />
        <div className="bg-black-linear rounded-[20px] w-[calc(100%-2px)] h-[calc(100%-2px)] text-start absolute top-[1px] left-[1px] p-5 pr-20 flex flex-col justify-end flex-wrap transition-all duration-300 ease-in-out">
          <h6 className="font-bold text-white leading-[24px] mb-1 transition-all duration-300 ease-in-out">
            {title}
          </h6>
          <p className="text-sm leading-[20px] text-white font-normal opacity-0 h-0 translate-y-3 group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-0 transition-all duration-300 ease-in-out line-clamp-3">
            {description}
          </p>
        </div>
        <Image
          src="/images/angle-shape.svg"
          alt="shape"
          width={72}
          height={72}
          className="absolute right-0 bottom-0 angle_shape_img"
          priority
        />
      </div>

      <a
        href={link}
        title={link}
        className="flex items-center justify-center w-[44px] h-[44px] bg-transparent hover:bg-yellow-linear hover:border-transparent  border rounded-lg absolute right-0 bottom-0 group  overflow-hidden
                   before:absolute before:top-0 before:left-1/2 before:h-full before:w-0 before:bg-black before:opacity-5 before:transition-all before:duration-300
                   after:absolute after:top-0 after:right-1/2 after:h-full after:w-0 after:bg-black after:opacity-5 after:transition-all after:duration-300
                   hover:before:w-1/2 hover:before:-left-1/2 hover:before:opacity-10 hover:after:w-1/2 hover:after:-right-1/2 hover:after:opacity-10"
      >
        
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 ease-in-out">
        <path d="M18.2384 15.6826C18.0976 15.8102 17.9098 15.8859 17.6979 15.8755C17.2883 15.8554 16.9659 15.4998 16.986 15.0902L17.3699 7.26483L9.54452 6.88099C9.1349 6.8609 8.81252 6.50527 8.83261 6.09564C8.85271 5.68601 9.20834 5.36363 9.61797 5.38372L18.1919 5.80428C18.6016 5.82437 18.9239 6.18001 18.9038 6.58964L18.4833 15.1636C18.4729 15.3755 18.3791 15.555 18.2384 15.6826Z" fill="white"/>
        <path d="M18.5324 7.2233L6.0631 18.5266C5.75933 18.8019 5.27907 18.7784 5.00371 18.4746C4.72835 18.1709 4.75191 17.6906 5.05568 17.4152L17.525 6.11195C17.8288 5.83659 18.309 5.86014 18.5844 6.16391C18.8598 6.46768 18.8362 6.94794 18.5324 7.2233Z" fill="white"/>
        </svg>
      </a>
    </div>
    </>
  )
}

export default ServiceCard;
