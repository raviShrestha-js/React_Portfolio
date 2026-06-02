import adminImage from "../images/admin.png";
import calcImage from "../images/calc.png";
import libraryImage from "../images/library.png";
import landingImage from "../images/landing.png";
import rpsImage from "../images/rps-screen.png";
import portfolioImage from "../images/portfolio.png";

const projectData = [
  {
    image: adminImage,
    alt: "admin page",
    repoLink: "https://github.com/raviShrestha-js/odin-admin-panel",
    liveLink: "https://ravishrestha-js.github.io/odin-admin-panel/",
    title: "Admin Dashboard",
    summary: "Operational dashboard UI with dense layouts and admin-focused navigation.",
    tag: "Control Room",
  },
  {
    image: calcImage,
    alt: "calculator",
    repoLink: "https://github.com/raviShrestha-js/calculatorjs",
    liveLink: "https://ravishrestha-js.github.io/calculatorjs/",
    title: "Calculator JS",
    summary: "JavaScript logic exercise focused on clean interaction states.",
    tag: "Logic Core",
  },
  {
    image: libraryImage,
    alt: "library",
    repoLink: "https://github.com/raviShrestha-js/thelibrary",
    liveLink: "https://ravishrestha-js.github.io/thelibrary/",
    title: "The Book Library",
    summary: "CRUD-style interface for organizing and reviewing book records.",
    tag: "Data Bay",
  },
  {
    image: landingImage,
    alt: "landing page",
    repoLink: "https://github.com/raviShrestha-js/odin-landing-page",
    liveLink: "https://ravishrestha-js.github.io/odin-landing-page/",
    title: "Landing Page",
    summary: "Responsive landing page practice with structured visual hierarchy.",
    tag: "Launch Pad",
  },
  {
    image: rpsImage,
    alt: "rock paper scissor",
    repoLink: "https://github.com/raviShrestha-js/rock-paper-scissor",
    liveLink: "https://ravishrestha-js.github.io/rock-paper-scissor/",
    title: "Rock Paper Scissor Game",
    summary: "Interactive browser game with state transitions and score tracking.",
    tag: "Game Sim",
  },
  {
    image: portfolioImage,
    alt: "portfolio page",
    repoLink: "https://github.com/raviShrestha-js/portfolio-cv",
    liveLink: "https://ravishrestha-js.github.io/portfolio-cv/",
    title: "Portfolio Website",
    summary: "Earlier portfolio iteration showing the foundation of this refresh.",
    tag: "Archive",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <p className="section-kicker">Projects</p>
      <h1>Project fleet in orbit</h1>
      <div className="project-orbit">
        {projectData.map((project, index) => (
          <article
            className="project-container"
            style={{ "--project-index": index }}
            key={project.title}
          >
            <div className="project-holo-tag">{project.tag}</div>
            <div className="proj-image">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="proj-title">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <div className="project-actions">
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
                Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Live
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
