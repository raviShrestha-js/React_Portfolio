import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import profileImage from "../images/profile-3d-ravi.png";

const useTypingAnimation = (texts, options) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = texts[textIndex % texts.length];
      const updatedText = isDeleting
        ? currentString.slice(0, charIndex - 1)
        : currentString.slice(0, charIndex + 1);
      setCurrentText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), options.backDelay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex(textIndex + 1);
      }
    };

    const typingSpeed = isDeleting ? options.backSpeed : options.typeSpeed;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => {
      clearTimeout(timer);
    };
  }, [texts, options, textIndex, charIndex, isDeleting]);

  return currentText;
};

const Aboutme = () => {
  const texts = [
    "ServiceNow Technical Consultant",
    "Workflow Automation Specialist",
    "ITSM Platform Builder",
    "React Developer",
  ];

  const typingOptions = {
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 500,
    backDelay: 2000,
  };

  const currentText = useTypingAnimation(texts, typingOptions);

  return (
    <section className="about-me" id="about-me">
      <div className="content">
        <p className="section-kicker">About</p>
        <h1>ServiceNow consultant with a builder mindset</h1>
        <h2>
          I am <span>{currentText}</span>
          <span className="cursor">|</span>
        </h2>
        <div className="details-container">
          <div className="summary">
            <h3>Profile</h3>
            <p>
              I have 3 years of ServiceNow experience at xAmplify Services Pvt
              Ltd, working as a ServiceNow Technical Consultant across platform
              configuration, workflow automation, ITSM processes, scripting, and
              user-focused service experiences.
            </p>
            <p>
              My background in React and web development helps me bring a clean
              front-end eye to enterprise platforms: clear interfaces, maintainable
              logic, reliable integrations, and automation that removes friction
              from daily operations.
            </p>
            <div className="pill-row">
              <span>ServiceNow</span>
              <span>ITSM</span>
              <span>Flow Designer</span>
              <span>Client Scripts</span>
              <span>Business Rules</span>
            </div>
            <div className="signal-grid">
              <div>
                <strong>3+</strong>
                <span>Years delivering ServiceNow outcomes</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Operational mindset for service teams</span>
              </div>
              <div>
                <strong>UI + Logic</strong>
                <span>Front-end polish with platform scripting</span>
              </div>
            </div>
          </div>

          <div className="information">
            <div className="mini-avatar">
              <img
                src={profileImage}
                alt="profile"
                width="150"
                height="150"
              />
            </div>
            <div className="info-details">
              <div className="fullname">
                <h3>Ravi Shrestha</h3>
              </div>
              <p className="role-label">ServiceNow Technical Consultant</p>
              <div className="row mt-3">
                <div className="col-sm-2 text-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="col-sm-10">edenderb@gmail.com</div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-2 text-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="col-sm-10">+61 405865832</div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-2 text-center">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="col-sm-10">Strathfield, Sydney, Australia</div>
              </div>
              <div className="logo-container">
                <SocialLink
                  href="https://github.com/raviShrestha-js"
                  iconName="fa-brands fa-github"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/ravi-shrestha-609ba1153/"
                  iconName="fa-brands fa-linkedin"
                />
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=100063863853078"
                  iconName="fa-brands fa-facebook"
                />
                <SocialLink
                  href="https://www.instagram.com/ravi.d.great/"
                  iconName="fa-brands fa-instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, iconName }) => (
  <a
    href={href}
    className="btn btn-info btn-round btn-lg btn-icon"
    target="_blank"
    rel="noreferrer"
  >
    <i className={iconName}></i>
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default Aboutme;
