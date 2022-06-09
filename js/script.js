// mobile menu
const mobileIcon = document.querySelector(".header_menu");
const mobileMenu = document.querySelector(".header_mobile_menu");
const overlay = document.querySelector(".overlay");

mobileIcon.addEventListener("click", function () {
  if (mobileMenu.classList.contains("menu_open")) {
    overlay.classList.remove("overlay_open");
    mobileMenu.classList.remove("menu_open");
  } else {
    overlay.classList.add("overlay_open");
    mobileMenu.classList.add("menu_open");
  }
});

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("overlay_open") ||
    e.target.classList.contains("mobile_link")
  ) {
    mobileMenu.classList.remove("menu_open");
    overlay.classList.remove("overlay_open");
  }
});
