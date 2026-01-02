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
const ReadyForEcoRetreat = () => {
  return (
    <section
      className="py-8 px-4 bg-cover bg-center bg-no-repeat bg-[#FAFAFA]"
      style={{
        backgroundImage: "url('/images/Arts/art4.jpg')",
      }}
    >
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <hr className="w-16 border-t border-white mr-4" />
            <h2 className="text-2xl md:text-5xl font-primary text-white font-extrabold tracking-wider">
              Ready for Your Eco Retreat in Madhya Pradesh?
            </h2>
            <hr className="w-16 border-t border-white ml-4" />
          </div>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-white font-extrabold px-4 tracking-wide font-arial-narrow">
            Escape to nature without leaving comfort behind.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white font-extrabold px-4 tracking-wide font-arial-narrow">
            Book your stay at Madhuban Eco Retreat — the perfect forest resort
            near Bhopal for peaceful getaways, wellness travel, and nature
            exploration.
          </p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                href="/booking"
                className="px-8 py-3 bg-[#D1C8C1]  hover:font-bold  text-[rgb(110,97,70)] transition rounded-md font-primary font-extrabold text-lg tracking-wider"
              >
                Book Your Stay
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyForEcoRetreat;
