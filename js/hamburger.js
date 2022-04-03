const toggleBtn = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");


toggleBtn.addEventListener("click", showNavLinks);

function showNavLinks(e){
  navLinks.classList.toggle("display");
  toggleBtn.classList.toggle("display");
}