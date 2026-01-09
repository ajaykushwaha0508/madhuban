"use client";

import React from "react";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  MountainSnow,
  ChevronLeft,
  CalendarDays,
  Star,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import StayWhyChooseUs from "@/components/stay/Stay-WhyChooseUs";
import CommonFaqs from "@/common-components/faqs/CommonFaqs";

const safariTentFaqs = [
  {
    question: "What is the price of the safari tent house in Ratapani?",
    answer:
      "The safari tent stay at Madhuban Eco Retreat starts at ₹12,000 per night, with optional extra bedding available for ₹1,500 per person.",
  },
  {
    question: "Is this the best safari tent stay near Bhopal?",
    answer:
      "Yes. Our safari tents are among the top-rated safari tent houses near Bhopal, offering eco-luxury, forest views, and peaceful surroundings.",
  },
  {
    question: "Are the safari tents suitable for families?",
    answer:
      "Absolutely. The safari tent house is ideal for family stays near Bhopal, offering ample space, safety, comfort, and immersive nature experiences.",
  },
  {
    question: "What makes your Ratapani safari tent unique?",
    answer:
      "Our safari tents feature raised platforms by a natural stream, elegant cane furniture, open-sky showers, eco-friendly design, and tranquil forest views.",
  },
  {
    question: "Do guests get access to the infinity pool?",
    answer:
      "Yes. Guests staying in the Safari Tent enjoy complimentary access to the infinity pool.",
  },
  {
    question: "Is the safari tent pet-friendly?",
    answer:
      "Yes, Madhuban Eco Retreat welcomes pets in selected accommodation types, including safari tents.",
  },
  {
    question: "How far is the safari tent stay from Bhopal?",
    answer:
      "The retreat is conveniently located near Bhopal, offering quick access while providing a peaceful wilderness escape inside the Ratapani region.",
  },
];

const mudHouseFaqs = [
  {
    question: "What is the price of Mud House stay in Ratapani?",
    answer:
      "Mud House 1 starts at ₹9,000 per night, and Mud House 2 (with bathtub) starts at ₹10,000 per night.",
  },
  {
    question: "Are these the best mud houses near Bhopal?",
    answer:
      "Yes, Madhuban Eco Retreat offers one of the most authentic and comfortable mud house stays near Bhopal, rooted in Gond tribal design.",
  },
  {
    question: "Are Mud Houses suitable for families or couples?",
    answer:
      "Yes, Mud Houses are ideal for both couples and small families seeking a peaceful, nature-rich, and culturally inspired stay.",
  },
  {
    question: "Do the Mud Houses have AC?",
    answer:
      "Yes, each Mud House is fully air-conditioned while still maintaining natural cooling through traditional mud architecture.",
  },
  {
    question: "Is the Mud House pet friendly?",
    answer:
      "Yes, pets are welcome in selected mud cottages at Madhuban Eco Retreat.",
  },
  {
    question:
      "Do guests staying in Mud Houses get access to the infinity pool?",
    answer:
      "Yes, complimentary infinity pool access is included for all Mud House guests.",
  },
  {
    question: "Can I book the Mud House online?",
    answer:
      "Yes, Mud House bookings can be made directly through the website to avail the best rates.",
  },
];

const poolSideVillaFaqs = [
  {
    question: "What is the price of a Pool Side Villa near Bhopal?",
    answer:
      "The Pool Side Villa at Madhuban Eco Retreat is priced at ₹12,000 per night, with extra bedding available at ₹1,500 per person.",
  },
  {
    question: "Is this the best pool villa stay near Bhopal?",
    answer:
      "Yes, it is one of the most peaceful and eco-friendly poolside stays in the Ratapani region, known for privacy, nature views, and boutique comfort.",
  },
  {
    question: "Is the Pool Side Villa suitable for families?",
    answer:
      "Absolutely. The villa can comfortably accommodate families and offers a serene environment for bonding and relaxation.",
  },
  {
    question: "Do guests get access to the infinity eco-pool?",
    answer:
      "Yes, Pool Side Villa guests have complimentary access to the eco-friendly infinity pool.",
  },
  {
    question: "Is the Pool Side Villa pet friendly?",
    answer:
      "Yes, selected poolside villa rooms allow pets, making it a great choice for pet parents.",
  },
  {
    question: "How many people can stay in the Pool Side Villa?",
    answer: "The villa can accommodate up to 4 guests.",
  },
];

