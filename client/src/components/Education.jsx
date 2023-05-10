import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const EducationItem = ({ year, title, institution, alignment }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const origin =
    alignment === "left"
      ? { originX: 1, originY: 0 }
      : { originX: 0, originY: 0 };

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, scale: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`edu-container ${alignment}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      style={origin}
    >
      <div className="data">
        <h3>{year}</h3>
        <h3>{title}</h3>
        <p>{institution}</p>
      </div>
    </motion.div>
  );
};

EducationItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
};

const Education = () => {
  const educationData = [
    {
      year: 2022,
      title: "Frontend Development / Web Development",
      institution: "Learning People",
      alignment: "left",
    },
    {
      year: 2021,
      title: "Bachelor of Information Technology",
      institution: "Federation University",
      alignment: "right",
    },
    {
      year: 2019,
      title: "Advanced Diploma of Computer Systems Technology",
      institution:
        "International Institute of Business and Information Technology",
      alignment: "left",
    },
    {
      year: 2017,
      title: "Higher Secondary Education Major in Computer Science",
      institution: "SouthWestern State College",
      alignment: "right",
    },
    {
      year: 2015,
      title: "Primary Education / School Leaving Certificate",
      institution: "Flourecent Higher Secondary School",
      alignment: "left",
    },
  ];
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" ref={ref}>
      <h1>Education</h1>
      <div className="edu-timeline">
        {educationData.map((item, index) => (
          <EducationItem key={index} {...item} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default Education;
