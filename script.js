// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after clicking a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
