const toggle = document.getElementById("toggle");
const nav = document.querySelector("nav");

//Helper functions

function toggleNavbar(e) {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    toggle.classList.remove("moveToggle");
  } else {
    nav.classList.add("show");
    toggle.classList.add("moveToggle");
  }
}

//EVENT LISTENERS
toggle.addEventListener("click", toggleNavbar);
