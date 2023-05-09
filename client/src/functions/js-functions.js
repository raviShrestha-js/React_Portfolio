const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navList.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activate");
  navMenu.classList.toggle("activate");
});

navList.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("activate");
    navMenu.classList.remove("activate");
  })
);
