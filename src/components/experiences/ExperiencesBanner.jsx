"use client"
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


const ExperiencesBanner = () => {
  return (
    <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero/hero-2.jpg')" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-white text-center px-4"
        >
          <p className="text-4xl md:text-6xl font-bold mb-4">
            Experience Life at Nature’s Rhythm
          </p>
          <p className="text-lg md:text-xl">
            Explore mindful, eco-friendly experiences designed around <br />{" "}
            forests, wildlife, and peaceful living near Bhopal
          </p>
        </motion.div>
      </section>
  )
}

export default ExperiencesBanner