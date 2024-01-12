const preloader = document.querySelector("[data-preloader]");
const menuBtn = document.querySelector("nav-toggle-btn");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
});

// add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < 0; i++) {
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
};


