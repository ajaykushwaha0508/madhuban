import SEO from "../SEO/SEO";
import AboutBanner from "./about-banner/about-banner";
import AboutSection from "./aboutSection/AboutSection";
import CoreValues from "./coreValues/CoreValues";
import EcoPhilosophy from "./ecoPhilosophy/EcoPhilosophy";
import Story from "./story/Story";
import VisionMission from "./Vision-&-Mission/VisionAndMission";

const schema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Madhuban Eco Retreat",
  "url": "https://www.madhubanecoretreat.com/about-us",
  "image": "https://www.madhubanecoretreat.com/assets/images/madhuban.jpg",
  "description": "Madhuban Eco Retreat is a nature-based eco resort near Bhopal offering sustainable tourism experiences, slow travel, and wellness-focused stays near Ratapani.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "India"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.2599",
    "longitude": "77.4126"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Eco-friendly Accommodation",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Organic Farm-to-Table Food",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Nature & Wellness Activities",
      "value": true
    }
  ],
  "sameAs": [
    "https://www.facebook.com/madhubanecoretreat",
    "https://www.instagram.com/madhubanecoretreat"
  ]
}


const AboutUs = () => {
  return (
    <>
      <SEO schema={schema} />
      <AboutBanner />
      <AboutSection />
      <Story />
      <EcoPhilosophy />
      <VisionMission />
      <CoreValues />
    </>
  );
};

export default AboutUs;
