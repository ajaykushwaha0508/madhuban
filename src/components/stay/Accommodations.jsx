"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BedDouble, Users, Leaf, Wifi, Sun, MountainSnow } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const buttonHoverVariants = {
  rest: { width: 0 },
  hover: { width: "100%" },
};

const accommodationsData = [
  {
    id: 1,
    name: "Safari Tent",
    slug: "safari-tent",
    image: "/images/accommodations/safari-tent.jpg",
    altText: "Exterior view of a charming safari tent nestled in greenery",
    shortDescription:
      "Perched on raised platforms beside a gentle stream and facing forested mountains, our classic safari-style tents offer a true wilderness experience. Each tent is tastefully furnished with elegant cane furniture and features a vanity and dressing area, separate toilet and shower, and even an open-to-sky shower with a private relaxation space.",
    keyFeatures: [
      {
        icon: <Leaf size={18} className="text-white" />,
        text: "Eco-Friendly Design",
      },
      {
        icon: <BedDouble size={18} className="text-white" />,
        text: "Queen Bed",
      },
      { icon: <Sun size={18} className="text-white" />, text: "Solar Powered" },
      { icon: <Wifi size={18} className="text-white" />, text: "Wi-Fi Access" },
    ],
    capacity: "Sleeps 2",
  },
  {
    id: 2,
    name: "Mud Houses",
    slug: "mud-villa",
    image: "/images/accommodations/mud-villa.jpg",
    altText: "Exterior view of a charming mud villa nestled in greenery",
    shortDescription:
      "Our mud-based cottages, inspired by the vernacular architecture of the Gond tribes, are nestled in a 5-acre organic orchard. Each Mud House features a spacious air-conditioned room, an annexed lobby, verandas, and a traditionally styled luxury bathroom. The rooftop offers breathtaking 360° views — perfect for stargazing or peaceful evenings.",
    keyFeatures: [
      {
        icon: <Leaf size={18} className="text-white" />,
        text: "Eco-Friendly Design",
      },
      {
        icon: <BedDouble size={18} className="text-white" />,
        text: "Queen Bed",
      },
      { icon: <Sun size={18} className="text-white" />, text: "Solar Powered" },
      { icon: <Wifi size={18} className="text-white" />, text: "Wi-Fi Access" },
    ],
    capacity: "Sleeps 2",
  },
  {
    id: 3,
    name: "Pool Side Villa",
    slug: "pool-side-room",
    image: "/images/accommodations/pool-side-room.jpeg",
    altText: "Poolside room with beautiful garden views",
    shortDescription:
      "Wake up to sunlight dancing on the eco-pool and unwind to the soothing rhythm of nature. Our elegant Pool Side Villas offer the perfect balance of sophistication and serenity. Ideal for couples, families, or anyone looking for a private poolside villa near Bhopal.",
    keyFeatures: [
      {
        icon: <MountainSnow size={18} className="text-white" />,
        text: "Panoramic Forest Views",
      },
      {
        icon: <BedDouble size={18} className="text-white" />,
        text: "Comfortable Double Bed",
      },
      {
        icon: <Leaf size={18} className="text-white" />,
        text: "Sustainably Built",
      },
      {
        icon: <Users size={18} className="text-white" />,
        text: "Cozy Reading Nook",
      },
    ],
    capacity: "Sleeps 4",
  },
  {
    // glamping tents
    id: 4,
    name: "Glamping Tents",
    slug: "glamping-tents",
    image: "/images/accommodations/glamping-tent1.JPG",
    altText: "Boutique glamping tent with deck and lush lawn",
    shortDescription:
      "Enjoy comfort in the wild with our rustic mini-safari glamping tents. Featuring chic interiors, a private lawn sit-out, and ensuite bathrooms, these tents offer boutique-style luxury with the charm of camping—ideal for couples, families, or weekend travelers looking for a unique glamping stay near Ratapani.",
    keyFeatures: [
      {
        icon: <BedDouble size={18} className="text-white" />,
        text: "King Size Bed",
      },
      {
        icon: <Users size={18} className="text-white" />,
        text: "Double Occupancy",
      },
      {
        icon: <Leaf size={18} className="text-white" />,
        text: "Private Lawn Area",
      },
      {
        icon: <Wifi size={18} className="text-white" />,
        text: "Wi-Fi & Workspace",
      },
    ],
    capacity: "Sleeps 2",
  },
  {
    id: 5,
    name: "Camping Tent",
    slug: "camping-tent",
    image: "/images/accommodations/comping-tent11.jpeg",
    altText: "Scenic camping tent surrounded by nature",
    shortDescription:
      "Our eco-friendly camping tents offer a simple yet comfortable outdoor stay in Ratapani’s lush wilderness. Perfect for travelers seeking digital detox, jungle adventure, or peaceful night camping near Bhopal.",
    keyFeatures: [
      {
        icon: <MountainSnow size={18} className="text-white" />,
        text: "Panoramic Forest Views",
      },
      {
        icon: <BedDouble size={18} className="text-white" />,
        text: "Comfortable Double Bed",
      },
      {
        icon: <Leaf size={18} className="text-white" />,
        text: "Sustainably Built",
      },
      {
        icon: <Users size={18} className="text-white" />,
        text: "Cozy Reading Nook",
      },
    ],
    capacity: "Sleeps 2",
  },
];

