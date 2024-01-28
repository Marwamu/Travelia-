const preloader = document.querySelector("[data-preloader]");
const menuBtn = document.querySelector("nav-toggle-btn");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
});

// add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Navbar toogle for mobile

const navBar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
  console.log("marwa");
};
// toggleNav();

addEventOnElements(navTogglers, "click", toggleNav);

// Header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active");
});
