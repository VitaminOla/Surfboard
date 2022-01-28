const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector(".fullscreen-menu");
const closeBtn = menu.querySelector(".fullscreen-menu__close");
const menuLink = menu.querySelectorAll(".menu__link");

hamburger.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.add("active");
});

closeBtn.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.remove("active");
})

for (let i = 0; i < menuLink.length; i++)
{menuLink[i].addEventListener ("click", e => {
  // e.preventDefault();
  menu.classList.remove("active");
})}

