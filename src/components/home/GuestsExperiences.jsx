"use client";
import { motion } from "framer-motion";
import TestimonialSlider from "@/components/TestimonialSlider";

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const GuestsExperiences = () => {
  return (
    <section
      className="py-8 px-4 bg-cover bg-center bg-no-repeat bg-[#FAFAFA]"
      style={{
        backgroundImage: "url('/images/experiences/ex-bg.jpg')",
      }}
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <hr className="w-16 border-t border-white mr-4" />
            <h2 className="text-2xl md:text-5xl max640:text-4xl max500:text-3xl max-Xsm:text-3xl  font-primary text-white tracking-wider font-semibold">
              Guest Experiences
            </h2>
            <hr className="w-16 border-t border-white ml-4" />
          </div>
          <p className="mt-1 max-w-2xl mx-auto text-sm md:text-lg text-white px-4 tracking-wide font-arial-narrow">
            What our guests say about their stay at Madhuban Eco Retreat
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default GuestsExperiences;