const Accommodations = () => {
  return (
    <section className="accommodations-section">
      <div className="flex justify-center mt-8">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-3">
            <hr className="w-16 border-t border-[rgb(110,97,70)] mr-4" />
            <h2 className="text-xl md:text-5xl font-primary text-[rgb(110,97,70)] font-semibold tracking-wider text-center">
              Our Accommodations
            </h2>
            <hr className="w-16 border-t border-[rgb(110,97,70)] ml-4" />
          </div>
        </motion.div>
      </div>
      <motion.p
        className="section-description text-justify md:text-center font-arial-narrow text-[rgb(110,97,70)] tracking-wider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Experience soulful, sustainable living through our thoughtfully crafted
        eco-stay options — from rustic villas to stylish tents. Each retreat is
        built with love, earth-friendly materials, and a deep respect for the
        environment.
      </motion.p>

      {accommodationsData.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {accommodationsData.map((accommodation) => (
            <motion.div
              key={accommodation.id}
              className="accommodation-card w-full md:w-[350px] h-[100vh] flex flex-col max500:min-h-[820px] max-367:min-h-[967px]"
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="image-wrapper"
                variants={imageHoverVariants}
              >
                <motion.img
                  src={accommodation.image}
                  alt={accommodation.altText}
                  className="w-full h-full object-cover"
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              <div className="p-6 flex flex-col flex-grow bg-[#D1C8C1]">
                <h3 className="text-2xl  font-primary font-semibold text-[rgb(110,97,70)] tracking-widest mb-2">
                  {accommodation.name}
                </h3>
                <p className="font-arial-narrow text-[rgb(110,97,70)] tracking-wider text-sm mb-4 flex-grow text-justify">
                  {accommodation.shortDescription}
                </p>

                <div className="mb-4">
                  <h4 className="text-base font-primary font-semibold tracking-widest text-[rgb(110,97,70)] mb-3">
                    Key Features:
                  </h4>
                  <ul className="font-openSans grid grid-cols-4 max-[496px]:grid-cols-2 gap-6 justify-between">
                    {accommodation.keyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex flex-col items-center text-[#ada49e] text-xs"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[rgb(110,97,70)] group/icon mb-2">
                          {feature.icon}
                          <motion.span
                            className="absolute inset-0 rounded-full bg-[rgb(110,97,70)] opacity-0 group-hover/icon:opacity-30"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0, 0.3, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 0.5,
                            }}
                          />
                        </span>
                        <span className="text-center font-medium leading-tight">
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <p className="text-base text-[rgb(110,97,70)] mb-4">
                  <strong className="font-primary font-medium">
                    Capacity:
                  </strong>{" "}
                  {accommodation.capacity}
                </p>

                <Link
                  href={`/stay/${accommodation.slug}`}
                  className="mt-auto relative inline-block w-full text-center bg-[rgb(110,97,70)] text-white font-medium py-3 px-6 rounded-md overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-[rgb(117,105,83)] h-full"
                    variants={buttonHoverVariants}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 font-primary tracking-widest font-medium">
                    View Details & Book
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          className="text-center text-gray-700 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          More details about our accommodations are coming soon. Please check
          back later!
        </motion.p>
      )}
    </section>
  );
};

export default Accommodations;
