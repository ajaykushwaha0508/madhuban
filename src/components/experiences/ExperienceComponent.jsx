"use client"

import React from 'react'
import { motion } from "framer-motion";

const standsFor = [
  "One of the best resorts near Ratapani",
  "A peaceful jungle resort near Bhopal",
  "A natural space for detox retreats, reflection, wellness, and community living",
  "A sustainable escape for travelers seeking genuine connection with nature",
];

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

const ExperienceComponent = () => {
  return (
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
            <h1 className="text-2xl md:text-5xl  font-primary text-white font-semibold tracking-wider">
              Experiences at Madhuban
            </h1>
            <hr className="w-16 border-t border-white ml-4" />
          </div>
          <p className="mt-1 max-w-2xl mx-auto text-lg text-white px-4 tracking-wide font-arial-narrow mb-4">
              Discover Nature, Wilderness & Slow Living
            </p>

          <motion.div className="h-full" variants={itemVariants}>
            <div className="grid  gap-12">
              <motion.div
                 className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              >
                <p className='text-lg md:text-xl text-white'>Madhuban Eco Retreat offers experiences that bring you closer to nature, silence, and the wild spirit of Ratapani. Whether you love slow forest walks, early-morning bird watching, or peaceful recreational activities, each moment here is designed to help you pause, breathe, and reconnect with the natural world.</p>
              </motion.div>

              <motion.div
                 className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              >
                <p className='text-lg md:text-xl text-white'>Set near Ratapani Wildlife Sanctuary, close to Bhopal, our experiences celebrate eco-tourism, mindful travel, and the untouched beauty of Madhya Pradesh. Explore the forest, listen to birdsong, cycle through green trails, or simply enjoy nature-inspired relaxation — each experience is crafted for families, nature enthusiasts, wildlife lovers, and slow-travel seekers.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
  )
}

export default ExperienceComponent;