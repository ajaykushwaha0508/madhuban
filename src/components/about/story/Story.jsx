"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAnglesRight } from "react-icons/fa6";

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

const storyPoints = [
  "Nature-based, eco-friendly tourism",
  "Community empowerment",
  "Local livelihood generation",
  "Environmental responsibility",
];


const Story = () => {
  return (
    <motion.div
      className="text-center pb-16 pt-20 bg-[rgb(110,97,70)] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <hr className="w-16 border-t border-white mr-4" />
          <h2 className="text-2xl md:text-5xl font-primary text-white font-semibold tracking-wider">
            The Madhuban Story
          </h2>
          <hr className="w-16 border-t border-white ml-4" />
        </div>

        <motion.div className="h-full" variants={itemVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
            <motion.div
              className="h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="max-w-4xl mx-auto px-4 py-10 text-lg text-gray-800">
                <div className="text-white font-arial-narrow">
                  <p className="mb-6 text-lg md:text-xl text-justify">
                    The story of Madhuban began not with ambition, but with
                    emotion — a heartfelt response to a modern world moving too
                    fast and drifting away from nature. Over the years, the land
                    was revived with care, supported by local communities, and
                    shaped by a vision of mindful, responsible travel.
                  </p>
                  <p className="mb-6 text-lg md:text-xl text-justify">
                    The Somaiya Group, an 80-year-old corporate house with
                    expertise in education, healthcare, agriculture, social
                    development, and sustainability, brought this dream to life.
                  </p>
                  <p className="mb-4 text-lg md:text-xl text-justify">
                    Madhuban Eco Retreat is their first venture into hospitality
                    — a project built on:
                  </p>
                  <div className="bg-[#d1c8c1] rounded-lg overflow-hidden shadow-lg">
                    {storyPoints.map((item, i) => {
                      return (
                        <motion.div
                          key={i}
                          className="relative rounded-lg overflow-hidden  group text-start text-primary-gray2 "
                          variants={itemVariants}
                          whileHover={{ scale: 1.03 }}
                        >
                          <div className="block rounded-xl text-lg md:text-xl flex gap-2 items-center    p-2  font-medium  transition">
                            <FaAnglesRight /> {item}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full  flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className=" rounded-xl">
                <img
                  src="/images/logo/group-logo.png"
                  alt="Madhuban Eco Retreat Logo"
                  className="w-64 h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center mb-4">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg md:text-xl pt-12 text-white">
              Families, solo travelers, artists, researchers, nature lovers, and
              spiritual seekers come to Madhuban Eco Retreat to rediscover{" "}
              <br /> what truly matters — simplicity, serenity, and balance.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Story;
