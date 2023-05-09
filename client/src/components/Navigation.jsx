/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

const Navigation = () => {
  const navItems = [
    { label: "Home", link: "#home", id: "home" },
    { label: "About Me", link: "#about-me", id: "about-me" },
    { label: "Skills", link: "#skills", id: "skills" },
    { label: "Education", link: "#education", id: "education" },
    { label: "Experience", link: "#experience", id: "experience" },
    { label: "Projects", link: "#projects", id: "projects" },
    { label: "Contact Me", link: "#contact-me", id: "contact-me" },
  ];

  const [active, setActive] = useState("");
  const [hamburgerActivated, setHamburgerActivated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - 60) {
            current = item.id;
          }
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const toggleHamburger = () => {
    setHamburgerActivated(!hamburgerActivated);
  };

  const closeHamburger = () => {
    setHamburgerActivated(false);
  };

  return (
    <nav>
      <img src="../src/images/ravi_logo.png" alt="logo" />

      <br />
      <ul className={hamburgerActivated ? "activate" : ""}>
        {navItems.map((item, index) => (
          <a href={item.link} key={index} onClick={closeHamburger}>
            <li
              className={`${item.id} nav-item ${
                active === item.id ? "active" : ""
              }`}
            >
              <span className="nav-item-inner">{item.label}</span>
              <span className="nav-item-inner nav-item-back">{item.label}</span>
            </li>
          </a>
        ))}
      </ul>

      <div
        className={`hamburger${hamburgerActivated ? " activate" : ""}`}
        onClick={toggleHamburger}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navigation;
