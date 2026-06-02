import ProfilePicture from "./Profile-pic";
import HolographicScene from "./HolographicScene";

const Main = () => {
  return (
    <section className="home" id="home">
      <div className="hero-copy">
        <p className="eyebrow">ServiceNow Technical Consultant</p>
        <h1>Ravi Shrestha</h1>
        <p className="hero-subtitle">
          I design reliable ServiceNow workflows, automate service operations,
          and build clean digital experiences for teams that need systems to
          move faster.
        </p>
        <div className="hero-stats" aria-label="Professional highlights">
          <div>
            <strong>3+</strong>
            <span>Years ServiceNow</span>
          </div>
          <div>
            <strong>xAmplify</strong>
            <span>Services Pvt Ltd</span>
          </div>
          <div>
            <strong>Sydney</strong>
            <span>Australia</span>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          <a href="#contact-me" className="btn-secondary">
            Contact Me
          </a>
        </div>
        <div className="hero-console">
          <div>
            <span>Active Stack</span>
            <strong>ServiceNow / ITSM / JavaScript</strong>
          </div>
          <div>
            <span>Mode</span>
            <strong>Automation First</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Enterprise Workflow Design</strong>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-label="Profile portrait">
        <div className="hologram-stage" aria-hidden="true">
          <HolographicScene />
        </div>
        <div className="img-holder">
          <ProfilePicture />
        </div>
        <div className="orbit-label orbit-label-one">ITSM</div>
        <div className="orbit-label orbit-label-two">Flow Designer</div>
        <div className="orbit-label orbit-label-three">Service Portal</div>
      </div>
    </section>
  );
};

export default Main;
