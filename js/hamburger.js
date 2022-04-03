const toggleBtn = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links ul li a");
console.log(links);


toggleBtn.addEventListener("click", showNavLinks);

function showNavLinks(e){
  navLinks.classList.toggle("display");
  toggleBtn.classList.toggle("display");
}

links.forEach(link => link.addEventListener("click", ()=>{
  navLinks.classList.remove("display");
  toggleBtn.classList.remove("display");
}));