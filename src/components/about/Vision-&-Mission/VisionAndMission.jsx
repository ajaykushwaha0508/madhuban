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

const ourMissionPoint = [
  "Sustainable, eco-conscious accommodation",
  "Organic, farm-to-table food curated from local produce",
  "Nature-based activities such as forest walks, meditation, yoga, and cultural immersion",
  "Strong partnerships with local communities",
  "Experiences that promote mental clarity, wellness, and slow living",
];

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

const VisionMission = () => {
  return (
    <>
      <motion.div
        className="text-center pb-16 pt-12 bg-primary-gray2 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-center mb-4">
            <hr className="w-16 border-t border-white mr-4" />
            <h2 className="text-2xl md:text-5xl font-primary text-white font-semibold tracking-wider">
              Vision & Mission
            </h2>
            <hr className="w-16 border-t border-white ml-4" />
          </div>

          <motion.div
            className="flex flex-col gap-4 bg-primary-gray p-4  md:rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* our vision */}
            <motion.div className="h-full" variants={containerVariants}>
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-12">
                <motion.div
                  className="h-full bg-primary-gray2 rounded-2xl order-2 md:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="max-w-4xl mx-auto px-4 py-10 text-lg text-gray-800">
                    <div className="text-white font-arial-narrow">
                      <h3 className="text-2xl mb-4">Our Vision</h3>
                      <p className="mb-6 text-white  text-justify">
                        To become India’s leading eco resort near Bhopal, where
                        guests rediscover the joy of simple living, reconnect
                        with nature, and leave with a renewed sense of
                        well-being. We envision a world where travel supports
                        the environment, not harms it — a space where every stay
                        contributes to healing the planet.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="h-full order-1 md:order-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className=" rounded-2xl shadow-lg">
                    <motion.div
                      className="rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <img
                        src="/images/misionVison/ms12.jpg"
                        alt="Our Mission"
                        className="w-full  object-cover h-100"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* our mission */}
            <motion.div className="h-full" variants={itemVariants}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 content-center">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className=" rounded-2xl shadow-lg">
                    <motion.div
                      className="rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <img
                        src="/images/misionVison/ms13.jpg"
                        alt="Our Vision"
                        className="w-full h-130  object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className="h-full bg-primary-gray2 rounded-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="max-w-4xl mx-auto px-4 py-10 text-lg text-gray-800">
                    <div className="text-white font-arial-narrow">
                      <h3 className="text-2xl mb-4">Our Mission</h3>
                      <p className="mb-6  text-justify">
                        Our mission is to offer deeply meaningful,
                        earth-friendly travel experiences through:
                      </p>

                      <div className="bg-primary-gray rounded-lg overflow-hidden shadow-lg">
                        {ourMissionPoint.map((item, i) => {
                          return (
                            <motion.div
                              key={i}
                              className="relative rounded-lg overflow-hidden  group text-start text-primary-gray2 "
                              variants={itemVariants}
                              whileHover={{ scale: 1.03 }}
                            >
                              <div className="block rounded-xl flex gap-2 items-center text-primary-gray2   p-1  font-medium  transition">
                                <FaAnglesRight className="shrink-0" /> {item}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      <p className="text-left mt-4">
                        Madhuban Eco Retreat is crafted for travelers seeking a
                        nature resort near Bhopal, a peaceful weekend getaway,
                        or a rejuvenating detox retreat grounded in
                        sustainability and serenity.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default VisionMission;
