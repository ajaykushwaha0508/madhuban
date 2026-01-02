"use client";

import React, { useState } from "react";
import "./Dining.css";
import DiningSpacial from "./DiningSpacial";
import DiningOptions from "./DiningOptions";
import CommonFaqs from "@/common-components/faqs/CommonFaqs";

const foodAndDiningFaqs = [
  {
    question: "Do you serve non-vegetarian food?",
    answer:
      "No. Madhuban Eco Retreat serves only pure vegetarian meals prepared from fresh, local ingredients.",
  },
  {
    question: "Is alcohol available at the retreat?",
    answer:
      "No, we maintain an alcohol-free environment to preserve the peace and wellness focus of the retreat.",
  },
  {
    question: "What kind of food is served at Madhuban?",
    answer:
      "We serve clean, homestyle vegetarian meals inspired by local and tribal flavors, prepared fresh every day.",
  },
  {
    question: "Is the food organic?",
    answer:
      "Yes. Most vegetables and herbs come from our on-site organic farm or local growers.",
  },
  {
    question: "Do you offer buffet meals?",
    answer:
      "Weekend and group buffets may be available, along with daily set meals.",
  },
  {
    question: "Is your dining suitable for health-conscious travelers?",
    answer:
      "Absolutely — our food is fresh, minimally processed, and aligned with clean, mindful eating.",
  },
];

const Dining = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const photos = [
    { id: 1, url: "/images/dining/dining1.jpeg" },
    { id: 2, url: "/images/dining/dining2.jpg" },
    { id: 3, url: "/images/dining/dining3.jpg" },
    { id: 4, url: "/images/dining/dining8.jpg" },
    { id: 5, url: "/images/dining/dining5.jpg" },
    { id: 6, url: "/images/dining/dining6.jpg" },
    { id: 7, url: "/images/dining/dining7.jpg" },
    { id: 8, url: "/images/dining/dining9.jpg" },
  ];

  const videos = [
    { id: 1, url: "/images/dining/dining.mp4" },
    { id: 1, url: "/images/dining/dining1.mp4" },
    // Add more if needed
  ];

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <div className="farm-to-table bg-[#D1C8C1] flex flex-col items-center">
        <div className="relative w-full h-[85vh] overflow-hidden rounded-bl-[60px] rounded-br-[60px]">
          <img
            loading="lazy"
            src="/images/dining/dining10.jpg"
            alt="Farm Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-3xl md:text-6xl font-inter font-medium font-primary">
              Farm-To-Fork Dining
            </h1>
            <p className="font-inter text-md md:text-2xl mt-2">
              Fresh ingredients from our farm to your plate
            </p>
          </div>
        </div>

        <div className="bg-primary-gray w-full flex flex-col items-center">
          <section className="gallery-section bg-primary max-w-7xl ">
            <div>
              <div className="flex items-center justify-center mb-8">
                <hr className="w-16 border-t border-primary-gray2 mr-4" />
                <h2 className="text-xl md:text-5xl font-primary text-primary-gray2 font-semibold tracking-wider text-center">
                  Fresh, Local & Wholesome
                </h2>
                <hr className="w-16 border-t border-primary-gray2 ml-4" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm md:text-xl text-justify md:text-center text-primary-gray2 ">
                  At Madhuban Eco Retreat, dining is more than a meal — it’s an
                  experience rooted in nature, purity, and mindful eating. Our
                  farm-to-table concept brings fresh ingredients straight from
                  our organic farm, local growers, and nearby tribal
                  communities, ensuring every dish is nourishing, seasonal, and
                  full of flavor.
                </p>
                <p className="text-sm md:text-xl text-justify md:text-center text-primary-gray2 ">
                  Prepared with minimal processing and maximum care, our meals
                  celebrate the essence of clean eating, inspired by the
                  simplicity of rural Madhya Pradesh. Whether you’re enjoying a
                  warm breakfast, a comforting lunch, or a wholesome dinner,
                  you’ll experience food that is earthy, honest, and deeply
                  satisfying.
                </p>
                <p className="text-sm md:text-xl text-justify md:text-center text-primary-gray2 ">
                  Perfect for travelers looking for veg food near Ratapani,
                  healthy cuisine, or sustainable dining options close to
                  Bhopal, our kitchen reflects our commitment to eco-conscious
                  living and wellness.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-primary-gray2 w-full items-center flex flex-col">
          <section className="gallery-section max-w-7xl">
            <div className="flex items-center justify-center mb-8">
              <hr className="w-16 border-t border-white mr-4" />
              <h2 className="text-xl md:text-5xl font-primary text-white font-semibold tracking-wider text-center">
                Photo Gallery
              </h2>
              <hr className="w-16 border-t border-white ml-4" />
            </div>
            <div className="flex flex-col ">
              <div className="media-grid max-w-7xl">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="media-item"
                    onClick={() => setSelectedMedia(photo)}
                  >
                    <img src={photo.url} alt={photo.title || "Photo"} />
                    <div className="media-title">{photo.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="max-w-7xl">
          <section className="gallery-section ">
            <div className="flex justify-center mb-5 -mt-7">
              <div className="flex items-center justify-center">
                <hr className="w-16 border-t border-[rgb(110,97,70)] mr-4" />
                <h2 className="text-xl md:text-5xl font-primary text-[rgb(110,97,70)] font-semibold tracking-wider text-center">
                  Video Gallery
                </h2>
                <hr className="w-16 border-t border-[rgb(110,97,70)] ml-4" />
              </div>
            </div>
            <div className="flex flex-col ">
              <div
                className={`media-grid ${
                  videos.length === 1 ? "single-media" : ""
                } max-w-7xl`}
              >
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="media-item"
                    onClick={() => setSelectedMedia(video)}
                  >
                    <video>
                      <source src={video.url} type="video/mp4" />
                    </video>
                    <div className="media-title">{video.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {selectedMedia && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              {selectedMedia.url.includes(".mp4") ? (
                <video controls autoPlay>
                  <source src={selectedMedia.url} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title || "Media"}
                />
              )}
              <h3>{selectedMedia.title}</h3>
            </div>
          </div>
        )}
      </div>
      <DiningSpacial />
      <DiningOptions />
      <CommonFaqs faqs={foodAndDiningFaqs} />
    </>
  );
};

export default Dining;
