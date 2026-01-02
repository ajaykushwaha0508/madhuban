"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

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

const experiences = [
  {
    title: "Forest Walks & Nature Trails",
    path: "forest-walks-and-nature-trails",
    image: "/images/experiences/nature-trail.jpg",
    description:
      "Explore the pristine Ratapani forest trails with naturalists and discover native plants, butterflies, and forest ecology.",
    learnMoreBtn: "Explore Forest Walks",
  },
  {
    title: "Bird Watching & Wilderness",
    path: "bird-watching-and-wilderness",
    image: "/images/experiences/bird-watching.jpg",
    description:
      "Spot over 70 species of native & migratory birds — making Madhuban a favorite birdwatching resort in Madhya Pradesh.",
    learnMoreBtn: "Explore Bird Watching",
  },
  {
    title: "Recreational Facilities",
    path: "recreational-facilities",
    image: "/images/experiences/Recreational-Facilities.jpg",
    description:
      "From hammocks and cycling to nature play zones and open-air seating, our eco-friendly recreational areas offer peaceful leisure for all ages.",
    learnMoreBtn: "Explore Recreational Activities",
  },
];

const ImmersiveExperiences = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-[#D1C8C1]">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <hr className="w-16 border-t border-[rgb(110,97,70)] mr-4" />
            <h2 className="text-xl md:text-5xl font-primary text-[rgb(110,97,70)] font-semibold tracking-wider">
              Immersive Experiences in Ratapani’s Wilderness
            </h2>
            <hr className="w-16 border-t border-[rgb(110,97,70)] ml-4" />
          </div>
          <p className="mt-1 max-w-2xl mx-auto text=sm md:text-lg text-[rgb(110,97,70)] px-4 tracking-wide font-arial-narrow">
            Connect with nature, wildlife, and local culture through
            thoughtfully curated experiences that bring you closer to the soul
            of Madhya Pradesh.
          </p>
        </motion.div>
        {/* Adjusted grid columns for exactly 3 items */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-9 font-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link
            href="/experiences"
            className="font-arial-narrow text-white px-8 py-3 bg-primary-gray2 hover:font-bold rounded-md font-medium tracking-wider inline-block"
          >
            Explore All Experiences
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmersiveExperiences;
