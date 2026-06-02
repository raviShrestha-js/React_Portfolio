import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Skill = ({ skill, percentage, color, icon, description }) => {
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
    <div className="skill-card">
      <div className="each-skill" ref={ref}>
        <div className="skill-title">
          <i className={icon}></i>
          <div>
            <h3>{skill}</h3>
            <p>{description}</p>
          </div>
        </div>
        <h3 className="skill-score">{displayPercentage}%</h3>
      </div>
      <div className="bar-container">
        <motion.div
          className="skill-bar"
          style={{ backgroundColor: color }}
          animate={animationControls}
        ></motion.div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Skills = () => {
  const skillsData = [
    {
      skill: "ServiceNow Platform",
      percentage: 92,
      color: "#00e5ff",
      icon: "fa-solid fa-cloud",
      description: "Platform configuration, tables, forms, lists, and roles",
    },
    {
      skill: "ITSM Configuration",
      percentage: 88,
      color: "#4ade80",
      icon: "fa-solid fa-diagram-project",
      description: "Incident, request, approval, and service operations",
    },
    {
      skill: "Flow Designer",
      percentage: 84,
      color: "#a78bfa",
      icon: "fa-solid fa-bolt",
      description: "Workflow automation, triggers, actions, and approvals",
    },
    {
      skill: "Business Rules",
      percentage: 82,
      color: "#22d3ee",
      icon: "fa-solid fa-code-branch",
      description: "Server-side logic for clean platform behavior",
    },
    {
      skill: "Client Scripts",
      percentage: 80,
      color: "#facc15",
      icon: "fa-solid fa-window-restore",
      description: "Interactive forms, validation, and field behavior",
    },
    {
      skill: "Service Portal",
      percentage: 74,
      color: "#fb7185",
      icon: "fa-solid fa-layer-group",
      description: "Employee-facing portal experiences and widgets",
    },
    {
      skill: "JavaScript",
      percentage: 78,
      color: "#38bdf8",
      icon: "fa-brands fa-js",
      description: "Maintainable scripts and front-end interaction logic",
    },
    {
      skill: "React",
      percentage: 72,
      color: "#60a5fa",
      icon: "fa-brands fa-react",
      description: "Modern UI components, motion, and state-driven views",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="bg">
        <p className="section-kicker">Capabilities</p>
        <h1>Platform skills tuned for enterprise delivery</h1>
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
