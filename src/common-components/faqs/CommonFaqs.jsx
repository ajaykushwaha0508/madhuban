"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
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

export default function CommonFaqs({
  faqs ,
  heading = "FAQs"
}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="py-8 px-4 md:px-8 bg-primary-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center">
            <hr className="w-16 border-t border-primary-gray2 mr-4" />
            <h2 className="text-4xl md:text-5xl font-primary text-primary-gray2 font-semibold tracking-wider">
              {heading}
            </h2>
            <hr className="w-16 border-t border-primary-gray2 ml-4" />
          </div>
          <p className="mt-1 max-w-2xl mx-auto text-lg text-primary-gray2 px-4 tracking-wide font-arial-narrow">
            Questions for a Meaningful Journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1  gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {faqs.map((item, i) => {
            return (
              <motion.div variants={itemVariants} key={i}>
                <Accordion
                  key={i}
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  style={{
                    margin: 0,
                    overflow: "hidden",
                    borderBottom: "1px solid white",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-white" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      background: "var(--primary-gray2)",
                      color: "white",
                    }}
                  >
                    <Typography component="span">{item?.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-primary-gray2">
                      {item?.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Bird Watching in Ratapani | Wilderness Experience Near Bhopal",

  description:
    "Experience bird watching in Ratapani near Bhopal. Spot 70+ native & migratory species during peaceful guided wilderness sessions at Madhuban Eco Retreat.",

  keywords: [
    "bird watching near bhopal",
    "ratapani bird watching",
    "wilderness near bhopal",
    "forest birding mp",
    "migratory birds ratapani",
    "wildlife trails bhopal",
    "eco tourism ratapani",
  ],

  alternates: {
    canonical:
      "https://www.madhubanecoretreat.com/experiences/bird-watching-%26-wilderness",
  },

  robots: {
    index: true,
    follow: true,
  },
};

