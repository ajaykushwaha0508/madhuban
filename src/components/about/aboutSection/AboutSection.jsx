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

const AboutSection = () => {
  return (
   <motion.div
        className="text-center pb-16 pt-12 bg-[#D1C8C1]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-center mb-4">
            <hr className="w-16 border-t border-[rgb(110,97,70)] mr-4" />
            <h2 className="text-4xl md:text-5xl font-primary text-[rgb(110,97,70)] font-semibold tracking-wider">
              About Madhuban Eco Retreat
            </h2>
            <hr className="w-16 border-t border-[rgb(110,97,70)] ml-4" />
          </div>

          <motion.div className="h-full" variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="max-w-4xl mx-auto px-4 py-10 text-lg text-gray-800">
                  <div className="text-[rgb(110,97,70)] font-arial-narrow">
                    <p className="mb-6  text-justify">
                      Just outside the vibrant city of Bhopal, on the edge of
                      the serene Ratapani Wildlife Sanctuary, lies Madhuban Eco
                      Retreat — a place where time slows down, nature speaks
                      louder, and life finds its authentic rhythm.
                    </p>
                    <p className="mb-6 text-justify">
                      What was once dry, unused land has transformed into a
                      lush, thriving, and self-sustaining eco-lodge. This
                      evolution is rooted in slow tourism, sustainable tourism,
                      and a deep belief that meaningful travel can heal both
                      people and the planet.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className=" rounded-2xl shadow-lg p-8 bg-[#6e6146]">
                  <h2 className="font-primary text-2xl text-white mb-4">
                    Today Madhuban stands As
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {standsFor.map((item, i) => {
                      return (
                        <motion.div
                          key={i}
                          className="relative rounded-lg overflow-hidden shadow-lg group"
                          variants={itemVariants}
                          whileHover={{ scale: 1.03 }}
                        >
                          <div className="block rounded-xl border border-[#6e6146ff]  p-4  font-medium bg-[#d1c8c1] transition">
                            {item}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
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
              <p className="text-xl md:text-xl pt-12">
                Families, solo travelers, artists, researchers, nature lovers,
                and spiritual seekers come to Madhuban Eco Retreat to rediscover{" "}
                <br /> what truly matters — simplicity, serenity, and balance.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
  )
}

export default AboutSection