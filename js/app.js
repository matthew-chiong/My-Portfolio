const aboutBtn = document.querySelector(".about-btn");
const portfolioBtn = document.querySelector(".portfolio-btn");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const darkMode = document.querySelector(".light-dark-switch");

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

darkMode.addEventListener("click", (e) => {
  darkMode.classList.toggle("dark");
});
