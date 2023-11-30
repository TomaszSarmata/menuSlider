const toggle = document.getElementById("toggle");
const nav = document.querySelector("nav");

//Helper functions

function toggleNavbar(e) {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    toggle.classList.remove("moveToggle");
    toggle.innerHTML = '<i class="i fa fa-bars fa-2x"></i>';
  } else {
    nav.classList.add("show");
    toggle.classList.add("moveToggle");
    toggle.innerHTML = '<i class="fa-solid fa-x fa-2x"></i>';
  }
  e.stopPropagation();
}

//EVENT LISTENERS
toggle.addEventListener("click", toggleNavbar);
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) {
    nav.classList.remove("show");
    toggle.classList.remove("moveToggle");
    toggle.innerHTML = '<i class="i fa fa-bars fa-2x"></i>';
  }
});
