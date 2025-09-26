import React from "react";
import FeaturedServices from "./FeaturedServices";

const cardData = [
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

const Services = () => {
  return (
    <>
    <FeaturedServices
      title="Featured"
      subtitle="Services"
      description="Festival City caters for all your festive occasion with a complete line up of state of the art lighting, sound stage, LED, and effects. All for very reasonable prices."
      cardData={cardData}
    />
     
    </>
  );
};

export default Services;
