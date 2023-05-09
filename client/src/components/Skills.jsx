import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Skill = ({ skill, percentage, color }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const animationControls = useAnimation();
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    const animateSkillBar = async () => {
      await animationControls.start({ width: 0, transition: { duration: 0 } });
      await animationControls.start({
        width: `${percentage}%`,
        transition: { type: "spring", stiffness: 50, damping: 10 },
      });
    };

    const animatePercentage = () => {
      let start = 0;
      const duration = 1000;
      const stepTime = Math.abs(Math.floor(duration / percentage));
      const counter = setInterval(() => {
        start += 1;
        setDisplayPercentage(start);
        if (start >= percentage) {
          clearInterval(counter);
        }
      }, stepTime);
    };

    if (inView) {
      animateSkillBar();
      animatePercentage();
    } else {
      animationControls.start({ width: 0, transition: { duration: 0 } });
      setDisplayPercentage(0);
    }
  }, [inView, percentage, animationControls]);

  return (
    <>
      <div className="each-skill" ref={ref}>
        <h3>{skill}</h3>
        <h3>{displayPercentage}%</h3>
      </div>
      <div className="bar-container">
        <motion.div
          className="skill-bar"
          style={{ backgroundColor: color }}
          animate={animationControls}
        ></motion.div>
      </div>
    </>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const Skills = () => {
  const skillsData = [
    { skill: "HTML", percentage: 90, color: "green" },
    { skill: "CSS", percentage: 75, color: "#264de4" },
    { skill: "JavaScript", percentage: 65, color: "#f0db4f" },
    { skill: "React JS", percentage: 50, color: "#61dbfb" },
    { skill: "PHP", percentage: 60, color: "#8993be" },
    { skill: "MySQL", percentage: 40, color: "#00758f" },
    { skill: "GIT", percentage: 70, color: "#f1502f" },
    { skill: "GitHub", percentage: 80, color: "#171515" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="bg">
        <h1>Skills</h1>
        <div className="wrapper">
          {skillsData.map((skillData, index) => (
            <Skill key={index} {...skillData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