const glampingTentFaqs = [
  {
    question: "What is the price of Glamping Tent stay in Ratapani?",
    answer:
      "The Glamping Tent at Madhuban Eco Retreat is priced at ₹7,500 per night, with extra bedding available for ₹1,500 per person.",
  },
  {
    question: "Are Glamping Tents good for couples?",
    answer:
      "Yes. These tents are a favorite among couples seeking a peaceful, stylish, and nature-rich stay near Bhopal.",
  },
  {
    question: "Do the Glamping Tents have AC?",
    answer:
      "Yes, all Glamping Tents come with air conditioning and a fan to ensure comfort throughout the year.",
  },
  {
    question: "Do guests get access to the infinity pool?",
    answer:
      "Yes, complimentary infinity pool access is included for all Glamping Tent guests.",
  },
  {
    question: "Is the Glamping Tent pet friendly?",
    answer:
      "Yes. Selected Glamping Tents allow pets, making it a great option for pet-friendly stays.",
  },
  {
    question: "How many people can stay in the Glamping Tent?",
    answer: "Each Glamping Tent comfortably accommodates up to 2 guests.",
  },
];

const nightCampingFaqs = [
  {
    question: "What is the price for night camping in Ratapani?",
    answer:
      "Night camping starts at ₹2,500 per person, including food, a nature walk, an obstacle course, and infinity pool access.",
  },
  {
    question: "Is this the best camping stay near Bhopal?",
    answer:
      "Yes. Madhuban Eco Retreat offers one of the most scenic and safe jungle camping experiences near Bhopal, surrounded by forest landscapes and open skies.",
  },
  {
    question: "Is camping safe for beginners?",
    answer:
      "Absolutely. The camping area is secure, well-managed, and supported by Madhuban’s trained staff and on-ground facilities.",
  },
  {
    question: "Do we get food during the camping stay?",
    answer:
      "Yes, both breakfast and dinner are included in the camping package.",
  },
  {
    question: "Is the camping area pet friendly?",
    answer:
      "Selected camping areas allow pets. Please confirm availability during booking.",
  },
  {
    question: "Do I get access to the pool while camping?",
    answer:
      "Yes, all camping guests enjoy complimentary access to the infinity pool.",
  },
  {
    question: "Is this suitable for groups and college trips?",
    answer:
      "Yes, night camping is ideal for friends, students, groups, and corporate teams seeking adventure, bonding, and outdoor experiences.",
  },
];

