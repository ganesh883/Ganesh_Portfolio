import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const InfoCard = ({ index, title, content }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-12 rounded-3xl w-full max-w-[480px]"
  >
    <h3 className="text-white font-bold text-[26px] mb-6">{title}</h3>
    <ul className="list-none space-y-5">
      {content.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-blue-400 text-lg leading-6">•</span>
          <div>
            <span className="text-white font-medium text-[16px] block">
              {item.title}
            </span>
            {item.institute && (
              <span className="text-sm text-secondary block mt-1">
                {item.institute}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  </motion.div>
);

const EducationAndCerts = () => {
  const education = [
    {
      title: "Scaler Course - Backend Development (2025)",
      institute: "",
    },
    {
      title: "B.E in Electrical and Electronics Engineering (2022)",
      institute: "St.Joseph's College of Engineering",
    },
    {
      title: "Higher Secondary (2018)",
      institute: "ARLM School",
    },
  ];

  const certifications = [
    { title: "Full Stack Development Internship", institute: "NoviTech" },
    { title: "JavaScript Course", institute: "Scaler" },
    { title: "Git and Agile Certifications", institute: "" },
  ];

  return (
    <div className="mt-16 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>A glimpse into my journey</p>
          <h2 className={styles.sectionHeadText}>Education & Achievements.</h2>
          <br/>
          <br/>
        </motion.div>
      </div>

      <div
        className={`-mt-20 pb-16 ${styles.paddingX} flex flex-wrap justify-between gap-10`}
      >
        <InfoCard index={0} title="Education" content={education} />
        <InfoCard index={1} title="Certifications" content={certifications} />
      </div>
    </div>
  );
};

export default SectionWrapper(EducationAndCerts, "");
