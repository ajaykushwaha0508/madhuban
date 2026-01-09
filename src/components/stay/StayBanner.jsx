import Slidingbanner from "@/common-components/banner/Slidingbanner";

const storyImages = [
  {
    id: 1,
    src: "/images/stay/stay.jpg",
    alt: "Our founders planning the retreat",
  },
  {
    id: 2,
    src: "/images/stay/stay2.jpg",
    alt: "Early construction phase",
  },
  {
    id: 3,
    src: "/images/stay/stay3.jpg",
    alt: "First guests enjoying the eco-camp",
  },
  {
    id: 4,
    src: "/images/stay/stay4.jpg",
    alt: "The retreat as it looks today",
  },
  {
    id: 5,
    src: "/images/story/story-image-7.jpg",
    alt: "Community involvement event",
  },
  {
    id: 6,
    src: "/images/stay/stay5.jpg",
    alt: "Community involvement event",
  },
];
const StayBanner = () => {
  return <Slidingbanner images={storyImages} />;
};

export default StayBanner;
