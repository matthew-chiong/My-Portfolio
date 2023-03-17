const aboutBtn = document.querySelector(".about-btn");
const portfolioBtn = document.querySelector(".portfolio-btn");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const projectsList = document.querySelectorAll(".portfolio-projects li a");
const projectsSpan = document.querySelectorAll(".portfolio-projects li span");
const lightDark = document.querySelector(".light-dark-switch");
const light = document.querySelector(".light");
const night = document.querySelector(".night");
const wrapper = document.querySelector(".wrapper");
const currentBtn = document.querySelector(".current-btn");
const logoLight = document.querySelector(".logo-light");
const logoDark = document.querySelector(".logo-dark");
const body = document.getElementsByTagName("BODY")[0];

aboutBtn.addEventListener("click", (e) => {
  const currentBtn = document.querySelector(".current-btn");
  const currentSec = document.querySelector(".current-sec");

  currentBtn.classList.remove("current-btn");
  about.classList.remove("current-btn");
  aboutBtn.classList.add("current-btn");
  currentSec.classList.remove("current-sec");
  about.classList.add("current-sec");
});
portfolioBtn.addEventListener("click", (e) => {
  const currentBtn = document.querySelector(".current-btn");
  const currentSec = document.querySelector(".current-sec");

  currentBtn.classList.remove("current-btn");
  portfolioBtn.classList.add("current-btn");
  currentSec.classList.remove("current-sec");
  portfolio.classList.add("current-sec");
});
lightDark.addEventListener("click", (e) => {
  lightDark.classList.toggle("dark");
  light.classList.toggle("dark");
  night.classList.toggle("dark");
  body.classList.toggle("dark");
  wrapper.classList.toggle("dark");
  about.classList.toggle("dark");
  portfolioBtn.classList.toggle("dark");
  aboutBtn.classList.toggle("dark");
  const projectsArr = Array.from(projectsList);
  const projectsSpanArr = Array.from(projectsSpan);

  if (lightDark.classList.contains("dark")) {
    logoLight.style.display = "none";
    logoDark.style.display = "block";

    for (let i = 0; i < projectsArr.length; i++) {
      projectsArr[i].style.color = "var(--darkModeWhites)";
    }
    for (let i = 0; i < projectsSpanArr.length; i++) {
      projectsSpanArr[i].style.color = "var(--darkModeWhites)";
    }
  } else {
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    for (let i = 0; i < projectsArr.length; i++) {
      projectsArr[i].style.color = "var(--darkMode)";
    }
    for (let i = 0; i < projectsSpanArr.length; i++) {
      projectsSpanArr[i].style.color = "var(--darkMode)";
    }
  }
});
