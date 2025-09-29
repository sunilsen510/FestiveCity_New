import React from "react";
import Image from "next/image";
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slidesData = [
  {
    id: 1,
    title: "Professional Party Planning, Setup, and Coordination",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service1.png",
    link: "/en/services#test-9",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 2,
    title: "Event Setup",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service2.png",
    link: "/en/services#test-10",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 3,
    title: "Festival Setup and Management",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service3.png",
    link: "/en/services#test-11",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 4,
    title: "Festival Setup and Management",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service-in4.png",
    link: "/en/services#test-12",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 1,
    title: "Professional Party Planning, Setup, and Coordination",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service1.png",
    link: "/en/services#test-9",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 2,
    title: "Event Setup",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service2.png",
    link: "/en/services#test-10",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 3,
    title: "Festival Setup and Management",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service3.png",
    link: "/en/services#test-11",
    location: "Khobar (Al-Khobar)",
  },
  {
    id: 4,
    title: "Festival Setup and Management",
    description:
      "We provide comprehensive party setup services, including venu...",
    image: "/images/service-in4.png",
    link: "/en/services#test-12",
    location: "Khobar (Al-Khobar)",
  },
];

const SwipperSlider = () => {
    const rating = 1;
  return (
    <div className="max-w-1296 mx-auto w-full">
      <div className="w-full h-[300px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true} // infinite loop
          autoplay={{
            delay: 0, // no delay between slides
            disableOnInteraction: false,
          }}
          speed={3000} // slide speed (ms)
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="border-white-default  relative rounded-lg p-[1px] group  sm:hover:border-white-default">
                <div className="px-5 py-[30px] bg-[#FFEBE6] bg-opacity-5 rounded-lg">
                  {/* Top Section */}
                  <div className="flex justify-between items-center mb-5">
                    <Image
                      alt="quote"
                      loading="lazy"
                      width="18"
                      height="18"
                      src="/icons/home_quote.png"
                    />

                    {/* Stars */}
                    <ul className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <li key={i}>
                            {i < rating ? (
                                // ⭐ Filled Star
                                <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#E67225]"
                                >
                                <path
                                    d="M7.629 4.507C8.685 2.614 9.212 1.667 10.002 1.667C10.791 1.667 11.318 2.614 12.374 4.507L12.647 4.997C12.947 5.535 13.097 5.804 13.331 5.982C13.564 6.159 13.856 6.225 14.439 6.357L14.969 6.477C17.019 6.941 18.043 7.173 18.287 7.957C18.531 8.74 17.832 9.558 16.435 11.192L16.073 11.614C15.677 12.079 15.477 12.311 15.388 12.598C15.299 12.885 15.329 13.195 15.389 13.815L15.444 14.379C15.655 16.56 15.761 17.65 15.122 18.134C14.484 18.618 13.524 18.176 11.606 17.293L11.108 17.065C10.563 16.813 10.291 16.688 10.002 16.688C9.712 16.688 9.44 16.813 8.895 17.065L8.398 17.293C6.479 18.176 5.519 18.618 4.882 18.134C4.242 17.65 4.348 16.56 4.559 14.379L4.614 13.815C4.674 13.195 4.704 12.885 4.614 12.599C4.526 12.311 4.327 12.079 3.93 11.615L3.568 11.192C2.171 9.559 1.472 8.741 1.716 7.957C1.959 7.173 2.985 6.94 5.035 6.477L5.565 6.357C6.147 6.225 6.438 6.159 6.672 5.982C6.906 5.804 7.056 5.535 7.356 4.997L7.629 4.507Z"
                                />
                                </svg>
                            ) : (
                                // ☆ Outline Star
                                <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#E67225]"
                                >
                                <path
                                    d="M7.629 4.507C8.685 2.614 9.212 1.667 10.002 1.667C10.791 1.667 11.318 2.614 12.374 4.507L12.647 4.997C12.947 5.535 13.097 5.804 13.331 5.982C13.564 6.159 13.856 6.225 14.439 6.357L14.969 6.477C17.019 6.941 18.043 7.173 18.287 7.957C18.531 8.74 17.832 9.558 16.435 11.192L16.073 11.614C15.677 12.079 15.477 12.311 15.388 12.598C15.299 12.885 15.329 13.195 15.389 13.815L15.444 14.379C15.655 16.56 15.761 17.65 15.122 18.134C14.484 18.618 13.524 18.176 11.606 17.293L11.108 17.065C10.563 16.813 10.291 16.688 10.002 16.688C9.712 16.688 9.44 16.813 8.895 17.065L8.398 17.293C6.479 18.176 5.519 18.618 4.882 18.134C4.242 17.65 4.348 16.56 4.559 14.379L4.614 13.815C4.674 13.195 4.704 12.885 4.614 12.599C4.526 12.311 4.327 12.079 3.93 11.615L3.568 11.192C2.171 9.559 1.472 8.741 1.716 7.957C1.959 7.173 2.985 6.94 5.035 6.477L5.565 6.357C6.147 6.225 6.438 6.159 6.672 5.982C6.906 5.804 7.056 5.535 7.356 4.997L7.629 4.507Z"
                                    stroke="#E67225"
                                />
                                </svg>
                            )}
                            </li>
                        ))}
                    </ul>
                </div>

                  {/* Testimonial Text */}
                  <p className="text-sm leading-[20px] font-normal text-gray-neutral-50 mb-[30px] break-all">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
                      <Image
                        alt="testimonial"
                        loading="lazy"
                        width="42"
                        height="42"
                        className="w-full h-full object-cover"
                        src="/images/client1.png"
                      />
                    </div>
                    <div>
                      <span className="block text-gray-neutral-50 leading-[24px] font-bold">
                        Fatima Ali
                      </span>
                      <div className="flex items-center gap-1.5 text-gray-neutral-50 mt-0.5">
                        Designation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperSlider;
