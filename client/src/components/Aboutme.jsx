import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
    "JavaScript Developer",
    "ServiceNow Developer",
    "React Developer",
    "Web Developer",
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
      <div className="page-header page-header-small"></div>
      <div className="img-contain"></div>

      <div className="content">
        <h1>About me</h1>
        <h2>
          I am <span>{currentText}</span>
          <span className="cursor">|</span>
        </h2>
        <div className="details-container">
          <div className="summary">
            <h3>Summary</h3>
            <p>
              Fresh IT Graduate with a GPA score of 6.5 out of 7, enthusiastic
              and self-motivated about developing scalable web applications and
              working across the full stack development. Experience in building
              two web apps as a college project using HTML5, CSS3, JavaScript,
              PHP and MySQL. Motivated to advance my web development, Machine
              Learning, and Artificial Intelligence abilities and knowledge in
              order to establish a successful tech career.
            </p>
          </div>

          <div className="information">
            <img
              src="../src/images/propic.jpg"
              alt="profile"
              width="150"
              height="150"
            />
            <div className="info-details">
              <div className="fullname">
                <h3>Ravi Shrestha</h3>
              </div>
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
