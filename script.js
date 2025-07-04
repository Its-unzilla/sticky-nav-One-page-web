// Sticky navbar logic
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");

  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
});

// Close mobile nav on link click
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});

// Intersection Observer for active link highlighting
const sections = document.querySelectorAll("section");
const navLinksArray = document.querySelectorAll(".nav-link");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinksArray.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