const safariTentMetadata = {
  title: "Safari Tent House Ratapani | Eco Luxury Safari Tent Near Bhopal",

  description:
    "Experience eco-luxury in our safari tent house in Ratapani. Streamside views, open-sky shower, infinity pool, and premium amenities near Bhopal. Book your stay.",

  keywords: [
    "safari tent house ratapani",
    "safari tent near bhopal",
    "safari tent house price",
    "safari tent house ratapani ticket price",
    "madhuban eco retreat safari tent",
    "family safari tent stay bhopal",
    "ratapani jungle stay",
    "eco safari tent mp",
  ],

  alternates: {
    canonical: "https://www.madhubanecoretreat.com/stay/safari-tent",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const accommodationsData = [
  {
    id: 1,
    name: "Safari Tent",
    slug: "safari-tent",
    image: "/videos/safari-tent.mp4",
    altText: "Exterior view of a charming safari tent nestled in greenery",
    descriptions: [
      "Experience the charm of a true safari tent house in Ratapani, designed for travelers who wish to immerse themselves in nature without compromising on comfort. Set on raised platforms beside a gentle stream and overlooking forested mountains, these classic safari-style tents offer one of the most serene and authentic jungle stay experiences near Bhopal.",

      "Each tent is thoughtfully crafted with elegant cane furniture, a vanity and dressing space, a separate shower area, and an open-to-sky bath surrounded by nature. Whether you're a couple seeking a peaceful getaway, a family looking for a unique stay near Bhopal, or a nature lover wanting to unwind amidst wilderness, this safari tent provides the ideal blend of rustic charm and eco-luxury.",
    ],
    galleryImages: [
      "/images/accommodations/safari-tent2.jpeg",
      "/images/accommodations/safari-tent3.jpeg",
      "/images/accommodations/safari-tent4.jpeg",
    ],
    amenities: [
      "King Size Bed",
      "Double Occupancy",
      "Infinity Pool",
      "Open shower",
      "WiFi",
      "Breakfast Included",
      "Free Slippers",
      "Pet Friendly",
      "Room Service",
      "Fan",
      "AC",
      "Table",
      "Gyser",
      "Tea/Coffee Maker",
      "Work-Space",
    ],

    whyChoosePoints: [
      "Located in the heart of Ratapani’s wilderness",
      "Perfect for couples, families & nature travelers",
      "Sustainable, solar-powered living",
      "Peaceful streamside location",
      "Unique open-to-sky bathing experience",
      "Ideal weekend getaway from Bhopal",
    ],

    whyChooseTitle: "Why Choose Our Safari Tent House Near Bhopal?",

    capacity: "Sleeps 2",
    pricePerNightSefari: "Rs. 12,000 per night",
    extraBedding: "₹ 1500 per extra person",
    rating: 4.5,
    faqs: safariTentFaqs,
    faqsTitle: "FAQs – Safari Tent House",

    bookingOptions: [
      {
        optionName: "SAFARI TENT",
        price: "9,000",
        rateUnit: "Per Night",
      },
    ],

    metadata: safariTentMetadata,
  },
  {
    id: 2,
    name: "Mud House – Traditional Gond Architecture with Modern Comfort",
    slug: "mud-villa",
    image: "/videos/mud-villa.mp4",
    altText: "Exterior view of a charming safari tent nestled in greenery",
    descriptions: [
      "Experience the warmth and simplicity of earth-inspired living in our Mud Houses, crafted using the traditional vernacular architecture of the Gond tribes. Nestled in the heart of our 5-acre organic orchard, these cottages offer an immersive and peaceful stay surrounded by greenery, birdsong, and nature’s calm.",
      "Each Mud House features a spacious AC room, an annexed lobby, front and backyard verandas, and a beautifully designed luxury washroom with ethnic styling. The rooftop seating area offers a stunning 360-degree view of the entire resort—perfect for sunrise chai, reading, or stargazing on quiet evenings.",

      "Designed for travelers seeking a mud house stay near Bhopal, a cultural escape, or an eco-friendly retreat, this is one of the finest and most authentic mud cottage experiences in the Ratapani region.",
    ],
    galleryImages: [
      "/images/accommodations/mud-villa1.jpg",
      "/images/accommodations/mud-villa2.jpg",
      "/images/accommodations/mud-villa.jpg",
      "/images/stay/stay3.jpg",
    ],
    amenities: [
      "King Size Bed",
      "Double Occupancy",
      "Infinity Pool",
      "Bathtub (Mud House 2)",
      "WiFi",
      "Breakfast Included",
      "Free Slippers",
      "Pet Friendly",
      "Room Service",
      "Fan",
      "AC",
      "Table",
      "Gyser",
      "Tea/Coffee Maker",
      "Work-Space",
      "Free Slippers",
    ],
    whyChoosePoints: [
      "Inspired by Gond tribal architecture",
      "Located inside a lush organic orchard",
      "Cool, naturally insulated rooms",
      "Perfect blend of traditional charm and modern luxury",
      "Ideal for couples, families & culture travelers",
      "One of the best mud house stays near Bhopal & Ratapani",
    ],

    whyChooseTitle: "Why Choose Our Mud Houses?",
    capacity: "Sleeps 2",
    pricePerNightMud: "Mud House 1 ( Without Bathtub ): ₹ 9,000 per night",
    pricePerNightMud1: "Mud House 2 ( With Bathtub ): ₹ 10,000 per night",
    extraBedding: "₹ 1500 per extra person",
    rating: 4.5,
    faqs: mudHouseFaqs,
    faqsTitle: "FAQs – Mud House",

    bookingOptions: [
      {
        optionName: "MUD HOUSE 1",
        optionDetail: "(WITHOUT BATHHUB)",
        price: "9,000",
        rateUnit: "Per Night",
      },
      {
        optionName: "MUD HOUSE 2",
        optionDetail: "(WITH BATHHUB)",
        price: "10,000",
        rateUnit: "Per Night",
      },
    ],
  },
  {
    id: 3,
    name: "Pool Side Villa – Luxury Eco Stay by the Water",
    slug: "pool-side-room",
    image: "/videos/pool-side.mp4",
    altText: "A beautiful treehouse offering panoramic views of the forest",
    descriptions: [
      "Discover serenity and slow living in our Pool Side Villa, designed for travelers seeking comfort, privacy, and a refreshing nature-dipped experience. Wake up to gentle sunlight shimmering on the eco-pool, breathe in the fresh forest air, and enjoy calm moments surrounded by greenery.",
      "Perfect for families, couples, and wellness seekers, this pool villa stay near Bhopal blends eco-conscious design with boutique luxury. Whether you prefer a morning dip, peaceful poolside chai, or quiet evenings under the stars, this villa invites you to reconnect with yourself and nature.",
    ],
    galleryImages: [
      "/images/accommodations/pool-side-room1.jpg",
      "/images/accommodations/pool-side-room2.jpg",
      "/images/accommodations/pool-side-room3.jpg",
      "/images/pool/pool1.jpg",
      "/images/pool/pool2.jpg",
    ],
    amenities: [
      "King Size Bed",
      "Double Occupancy",
      "Infinity Pool",
      "Bathtub",
      "WiFi",
      "Breakfast Included",
      "Free Slippers",
      "Pet Friendly",
      "Room Service",
      "Fan",
      "AC",
      "Table",
      "Gyser",
      "Tea/Coffee Maker",
      "Work-Space",
      "Free Slippers",
    ],
    capacity: "Sleeps 4",
    pricePerNightPool: "Pool Side Villa ( 2 Rooms ) : Rs. 12,000 per night",
    extraBedding: "₹ 1500 per extra person",
    rating: 4.5,
    bookingOptions: [
      {
        optionName: "POOLSIDE VILLA",
        optionDetail: "(2 ROOMS)",
        price: "12,000",
        rateUnit: "Per Night",
      },
    ],
    whyChoosePoints: [
      "Peaceful poolside views surrounded by greenery",
      "Perfect for families & couples seeking privacy",
      "Eco-luxury design with natural light & open spaces",
      "Ideal for wellness retreats and slow travel",
      "One of the most serene pool villa stays near Bhopal & Ratapani",
    ],
    faqs: poolSideVillaFaqs,
    whyChooseTitle: "Why Choose the Pool Side Villa?",
  },
  {
    id: 4,
    name: "Glamping Tents – Boutique Comfort in the Heart of Ratapani",
    slug: "glamping-tents",
    image: "/images/accommodations/glamping-tent1.JPG",
    altText: "Luxury glamping tent with deck overlooking greenery",
    descriptions: [
      "Enjoy the charm of the outdoors with the comfort of a thoughtfully designed stay in our Glamping Tents. Set amid Ratapani’s peaceful landscape, each tent combines natural textures with warm, elegant décor. Inside, you’ll find a plush king-size bed, ensuite shower, soft lighting, and calming interiors that make your stay effortless and relaxing.",

      "Step outside to your private lawn-side sit-out, perfect for slow mornings, evening tea, or peaceful moments surrounded by greenery. With attentive hospitality and all modern conveniences, this stay is ideal for couples, nature lovers, and weekend travelers searching for a stylish escape near Bhopal.",
    ],
    galleryImages: [
      "/images/accommodations/glamping-tent2.JPG",
      "/images/accommodations/glamping-tent3.JPG",
      "/images/accommodations/glamping-tent4.JPG",
    ],
    amenities: [
      "King Size Bed",
      "Double Occupancy",
      "Infinity Pool",
      "Shower",
      "WiFi",
      "Breakfast Included",
      "Free Slippers",
      "Pet Friendly",
      "Room Service",
      "Fan",
      "AC",
      "Table",
      "Gyser",
      "Tea/Coffee Maker",
      "Work-Space",
      "Free Slippers",
    ],
    capacity: "Sleeps 2",
    pricePerNightGlamping: "Rs. 7,500",
    extraBedding: "Rs. 1,500 per person",
    rating: 4.6,

    bookingOptions: [
      {
        optionName: "Glamping Tents",
        price: "7,500",
        rateUnit: "Per Night",
      },
    ],
    whyChoosePoints: [
      "Elegant interiors with nature-inspired touches",
      "Cozy private lawn-side sit-out",
      "Peaceful surroundings close to Ratapani forest",
      "Ideal for couples and weekend getaways",
      "Perfect balance of comfort and outdoor charm",
    ],
    faqs: glampingTentFaqs,
    whyChooseTitle: "Why Guests Love the Glamping Tents?",
  },
  {
    id: 5,
    name: "Camping Tent – Nature-First Camping in the Heart of Ratapani",
    slug: "camping-tent",
    image: "/images/accommodations/camping-tent.jpeg",
    altText: "A beautiful treehouse offering panoramic views of the forest",
    descriptions: [
      "Experience the thrill of outdoor living with our Camping Tents, designed for travelers who want true closeness to nature. Set against the serene backdrop of Ratapani’s forest, this stay offers peaceful nights, fresh morning air, and uninterrupted views of the night sky.",

      "Perfect for adventure seekers, trekkers, backpackers, and nature lovers, this is one of the best camping experiences near Bhopal, offering a safe, scenic, and refreshing escape from city life. Whether you’re planning a group outing, a solo nature break, or a weekend adventure, this tent stay gives you everything you need to disconnect and recharge.",
    ],
    galleryImages: [
      "/images/accommodations/comping-tent1.jpg",
      "/images/accommodations/comping-tent4.jpg",
      "/images/accommodations/comping-tent5.jpeg",
    ],
    pricePerNight111: "One Night Comping: 2500/person",
    pricePerNight22: "Day Package: 1100/person",
    capacity: "Up to 2 per tent",
    rating: 4.5,

    bookingOptions: [
      {
        optionName: "ONE NIGHT CAMPING",
        price: "2,500",
        rateUnit: "Per Person",
      },
    ],
    whyChoosePoints: [
      "Located in the lush Ratapani forest region",
      "Perfect for night camping near Bhopal",
      "Safe, peaceful, and beginner-friendly",
      "Ideal for adventure groups & weekend getaways",
      "Authentic jungle environment with modern support",
      "One of the best camping experiences in Madhya Pradesh",
    ],
    faqs: nightCampingFaqs,
    whyChooseTitle: "Why Guests Love Camping at Madhuban?",
    inclusions: [
      "Breakfast",
      "Dinner",
      "Infinity Pool Access",
      "Obstacle Course",
      "Nature Walk",
      "Secure Camping Area",
      "Access to resort amenities",
    ],
  },
];

const getAccommodation = (slug) => {
  return accommodationsData.find((acc) => acc.slug === slug);
};

const AccommodationDetail = () => {
  const params = useParams();
  const { slug } = params;
  const accommodation = getAccommodation(slug);
  const randomImgUrl =
    accommodation?.galleryImages[
      Math.floor(Math.random() * accommodation.galleryImages.length)
    ];

  if (!accommodation) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-50 text-center px-4">
        <MountainSnow size={64} className="text-green-700 mb-4" />
        <h1 className="text-4xl font-inter font-medium text-green-800 mb-2">
          Oops! Accommodation Not Found
        </h1>
        <p className="font-openSans text-lg text-gray-600 mb-6">
          We couldn't find the accommodation you were looking for.
        </p>
        <Link
          href="/stay"
          className="mt-[30px] font-primary inline-flex items-center bg-green-700 text-gray-500 font-medium py-3 px-6 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          <ChevronLeft size={20} className="mr-2" />
          Back to All Accommodations
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-stone-50 min-h-screen py-12 pt-20 md:pt-24 md:pt-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <Link
              href="/stay"
              className="inline-flex items-center font-semibold text-[rgb(110,97,70)] mt-8 transition-colors duration-300 group"
            >
              <ChevronLeft
                size={20}
                className="font-primary  font-medium mr-1 group-hover:-translate-x-1 transition-transform duration-300"
              />
              Back to All Accommodations
            </Link>
          </div>

          <div className="bg-[#F5F5F5] rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex md:items-stretch">
              <div className="md:w-1/2 h-auto">
                {accommodation.image.toLowerCase().endsWith(".mp4") ? (
                  <video
                    style={{ width: "100%", height: "100vh" }}
                    src={accommodation.image}
                    controls
                    // autoPlay
                    // loop
                    className="w-full object-cover md:min-h-[80vh]"
                    onError={(e) => {
                      e.target.onerror = null;
                      console.error(
                        "Error loading video:",
                        accommodation.image
                      );
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={accommodation.image}
                    alt={accommodation.altText}
                    className="w-full h-full object-cover md:min-h-[400px]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg";
                    }}
                  />
                )}
              </div>

              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between h-auto md:min-h-[400px]">
                <div>
                  <h1 className="heading1 font-primary font-semibold text-[rgb(110,97,70)] mb-3">
                    {accommodation.name}
                  </h1>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(accommodation.rating)
                            ? "text-yellow-500 fill-current"
                            : i < accommodation.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">
                      ({accommodation.rating})
                    </span>
                  </div>

                  {accommodation?.descriptions?.map((des, i) => {
                    return (
                      <p
                        key={i}
                        className="text-[rgb(110,97,70)] mb-6  text-justify font-arial-narrow text-lg"
                      >
                        {des}
                      </p>
                    );
                  })}

                  {accommodation.amenities &&
                    accommodation.amenities.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-primary font-semibold text-primary-gray2 mb-2">
                          Amenities:
                        </h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-md md:text-lg">
                          {accommodation.amenities.map((amenity, index) => (
                            <li
                              key={index}
                              className="flex items-center font-primary font-medium text-primary-gray2 "
                            >
                              <Check
                                size={16}
                                className="text-primary-gray2 mr-2"
                              />
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>

                <div className="mt-auto">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Heading */}
                    <h3 className="text-xl font-extrabold text-primary-gray2 tracking-wide mb-2">
                      BOOK YOUR STAY
                    </h3>

                    {accommodation.bookingOptions.map((bookOpt, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-between items-center w-full"
                        >
                          <p className=" text-sm  md:text-base font-bold text-primary-gray2">
                            • {bookOpt.optionName}: <br />
                            <span className="font-normal text-xs md:text-sm">
                              {bookOpt.optionDetail}
                            </span>
                          </p>
                          <div className="bg-[rgb(110,97,70)] text-white rounded-full  px-8 md:px-16 py-3 flex flex-col items-center">
                            <span className="text-sm font-bold">
                              Rs. {bookOpt.price}
                            </span>
                            <span className="text-xs">{bookOpt.rateUnit}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {accommodation.inclusions && (
                    <>
                      <div className="mb-4">
                        <div className="text-lg md:text-xl font-semibold text-primary-gray2 mb-2">
                          Inclusions
                        </div>
                        {accommodation.inclusions.map((inc, i) => {
                          return (
                            <p key={i} className="text-primary-gray2">
                              • {inc}
                            </p>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Show Camping Tent Packages Only if slug === 'camping-tent' */}

                  {accommodation.extraBedding && (
                    <div className="flex justify-between items-center">
                      <p className=" font-semibold text-[rgb(110,97,70)] mb-2">
                        Extra Bedding - {accommodation.extraBedding}
                      </p>
                    </div>
                  )}

                  {accommodation.capacity && (
                    <div className="flex justify-between items-center">
                      <p className="text-md text-[rgb(110,97,70)] mb-2">
                        <strong className="  font-semibold">Capacity:</strong>{" "}
                        {accommodation.capacity}
                      </p>
                    </div>
                  )}

                  <Link
                    href="/booking"
                    className="font-inter w-full flex items-center justify-center bg-[rgb(110,97,70)] text-white font-medium py-3 px-6 rounded-md hover:bg-[rgb(123,108,80)] text-lg"
                  >
                    <CalendarDays size={20} className="mr-2" />
                    Book Your Stay
                  </Link>
                </div>
              </div>
            </div>

            {accommodation.galleryImages &&
              accommodation.galleryImages.length > 0 && (
                <div className="p-6 md:p-8 border-t border-gray-200">
                  <h2 className="text-3xl font-primary font-semibold text-[rgb(110,97,70)] mb-4">
                    Gallery
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {accommodation.galleryImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${accommodation.name} gallery ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-sm"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/placeholder.jpg";
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
      <StayWhyChooseUs
        points={accommodation?.whyChoosePoints}
        title={accommodation.whyChooseTitle}
        imageUrl={randomImgUrl}
      />
      <CommonFaqs faqs={accommodation.faqs} heading={accommodation.faqsTitle} />
    </>
  );
};

export default AccommodationDetail;
