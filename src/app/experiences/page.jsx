import ExperienceComponent from "@/components/experiences/ExperienceComponent";
import OurExperiences from "@/components/experiences/OurExperiences";
import WhyChooseUs from "@/components/experiences/WhyChooseUs";
import ExperiencesFAQs from "@/components/experiences/ExperiencesFAQs";
import ExperiencesBanner from "@/components/experiences/ExperiencesBanner";

const ExperiencesPage = () => {
  return (
    <>
     <ExperiencesBanner/>
      <ExperienceComponent />
      <OurExperiences />
      <WhyChooseUs/>
      <ExperiencesFAQs/>
    </>
  );
};

export default ExperiencesPage;


export const metadata = {
  title: "Nature Experiences Ratapani | Forest Walks, Bird Watching & Activities",

  description:
    "Explore nature trails, bird watching, and recreational activities at Madhuban Eco Retreat near Bhopal. Eco-friendly experiences in Ratapani Wildlife Sanctuary.",

  keywords: [
    "experiences near bhopal",
    "forest walks ratapani",
    "nature trails bhopal",
    "bird watching ratapani",
    "wilderness bhopal",
    "recreational activities bhopal",
    "eco tourism ratapani",
    "satpura nature experiences",
  ],

  alternates: {
    canonical: "https://www.madhubanecoretreat.com/experiences",
  },

  robots: {
    index: true,
    follow: true,
  },
};
