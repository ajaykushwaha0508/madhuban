"use client";

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

const GuestsSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-[#D1C8C1]">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <hr className="w-10 border-t border-[rgb(110,97,70)] mr-4" />
            <h2 className="text-xl md:text-5xl font-primary text-[rgb(110,97,70)] font-semibold tracking-wide sm:text-3xl max-Xsm:text-2xl">
              Loved by Guests Across India
            </h2>
            <hr className="w-10 border-t border-[rgb(110,97,70)] ml-4" />
          </div>
          <div className="text-sm  md:text-xl ">
            Recognized as one of the most peaceful retreats near Bhopal,
            Madhuban Eco Retreat is cherished by families, nature lovers,
            celebrities, and wellness travelers.
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div
            className="relative h-80 rounded-lg overflow-hidden shadow-lg group"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/images/Guest/vidya1.jpg"
              alt="Guest Experience"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute  inset-0 bg-black/50 flex flex-col justify-end p-4">
              <div className="ml-5">
                <h5 className="font-primary font-medium text-[rgb(190,175,145)] tracking-widest text-xl">
                  Vidya Balan
                </h5>
                <p className="text-[rgb(204,180,120)] text-sm tracking-wider font-arial-narrow">
                  Indian Actress
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative h-80 rounded-lg overflow-hidden shadow-lg group"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/images/Guest/vijay1.jpg"
              alt="Guest Experience"
              className="w-[80%] h-full object-cover mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
              <div className="ml-10">
                <h5 className="font-primary font-medium text-[rgb(190,175,145)] tracking-widest text-xl">
                  Vijay Raaz
                </h5>
                <p className="text-[rgb(204,180,120)] text-sm tracking-wider font-arial-narrow">
                  Indian Actor
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-lg overflow-hidden shadow-lg group"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/images/Guest/samir1.png"
              alt="Guest Experience"
              className="w-[90%] h-full object-cover mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
              <div className="ml-10">
                <h5 className="font-primary font-medium text-[rgb(190,175,145)] tracking-widest text-xl">
                  Samir Somaiya
                </h5>
                <p className="text-[rgb(204,180,120)] text-sm tracking-wider font-arial-narrow">
                  President, Somaiya Group
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestsSection;
