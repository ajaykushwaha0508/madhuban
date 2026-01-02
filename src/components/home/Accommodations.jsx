"use client";
import Link from "next/link";
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

const Accommodations = () => {
  return (
    <section className="py-8 px-4 bg-cover bg-center bg-no-repeat bg-[rgb(110,97,70)]">
      <div className="container mx-auto">
        {/* --- THE WORLD AWAITS Section --- */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <hr className="w-16 border-t border-white mr-4" />
            <h2 className="text-2xl md:text-5xl font-primary text-white font-semibold tracking-wider">
              Our Accommodations
            </h2>
            <hr className="w-16 border-t border-white ml-4" />
          </div>
          <h3 className="text-xl md:text-3xl font-primary text-white font-semibold tracking-wider">
            Eco-Luxury Stays in the Heart of Ratapani
          </h3>
          <p className="mt-1 max-w-2xl text-justify md:text-center mx-auto text-sm md:text-lg text-white px-4 tracking-wide font-arial-narrow">
            Every stay at Madhuban Eco Retreat is designed to bring you closer
            to the forest, offering a soothing balance of earthy architecture,
            natural materials, and modern comfort.
          </p>
        </motion.div>

        {/* --- Cards Section --- */}
        <motion.div
          className="flex flex-wrap xl:flex-nowrap xl:gap-8 justify-center xl:justify-start gap-y-8 pb-4 -mt-10 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div
            className="w-full lg:w-[46%] xl:w-[calc(20%-12.8px)] 2xl:w-[calc(20%-12.8px)] bg-[#D1C8C1] rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl h-[450px] flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-64 xl:h-[200px] overflow-hidden">
              <img
                src="/images/accommodations/safari-tend1.jpeg"
                alt="Nature Tent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-primary tracking-widest text-primary-gray2 mb-2 font-semibold text-2xl">
                Safari Tent
              </h3>
              <p className="text-primary-gray2 font-arial-narrow text-base tracking-wide mb-4 text-justify">
                Experience one of the most unique jungle stays near Bhopal with
                our eco-luxury safari tents featuring open-to-sky showers,
                forest views, and crafted cane interiors.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="w-full lg:w-[46%] xl:w-[calc(20%-12.8px)] 2xl:w-[calc(20%-12.8px)] bg-[#D1C8C1] rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl h-[450px] flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-64 xl:h-[200px] overflow-hidden">
              <img
                src="/images/accommodations/mud-villa.jpg"
                alt="Mud Houses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-primary tracking-widest text-primary-gray2 mb-3 font-semibold text-2xl">
                Mud Houses
              </h3>
              <p className="text-primary-gray2 font-arial-narrow text-base tracking-wide mb-10 text-justify">
                Inspired by the Gond tribes, these mud cottages offer rustic
                charm and sustainable comfort — making them one of the most
                loved eco stays in Madhya Pradesh.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="w-full lg:w-[46%] xl:w-[calc(20%-12.8px)] 2xl:w-[calc(20%-12.8px)] bg-[#D1C8C1] rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl h-[450px] flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-64 xl:h-[200px] overflow-hidden">
              <img
                src="/images/accommodations/pool-side-tent.jpeg"
                alt="Pool Side Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-primary tracking-widest text-primary-gray2 mb-2 font-semibold text-2xl">
                Pool Side Villa
              </h3>
              <p className="text-primary-gray2 font-arial-narrow text-base tracking-wide mb-4 text-justify">
                For travelers seeking leisure and calm, our poolside villas
                combine scenic views, wellness-friendly spaces, and forest-side
                luxury.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="w-full lg:w-[46%] xl:w-[calc(20%-12.8px)] 2xl:w-[calc(20%-12.8px)] bg-[#D1C8C1] rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl h-[450px] flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-64 xl:h-[200px] overflow-hidden">
              <img
                src="/images/accommodations/glamping-tent1.JPG"
                alt="Glamping Tent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-primary tracking-widest text-primary-gray2 mb-2 font-semibold text-2xl">
                Glamping Tents
              </h3>
              <p className="text-primary-gray2 font-arial-narrow text-base tracking-wide mb-4 text-justify">
                Enjoy boutique-style glamping with chic décor, ensuite
                bathrooms, and private sit-outs — perfect for a stylish forest
                experience.
              </p>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="w-full lg:w-[46%] xl:w-[calc(20%-12.8px)] 2xl:w-[calc(20%-12.8px)] bg-[#D1C8C1] rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl h-[450px] flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-64 xl:h-[200px] overflow-hidden">
              <img
                src="/images/accommodations/comping-tent11.jpeg"
                alt="Camping Tent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-primary tracking-widest text-primary-gray2 mb-2 font-semibold text-2xl">
                Camping Tents
              </h3>
              <p className="text-primary-gray2 font-arial-narrow text-base tracking-wide mb-4 text-justify">
                Ideal for adventure seekers looking for a pure nature
                experience, our camping tents offer a peaceful, off-grid stay
                under starry skies.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Explore Button --- */}
        <motion.div
          className="text-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Link
            href="/stay"
            className="font-arial-narrow text-primary-gray2 px-8 py-3 bg-[#D1C8C1] hover:font-bold rounded-md font-medium tracking-wider inline-block"
          >
            Explore All Accommodations
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodations;
