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

const BookStay = () => {
  return (
    <motion.div
      className="text-center w-full  pb-16 pt-12  overflow-hidden px-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-xl md:text-5xl font-primary text-primary-gray2 font-semibold tracking-wider">
            Discover Your Ideal Eco Stay Near Bhopal & Ratapani
          </h1>
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
              <p className="text-sm text-justify md:text-center md:text-xl text-primary-gray2">
                At Madhuban Eco Retreat, every stay blends natural serenity with
                eco-friendly comfort. From safari tents and mud houses to
                glamping, camping, and poolside villas, each space invites you
                to slow down and reconnect with nature. Located near the lush
                Ratapani Wildlife Sanctuary, Madhuban is one of the best eco
                stays near Bhopal for families, couples, adventure seekers, and
                wellness travelers.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BookStay;
