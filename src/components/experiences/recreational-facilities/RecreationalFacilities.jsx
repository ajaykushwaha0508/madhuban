"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import CommonFaqs from "@/common-components/faqs/CommonFaqs";

const RecreationalFacilities = () => {
  // Track active main accordion index
  const [activeAccordion, setActiveAccordion] = useState(0); // First expanded by default
  // Track active nested accordion index for the first accordion item
  const [activeNestedAccordion, setActiveNestedAccordion] = useState(null);

  const forestImages = [
    {
      url: "/images/RecreationalFacilities/RF1.jpg",
      alt: "Forest View 1",
    },
    {
      url: "/images/RecreationalFacilities/RF2.jpg",
      alt: "Forest View 2",
    },
    {
      url: "/images/RecreationalFacilities/RF3.jpg",
      alt: "Forest View 3",
    },
    {
      url: "/images/RecreationalFacilities/RF4.jpg",
      alt: "Forest View 4",
    },
    {
      url: "/images/RecreationalFacilities/RF5.jpg",
      alt: "Forest View 5",
    },
    {
      url: "/images/RecreationalFacilities/RF6.jpg",
      alt: "Forest View 6",
    },
    {
      url: "/images/RecreationalFacilities/RF7.jpg",
      alt: "Forest View 7",
    },
  ];

  const accordionItems = [
    {
      title: "Recreational Facilities",
      content: (
        <>
          <p className="mb-4 font-arial-narrow text-white tracking-wider">
            At Madhuban Eco Retreat, recreation blends beautifully with nature.
            Our thoughtfully designed activity spaces allow you to unwind, move
            freely, and enjoy moments of joy at your own pace. Whether you're
            looking for quiet relaxation, fun indoor games, or light outdoor
            adventures, our eco-conscious recreational facilities offer
            something for every traveler.
          </p>
          <p className="mb-4 font-arial-narrow text-white tracking-wider">
            Surrounded by the peaceful wilderness of Ratapani, these activities
            help you reset your mind, refresh your body, and reconnect with the
            simple pleasures of slow living. From cycling trails to hammocks and
            open-air reading corners, everything here is crafted for comfort,
            calmness, and family-friendly fun.
          </p>
          <p className="mb-4 font-arial-narrow text-white tracking-wider">
            If you're searching for recreational activities near Bhopal, this is
            one of the most relaxing, nature-integrated spaces to unwind.
          </p>

          {/* Nested Accordion inside first main accordion item */}
          <div className="font-primary divide-y rounded-lg bg-primary-gray shadow-inner overflow-hidden">
            {[
              {
                title: "What to Expect",
                content: (
                  <ul className="list-disc list-inside text-primary-gray2 tracking-widest font-primary space-y-2">
                    <li>Indoor games (chess, carrom, board games)</li>
                    <li>Cycling on scenic forest paths</li>
                    <li>Hammocks, swings & open-air seating zones</li>
                    <li>Campfire evenings and storytelling corners</li>
                    <li>
                      Nature-inspired activity spaces for kids and families
                    </li>
                    <li>Calm reading areas surrounded by greenery</li>
                  </ul>
                ),
              },

              {
                title: "Ideal For",
                content: (
                  <ul className="list-disc list-inside text-primary-gray2 tracking-widest font-primary space-y-2">
                    <li>
                      Families looking for relaxing nature-friendly activities
                    </li>
                    <li>Solo travelers & groups seeking quiet downtime</li>
                    <li>Corporate & wellness retreats</li>
                    <li>Kids and seniors</li>
                    <li>
                      Guests wanting a peaceful eco-resort recreation experience
                      in Ratapani
                    </li>
                  </ul>
                ),
              },
              {
                title: "It’s Your Time to Enjoy",
                content: (
                  <>
                    Plan your stay and explore eco-friendly recreation that
                    slows down the mind and refreshes the spirit.—{" "}
                    <Link
                      href="/booking"
                      className="list-disc list-inside underline text-primary-gray2 font-bold tracking-widest font-primary space-y-2"
                    >
                      Book Your Stay at Madhuban Eco Retreat
                    </Link>
                  </>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <button
                  className="flex items-center justify-between w-full py-3 px-4 text-left text-primary-gray2 font-medium transition duration-200"
                  onClick={() =>
                    setActiveNestedAccordion(
                      activeNestedAccordion === idx ? null : idx
                    )
                  }
                >
                  <span>{item.title}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      activeNestedAccordion === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-4 pb-3 text-[#D1C8C1] transition-all duration-300 ease-in-out ${
                    activeNestedAccordion === idx ? "block" : "hidden"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
  ];

 const recreationalActivitiesFaqs = [
  {
    question:
      "What recreational activities are available at Madhuban Eco Retreat?",
    answer:
      "Guests can enjoy indoor games, cycling, hammocks, open-air seating, campfire zones, reading areas, and nature-inspired kid-friendly spaces.",
  },
  {
    question: "Are these activities suitable for families?",
    answer:
      "Yes, the activities are safe, peaceful, and perfect for families, children, and seniors.",
  },
  {
    question: "Do I need to pay extra for recreational activities?",
    answer:
      "Most activities are included with your stay. Some group sessions may require pre-booking.",
  },
  {
    question: "Are outdoor recreation options available near Bhopal?",
    answer:
      "Yes, Madhuban offers one of the most relaxing and nature-integrated recreational experiences near Bhopal.",
  },
  {
    question: "Can corporate groups use the recreational facilities?",
    answer:
      "Absolutely. Many corporate and wellness groups use these spaces for relaxation and team bonding.",
  },
  {
    question: "Is cycling included in the stay?",
    answer:
      "Yes, cycles are available for guests to explore the scenic eco-paths.",
  },
];


  return (
    <div className="min-h-screen bg-[#b4a681d8]">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/PF.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-primary tracking-widest font-medium mb-4">
              Recreational Activities
            </h1>
            <p className="text-xl md:text-2xl font-arial-narrow tracking-wider">
              Refresh, Play & Reconnect With Nature
            </p>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("accordion-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-primary font-semibold tracking-wider mt-10 text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[rgb(110,97,70)] transition duration-300"
          >
            ↓ Scroll Down
          </button>
        </div>
      </section>

      {/* Accordion Section */}
      <section
        id="accordion-section"
        className="py-10 px-4 md:px-8 bg-primary-gray"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-5">
            <hr className="w-16 border-t border-primary-gray2 mr-4" />
            <h2 className="text-4xl md:text-5xl font-primary text-primary-gray2 font-semibold tracking-wider text-center">
              Explore The Madhuban
            </h2>
            <hr className="w-16 border-t border-primary-gray2 ml-4" />
          </div>
          <div className="divide-y rounded-xl bg-primary-gray2 shadow-md overflow-hidden">
            {accordionItems.map((item, index) => (
              <div key={index} className="group">
                <button
                  className="font-primary font-bold tracking-widest flex items-center justify-between w-full py-5 px-4 text-left text-white transition duration-200"
                  onClick={() =>
                    setActiveAccordion(activeAccordion === index ? null : index)
                  }
                >
                   <span className="text-2xl">{item.title}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`px-4 pb-4 text-[rgb(110,97,70)] transition-all duration-300 ease-in-out ${
                    activeAccordion === index ? "block" : "hidden"
                  }`}
                >
                  {
                    typeof item.content === "string"
                      ? item.content
                      : item.content /* support nested JSX */
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-10 px-4 md:px-8 bg-primary-gray2">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-5">
            <hr className="w-16 border-t border-white mr-4" />
            <h2 className="text-4xl md:text-5xl font-primary text-white font-bold tracking-wider text-center">
              Activity Gallery
            </h2>
            <hr className="w-16 border-t border-white ml-4" />
          </div>
          <div className="w-[90%] md:w-[100%] h-[70vh] mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              className="h-full"
            >
              {forestImages.map((image, index) => (
                <SwiperSlide key={index} className="h-full">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <CommonFaqs faqs={recreationalActivitiesFaqs} heading="FAQs – Recreational Activities" />
    </div>
  );
};

export default RecreationalFacilities;
