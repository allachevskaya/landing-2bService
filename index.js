

const iconMenu = document.querySelector(".menuBurger-icon");
const navMenu = document.querySelector(".menuBurger-nav");
const iconPhone = document.querySelector(".menuBurger-phone");
const phoneNumber = document.querySelector(".menuBurger-phone a");
const header = document.querySelector(".header");
const sticky = header.offsetTop;

const showItem = (item, itemClass) => {
  item.addEventListener('click', () => {
    itemClass.classList.toggle("hidden");

  })
}

showItem(iconMenu, navMenu);
showItem(iconPhone, phoneNumber);
window.onscroll = function () { myFunction() };




function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  }
 
}

