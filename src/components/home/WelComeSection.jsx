"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const WelComeSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="pt-20 pb-8 md:px-8 bg-[#D1C8C1] min-h-[60vh] max640:pt-0 max640:text-center">
      <div className="max-w-7xl mx-auto px-2 py-7 md:px-6">
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Text Section text-[rgb(110,97,70)] */}
          <motion.div className="h-full" variants={itemVariants}>
            <h2 className="font-primary tracking-widest font-bold md:text-[30px] text-2xl text-primary-gray2 mb-6 text-center">
              Welcome to "Madhuban Eco Retreat"
            </h2>

            <p className="font-arial-narrow text-md md:text:lg mb-6 text-primary-gray2 tracking-wider text-justify">
              Located just an hour from Bhopal, Madhuban is a premium eco resort
              near Ratapani designed for travelers who love nature, wellness,
              and responsible travel. Nestled beside the scenic teak forests of
              Ratapani Wildlife Sanctuary, our resort offers a rare blend of
              sustainable hospitality and natural luxury.
            </p>
            <p className="text-md md:text:lg font-arial-narrow  text-primary-gray2 tracking-wider text-justify">
              As one of the best forest resorts in Madhya Pradesh, Madhuban
              invites you to reconnect with the outdoors through forest walks,
              birdwatching, organic dining, and peaceful eco-friendly stays.
              Whether you're planning a weekend getaway near Bhopal, a family
              vacation, or a quiet wellness escape, this is the perfect place to
              breathe, slow down, and reconnect with nature.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="h-full"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <video
              id="about-video"
              ref={videoRef}
              src="/videos/retreat-intro.mp4"
              className="rounded-lg shadow-xl w-full h-full object-cover"
              loop
              muted
              playsInline
              style={{ background: "#000", minHeight: "300px" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelComeSection;
