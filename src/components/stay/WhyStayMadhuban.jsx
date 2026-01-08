"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

const WhyStayMadhuban = () => {
  return (
    <motion.div
      className="text-center pb-16 pt-12 bg-primary-gray2 overflow-hidden px-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-center mb-4">
          <hr className="w-16 border-t border-white mr-4" />
          <h2 className="heading1 font-primary text-white font-semibold tracking-wider">
            Why Stay at Madhuban Eco Retreat?
          </h2>
          <hr className="w-16 border-t border-white ml-4" />
        </div>
        <motion.div className="h-full" variants={itemVariants}>
          <div className="grid  gap-12">
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-justify md:text-center md:text-xl text-white">
                Experience sustainable living in the heart of Ratapani. Every
                accommodation—whether a safari tent, mud house, glamping tent,
                camping setup, or poolside villa—is designed with local
                materials, responsible practices, and nature-first principles.
                Guests enjoy peaceful forest views, organic food experiences,
                mindful activities, and the perfect mix of comfort and
                wilderness—making it one of the top weekend getaways near
                Bhopal.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyStayMadhuban;
