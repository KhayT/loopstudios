const mobileNav = document.getElementById("mobile-navIcon");
const mobileContainer = document.getElementById("mobile--container");
const header = document.getElementById("header");

mobileNav.addEventListener("click", function () {
  mobileContainer.classList.toggle("modal");

  if (mobileContainer.classList.contains("modal")) {
    mobileNav.src = "./images/icon-close.svg";
    header.classList.add("adjustPadding");
  } else {
    mobileNav.src = "./images/icon-hamburger.svg";
    header.classList.remove("adjustPadding");
  }
});
