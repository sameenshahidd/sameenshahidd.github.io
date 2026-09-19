const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
navLinks.forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
