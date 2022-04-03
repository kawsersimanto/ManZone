let navbar = document.querySelector(".nav-bar");


window.addEventListener("scroll", stickyNavbar);
function stickyNavbar(){
  navbar.classList.toggle("sticky", window.scrollY > 0);
  toggleBtn.classList.toggle("sticky", window.scrollY > 0);
}