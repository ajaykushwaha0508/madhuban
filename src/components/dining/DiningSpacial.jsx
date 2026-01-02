"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRoute } from "react-icons/fa6";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CompostIcon from "@mui/icons-material/Compost";
import { CookingPot } from "lucide-react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import GuestImportance from "./ImportanceOfGuest";

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

const WhyChoosePoints = [
  {
    title: "Freshly sourced organic & seasonal ingredients",
    icon: CompostIcon,
  },
  {
    title: "Simple, earthy, clean, and nourishing menu",
    icon: RestaurantMenuIcon,
  },
  {
    title: "Recipes inspired by local & tribal culinary traditions",
    icon: MenuBookIcon,
  },
  {
    title: "Zero processed foods & mindful cooking techniques",
    icon: CookingPot,
  },
  {
    title: "A true farm-to-fork dining experience near Bhopal",
    icon: RamenDiningIcon,
  },
];

const DiningSpacial = () => {
  return (
    <>
      <section className="py-8 px-4 md:px-8 bg-primary-gray2 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center">
              <hr className="w-16 border-t border-white mr-4" />
              <h2 className="text-xl md:text-5xl font-primary text-white font-semibold tracking-wider">
                What Makes Dining at Madhuban Special?
              </h2>
              <hr className="w-16 border-t border-white ml-4" />
            </div>
          </motion.div>

          <motion.div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-6  ">
            <motion.div
              className="grid   gap-4 order-2 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {WhyChoosePoints.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    key={i}
                  >
                    <div className="block flex items-center gap-4 rounded-xl border border-primary-gray bg-primary-gray  p-4 text-primary-gray2 transition">
                      <IconComponent /> {item.title}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              className="grid   gap-6 rounded-2xl order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              style={{
                backgroundImage: `url(/images/dining/dining5.jpg)`,
                backgroundSize: "cover",
              }}
            ></motion.div>
          </motion.div>
        </div>
      </section>
      <GuestImportance />
    </>
  );
};

export default DiningSpacial;
