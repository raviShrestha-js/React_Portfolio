import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { AnimatePresence, motion, useAnimation } from "framer-motion";

const ProjectContent = ({ image, alt, repoLink, liveLink, title }) => (
  <>
    <div className="proj-image">
      <img src={image} alt={alt} />
      <div className="button-container">
        <a href={repoLink} target="_blank" rel="noreferrer">
          <button>View Code</button>
        </a>
        <a href={liveLink} target="_blank" rel="noreferrer">
          <button>Live Preview</button>
        </a>
      </div>
    </div>
    <div className="proj-title">
      <h3>{title}</h3>
    </div>
  </>
);

ProjectContent.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Project = ({ onClick, ...props }) => (
  <motion.div
    className="project-container"
    layoutId={props.title}
    onClick={onClick}
  >
    <ProjectContent {...props} />
  </motion.div>
);

Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const projectBgRef = useRef();
  const controls = useAnimation();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const projectData = [
    {
      image: "../src/images/admin.png",
      alt: "admin page",
      repoLink: "https://github.com/raviShrestha-js/odin-admin-panel",
      liveLink: "https://ravishrestha-js.github.io/odin-admin-panel/",
      title: "Admin Dashboard",
    },
    {
      image: "../src/images/calc.png",
      alt: "calculator",
      repoLink: "https://github.com/raviShrestha-js/calculatorjs",
      liveLink: "https://ravishrestha-js.github.io/calculatorjs/",
      title: "Calculator JS",
    },
    {
      image: "../src/images/library.png",
      alt: "library",
      repoLink: "https://github.com/raviShrestha-js/thelibrary",
      liveLink: "https://ravishrestha-js.github.io/thelibrary/",
      title: "The Book Library",
    },
    {
      image: "../src/images/landing.png",
      alt: "landing page",
      repoLink: "https://github.com/raviShrestha-js/odin-landing-page",
      liveLink: "https://ravishrestha-js.github.io/odin-landing-page/",
      title: "Landing Page",
    },
    {
      image: "../src/images/rps-screen.png",
      alt: "rock paper scissor",
      repoLink: "https://github.com/raviShrestha-js/rock-paper-scissor",
      liveLink: "https://ravishrestha-js.github.io/rock-paper-scissor/",
      title: "Rock Paper Scissor Game",
    },
    {
      image: "../src/images/portfolio.png",
      alt: "portfolio page",
      repoLink: "https://github.com/raviShrestha-js/portfolio-cv",
      liveLink: "https://ravishrestha-js.github.io/portfolio-cv/",
      title: "Portfolio Website",
    },
  ];
  const selectedItem = projectData.find((item) => item.title === selectedId);

  useEffect(() => {
    const handleIntersection = async (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
          await controls.start((i) => ({
            x: [0, 0],
            y: [0, 0],
            opacity: [0, 2],
            transition: { duration: 1, delay: i * 0.8 },
            zIndex: i + 1,
          }));
        } else if (!entry.isIntersecting) {
          setAnimationTriggered(false);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (projectBgRef.current) {
      observer.observe(projectBgRef.current);
    }

    return () => {
      if (projectBgRef.current) {
        observer.unobserve(projectBgRef.current);
      }
    };
  }, [projectBgRef, controls, animationTriggered]);

  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-bg" ref={projectBgRef}>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={controls}
            initial={{ x: 0, y: 0, opacity: 0, zIndex: index + 1 }}
          >
            <Project
              {...project}
              onClick={() => setSelectedId(project.title)}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              className="backdrop"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="selected-project"
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectContent {...selectedItem} />
              <motion.button onClick={() => setSelectedId(null)}>
                Close
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
