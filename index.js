const hamburger = document.querySelector(".menu");
const navlink = document.querySelector(".navbar-column");
const Mark = document.querySelector(".x-mark");
const logoName = document.querySelector(".name");
const about = document.querySelector(".about");
const whatIdo = document.querySelector(".whatIdo");
const skills = document.querySelector(".skills");
const jobs = document.querySelector(".jobs");
const contact = document.querySelector(".contact");

hamburger.addEventListener("click", function () {
  navlink.classList.toggle("slide");
});

Mark.addEventListener("click", function () {
  navlink.classList.remove("slide");
});

logoName.addEventListener("click", function () {
  navlink.classList.remove("slide");
});

about.addEventListener("click", function () {
  navlink.classList.remove("slide");
});

whatIdo.addEventListener("click", function () {
  navlink.classList.remove("slide");
});

skills.addEventListener("click", function () {
  navlink.classList.remove("slide");
});

jobs.addEventListener("click", function () {
  navlink.classList.remove("slide");
});

contact.addEventListener("click", function () {
  navlink.classList.remove("slide");
});
