import Slidingbanner from "@/common-components/banner/Slidingbanner";

const storyImages = [
  {
    id: 1,
    src: "/images/story/story-image-5.jpg",
    alt: "Our founders planning the retreat",
  },
  {
    id: 2,
    src: "/images/stay/stay3.jpg",
    alt: "Early construction phase",
  },
  {
    id: 3,
    src: "/images/stay/stay-4.jpg",
    alt: "First guests enjoying the eco-camp",
  },
  {
    id: 4,
    src: "/images/pool/pool2.jpg",
    alt: "The retreat as it looks today",
  },
  {
    id: 5,
    src: "/images/story/story-image-7.jpg",
    alt: "Community involvement event",
  },
];

const AboutBanner = () => {
  return <Slidingbanner images={storyImages} />;
};

export default AboutBanner;
